import { InstagramConnection, ScanProgress } from "../lib/types";
import { ExtensionMessage } from "../lib/messages";

let cancelRequested = false;

// Utility to get cookies
function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return undefined;
}

// Utility to sleep between requests to prevent rate limiting
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Fetch helper with standard Instagram Web App ID headers
async function fetchInstagramApi(url: string, csrfToken?: string) {
  const headers: HeadersInit = {
    "X-IG-App-ID": "936619743392459", // Instagram Web's default static app ID
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
  };
  if (csrfToken) {
    headers["X-CSRFToken"] = csrfToken;
  }
  
  console.log(`[FollowCheck Content] Fetching: ${url}`);
  const response = await fetch(url, { headers });
  
  if (response.status === 429) {
    throw new Error("Rate limit reached (429). Instagram is blocking requests temporarily. Please wait a few minutes.");
  }
  
  if (!response.ok) {
    throw new Error(`Failed to fetch connection data (HTTP ${response.status})`);
  }
  
  return response.json();
}

// Check Instagram logged in state
async function getInstagramState() {
  const userId = getCookie("ds_user_id");
  const isLoggedIn = !!userId;

  if (!isLoggedIn) {
    return { isOpen: true, isLoggedIn: false };
  }

  try {
    const data = await fetchInstagramApi(`/api/v1/users/${userId}/info/`, getCookie("csrftoken"));
    const username = data.user?.username;
    return {
      isOpen: true,
      isLoggedIn: true,
      username,
      userId,
    };
  } catch (err) {
    console.error("[FollowCheck Content] Error checking state:", err);
    return { isOpen: true, isLoggedIn: true, userId }; // Fallback if info endpoint fails
  }
}

// Main scanning workflow
async function runScan() {
  cancelRequested = false;
  const userId = getCookie("ds_user_id");
  const csrfToken = getCookie("csrftoken");

  if (!userId) {
    chrome.runtime.sendMessage({
      type: "SCAN_ERROR",
      error: "User not logged in. Please sign in to Instagram."
    });
    return;
  }

  // Get current username
  let currentUsername = "instagram_user";
  try {
    const info = await fetchInstagramApi(`/api/v1/users/${userId}/info/`, csrfToken);
    currentUsername = info.user?.username || currentUsername;
  } catch (err) {
    console.warn("[FollowCheck Content] Could not get user info, falling back:", err);
  }

  const followers: InstagramConnection[] = [];
  const following: InstagramConnection[] = [];

  try {
    // 1. Fetch Followers
    let nextMaxId: string | undefined = undefined;
    let hasMoreFollowers = true;

    while (hasMoreFollowers && !cancelRequested) {
      const url = `/api/v1/friendships/${userId}/followers/?count=100` + 
        (nextMaxId ? `&max_id=${encodeURIComponent(nextMaxId)}` : "");
      
      const data = await fetchInstagramApi(url, csrfToken);
      
      const users = data.users || [];
      for (const u of users) {
        followers.push({
          id: u.pk_id || u.pk?.toString() || "",
          username: u.username,
          fullName: u.full_name,
          profilePicUrl: u.profile_pic_url,
        });
      }

      nextMaxId = data.next_max_id;
      hasMoreFollowers = !!nextMaxId;

      // Update progress
      chrome.runtime.sendMessage({
        type: "SCAN_PROGRESS",
        progress: {
          status: "scanning",
          followersScanned: followers.length,
          followingScanned: 0,
        } as ScanProgress
      });

      if (hasMoreFollowers) {
        await sleep(1500); // 1.5s delay
      }
    }

    if (cancelRequested) {
      chrome.runtime.sendMessage({
        type: "SCAN_PROGRESS",
        progress: {
          status: "cancelled",
          followersScanned: followers.length,
          followingScanned: 0,
        }
      });
      return;
    }

    // 2. Fetch Following
    nextMaxId = undefined;
    let hasMoreFollowing = true;

    while (hasMoreFollowing && !cancelRequested) {
      const url = `/api/v1/friendships/${userId}/following/?count=100` + 
        (nextMaxId ? `&max_id=${encodeURIComponent(nextMaxId)}` : "");
      
      const data = await fetchInstagramApi(url, csrfToken);
      
      const users = data.users || [];
      for (const u of users) {
        following.push({
          id: u.pk_id || u.pk?.toString() || "",
          username: u.username,
          fullName: u.full_name,
          profilePicUrl: u.profile_pic_url,
        });
      }

      nextMaxId = data.next_max_id;
      hasMoreFollowing = !!nextMaxId;

      // Update progress
      chrome.runtime.sendMessage({
        type: "SCAN_PROGRESS",
        progress: {
          status: "scanning",
          followersScanned: followers.length,
          followingScanned: following.length,
        } as ScanProgress
      });

      if (hasMoreFollowing) {
        await sleep(1500); // 1.5s delay
      }
    }

    if (cancelRequested) {
      chrome.runtime.sendMessage({
        type: "SCAN_PROGRESS",
        progress: {
          status: "cancelled",
          followersScanned: followers.length,
          followingScanned: following.length,
        }
      });
      return;
    }

    // 3. Scan complete
    chrome.runtime.sendMessage({
      type: "SCAN_COMPLETE",
      followers,
      following,
      currentUser: currentUsername,
    });

  } catch (err: any) {
    console.error("[FollowCheck Content] Scan Error:", err);
    chrome.runtime.sendMessage({
      type: "SCAN_ERROR",
      error: err.message || "An unexpected error occurred during scanning."
    });
  }
}

// Receive messages from Background Worker
chrome.runtime.onMessage.addListener((message: ExtensionMessage, _sender, sendResponse) => {
  console.log("[FollowCheck Content] Received message:", message);

  if (message.type === "CHECK_INSTAGRAM_STATE") {
    getInstagramState().then((state) => {
      sendResponse({ type: "INSTAGRAM_STATE_RESPONSE", state });
    });
    return true; // async reply
  }

  if (message.type === "START_SCAN") {
    runScan();
    sendResponse({ success: true });
  }

  if (message.type === "CANCEL_SCAN") {
    cancelRequested = true;
    sendResponse({ success: true });
  }

  return false;
});
