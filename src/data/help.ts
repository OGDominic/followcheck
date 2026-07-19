export interface HelpArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
}

export const helpArticles: HelpArticle[] = [
  {
    slug: "understanding-instagram-rate-limits",
    title: "Understanding Instagram Rate Limits & Scans",
    description: "Learn about Instagram's rate limit restrictions and how FollowCheck throttles scans to keep your account safe.",
    category: "Technical",
    content: `
      <h2>What are Instagram Rate Limits?</h2>
      <p>Instagram limits the number of actions (such as API calls, requests, or profile checks) that a single user can perform within an hour. This security check is designed to prevent bot activity, spamming, and scraping.</p>
      
      <h2>How FollowCheck Avoids Rate Limit Blocks</h2>
      <p>When you run a scan, FollowCheck queries your lists page-by-page. To remain fully compliant with Instagram's limits, we build in smart delays between page loads. This throttling simulates standard browsing habits, keeping your account safe from temporary blocks.</p>

      <h2>Tips to Avoid Rate Limits</h2>
      <ul>
        <li><strong>Avoid Running Back-to-Back Scans</strong>: Wait at least 15-30 minutes between audits.</li>
        <li><strong>Close other automated apps</strong>: Ensure you aren't running mobile trackers or other bots at the same time.</li>
        <li><strong>Limit Action Speeds</strong>: If you decide to unfollow accounts based on your reports, do so gradually (stay under 30-50 unfollows per hour).</li>
      </ul>
    `
  },
  {
    slug: "extension-not-detecting-login",
    title: "Extension Not Detecting Instagram Login",
    description: "Troubleshooting guide if FollowCheck displays a 'please log in' message while you are already logged in.",
    category: "Troubleshooting",
    content: `
      <h2>Why Does the 'Please Log In' Message Appear?</h2>
      <p>This message occurs when the extension is unable to read your active session. This can happen due to page caching, active ad-blockers, or custom privacy extensions that block script execution.</p>
      
      <h2>How to Resolve the Login Issue</h2>
      <p>Try these quick steps to restore connection:</p>
      <ol>
        <li><strong>Refresh the Tab</strong>: Refresh your open Instagram tab and wait for the page to load completely before clicking the extension icon.</li>
        <li><strong>Check Third-Party Extension Conflicts</strong>: Disable extensions that block trackers or custom scripts on Instagram.com.</li>
        <li><strong>Clear Cache</strong>: Clear your browser's cookies and site data for Instagram.com, then log in again.</li>
      </ol>
    `
  },
  {
    slug: "is-followcheck-safe-to-use",
    title: "Is FollowCheck Safe to Use?",
    description: "Learn about our local processing architecture and why FollowCheck is the safest follower utility available.",
    category: "Security",
    content: `
      <h2>Why Traditional Follower Apps are Dangerous</h2>
      <p>Most follower mobile apps require you to type your password into their systems. This compromises your security, exposes your details, and violates Instagram's guidelines, leading to flagged accounts or permanent bans.</p>
      
      <h2>Why FollowCheck is Completely Safe</h2>
      <p>FollowCheck is built with a local-first security model:</p>
      <ul>
        <li><strong>No Password Input</strong>: The extension reads details from your active browser session directly, without ever asking for your password.</li>
        <li><strong>Local Processing</strong>: All data is analyzed on your computer. Your lists never leave your device.</li>
        <li><strong>Mimics Organic Actions</strong>: By running scans inside your normal browser, the requests appear completely organic to Instagram's security checks.</li>
      </ul>
    `
  }
];
