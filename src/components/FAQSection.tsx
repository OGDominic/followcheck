"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is FollowCheck free?",
      a: "Yes, FollowCheck is completely free to use. There are no hidden fees, subscriptions, or premium tiers for the core follower scanning features.",
    },
    {
      q: "Do I need to enter my Instagram password?",
      a: "No. FollowCheck runs as a Chrome extension and operates on your active browser session. We never ask for, collect, or store your Instagram password.",
    },
    {
      q: "Does FollowCheck store my followers?",
      a: "No, your data is processed locally in your browser. We do not run databases to collect your followers or account details. Your lists stay entirely on your device.",
    },
    {
      q: "Can I see who doesn't follow me back?",
      a: "Yes. Once the scan is complete, FollowCheck will list everyone you follow who doesn't follow you back, as well as mutual connections and accounts you forgot to follow back.",
    },
    {
      q: "Does this work with private Instagram accounts?",
      a: "Yes. Since the extension runs locally in your own browser session, it can analyze connections for private accounts that you have access to. It cannot view private accounts you do not follow.",
    },
    {
      q: "How long does an analysis take?",
      a: "Typically, it takes less than a minute. The speed depends on the total number of connections (followers and followings) on your profile, as we throttle requests slightly to respect Instagram's rate limits.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-transparent py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-bold text-electric bg-electric/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm font-medium text-navy/60">
            Everything you need to know about FollowCheck's security and processing.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-navy/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-navy/10"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-navy font-bold text-base transition-colors hover:text-electric focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-navy/40 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-electric" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  id={`faq-content-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`accordion-content overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 border-t border-navy/5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-6 py-5 text-sm font-medium text-navy/65 leading-relaxed bg-soft-white/30">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
