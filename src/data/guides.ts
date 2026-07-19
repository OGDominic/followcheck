export interface Guide {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  steps: { name: string; text: string }[];
  content: string;
}

export const guides: Guide[] = [
  {
    slug: "how-to-install-and-pin-followcheck",
    title: "How to Install and Pin the FollowCheck Extension",
    description: "Learn how to download and install FollowCheck on Chrome, Brave, or Edge, and pin it to your toolbar for easy access.",
    publishDate: "2026-07-10",
    readTime: "3 min read",
    steps: [
      { name: "Visit Web Store", text: "Go to the Chrome Web Store and search for 'FollowCheck'." },
      { name: "Add to Chrome", text: "Click the 'Add to Chrome' button and confirm the permissions popup." },
      { name: "Pin to Toolbar", text: "Click the puzzle icon in the top right of your browser, find FollowCheck, and click the pin icon." }
    ],
    content: `
      <h2>Installing FollowCheck on Chromium Browsers</h2>
      <p>FollowCheck is optimized to work on Google Chrome, Brave, Microsoft Edge, Opera, and other Chromium-based browsers. Installing the extension is quick and takes only a few seconds.</p>
      
      <h2>Step-by-step Installation Guide</h2>
      <p>Follow these quick steps to get started:</p>
      <ul>
        <li>Open your browser and navigate to the Chrome Web Store.</li>
        <li>Search for <strong>FollowCheck</strong> or click the direct installation link from our homepage.</li>
        <li>Click <strong>Add to Chrome</strong> (or 'Add to Brave' / 'Add to Extension').</li>
        <li>A permission dialog box will appear. Confirm the installation.</li>
      </ul>

      <h2>How to Pin the Extension for Quick Access</h2>
      <p>By default, Chrome hides new extensions in the extensions menu. To make FollowCheck easily accessible, pin it to your toolbar:</p>
      <ol>
        <li>Click on the <strong>Puzzle Icon</strong> (Extensions menu) in the top-right corner of your browser.</li>
        <li>Scroll down until you locate <strong>FollowCheck</strong>.</li>
        <li>Click the <strong>Pin Icon</strong> next to it. The FollowCheck logo will now appear permanently in your browser header.</li>
      </ol>
    `
  },
  {
    slug: "how-to-run-first-follower-scan",
    title: "How to Run Your First Follower Scan",
    description: "Step-by-step instructions on running your first Instagram follower scan safely with FollowCheck.",
    publishDate: "2026-07-11",
    readTime: "4 min read",
    steps: [
      { name: "Open Instagram", text: "Open Instagram.com in your browser and log in to your account." },
      { name: "Launch Extension", text: "Click the FollowCheck icon in your browser toolbar to open the sidebar dashboard." },
      { name: "Start Analysis", text: "Click the 'Analyze' button and keep the tab open while the scan runs." }
    ],
    content: `
      <h2>Preparing for Your Audit</h2>
      <p>Running your first scan is easy. Before starting, make sure you are logged in to the correct Instagram profile on the active browser tab.</p>
      
      <h2>Starting the Scan</h2>
      <p>Follow these steps to analyze your followers:</p>
      <ul>
        <li>Go to <strong>Instagram.com</strong> and make sure your home feed loads.</li>
        <li>Click the <strong>FollowCheck</strong> icon on your toolbar. The sidebar panel will open.</li>
        <li>Click the <strong>Analyze My Account</strong> button.</li>
        <li>The extension will scroll through your follower and following lists locally in the background.</li>
      </ul>

      <h2>Important Safety Tips During Scanning</h2>
      <p>To ensure a smooth scan and prevent rate limits:</p>
      <ol>
        <li><strong>Do not close the tab</strong>: Keep the active Instagram page open until the dashboard displays your results.</li>
        <li><strong>Limit Scan Frequency</strong>: Avoid running consecutive scans within a short period (we suggest waiting 15-30 minutes between scans).</li>
        <li><strong>Respect rate limits</strong>: For large accounts (over 10,000 followers), the scanning process may take a few minutes as we throttle requests to comply with security guidelines.</li>
      </ol>
    `
  },
  {
    slug: "how-to-export-follower-data-to-excel",
    title: "How to Export Follower Data to Excel",
    description: "Export your follower lists, non-followers, and mutual connections to Excel or CSV spreadsheets in a click.",
    publishDate: "2026-07-12",
    readTime: "3 min read",
    steps: [
      { name: "Run Scan", text: "Run a connection scan using the FollowCheck extension." },
      { name: "Open Results", text: "View your categorized connections on the results page." },
      { name: "Click Export", text: "Click the 'Export' button to copy or save data as spreadsheets." }
    ],
    content: `
      <h2>Why Export Your Connection Data?</h2>
      <p>Exporting your Instagram follower lists is useful for tracking your growth trends, conducting marketing research, or keeping historical backups of your followers.</p>
      
      <h2>Exporting Your Data with FollowCheck</h2>
      <p>Once your follower scan is complete, you can export lists directly from the results dashboard:</p>
      <ul>
        <li>Wait for the scan to finish and load the results dashboard.</li>
        <li>Select the category you want to export (e.g., Non-Followers, Mutuals, or Fans).</li>
        <li>Click the <strong>Export List</strong> button at the top of the category grid.</li>
        <li>The data is formatted cleanly, allowing you to paste it directly into Excel or Google Sheets.</li>
      </ul>
    `
  }
];
