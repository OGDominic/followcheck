import { ArrowRight } from "lucide-react";

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

export default function CTASection() {
  return (
    <section id="cta" className="bg-transparent py-16 sm:py-20 md:py-24 border-t border-navy/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-navy/5 bg-soft-white/60 p-8 sm:p-12 md:p-16 text-center shadow-[0_8px_30px_rgba(11,18,32,0.02)] backdrop-blur-xs">
          {/* Abstract background blobs */}
          <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-electric/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-6 z-10">
            {/* Browser icon badge */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-navy/5 shadow-xs text-electric">
              <ChromeIcon className="h-6 w-6" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Ready to clean up your following list?
            </h2>

            {/* Description */}
            <p className="text-base font-medium text-navy/65 max-w-md mx-auto">
              Find out who doesn't follow you back in just a few clicks. Direct browser-level scanning ensures security.
            </p>

            {/* Button */}
            <div className="pt-2 flex flex-col items-center justify-center">
              <a
                href="https://chromewebstore.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center rounded-xl bg-electric px-8 text-sm font-semibold text-white shadow-md hover:bg-electric/95 active:scale-98 transition-all btn-transition"
              >
                <span>Start Free Scan</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Secondary trust row */}
            <p className="text-xs font-bold tracking-wider text-navy/50 uppercase pt-2">
              Free &bull; No password &bull; Private
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
