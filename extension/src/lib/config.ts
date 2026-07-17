// FollowCheck Chrome Extension Configuration

// Automatically detects if running as unpacked developer extension or Chrome Web Store build
const getIsDev = (): boolean => {
  if (typeof chrome !== "undefined" && chrome.runtime && typeof chrome.runtime.getManifest === "function") {
    const manifest = chrome.runtime.getManifest();
    return !manifest.update_url;
  }
  return false;
};

export const IS_DEV = getIsDev();

export const FOLLOWCHECK_DEV_ORIGIN = "http://localhost:3000";

// The official production HTTPS origin
export const FOLLOWCHECK_PROD_ORIGIN = "https://www.whofollowsback.com";

export const FOLLOWCHECK_WEB_ORIGIN = IS_DEV ? FOLLOWCHECK_DEV_ORIGIN : FOLLOWCHECK_PROD_ORIGIN;
