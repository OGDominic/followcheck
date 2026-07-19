import { SEOPage } from "./seo-types";

// Programmatic SEO Content Compiler
export function generatePageContent(page: SEOPage): string {
  if (page.customContent) {
    return page.customContent;
  }

  const token = page.contentToken;
  const capitalizedToken = token.charAt(0).toUpperCase() + token.slice(1);

  // 1. Introduction Block (~350 words)
  const introBlock = `
    <h2>Understanding the Social Connection Graph on Instagram</h2>
    <p>Managing an Instagram profile in the current digital ecosystem goes far beyond simply posting visually appealing content. Whether you are an influencer, a local brand, or a casual creator, the structure of your network is a critical foundation for organic reach. The core of this network is the connection graph—the relationship between the accounts you follow and those that follow you back. This is where terms like <strong>${token}</strong> become highly relevant to profile management.</p>
    
    <p>Over time, user habits on social media change. Users go inactive, pivot their content niche, or perform follow-unfollow techniques to inflate their statistics. Because of this, it is common to end up following hundreds of accounts that do not interact with your content or follow you back. Identifying these relationships is the first step toward optimizing your social circle, improving home feed quality, and boosting account health.</p>

    <p>Historically, Instagram does not notify you when someone unfollows you, nor does it provide a native filter to check non-followers. This deliberate design protects user privacy but makes profile audits extremely challenging. Doing a manual check—scrolling through your 'Following' list and searching for your name on their profile—is tedious, slow, and prone to visual fatigue, especially if you follow more than a few hundred accounts.</p>
  `;

  // 2. Technical Safety & Passwordless Audits (~400 words)
  const technicalBlock = `
    <h2>The Technical Challenge: Safety First Without Passwords</h2>
    <p>To audit these connections, many users search for third-party mobile tracker apps. However, this is where significant security issues arise. Nearly all standard mobile tracker apps require you to type your Instagram username and password into their interface. This information is sent to third-party servers, which log in to your account from a remote data center IP address.</p>
    
    <p>Instagram's automated security systems flag these logins as suspicious activity. Since the login originates from a generic database cloud rather than your usual home network and device, it triggers instant security checkpoints, multi-factor codes, or accounts suspensions. More importantly, sharing your passwords exposes your account to hacking, data scraping, and potential deletion.</p>

    <p>The solution lies in local browser processing. When you log in to Instagram on your desktop browser (like Google Chrome, Microsoft Edge, or Brave), your browser securely holds your session cookies. A secure, local Chrome extension can query your connection lists directly inside your open browser tab. Because the extension queries the DOM locally from your machine, no passwords are sent to external servers. Your credentials stay 100% safe, and Instagram sees the queries as natural, organic browsing activity coming from your own home IP address.</p>
  `;

  // 3. Algorithm Impact & Ratios (~400 words)
  const algorithmBlock = `
    <h2>How Follower-to-Following Ratios Impact Algorithmic Reach</h2>
    <p>Social media algorithms operate on signals of authority and engagement. One subtle signal is your follower-to-following ratio. A profile that follows 7,000 accounts but only has 100 followers is flagged by algorithms as a low-quality or automated account, which can limit the reach of your posts.</p>
    
    <p>Furthermore, the algorithm measures your engagement rate—the percentage of your followers who like, comment, or share your posts. If your followers list is cluttered with inactive accounts, bot profiles, or users who do not interact with your content, your average engagement rate drops. By identifying non-followers and ghost accounts, you can safely trim your lists, improve your engagement metrics, and signal to the algorithm that your profile is highly engaging to active users.</p>

    <p>Regular profile audits are essential to maintain feed relevancy. When you follow accounts that do not follow back or post irrelevant content, your home feed becomes cluttered. Cleaning up these connections ensures you see posts from mutual connections, close friends, and creators you truly care about, making your daily browsing experience much more meaningful.</p>
  `;

  // 4. Step-by-Step Security Instructions (~300 words)
  const stepBlock = `
    <h2>Step-by-Step Guide to Auditing Your Profile</h2>
    <p>To execute a secure audit on your profile, follow these steps using a secure local utility like FollowCheck:</p>
    <ol>
      <li><strong>Install the Extension</strong>: Download FollowCheck from the official Chrome Web Store. Pin it to your browser toolbar for quick access.</li>
      <li><strong>Log In Securely</strong>: Open a browser tab, go to Instagram.com, and make sure you are signed in to your account.</li>
      <li><strong>Launch the Audit</strong>: Click the FollowCheck icon in your toolbar to open the side panel dashboard, and click the 'Analyze My Account' button.</li>
      <li><strong>Wait for Analysis</strong>: Keep the Instagram tab open while the extension parses connection data. To respect Instagram's security boundaries, the extension builds in brief delays, which may take a few minutes for larger accounts.</li>
      <li><strong>Review & Action</strong>: Review the results grouped into categories: Non-Followers, Mutual Connections, and Fans. You can copy the lists directly to cross-reference them in spreadsheets or manage connections gradually.</li>
    </ol>
  `;

  // 5. Best Practices & Guidelines (~250 words)
  const closingBlock = `
    <h2>Best Practices for Account Cleanup</h2>
    <p>Once you have identified non-reciprocal followers, it is important to update your list carefully. Avoid the temptation to unfollow hundreds of accounts at once. Instagram monitors rapid spikes in unfollowing or following activity, which can trigger temporary rate limits.</p>
    
    <p>For optimal safety, we recommend staying under 30 to 50 unfollows per hour, performed gradually throughout the day. This keeps your account well within safe security boundaries. By prioritizing profile security, avoiding password sharing, and keeping your connection audits local, you can easily maintain a clean, engaging social presence on Instagram.</p>
  `;

  return `
    ${introBlock}
    ${technicalBlock}
    ${algorithmBlock}
    ${stepBlock}
    ${closingBlock}
  `.trim();
}
