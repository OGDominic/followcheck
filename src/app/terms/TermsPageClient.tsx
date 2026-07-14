"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPageClient() {
  const sections = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "about", label: "2. About FollowCheck" },
    { id: "eligibility", label: "3. Eligibility" },
    { id: "permitted-use", label: "4. Permitted Use" },
    { id: "user-responsibilities", label: "5. User Responsibilities" },
    { id: "instagram-services", label: "6. Instagram & Third-Party Services" },
    { id: "analysis-results", label: "7. Analysis Results" },
    { id: "prohibited-use", label: "8. Prohibited Use" },
    { id: "browser-extension", label: "9. Browser Extension" },
    { id: "intellectual-property", label: "10. Intellectual Property" },
    { id: "availability", label: "11. Availability and Changes" },
    { id: "disclaimer", label: "12. Disclaimer of Warranties" },
    { id: "limitation", label: "13. Limitation of Liability" },
    { id: "indemnity", label: "14. Indemnity" },
    { id: "termination", label: "15. Termination" },
    { id: "governing-law", label: "16. Governing Law" },
    { id: "changes", label: "17. Changes to These Terms" },
    { id: "contact", label: "18. Contact" }
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
              Terms of Use
            </h1>
            <p className="mx-auto max-w-xl text-sm sm:text-base font-semibold leading-relaxed text-navy/60">
              These terms govern your use of the FollowCheck website and browser extension.
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
              
              {/* Sticky Table of Contents */}
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
                
                {/* 1. Acceptance of Terms */}
                <article id="acceptance" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing our website or downloading, installing, and using the FollowCheck browser extension, you agree to comply with and be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the website or install our browser extension.
                  </p>
                </article>

                {/* 2. About FollowCheck */}
                <article id="about" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    2. About FollowCheck
                  </h2>
                  <p>
                    FollowCheck is a browser-based utility designed to help users analyze follower and following relationships associated with their Instagram accounts. The analysis runs client-side in the user's browser sandbox, operates using the user's current session credentials, and is transferred locally to the FollowCheck website results page (/results) for presentation using secure origin-validated browser messaging.
                  </p>
                  <p className="font-bold text-navy">
                    FollowCheck is an independent product and is not affiliated with, endorsed by, or sponsored by Instagram, Meta Platforms, Inc., or any of their parent companies or subsidiaries.
                  </p>
                </article>

                {/* 3. Eligibility */}
                <article id="eligibility" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    3. Eligibility
                  </h2>
                  <p>
                    You must be at least the age of majority in your jurisdiction of residence to agree to these Terms. If you are under the minimum age required by applicable law to independently consent to using online services, you are not permitted to use FollowCheck.
                  </p>
                </article>

                {/* 4. Permitted Use */}
                <article id="permitted-use" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    4. Permitted Use
                  </h2>
                  <p>
                    FollowCheck is provided solely for your personal, non-commercial, and lawful use. Subject to your strict compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to visit the website and install a copy of the extension in your personal web browser.
                  </p>
                </article>

                {/* 5. User Responsibilities */}
                <article id="user-responsibilities" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    5. User Responsibilities
                  </h2>
                  <p>
                    As a user of FollowCheck, you acknowledge and agree that:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You are entirely responsible for your actions and use of FollowCheck.</li>
                    <li>You remain responsible for the security and maintenance of your Instagram account.</li>
                    <li>You will comply with all applicable local, national, and international laws when using the service.</li>
                    <li>You will comply with all terms, guidelines, and policies applicable to your Instagram account, including Instagram's own Community Guidelines and Terms of Use.</li>
                    <li>You will carefully review analysis results before taking any actions on your Instagram profile.</li>
                  </ul>
                </article>

                {/* 6. Instagram and Third-Party Services */}
                <article id="instagram-services" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    6. Instagram and Third-Party Services
                  </h2>
                  <p>
                    FollowCheck interfaces with the Instagram web interface to parse follower data on your behalf. FollowCheck does not control, run, or manage Instagram.
                  </p>
                  <p>
                    Instagram may make technical alterations, block accesses, change layout elements, or modify terms of service at any time without warning. Such changes can directly impact, break, or disable the functions of the FollowCheck browser extension. We make no guarantees of permanent compatibility or seamless interoperability with Instagram.
                  </p>
                </article>

                {/* 7. Analysis Results */}
                <article id="analysis-results" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    7. Analysis Results
                  </h2>
                  <p className="font-bold text-navy">
                    Important Disclaimer Regarding Connection Data:
                  </p>
                  <p>
                    Analysis results are generated strictly from the follower/following information available in your browser tab during the manual scan. Follower relationships may change during or after a scan. Technical limitations, rate limiting, or layout updates by Instagram may affect the completeness or validity of the scan.
                  </p>
                  <p>
                    <strong>FollowCheck does not guarantee that every analysis result will always be 100% complete, current, accurate, or error-free.</strong> You should review the results independently before making profile management decisions, such as unfollowing or following specific accounts.
                  </p>
                </article>

                {/* 8. Prohibited Use */}
                <article id="prohibited-use" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    8. Prohibited Use
                  </h2>
                  <p>
                    You agree not to engage in any of the following prohibited behaviors:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Using FollowCheck for any unlawful purpose or to promote illegal activities.</li>
                    <li>Attempting to bypass, disable, or interfere with security features of FollowCheck.</li>
                    <li>Reverse engineering, decompiling, or attempting to extract the extension source code, except where such restriction is prohibited by law.</li>
                    <li>Using automated scripts, scraping bots, or tools to request connection details from our site or extension in a malicious or high-velocity manner.</li>
                    <li>Using FollowCheck to harass, stalk, threaten, or violate the legal rights of other individuals.</li>
                    <li>Falsely representing or implying that you are associated with, sponsored by, or endorsed by FollowCheck.</li>
                  </ul>
                </article>

                {/* 9. Browser Extension */}
                <article id="browser-extension" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    9. Browser Extension
                  </h2>
                  <p>
                    The FollowCheck extension requires permission declarations (such as local storage and side panel usage) to process follower lists locally. You may inspect permissions through your Google Chrome extensions dashboard. You can uninstall and remove FollowCheck from your browser at any time, which deletes all local sandbox cache data immediately.
                  </p>
                </article>

                {/* 10. Intellectual Property */}
                <article id="intellectual-property" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    10. Intellectual Property
                  </h2>
                  <p>
                    All rights, title, and interest in and to FollowCheck (including the FollowCheck name, logos, website layout, original text, user interface components, and source code) are owned by and remain the exclusive property of FollowCheck and its developers. 
                  </p>
                  <p>
                    We do not claim ownership of Instagram trademarks, logos, brand names, or user profiles. All third-party trademarks referenced on our site are the property of their respective owners.
                  </p>
                </article>

                {/* 11. Availability and Changes */}
                <article id="availability" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    11. Availability and Changes
                  </h2>
                  <p>
                    FollowCheck is provided on an "as-is" and "as-available" basis. We reserve the right to change, suspend, update, or discontinue the website or extension features at any time, for any reason, and without notice or liability to you.
                  </p>
                </article>

                {/* 12. Disclaimer of Warranties */}
                <article id="disclaimer" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    12. Disclaimer of Warranties
                  </h2>
                  <p className="uppercase text-navy font-bold text-xs sm:text-sm tracking-wide">
                    FOLLOWCHECK IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ACCURATE, OR ERROR-FREE.
                  </p>
                </article>

                {/* 13. Limitation of Liability */}
                <article id="limitation" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    13. Limitation of Liability
                  </h2>
                  <p className="uppercase text-navy font-bold text-xs sm:text-sm tracking-wide">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FOLLOWCHECK OR ITS DEVELOPERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES) ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO, USE OF, OR INABILITY TO ACCESS OR USE THE WEBSITE OR BROWSER EXTENSION.
                  </p>
                </article>

                {/* 14. Indemnity */}
                <article id="indemnity" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    14. Indemnity
                  </h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless FollowCheck and its developers from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your violation of these Terms or your misuse of FollowCheck.
                  </p>
                </article>

                {/* 15. Termination */}
                <article id="termination" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    15. Termination
                  </h2>
                  <p>
                    We reserve the right, without notice and in our sole discretion, to terminate your license to use the extension, block your access to the website, or restrict your future interactions with FollowCheck if you violate these Terms or engage in conduct that we deem harmful to the product or its users.
                  </p>
                </article>

                {/* 16. Governing Law */}
                <article id="governing-law" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    16. Governing Law
                  </h2>
                  <p>
                    These Terms, and any dispute or claim arising out of or in connection with them, shall be governed by and construed in accordance with applicable laws, without giving effect to any choice of law rules that would result in the application of the laws of any other jurisdiction.
                  </p>
                  {/*
                    TODO: Confirm governing law and jurisdiction before production legal launch.
                  */}
                </article>

                {/* 17. Changes to These Terms */}
                <article id="changes" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    17. Changes to These Terms
                  </h2>
                  <p>
                    We may revise and update these Terms from time to time. When we do, we will update the "Last updated" date at the top of this page. Your continued use of the website or the browser extension after such updates are published constitutes your acceptance of the revised Terms.
                  </p>
                </article>

                {/* 18. Contact */}
                <article id="contact" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    18. Contact
                  </h2>
                  <p>
                    If you have questions regarding these Terms, please reach out to us by visiting our <a href="/contact" className="text-electric font-bold hover:underline">Contact Page</a>.
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
