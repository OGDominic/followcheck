"use client";

import { Check, ArrowRight } from "lucide-react";

export default function AnalysisPreview() {
  const stats = [
    {
      count: "243",
      label: "Don't Follow Back",
      color: "border-l-4 border-electric",
      description: "Users who do not follow you back",
    },
    {
      count: "891",
      label: "Mutual Followers",
      color: "border-l-4 border-navy/30",
      description: "You follow each other",
    },
    {
      count: "102",
      label: "You Don't Follow Back",
      color: "border-l-4 border-navy/10",
      description: "Followers you don't follow back",
    },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Abstract background decorative circles */}
      <div className="absolute -top-6 -right-6 h-48 w-48 rounded-full bg-electric/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

      {/* Main card */}
      <div className="relative rounded-2xl border border-navy/5 bg-white p-6 shadow-[0_8px_30px_rgb(11,18,32,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(11,18,32,0.06)]">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-navy/5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-electric animate-pulse" />
              <p className="text-xs font-semibold uppercase tracking-wider text-electric">Extension Preview</p>
            </div>
            <h3 className="mt-0.5 text-base font-bold text-navy">Analysis Complete</h3>
          </div>
          <div className="inline-flex h-8 items-center gap-1 rounded-full bg-electric/10 px-3 text-xs font-semibold text-electric">
            <Check className="h-3.5 w-3.5" />
            <span>Success</span>
          </div>
        </div>

        {/* Stats Rows */}
        <div className="mt-5 space-y-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex items-center justify-between rounded-xl bg-soft-white p-3.5 ${stat.color} transition-all duration-200 hover:translate-x-0.5 hover:bg-soft-white/85`}
            >
              <div>
                <p className="text-xs font-medium text-navy/60">{stat.label}</p>
                <p className="text-2xl font-bold text-navy mt-0.5 tracking-tight">{stat.count}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-navy/30" />
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs font-semibold text-navy/70 mb-2">
            <span>1,236 connections analyzed</span>
            <span>100%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-navy/5 overflow-hidden">
            <div className="h-full w-full rounded-full bg-electric" />
          </div>
        </div>
      </div>
    </div>
  );
}
