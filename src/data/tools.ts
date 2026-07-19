export interface ToolLandingPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: {
    heading: string;
    subheading: string;
    description: string;
  };
  howItWorks: {
    title: string;
    steps: { name: string; text: string }[];
  };
  benefits: {
    title: string;
    items: { title: string; text: string }[];
  };
  faqs: { question: string; answer: string }[];
}

export const toolPages: ToolLandingPage[] = [
  {
    slug: "who-doesnt-follow-me-back",
    title: "Who Doesn't Follow Me Back on Instagram",
    metaTitle: "Who Doesn't Follow Me Back on Instagram? Check Safely",
    metaDescription: "Find who doesn't follow you back on Instagram. Free, safe, and passwordless Chrome utility to see non-followers.",
    keywords: ["who doesn't follow me back", "instagram non followers", "unfollowers instagram"],
    intro: {
      heading: "Instantly Find Who Doesn't Follow You Back",
      subheading: "Audit your following list safely and clean up your feed in seconds.",
      description: "Ever wonder why your follower count does not align with your following? Many accounts unfollow over time or fail to follow back. We make it easy to identify non-reciprocal followers securely without needing your Instagram password."
    },
    howItWorks: {
      title: "How It Works in 3 Easy Steps",
      steps: [
        { name: "Install FollowCheck", text: "Download the Chrome extension from the Chrome Web Store and pin it to your toolbar." },
        { name: "Log in to Instagram", text: "Navigate to Instagram.com on your desktop browser. Your session cookies handle authentication locally." },
        { name: "Run Analysis", text: "Click 'Analyze' in the sidebar. The extension audits lists locally and generates a dashboard of non-followers." }
      ]
    },
    benefits: {
      title: "Benefits of Auditing Non-Followers",
      items: [
        { title: "Privacy First", text: "We never ask for or save your Instagram password. All processing happens on your own computer." },
        { title: "Enhance Engagement", text: "Unfollowing non-reciprocal accounts balances your ratios, which feeds positive reach signals to Instagram's algorithm." },
        { title: "Clean Feed", text: "Remove accounts that do not interact with you, resulting in a cleaner and more relevant home feed." }
      ]
    },
    faqs: [
      { question: "Why should I find who doesn't follow me back?", answer: "Auditing your list helps maintain a healthy follower-to-following ratio, improves engagement metrics, and cleans up your home feed." },
      { question: "Is this tool safe for my Instagram account?", answer: "Yes, because it runs locally inside your Google Chrome browser. It doesn't request your login credentials, which protects your account from suspensions." }
    ]
  },
  {
    slug: "instagram-follower-checker",
    title: "Free Instagram Follower Checker Utility",
    metaTitle: "Free Instagram Follower Checker | No Password Required",
    metaDescription: "Check your Instagram followers and following lists securely. Perform passwordless local connection audits in under a minute.",
    keywords: ["instagram follower checker", "followers checker", "instagram follower tool"],
    intro: {
      heading: "Analyze Connections with a Free Follower Checker",
      subheading: "A fast, local, and completely free relationship manager.",
      description: "Stop using paid apps that compromise your security. Run local follower analysis securely on your desktop browser. Check mutual followers, lost connections, and clean up your profile in under a minute."
    },
    howItWorks: {
      title: "Checking Followers Safely",
      steps: [
        { name: "Add to Chrome", text: "Install FollowCheck from the Web Store in just a click." },
        { name: "Log In On Instagram", text: "Log in securely to Instagram.com in a new tab." },
        { name: "View Dashboard", text: "Click the extension icon to view a detailed breakdown of your follower connections." }
      ]
    },
    benefits: {
      title: "Why Use Our Follower Checker?",
      items: [
        { title: "No Subscription Fees", text: "Full dashboard features are available to all users completely free, with no hidden upgrades." },
        { title: "Zero Logging", text: "Your connection data is processed locally. We do not store or sell your follower list details." },
        { title: "Accurate Reports", text: "By querying the DOM locally, we bypass standard app glitches and provide accurate lists." }
      ]
    },
    faqs: [
      { question: "Do I have to pay to check my followers?", answer: "No, FollowCheck is completely free. We do not charge subscriptions or hold features behind paywalls." },
      { question: "Can I export my follower report?", answer: "Yes, you can copy lists directly from the desktop dashboard to save them to a spreadsheet." }
    ]
  },
  {
    slug: "instagram-unfollow-checker",
    title: "Instagram Unfollow Checker",
    metaTitle: "Instagram Unfollow Checker | See Who Unfollowed You Safely",
    metaDescription: "Find out who unfollowed you on Instagram. Use our free browser utility to compare lists safely without passwords.",
    keywords: ["instagram unfollow checker", "who unfollowed me", "unfollow tracker"],
    intro: {
      heading: "Identify Who Unfollowed Your Profile Safely",
      subheading: "Track follower drops and keep your network healthy.",
      description: "It is normal to lose followers, but tracking unfollows manually is nearly impossible. Our local browser utility processes profile data safely and points out exactly who clicked the unfollow button."
    },
    howItWorks: {
      title: "How to Detect Unfollowers",
      steps: [
        { name: "Download Extension", text: "Add our secure extension to your Chromium-based browser." },
        { name: "Open Your Session", text: "Log in to Instagram on your desktop to allow local data parsing." },
        { name: "Compare Profiles", text: "Run scans to find non-reciprocal accounts and unfollowers instantly." }
      ]
    },
    benefits: {
      title: "Core Benefits of Unfollower Audits",
      items: [
        { title: "No Password Required", text: "Avoid sharing your credentials. The extension relies on your existing browser cookies." },
        { title: "Avoid Temporary Blocks", text: "Because the extension mimics natural browsing, it keeps your account safe from rate-limit bans." },
        { title: "Audience Retention", text: "Tracking unfollowers lets you adjust your content strategy to retain more followers." }
      ]
    },
    faqs: [
      { question: "How does the unfollow checker find who unfollowed me?", answer: "It checks your following list and queries which of those accounts do not appear in your followers list." },
      { question: "Will my account get locked if I use this checker?", answer: "No, because the extension operates locally from your own computer, mimicking standard user actions." }
    ]
  },
  {
    slug: "instagram-mutual-followers",
    title: "Instagram Mutual Followers Checker",
    metaTitle: "Instagram Mutual Followers Checker | Find Real Friends",
    metaDescription: "Discover your mutual connections on Instagram. Easily list and interact with followers who follow you back.",
    keywords: ["instagram mutual followers", "mutual followers", "compare instagram followers"],
    intro: {
      heading: "Find and Engage with Your Mutual Followers",
      subheading: "Identify the core audience that supports your content.",
      description: "Mutual connections are the foundation of healthy social networks. Our checker helps you filter out the noise and highlights exactly who is following you back, making it easy to build a community."
    },
    howItWorks: {
      title: "Finding Mutual Connections",
      steps: [
        { name: "Install Extension", text: "Get the extension from the Chrome Web store." },
        { name: "Open Instagram", text: "Log in to your profile in a new tab." },
        { name: "List Mutuals", text: "Launch the tool to see a clean list of mutual followers." }
      ]
    },
    benefits: {
      title: "The Power of Mutual Relationships",
      items: [
        { title: "Boost Algorithm Signals", text: "Interacting with mutual connections signals real relationships, boosting your post reach." },
        { title: "Prioritize Outreach", text: "Focus your direct messages and story interactions on people who follow you back." },
        { title: "Network Quality", text: "Filtering out non-followers helps keep your feed focused on reciprocal relationships." }
      ]
    },
    faqs: [
      { question: "What is a mutual follower?", answer: "An account that you follow and that follows you back in return." },
      { question: "Can I filter mutual followers in the extension?", answer: "Yes, our dashboard provides a search filter to easily find specific mutual accounts." }
    ]
  },
  {
    slug: "compare-followers-following",
    title: "Compare Instagram Followers and Following Lists",
    metaTitle: "Compare Instagram Followers & Following Lists Safely",
    metaDescription: "Compare your Instagram followers vs following list. Step-by-step ratio optimization tool with local database support.",
    keywords: ["compare followers and following", "follower comparison", "following checker"],
    intro: {
      heading: "Compare Followers & Following Lists Automatically",
      subheading: "Optimize your connection ratios without manually scrolling.",
      description: "Manually comparing lists is exhausting. Our local utility does the heavy lifting for you by cross-referencing your lists and displaying non-followers, mutuals, and fans side-by-side."
    },
    howItWorks: {
      title: "Cross-Reference in Seconds",
      steps: [
        { name: "Install Utility", text: "Set up the Chrome extension in under a minute." },
        { name: "Log In", text: "Sign in to Instagram on your computer." },
        { name: "Generate Comparison", text: "Run the checker to view comparison lists side-by-side." }
      ]
    },
    benefits: {
      title: "Why Compare Your Lists?",
      items: [
        { title: "Ratio Optimization", text: "A balanced ratio makes your profile look clean and professional." },
        { title: "Remove Inactive Profiles", text: "Identify ghost accounts and unfollow them to improve engagement rate." },
        { title: "Saves Hours", text: "Bypass the need to copy lists manually. Get instant comparison reports." }
      ]
    },
    faqs: [
      { question: "How do I compare lists manually?", answer: "You can download your data folder from Instagram, extract the connections file, and cross-reference them in Excel." },
      { question: "Does this tool work for large follower counts?", answer: "Yes, it can parse large lists, but we throttle requests to comply with rate limits." }
    ]
  },
  {
    slug: "instagram-non-followers",
    title: "Instagram Non Followers Analysis Tool",
    metaTitle: "Instagram Non Followers Checker | Clean Up Your Feed",
    metaDescription: "Identify non-followers on Instagram. Use our free browser extension to clean up non-reciprocal accounts safely.",
    keywords: ["instagram non followers", "instagram unfollow checker", "instagram helper"],
    intro: {
      heading: "Identify and Manage Non-Followers Securely",
      subheading: "Clean up your lists and focus on active connections.",
      description: "Following accounts that don't follow you back can clutter your home feed. Our local analyzer lists non-followers in a searchable dashboard, helping you keep your feed focused on mutual connections."
    },
    howItWorks: {
      title: "Detecting Non-Reciprocal Accounts",
      steps: [
        { name: "Get the App", text: "Install FollowCheck from the Web Store." },
        { name: "Open Profile", text: "Log in to Instagram on your Chrome browser." },
        { name: "Filter Non-Followers", text: "Run a scan and filter the list to show only non-reciprocal followings." }
      ]
    },
    benefits: {
      title: "Why Clean Non-Followers?",
      items: [
        { title: "Declutter Feed", text: "Clean your homepage and view posts only from accounts that follow you back." },
        { title: "Safe Deletions", text: "The extension processes data locally, avoiding suspicious login alerts." },
        { title: "Enhanced Credibility", text: "Optimizing your follower ratio makes your profile look more credible to new visitors." }
      ]
    },
    faqs: [
      { question: "What is an Instagram non-follower?", answer: "An account that you follow, but does not follow your profile back." },
      { question: "Can I bulk-unfollow non-followers?", answer: "We advise unfollowing accounts manually and gradually to avoid triggering Instagram's rate limit blocks." }
    ]
  }
];
