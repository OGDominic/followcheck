"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPageClient() {
  const sections = [
    { id: "introduction", label: "1. Introduction" },
    { id: "information-processed", label: "2. Information We Process" },
    { id: "instagram-analysis", label: "3. Instagram Connection Analysis" },
    { id: "local-storage", label: "4. Local Extension Storage" },
    { id: "website-info", label: "5. Website Information" },
    { id: "cookies-analytics", label: "6. Cookies and Analytics" },
    { id: "advertising", label: "7. Advertising" },
    { id: "use-of-info", label: "8. How We Use Information" },
    { id: "data-sharing", label: "9. Data Sharing" },
    { id: "data-retention", label: "10. Data Retention" },
    { id: "data-security", label: "11. Data Security" },
    { id: "your-choices", label: "12. Your Choices" },
    { id: "children-privacy", label: "13. Children's Privacy" },
    { id: "international-users", label: "14. International Users" },
    { id: "third-party-services", label: "15. Third-Party Services" },
    { id: "changes", label: "16. Changes to This Privacy Policy" },
    { id: "contact-us", label: "17. Contact Us" }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-transparent selection:bg-electric/10 selection:text-electric">
        
        {/* HERO SECTION */}
        <section className="relative px-4 py-16 text-center sm:px-6 lg:px-8 bg-transparent border-b border-navy/5">
          <div className="mx-auto max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-electric">
              Legal
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-xl text-sm sm:text-base font-semibold leading-relaxed text-navy/60">
              Learn how FollowCheck handles information when you use our website and browser extension.
            </p>
            <p className="text-xs font-bold text-navy/40">
              Last updated: July 13, 2026
            </p>
          </div>
        </section>

        {/* LEGAL LAYOUT */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Sticky Table of Contents (Desktop) & Compact TOC (Mobile) */}
              <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit max-h-[80vh] overflow-y-auto no-scrollbar border border-navy/5 bg-white/60 backdrop-blur-xs p-6 rounded-2xl">
                <h2 className="text-xs font-black uppercase tracking-wider text-navy/40 mb-4 pb-2 border-b border-navy/5">
                  Table of Contents
                </h2>
                <nav className="flex flex-col gap-2.5">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-xs sm:text-sm font-semibold text-navy/70 hover:text-electric transition-colors"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </aside>

              {/* Main Content Area */}
              <div className="lg:col-span-8 space-y-12 text-sm sm:text-base font-medium leading-relaxed text-navy/70">
                
                {/* 1. Introduction */}
                <article id="introduction" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    1. Introduction
                  </h2>
                  <p>
                    Welcome to FollowCheck. FollowCheck provides tools designed to help users understand follower and following relationships associated with their Instagram account. We are committed to transparency and respecting the privacy of our visitors and users.
                  </p>
                  <p className="font-bold text-navy">
                    FollowCheck is an independent service. We are not affiliated with, endorsed by, or sponsored by Instagram, Meta Platforms, Inc., or any of their affiliates or subsidiaries.
                  </p>
                </article>

                {/* 2. Information We Process */}
                <article id="information-processed" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    2. Information We Process
                  </h2>
                  <p>
                    FollowCheck acts as a client-side browser extension. Depending on how you interact with our service, the information processed can be divided into three categories:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Website Information:</strong> Standard, non-identifying operational information automatically compiled when visiting the website.
                    </li>
                    <li>
                      <strong>Browser Extension Information:</strong> Temporary browser configurations and settings saved locally on your device to keep track of the extension state.
                    </li>
                    <li>
                      <strong>Connection Analysis Information:</strong> Data compiled dynamically during local account analysis (such as Instagram usernames and profile structures).
                    </li>
                  </ul>
                </article>

                {/* 3. Instagram Connection Analysis */}
                <article id="instagram-analysis" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    3. Instagram Connection Analysis
                  </h2>
                  <p>
                    FollowCheck processes connection information within the browser extension to generate analysis results locally on your machine. This analysis may include identifiers, usernames, and other connection details genuinely available to the extension during the user-initiated analysis session.
                  </p>
                  <p>
                    <strong>Key Architecture Highlights:</strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Connection analysis begins <strong>only</strong> after you explicitly request a scan by clicking the "Analyze My Account" button. FollowCheck does not automatically scan your account or monitor your browsing behavior.
                    </li>
                    <li>
                      The scan relies entirely on active browser cookies from your logged-in Instagram session.
                    </li>
                    <li>
                      <strong>We do not access or use private Instagram APIs</strong>, nor do we bypass Instagram access controls. We only parse account structures available to your own logged-in session.
                    </li>
                    <li>
                      When you explicitly choose to view full results, the approved FollowCheck website requests the latest completed analysis from the installed extension. The extension validates the requesting FollowCheck website origin, matches it against our approved allowlist, and returns the sanitized analysis to the website page context for local rendering in your browser.
                    </li>
                    <li>
                      <strong>FollowCheck does not upload your connection analysis to a FollowCheck backend as part of this local results flow.</strong> All data is transferred locally between the extension and the website inside your browser session and is not stored on our servers.
                    </li>
                  </ul>
                </article>

                {/* 4. Local Extension Storage */}
                <article id="local-storage" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    4. Local Extension Storage
                  </h2>
                  <p>
                    FollowCheck uses the browser's local sandbox storage (specifically <code>chrome.storage.local</code>) to temporarily save the computed results of your most recent scan. This allows you to view your results again in the side panel without having to run a brand new scan every time you click the toolbar icon.
                  </p>
                  <p>
                    You can clear this saved data at any time by selecting the **"Clear Analysis"** option in the extension side panel. Clearing your analysis completely removes the saved follower comparisons from your browser storage. Please note that clearing this data only removes it from the local extension memory—it has no effect on your actual profile, followings, or data on Instagram.
                  </p>
                </article>

                {/* 5. Website Information */}
                <article id="website-info" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    5. Website Information
                  </h2>
                  <p>
                    When you access the FollowCheck website, our hosting and infrastructure providers may automatically process basic server access log details (such as IP addresses, user-agent string, page referral headers, and timestamps of access). This is standard across almost all internet web hosting setups to protect platform security, verify bandwidth usage, and maintain server reliability. 
                  </p>
                  <p>
                    FollowCheck does not directly store, compile, or link these server logs to individual user identities, nor do we run custom databases to track website visitors.
                  </p>
                </article>

                {/* 6. Cookies and Analytics */}
                <article id="cookies-analytics" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    6. Cookies and Analytics
                  </h2>
                  <p>
                    We value your privacy and do not want to track you unless absolutely necessary for product functionality. 
                  </p>
                  <p>
                    Currently, <strong>we do not use Google Analytics or other active behavioral analytics tracking scripts on our website.</strong> Should we choose to implement analytics or cookies to evaluate site load times and page performance in the future, we will update this Privacy Policy and provide standard cookie consent options in compliance with applicable local regulations.
                  </p>
                </article>

                {/* 7. Advertising */}
                <article id="advertising" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    7. Advertising
                  </h2>
                  <p>
                    FollowCheck is free to use. To help cover hosting and development costs, we may choose to display third-party advertisements on the website in the future.
                  </p>
                  <p>
                    These third-party advertising network providers may use cookies, tracking pixels, or similar identifiers to deliver personalized advertisements based on your general region and web activity, subject to applicable consent requirements. This Privacy Policy governs FollowCheck's information usage only and does not cover the practices of external advertisers. We will update this policy and provide appropriate user consent configurations as required when advertising technologies are deployed.
                  </p>
                </article>

                {/* 8. How We Use Information */}
                <article id="use-of-info" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    8. How We Use Information
                  </h2>
                  <p>
                    Any website access details or extension configurations processed are utilized solely to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide the standard functionality of the FollowCheck extension.</li>
                    <li>Generate connection analysis results upon your manual request.</li>
                    <li>Maintain site security, debug hosting errors, and prevent service abuse.</li>
                    <li>Troubleshoot technical issues with the side panel or content scripts.</li>
                    <li>Respond to user inquiries or feedback submitted through our contact page.</li>
                  </ul>
                </article>

                {/* 9. Data Sharing */}
                <article id="data-sharing" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    9. Data Sharing
                  </h2>
                  <p>
                    <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
                  </p>
                  <p>
                    Operational website logs may be processed by our web hosting infrastructure providers (such as Vercel) under standard security parameters. Your local Chrome extension analysis comparisons are stored strictly on your device and are never shared with or sent to FollowCheck, hosting providers, or any third party.
                  </p>
                </article>

                {/* 10. Data Retention */}
                <article id="data-retention" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    10. Data Retention
                  </h2>
                  <p>
                    Your follower analysis comparisons are stored locally in your browser sandbox. The storage persists until you click "Clear Analysis" in the Side Panel, clear your Google Chrome storage cache, or uninstall the extension.
                  </p>
                  <p>
                    Communication messages submitted through our support page are retained only for the duration required to address your request and handle subsequent support questions.
                  </p>
                </article>

                {/* 11. Data Security */}
                <article id="data-security" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    11. Data Security
                  </h2>
                  <p>
                    FollowCheck uses reasonable technical and organizational measures appropriate to our service's architecture (such as HTTPS encryption for website traffic). While we strive to maintain high-quality safety configurations, please be aware that no service operating over the public internet or local browser sandbox is 100% secure, and we cannot guarantee that information is completely immune to breach or compromise.
                  </p>
                </article>

                {/* 12. Your Choices */}
                <article id="your-choices" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    12. Your Choices
                  </h2>
                  <p>
                    You have complete control over how your account details are handled:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You can choose not to run an analysis by refraining from clicking the "Analyze" button.</li>
                    <li>You can clear all stored analysis results at any time within the side panel settings.</li>
                    <li>You can uninstall the extension through your Chrome settings (<code>chrome://extensions/</code>), which deletes all sandbox files immediately.</li>
                    <li>You can configure your browser to block cookies or reject script execution, though this may prevent the extension from interfacing with Instagram.</li>
                  </ul>
                </article>

                {/* 13. Children's Privacy */}
                <article id="children-privacy" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    13. Children's Privacy
                  </h2>
                  <p>
                    FollowCheck is not directed to children under the minimum age required by applicable local law to independently consent to using online services (for example, under 13 in the United States or under 16 in parts of the European Union). We do not knowingly collect, request, or maintain data from children.
                  </p>
                </article>

                {/* 14. International Users */}
                <article id="international-users" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    14. International Users
                  </h2>
                  <p>
                    FollowCheck can be accessed globally. Because the analysis runs locally within your Chrome browser context, your data is processed where your computer is situated. By accessing the website or installing the extension, you acknowledge that server logs related to website visits are stored on servers that may be located outside of your home country.
                  </p>
                </article>

                {/* 15. Third-Party Services */}
                <article id="third-party-services" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    15. Third-Party Services
                  </h2>
                  <p>
                    FollowCheck functions in relation to your Instagram profile, but we do not run, maintain, or control Instagram or Meta Platforms, Inc. Your use of Instagram services is governed solely by Instagram's own Terms of Use and Privacy Policy. We recommend reading those documents to understand how Meta manages your profile data.
                  </p>
                </article>

                {/* 16. Changes to This Privacy Policy */}
                <article id="changes" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    16. Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may update our Privacy Policy to reflect shifts in product features, security practices, or regulatory requirements. Any modifications will be declared by updating the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed.
                  </p>
                </article>

                {/* 17. Contact Us */}
                <article id="contact-us" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    17. Contact Us
                  </h2>
                  <p>
                    If you have any questions, feedback, or concerns regarding your privacy or this policy, please contact us by visiting our <a href="/contact" className="text-electric font-bold hover:underline">Contact Page</a>.
                  </p>
                </article>

              </div>
              
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
