import { toolPages } from "@/data/tools";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOLinks from "@/components/SEOLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Connection Auditing Utilities Directory | WhoFollowsBack",
  description: "Browse our specialized local relationship checker landing tools. Find mutuals, list non-followers, and optimize account ratios safely.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ label: "Tools", href: "/tools" }]} />

          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl mb-4">
              Instagram Auditing Tools
            </h1>
            <p className="text-lg text-navy/70 max-w-3xl leading-relaxed">
              Explore our collection of local browser-level relationship checkers. Audit your profile, manage non-followers, and find mutual connections securely.
            </p>
          </div>

          {/* Tools Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {toolPages.map((tool) => (
              <div 
                key={tool.slug}
                className="p-6 rounded-2xl border border-navy/5 bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <h2 className="text-xl font-bold text-navy group-hover:text-electric transition-colors mb-3 leading-snug">
                    <Link href={`/tools/${tool.slug}`}>
                      {tool.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-navy/60 leading-relaxed mb-6">
                    {tool.metaDescription}
                  </p>
                </div>
                <div>
                  <Link 
                    href={`/tools/${tool.slug}`}
                    className="text-xs font-bold text-electric hover:underline flex items-center gap-1"
                  >
                    Open Utility Landing Page &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <SEOLinks />
      <Footer />
    </>
  );
}
