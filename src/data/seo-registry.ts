import { SEOPage } from "../lib/seo-types";

export const seoRegistry: SEOPage[] = [
  // ==================== TOOLS SECTION ====================
  {
    slug: "who-doesnt-follow-me-back-on-instagram",
    title: "Who Doesn't Follow Me Back on Instagram? Check Safely",
    description: "Discover who doesn't follow you back on Instagram. Free, safe, and passwordless Chrome extension to compare lists.",
    category: "tools",
    keywords: ["who doesn't follow me back on instagram", "instagram non followers", "unfollowers instagram"],
    contentToken: "who doesn't follow you back on Instagram",
    faqs: [
      { question: "How can I see who doesn't follow me back on Instagram?", answer: "Use the FollowCheck Chrome extension to safely scan your followers and following lists in under a minute without sharing your password." },
      { question: "Does Instagram send notifications when someone unfollows?", answer: "No, Instagram never sends alerts when a user unfollows your profile." }
    ]
  },
  {
    slug: "instagram-follower-checker",
    title: "Instagram Follower Checker | Secure Passwordless Utility",
    description: "Check your Instagram followers and following lists securely. Perform passwordless local connection audits in under a minute.",
    category: "tools",
    keywords: ["instagram follower checker", "followers checker", "instagram follower tool"],
    contentToken: "instagram follower checker utility",
    faqs: [
      { question: "Is there a free Instagram follower checker?", answer: "Yes, FollowCheck is 100% free, processes all lists locally, and does not require paid subscriptions." },
      { question: "Why is passwordless scanning important?", answer: "Entering your password in third-party apps violates Instagram's rules and can lead to account bans or blocks." }
    ]
  },
  {
    slug: "instagram-unfollow-checker",
    title: "Instagram Unfollow Checker | Identify Unfollowers Safely",
    description: "Find out who unfollowed you on Instagram. Compare your following and follower list safely without sharing credentials.",
    category: "tools",
    keywords: ["instagram unfollow checker", "who unfollowed me", "unfollow tracker"],
    contentToken: "instagram unfollow checker",
    faqs: [
      { question: "How do I check who unfollowed me on Instagram?", answer: "By comparing a previous connection scan with your current followers list using FollowCheck." },
      { question: "Can I use this on a mobile device?", answer: "Currently, FollowCheck is a desktop Chrome extension. Mobile tracker apps require passwords and are generally unsafe." }
    ]
  },
  {
    slug: "instagram-mutual-followers",
    title: "Instagram Mutual Followers Checker | Find Reciprocal Friends",
    description: "Discover your mutual connections on Instagram. List and interact with followers who follow you back.",
    category: "tools",
    keywords: ["instagram mutual followers", "mutual followers", "compare instagram followers"],
    contentToken: "instagram mutual followers tracker",
    faqs: [
      { question: "What is a mutual follower on Instagram?", answer: "A user who you follow and who also follows your profile back." },
      { question: "How can I view all mutual connections?", answer: "You can open FollowCheck sidebar dashboard, run a scan, and search/filter under the 'Mutuals' tab." }
    ]
  },
  {
    slug: "compare-followers-and-following",
    title: "Compare Instagram Followers and Following Lists Safely",
    description: "Compare your Instagram followers vs following list. Step-by-step ratio optimization tool with local database support.",
    category: "tools",
    keywords: ["compare followers and following", "follower comparison", "following checker"],
    contentToken: "compare followers and following lists",
    faqs: [
      { question: "How do I compare my followers and following?", answer: "You can download your account data JSON from Instagram, or run a 1-click comparison scan using the FollowCheck extension." },
      { question: "Why should I balance my followers and following ratio?", answer: "A positive ratio projects authority and credibility, which can help boost organic reach with the algorithm." }
    ]
  },
  {
    slug: "instagram-non-followers",
    title: "Instagram Non Followers Checker | Clean Up Your Feed",
    description: "Identify non-followers on Instagram. Use our free browser extension to clean up non-reciprocal accounts safely.",
    category: "tools",
    keywords: ["instagram non followers", "instagram unfollow checker", "instagram helper"],
    contentToken: "instagram non followers checker",
    faqs: [
      { question: "What does non-follower mean?", answer: "An account you follow that does not follow you back in return." },
      { question: "Is it safe to unfollow non-followers?", answer: "Yes, but you should unfollow them gradually (stay under 50 per hour) to comply with Instagram's safety guidelines." }
    ]
  },
  {
    slug: "instagram-following-checker",
    title: "Instagram Following Checker | Manage Your Outgoing Follows",
    description: "Audit the list of accounts you follow on Instagram. Identify inactive, bot, and non-reciprocal connections safely.",
    category: "tools",
    keywords: ["instagram following checker", "following checker", "instagram following manager"],
    contentToken: "instagram following checker",
    faqs: [
      { question: "What does the following checker do?", answer: "It lists all accounts you currently follow, categorizing them by relationship type (mutual, non-follower, or fan)." }
    ]
  },
  {
    slug: "instagram-follow-back-checker",
    title: "Instagram Follow Back Checker | Find Out Who Follows Back",
    description: "Check if specific Instagram users follow you back. Secure connection analyzer without sharing password.",
    category: "tools",
    keywords: ["instagram follow back checker", "who follows back", "who follows me back"],
    contentToken: "instagram follow back checker",
    faqs: [
      { question: "How do I check if someone follows me back?", answer: "Open their profile to check, or run a full list check using FollowCheck to search for specific accounts in your follower report." }
    ]
  },
  {
    slug: "free-instagram-follower-checker",
    title: "Free Instagram Follower Checker | Secure Local Scans",
    description: "Looking for a free Instagram follower checker? Explore safe local browser tools that analyze connections without paying.",
    category: "tools",
    keywords: ["free instagram follower checker", "safe instagram checker", "instagram followers free"],
    contentToken: "free instagram follower checker",
    faqs: [
      { question: "Is there a completely free follower checker?", answer: "Yes, FollowCheck is 100% free. We do not sell your data or gate features behind paid plans." }
    ]
  },
  {
    slug: "best-instagram-follower-checker",
    title: "Best Instagram Follower Checker Utilities in 2026",
    description: "Review of the best Instagram follower checker tools. Compare safety, pricing, and features to choose the best option.",
    category: "tools",
    keywords: ["best instagram follower checker", "instagram follower analyzer", "instagram follower tool"],
    contentToken: "best instagram follower checker",
    faqs: [
      { question: "Which Instagram follower checker is safest?", answer: "Local browser extensions (like FollowCheck) are the safest because they do not require sharing your account password." }
    ]
  },

  // ==================== FEATURES SECTION ====================
  {
    slug: "local-profile-scanning",
    title: "Local Profile Scanning | Privacy-First Follower Checks",
    description: "Learn how local-first browser scanning works in FollowCheck. Bypasses security challenges and keeps account credentials safe.",
    category: "features",
    keywords: ["local scanning", "privacy-friendly instagram tools", "safe instagram checker"],
    contentToken: "local-first browser scanning",
    faqs: [
      { question: "What is local profile scanning?", answer: "A processing method where the extension reads data from your active browser session directly, without sending credentials to external servers." },
      { question: "Why is it safer than other tools?", answer: "It keeps your session keys on your device, preventing security checkpoints and account lockouts." }
    ]
  },
  {
    slug: "csv-excel-export",
    title: "Excel and CSV Connection Data Export | FollowCheck",
    description: "Export your Instagram follower logs, mutual friends, and non-followers to Excel or CSV spreadsheets in 1-click.",
    category: "features",
    keywords: ["instagram follower report", "instagram following report", "compare instagram followers"],
    contentToken: "CSV and Excel connection export",
    faqs: [
      { question: "Can I download my followers list to Excel?", answer: "Yes, you can copy or export lists directly from the FollowCheck results dashboard." }
    ]
  },
  {
    slug: "passwordless-session-auth",
    title: "Passwordless Session Authentication | Secure Audits",
    description: "How FollowCheck runs audits securely without requesting your Instagram password. Technical specification explanation.",
    category: "features",
    keywords: ["instagram follower checker without password", "instagram browser extension", "safe instagram checker"],
    contentToken: "passwordless session authentication",
    faqs: [
      { question: "How does passwordless check work?", answer: "The extension communicates with the open tab where you are already signed in to Instagram, using your active browser session." }
    ]
  },

  // ==================== COMPARISONS SECTION ====================
  {
    slug: "followcheck-vs-reports-plus",
    title: "FollowCheck vs Reports+ Tracker App | Comparison & Audit",
    description: "Compare FollowCheck and Reports+ for Instagram. Discover why local browser extensions are safer than mobile tracker apps.",
    category: "comparisons",
    keywords: ["instagram unfollow checker", "who unfollowed me", "instagram follower tracker"],
    contentToken: "FollowCheck vs Reports+ comparison",
    comparisonTarget: "Reports+",
    faqs: [
      { question: "Why does Reports+ require my password?", answer: "Reports+ is a mobile app that logs in from remote cloud servers, which requires your login details." },
      { question: "Why is FollowCheck a safer alternative?", answer: "FollowCheck is a desktop Chrome extension that does not ask for your password and audits data locally on your computer." }
    ]
  },
  {
    slug: "followcheck-vs-manual-spreadsheet",
    title: "FollowCheck vs Manual Spreadsheet Tracking | Follower Audit",
    description: "Compare manual Excel sheet connection parsing vs automated local audits. Save hours managing Instagram lists.",
    category: "comparisons",
    keywords: ["compare followers and following", "follower comparison", "following checker"],
    contentToken: "FollowCheck vs manual spreadsheet tracking",
    comparisonTarget: "Manual Spreadsheets",
    faqs: [
      { question: "How do I build a manual follower spreadsheet?", answer: "Download your account data from Instagram settings, extract connections, and copy-paste them to Excel to run lookups." },
      { question: "Why is FollowCheck better?", answer: "Instead of waiting up to 48 hours for data archive emails, FollowCheck generates a connection comparison in under a minute." }
    ]
  },

  // ==================== RESOURCES SECTION ====================
  {
    slug: "instagram-clean-following-checklist",
    title: "Instagram Feed Cleanup Checklist | Profile Optimization",
    description: "A complete step-by-step checklist to safely clean up your Instagram following list and boost organic engagement rates.",
    category: "resources",
    keywords: ["instagram account cleanup", "instagram audit", "instagram productivity"],
    contentToken: "Instagram clean following checklist",
    faqs: [
      { question: "How often should I clean my Instagram following list?", answer: "For best results, we suggest running a check and cleaning inactive or non-reciprocal accounts every month." }
    ]
  },

  // ==================== BLOG SECTION ====================
  {
    slug: "how-to-see-who-doesnt-follow-me-back-on-instagram",
    title: "How to See Who Doesn't Follow You Back on Instagram",
    description: "Learn how to easily see who doesn't follow you back on Instagram. Safely analyze your followers and following lists without sharing passwords.",
    category: "blog",
    keywords: ["who doesn't follow me back instagram", "instagram follower checker", "instagram non followers"],
    contentToken: "see who doesn't follow you back on Instagram",
    publishDate: "2026-07-15",
    readTime: "5 min read",
    faqs: [
      { question: "Can I check who doesn't follow me back without an app?", answer: "Yes, you can check profiles manually, but this is extremely time-consuming for large accounts." }
    ]
  },
  {
    slug: "who-unfollowed-me-on-instagram",
    title: "Who Unfollowed Me on Instagram? Safest Audit Methods",
    description: "Discover who unfollowed you on Instagram. Compare lists securely using local tools without risking your account safety.",
    category: "blog",
    keywords: ["who unfollowed me", "instagram unfollow checker", "instagram follower tracker"],
    contentToken: "who unfollowed me on Instagram",
    publishDate: "2026-07-16",
    readTime: "4 min read",
    faqs: [
      { question: "Does Instagram notify you when you get unfollowed?", answer: "No, Instagram does not send alerts or notifications when a user unfollows your profile." }
    ]
  },
  {
    slug: "how-to-compare-followers-and-following",
    title: "How to Compare Followers and Following Lists",
    description: "Compare your Instagram followers vs following list. Step-by-step tutorial to audit relationships and balance your ratio.",
    category: "blog",
    keywords: ["compare followers and following", "followers and following checker", "follower comparison"],
    contentToken: "compare followers and following lists",
    publishDate: "2026-07-17",
    readTime: "6 min read",
    faqs: [
      { question: "What is a good follower-to-following ratio?", answer: "For personal accounts, a 1:1 ratio is healthy. For creators and businesses, a higher number of followers is preferred to project authority." }
    ]
  },

  // ==================== GUIDES SECTION ====================
  {
    slug: "how-to-install-and-pin-followcheck",
    title: "How to Install and Pin the FollowCheck Extension",
    description: "Learn how to download and install FollowCheck on Chrome, Brave, or Edge, and pin it to your toolbar for easy access.",
    category: "guides",
    keywords: ["instagram chrome extension", "instagram browser extension", "instagram productivity tools"],
    contentToken: "install and pin FollowCheck",
    publishDate: "2026-07-10",
    readTime: "3 min read",
    steps: [
      { name: "Visit Web Store", text: "Go to the Chrome Web Store and search for 'FollowCheck'." },
      { name: "Add to Chrome", text: "Click the 'Add to Chrome' button and confirm the permissions popup." },
      { name: "Pin to Toolbar", text: "Click the puzzle icon in the top right of your browser, find FollowCheck, and click the pin icon." }
    ],
    faqs: []
  },

  // ==================== HELP SECTION ====================
  {
    slug: "understanding-instagram-rate-limits",
    title: "Understanding Instagram Rate Limits & Scans",
    description: "Learn about Instagram's rate limit restrictions and how FollowCheck throttles scans to keep your account safe.",
    category: "help",
    keywords: ["instagram audit", "safe instagram checker", "instagram growth tools"],
    contentToken: "Instagram rate limits and safety limits",
    faqs: [
      { question: "How does FollowCheck avoid rate limits?", answer: "The extension builds in smart delays between page queries to simulate standard user browsing, keeping your account safe from temporary blocks." }
    ]
  }
];
