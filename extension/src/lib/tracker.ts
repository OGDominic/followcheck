import { FOLLOWCHECK_WEB_ORIGIN } from "./config";

/**
 * Sends a tracking event to the backend API when the extension is used.
 * Runs silently in the background and catches errors to prevent interrupting user actions.
 * 
 * @param username The Instagram username currently scanning
 * @param event The event name ("scan_start" or "scan_complete")
 * @param details Optional metrics or counts (e.g. followersCount, followingCount)
 */
export async function trackExtensionUse(
  username: string,
  event: "scan_start" | "scan_complete",
  details?: Record<string, any>
): Promise<void> {
  if (!username) return;

  try {
    const url = `${FOLLOWCHECK_WEB_ORIGIN}/api/track`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        event,
        details,
      }),
    });

    if (!response.ok) {
      console.warn(`[FollowCheck Tracker] Failed to send event ${event} (HTTP ${response.status})`);
    } else {
      console.log(`[FollowCheck Tracker] Event ${event} successfully logged for @${username}`);
    }
  } catch (error) {
    // Fail silently to not impact extension performance or break user actions
    console.warn("[FollowCheck Tracker] Network error tracking extension usage:", error);
  }
}
