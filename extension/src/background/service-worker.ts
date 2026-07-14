// Service Worker for FollowCheck Chrome Extension
import { storage } from "../lib/storage";
import { FOLLOWCHECK_DEV_ORIGIN, FOLLOWCHECK_PROD_ORIGIN } from "../lib/config";
import { InstagramConnection } from "../lib/types";

chrome.runtime.onInstalled.addListener(() => {
  // Configure the side panel to open when clicking the extension's toolbar icon
  if (chrome.sidePanel && typeof chrome.sidePanel.setPanelBehavior === "function") {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((err) => {
      console.error("Failed to set panel behavior:", err);
    });
  }
});

// Helper function to sanitize connections for transfer
function sanitizeConnection(conn: InstagramConnection) {
  return {
    id: conn.id || "",
    username: conn.username || "",
    fullName: conn.fullName || "",
    profileImageUrl: conn.profilePicUrl || "", // Maps profilePicUrl to profileImageUrl for results page structure
  };
}

// Handle external messages from Next.js website
chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  console.log("[FollowCheck Background] Received external message:", message, "from:", sender);

  if (!sender.url) {
    sendResponse({ type: "ERROR_RESPONSE", status: "error", error: "No sender URL available" });
    return;
  }

  try {
    const senderOrigin = new URL(sender.url).origin;
    if (senderOrigin !== FOLLOWCHECK_DEV_ORIGIN && senderOrigin !== FOLLOWCHECK_PROD_ORIGIN) {
      console.error("[FollowCheck Background] Unauthorized external messaging attempt from:", senderOrigin);
      sendResponse({ type: "ERROR_RESPONSE", status: "error", error: "Unauthorized origin" });
      return;
    }
  } catch (err) {
    sendResponse({ type: "ERROR_RESPONSE", status: "error", error: "Malformed sender URL" });
    return;
  }

  // Type and shape validation
  if (!message || typeof message.type !== "string") {
    sendResponse({ type: "ERROR_RESPONSE", status: "error", error: "Invalid message format" });
    return;
  }

  if (message.type === "GET_LATEST_ANALYSIS") {
    storage.getAnalysisResult().then((result) => {
      if (result) {
        const sanitized = {
          accountUsername: result.currentUser || "",
          scannedAt: result.scannedAt || new Date().toISOString(),
          notFollowingBack: (result.notFollowingBack || []).map(sanitizeConnection),
          mutuals: (result.mutuals || []).map(sanitizeConnection),
          youDontFollowBack: (result.youDontFollowBack || []).map(sanitizeConnection),
        };
        sendResponse({ type: "ANALYSIS_RESPONSE", status: "success", data: sanitized });
      } else {
        sendResponse({ type: "ANALYSIS_RESPONSE", status: "no_analysis" });
      }
    }).catch((err) => {
      sendResponse({ type: "ERROR_RESPONSE", status: "error", error: err.message || "Failed to fetch analysis" });
    });
    return true; // Keep response channel open async
  }

  if (message.type === "CLEAR_LATEST_ANALYSIS") {
    Promise.all([
      storage.clearAnalysisResult(),
      storage.clearScanProgress()
    ]).then(() => {
      sendResponse({ type: "CLEAR_RESPONSE", status: "success" });
    }).catch((err) => {
      sendResponse({ type: "ERROR_RESPONSE", status: "error", error: err.message || "Failed to clear analysis" });
    });
    return true; // Keep response channel open async
  }

  // Reject unknown message types
  sendResponse({ type: "ERROR_RESPONSE", status: "error", error: `Unknown message type: ${message.type}` });
  return false;
});

// Relay messages between Sidepanel and Content Script
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  console.log("[FollowCheck Background] Received internal message:", message);

  // If the message is from sidepanel and needs to go to the content script
  if (
    message.type === "CHECK_INSTAGRAM_STATE" ||
    message.type === "START_SCAN" ||
    message.type === "CANCEL_SCAN"
  ) {
    // Query active tab on Instagram
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.id && activeTab.url && activeTab.url.includes("instagram.com")) {
        chrome.tabs.sendMessage(activeTab.id, message, (response) => {
          if (chrome.runtime.lastError) {
            console.warn("[FollowCheck Background] Content script not responding:", chrome.runtime.lastError.message);
            sendResponse({
              type: "INSTAGRAM_STATE_RESPONSE",
              state: { isOpen: true, isLoggedIn: false }
            });
          } else {
            sendResponse(response);
          }
        });
      } else {
        // Not on Instagram or no active tab
        sendResponse({
          type: "INSTAGRAM_STATE_RESPONSE",
          state: { isOpen: false, isLoggedIn: false }
        });
      }
    });
    return true; // Keeps the sendResponse channel open for async response
  }

  // If the content script is reporting scanning updates (relaying to sidepanel)
  if (
    message.type === "SCAN_PROGRESS" ||
    message.type === "SCAN_COMPLETE" ||
    message.type === "SCAN_ERROR"
  ) {
    // Forward this message directly to the extension side panel or options views
    chrome.runtime.sendMessage(message).catch((_err) => {
      // Side panel might be closed, which is fine
      console.log("[FollowCheck Background] Failed to forward scan progress (panel likely closed):", _err.message);
    });
  }
  
  return false;
});
