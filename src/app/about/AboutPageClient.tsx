"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, ArrowRight, ShieldCheck, HelpCircle, Layers, Lock, AlertCircle } from "lucide-react";

export default function AboutPageClient() {
  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-transparent selection:bg-electric/10 selection:text-electric">
        
        {/* HERO SECTION */}
        <section className="relative px-4 py-20 text-center sm:px-6 lg:px-8 bg-transparent border-b border-navy/5">
          <div className="mx-auto max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-electric animate-fade-in">
              <Layers className="h-3.5 w-3.5" />
              About FollowCheck
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy text-glow-navy sm:text-5xl md:text-6xl animate-fade-up">
              Instagram Connections <br />
              <span className="text-electric text-glow-electric">Should Be Easier to Understand.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-navy/60 animate-fade-up">
              FollowCheck is built to make follower and following relationships easier to understand without turning a simple question into a complicated analytics dashboard.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/#cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-electric text-sm font-bold text-white hover:bg-electric/95 active:scale-98 transition-all shadow-sm"
              >
                Check My Followers
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-navy/15 text-sm font-bold text-navy hover:bg-navy/5 active:scale-98 transition-all"
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* OUR PURPOSE */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-electric bg-electric/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                One Simple Question.
              </h2>
            </div>
            
            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-electric max-w-2xl mx-auto leading-tight italic">
              “Who do I follow that doesn't follow me back?”
            </p>
            
            <p className="max-w-2xl mx-auto text-sm sm:text-base font-medium leading-relaxed text-navy/65">
              Finding the answer should not require a confusing dashboard or handing your Instagram password to an unknown website. FollowCheck focuses on making connection analysis simple, understandable, and privacy-conscious.
            </p>
          </div>
        </section>

        {/* WHY FOLLOWCHECK CARDS */}
        <section className="py-20 sm:py-24 bg-white/40 border-y border-navy/5 backdrop-blur-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-electric bg-electric/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
                Product Core
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Built Around Simplicity.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-2xl border border-navy/5 bg-white space-y-4 hover:shadow-[0_4px_20px_rgba(11,18,32,0.02)] transition-shadow">
                <div className="h-10 w-10 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy">SIMPLE</h3>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-navy/60">
                  Clear results organized into understandable categories. No bloated settings, charts, or unnecessary features.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-2xl border border-navy/5 bg-white space-y-4 hover:shadow-[0_4px_20px_rgba(11,18,32,0.02)] transition-shadow">
                <div className="h-10 w-10 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy">PRIVATE BY DESIGN</h3>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-navy/60">
                  The product architecture prioritizes local browser analysis. Your follower lists are computed in your browser sandbox and never sent to our servers.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-2xl border border-navy/5 bg-white space-y-4 hover:shadow-[0_4px_20px_rgba(11,18,32,0.02)] transition-shadow">
                <div className="h-10 w-10 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy">FOCUSED</h3>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-navy/60">
                  FollowCheck does one primary job instead of trying to become a bloated social media analytics or engagement platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT FOLLOWCHECK SHOWS */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-electric bg-electric/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
                Categories
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                What FollowCheck Shows
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category Card 1 */}
              <div className="p-8 rounded-2xl border border-navy/5 bg-white/70 space-y-3">
                <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Category A</span>
                <h3 className="text-lg font-extrabold text-navy">Don't Follow Back</h3>
                <p className="text-xs sm:text-sm font-semibold leading-relaxed text-navy/60">
                  People you follow who are not identified as following you back in the completed local analysis.
                </p>
              </div>

              {/* Category Card 2 */}
              <div className="p-8 rounded-2xl border border-navy/5 bg-white/70 space-y-3">
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Category B</span>
                <h3 className="text-lg font-extrabold text-navy">Mutual Followers</h3>
                <p className="text-xs sm:text-sm font-semibold leading-relaxed text-navy/60">
                  Connections where both accounts are identified as following each other in the scan results.
                </p>
              </div>

              {/* Category Card 3 */}
              <div className="p-8 rounded-2xl border border-navy/5 bg-white/70 space-y-3">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Category C</span>
                <h3 className="text-lg font-extrabold text-navy">You Don't Follow Back</h3>
                <p className="text-xs sm:text-sm font-semibold leading-relaxed text-navy/60">
                  People identified as following you that you do not currently follow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="py-20 sm:py-24 bg-white/40 border-y border-navy/5 backdrop-blur-xs">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-electric bg-electric/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
                Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Less Complexity. More Clarity.
              </h2>
            </div>
            
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-navy/65 max-w-2xl mx-auto">
              FollowCheck is designed as a focused browser utility. We prioritize clear instructions, understandable results, and minimal product complexity. 
            </p>
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-navy/65 max-w-2xl mx-auto">
              The product operates client-side inside your own browser window. Because of this local design, **FollowCheck does not require you to enter your Instagram password** or login details into the FollowCheck website or extension.
            </p>

            {/* Subtle Independence warning */}
            <div className="mx-auto max-w-md p-4 rounded-xl border border-navy/5 bg-white flex items-start gap-3 text-left">
              <AlertCircle className="h-5 w-5 text-electric shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-navy">Independent Product</h4>
                <p className="text-[11px] font-medium leading-relaxed text-navy/60 mt-1">
                  FollowCheck is an independent product and is not affiliated with, endorsed by, or sponsored by Instagram or Meta Platforms, Inc.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-20 sm:py-24 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              See Your Connections More Clearly.
            </h2>
            <p className="mx-auto max-w-xl text-sm sm:text-base font-semibold leading-relaxed text-navy/60">
              Open Instagram, launch FollowCheck, and analyze your follower relationships.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/#cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-electric text-sm font-bold text-white hover:bg-electric/95 active:scale-98 transition-all shadow-sm"
              >
                Start Free Scan
              </a>
              <a
                href="/how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-navy/15 text-sm font-bold text-navy hover:bg-navy/5 active:scale-98 transition-all"
              >
                How It Works
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
