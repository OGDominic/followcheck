// FollowCheck Chrome Extension Configuration

// Set to true in development, false in production
export const IS_DEV = false;

export const FOLLOWCHECK_DEV_ORIGIN = "http://localhost:3000";

// The official production HTTPS origin
export const FOLLOWCHECK_PROD_ORIGIN = "https://www.whofollowsback.com";

export const FOLLOWCHECK_WEB_ORIGIN = IS_DEV ? FOLLOWCHECK_DEV_ORIGIN : FOLLOWCHECK_PROD_ORIGIN;
