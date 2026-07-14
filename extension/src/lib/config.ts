// FollowCheck Chrome Extension Configuration

// Set to true in development, false in production
export const IS_DEV = true;

export const FOLLOWCHECK_DEV_ORIGIN = "http://localhost:3000";

// TODO: Before production release, set the official production HTTPS origin here
export const FOLLOWCHECK_PROD_ORIGIN = "https://followcheck.com";

export const FOLLOWCHECK_WEB_ORIGIN = IS_DEV ? FOLLOWCHECK_DEV_ORIGIN : FOLLOWCHECK_PROD_ORIGIN;
