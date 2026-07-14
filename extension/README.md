# FollowCheck Chrome Extension (POC)

This is the Chrome Extension proof of concept (POC) for **FollowCheck**. It enables private, secure, local analysis of Instagram follower connections.

## Features
- **Zero Credentials Requested**: Operates on active browser cookie sessions without asking for Instagram passwords.
- **100% Local Processing**: No remote APIs, proxy endpoints, or external databases. Connection files and relationship results are calculated locally in the browser context.
- **Fast Execution**: Uses Map/Set-based difference lists to perform connection processing in $O(N)$ linear time.

---

## Installation & Setup

### Step 1: Install Dependencies & Build
First, navigate to the extension directory, install npm libraries, and compile the static bundle:
```bash
cd /Users/shubhamkalsariya/Desktop/followcheck/extension
npm install
npm run build
```
This builds the unpacked extension inside the `dist/` directory.

### Step 2: Load the Extension into Chrome
1. Open the Google Chrome browser.
2. Navigate to: `chrome://extensions/`
3. Enable **Developer mode** using the toggle switch in the top-right corner.
4. Click the **Load unpacked** button in the top-left corner.
5. In the file explorer, select the compiled **`dist`** directory (`/Users/shubhamkalsariya/Desktop/followcheck/extension/dist`).

---

## Test the Extension
1. Open [Instagram](https://www.instagram.com) in your Chrome browser and log in to your account.
2. Pin the **FollowCheck** icon to your Chrome toolbar.
3. Click the **FollowCheck** extension icon to open the Side Panel.
4. Read the privacy disclosure, select **"I understand, proceed to scan"**, and click **Analyze My Account**.
5. Once completed, review results across **Don't Follow Back**, **Mutual Followers**, and **You Don't Follow Back** tabs, or filter users locally.
