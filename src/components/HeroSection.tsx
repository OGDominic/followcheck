import { ArrowRight, Play } from "lucide-react";
import AnalysisPreview from "./AnalysisPreview";
import TrustRow from "./TrustRow";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left animate-fade-up">
            {/* Trust Badge */}
            <div className="inline-flex w-fit items-center rounded-full border border-navy/5 bg-white px-3.5 py-1 text-xs font-semibold tracking-wide text-navy/80 shadow-[0_2px_8px_rgba(11,18,32,0.01)]">
              <span className="mr-1.5 flex h-1.5 w-1.5 rounded-full bg-electric" />
              Free Instagram Follower Checker
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-navy text-glow-navy sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-[1.1]">
              See Who Doesn't <br />
              <span className="text-electric text-glow-electric">Follow You Back.</span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-xl text-base sm:text-lg font-medium text-navy/70 leading-relaxed">
              Find non-followers, mutuals, and people you forgot to follow back. No password required.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#cta"
                className="group inline-flex h-12 items-center justify-center rounded-xl bg-electric px-6 text-sm font-semibold text-white shadow-sm hover:bg-electric/95 active:scale-98 transition-all btn-transition"
              >
                <span>Check My Followers</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="group inline-flex h-12 items-center justify-center rounded-xl border border-navy/10 bg-white px-6 text-sm font-semibold text-navy hover:bg-navy/5 active:scale-98 transition-all"
              >
                <Play className="mr-2 h-3.5 w-3.5 fill-navy/20 text-navy" />
                <span>How It Works</span>
              </a>
            </div>

            {/* Trust Row */}
            <TrustRow />
          </div>

          {/* Right Column - Product Preview Card */}
          <div className="lg:col-span-5 w-full flex justify-center items-center lg:justify-end animate-fade-in [animation-delay:200ms]">
            <AnalysisPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
