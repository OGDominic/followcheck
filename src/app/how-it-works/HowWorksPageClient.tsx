"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DetailedOnboardingGuide from "@/components/DetailedOnboardingGuide";
import { 
  Lock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  ChevronDown,
  ArrowDown
} from "lucide-react";

const ChromeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" x2="12" y1="8" y2="8" />
    <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
    <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
  </svg>
);

export default function HowItWorksPageClient() {
  // Troubleshooting Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "FollowCheck says “Open Instagram”",
      a: "Make sure Instagram is open in a Chrome tab. Refresh the Instagram page, then reopen FollowCheck."
    },
    {
      q: "FollowCheck cannot detect my account",
      a: "Confirm that you are signed in to Instagram in the same Chrome browser where FollowCheck is installed."
    },
    {
      q: "My analysis stopped",
      a: "Keep the Instagram tab open during analysis. If the tab was closed or refreshed, reopen Instagram and restart the analysis."
    },
    {
      q: "My results look incomplete",
      a: "The analysis depends on connection information successfully available during the scan. If a scan is incomplete, restart the analysis and keep Instagram open until it finishes."
    },
    {
      q: "I switched Instagram accounts",
      a: "Clear the previous FollowCheck analysis, refresh Instagram after switching accounts, and start a new analysis."
    },
    {
      q: "How do I remove my saved analysis?",
      a: "Open FollowCheck and select “Clear Analysis.” This removes saved FollowCheck analysis data from the extension's local storage on your browser."
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-transparent selection:bg-electric/10 selection:text-electric">
        
        {/* HERO SECTION */}
        <section className="relative px-4 py-20 text-center sm:px-6 lg:px-8 bg-transparent border-b border-navy/5">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-electric animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              How It Works
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy text-glow-navy sm:text-5xl md:text-6xl animate-fade-up">
              Find Who Doesn't Follow You Back. <br className="hidden sm:inline" />
              <span className="text-electric text-glow-electric">Step by Step.</span>
            </h1>
            <p className="mx-auto max-w-xl text-base sm:text-lg font-medium leading-relaxed text-navy/60 animate-fade-up">
              Follow these simple steps to analyze your Instagram connections securely with FollowCheck.
            </p>
            
            {/* Trust Row */}
            <div className="mx-auto pt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 border-t border-navy/5 max-w-lg text-xs font-bold text-navy/60">
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-electric" />
                No password required
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-electric" />
                Local browser analysis
              </span>
              <span className="flex items-center gap-1.5">
                <ChromeIcon className="h-4 w-4 text-electric" />
                Free to use
              </span>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP ONBOARDING GUIDE */}
        <DetailedOnboardingGuide />

        {/* QUICK START SECTION */}
        <section className="bg-transparent py-16 sm:py-20 md:py-24 border-y border-navy/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                The 30-Second Version
              </h2>
              <p className="mx-auto max-w-xl text-sm sm:text-base font-semibold leading-relaxed text-navy/50">
                A quick overview of the setup flow.
              </p>
            </div>

            {/* Quickstart steps layout */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
              {[
                { step: "1", label: "Open Instagram" },
                { step: "2", label: "Install FollowCheck" },
                { step: "3", label: "Open the extension" },
                { step: "4", label: "Click Analyze My Account" },
                { step: "5", label: "Keep Instagram open" },
                { step: "6", label: "View your results" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-3 relative group">
                  <div className="w-10 h-10 rounded-full bg-electric/10 border border-electric/15 text-xs font-extrabold text-electric flex items-center justify-center">
                    {item.step}
                  </div>
                  <p className="text-xs font-bold text-navy max-w-[110px] leading-relaxed">
                    {item.label}
                  </p>
                  
                  {/* Arrow connections for large screen horizontal flow */}
                  {idx < 5 && (
                    <div className="hidden md:block absolute top-5 -right-3 text-electric/40 text-lg">
                      →
                    </div>
                  )}
                  {/* Arrow connections for mobile flow */}
                  {idx < 5 && (
                    <div className="md:hidden text-electric/40 my-2 text-lg">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TROUBLESHOOTING SECTION */}
        <section id="faq" className="py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Having Trouble?
              </h2>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/60">
                Check these common questions and details if you encounter issues during setup or scanning.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="border border-navy/5 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-navy/10 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-sm sm:text-base font-bold text-navy pr-4">
                        {item.q}
                      </h3>
                      <ChevronDown 
                        className={`h-5 w-5 text-navy/40 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-electric" : ""}`} 
                      />
                    </button>
                    
                    {/* Collapsible panel with standard max-height check */}
                    <div 
                      className={`accordion-content overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-40 border-t border-navy/5" : "max-h-0"
                      }`}
                    >
                      <div className="p-6 text-xs sm:text-sm font-medium leading-relaxed text-navy/70 bg-soft-white/30">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRIVACY EXPLANATION SECTION */}
        <section className="bg-navy text-soft-white py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                What Happens to My Instagram Data?
              </h2>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-soft-white/70">
                FollowCheck is built with a local-first security architecture, meaning your connection files and credentials never leave your browser session.
              </p>
            </div>

            {/* Visual Architecture Diagram */}
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-7 items-center justify-center gap-6 py-8 border-y border-white/10 text-center">
              
              {/* Box 1 */}
              <div className="md:col-span-1 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center items-center">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-soft-white/40">Step 1</span>
                <p className="text-xs font-bold text-white mt-1">Instagram Browser</p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 text-electric flex items-center justify-center font-black">
                <ArrowRight className="h-5 w-5 hidden md:block" />
                <ArrowDown className="h-5 w-5 md:hidden" />
              </div>

              {/* Box 2 */}
              <div className="md:col-span-1 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center items-center">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-soft-white/40">Step 2</span>
                <p className="text-xs font-bold text-white mt-1">FollowCheck Extension</p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 text-electric flex items-center justify-center font-black">
                <ArrowRight className="h-5 w-5 hidden md:block" />
                <ArrowDown className="h-5 w-5 md:hidden" />
              </div>

              {/* Box 3 */}
              <div className="md:col-span-1 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center items-center">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-soft-white/40">Step 3</span>
                <p className="text-xs font-bold text-white mt-1">Local Analysis</p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 text-electric flex items-center justify-center font-black">
                <ArrowRight className="h-5 w-5 hidden md:block" />
                <ArrowDown className="h-5 w-5 md:hidden" />
              </div>

              {/* Box 4 */}
              <div className="md:col-span-1 p-4 rounded-xl bg-electric/25 border border-electric/40 flex flex-col justify-center items-center shadow-xs">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-electric">Results</span>
                <p className="text-xs font-bold text-white mt-1">Your Results</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 text-center text-sm font-medium text-soft-white/85 leading-relaxed">
              <p>
                FollowCheck is designed to process connection analysis within the browser extension. The website should not receive your follower or following lists as part of the local analysis flow.
              </p>
              <ul className="flex flex-col sm:flex-row justify-center items-center gap-y-3 gap-x-8 text-xs font-bold text-soft-white/60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                  We do not ask for your Instagram password.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                  Analysis starts only when you request it.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                  Saved analysis can be cleared from FollowCheck.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="bg-transparent py-20 sm:py-24 md:py-32 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Ready to Check Your Instagram Connections?
            </h2>
            <p className="mx-auto max-w-xl text-sm sm:text-base font-semibold leading-relaxed text-navy/60">
              Open Instagram, launch FollowCheck, and start your analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://chromewebstore.google.com/detail/followcheck/ienniibalbkpejfgphanhdnpggpopbme?authuser=0&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-electric text-sm font-bold text-white hover:bg-electric/95 active:scale-98 transition-all shadow-sm"
              >
                <ChromeIcon className="h-4.5 w-4.5" />
                Add FollowCheck to Chrome
              </a>
              <a
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-navy/15 text-sm font-bold text-navy hover:bg-navy/5 active:scale-98 transition-all"
              >
                Back to Home
              </a>
            </div>

            <p className="text-xs font-bold text-navy/40">
              Free to use • No Instagram password requested
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
