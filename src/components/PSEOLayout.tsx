import { SEOPage } from "../lib/seo-types";
import { generatePageContent } from "../lib/seo-generator";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOLinks from "./SEOLinks";
import Breadcrumbs from "./Breadcrumbs";
import Link from "next/link";
import React from "react";

interface PSEOLayoutProps {
  page: SEOPage;
}

export default function PSEOLayout({ page }: PSEOLayoutProps) {
  const contentHtml = generatePageContent(page);

  // 1. SoftwareApplication Schema for tools/features/comparisons
  const showSoftwareSchema = ['tools', 'features', 'comparisons'].includes(page.category);
  const softwareSchema = showSoftwareSchema ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `FollowCheck - ${page.title}`,
    "operatingSystem": "Chrome OS, Windows, macOS, Linux",
    "applicationCategory": "BrowserApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "installUrl": "https://chromewebstore.google.com/detail/followcheck/ienniibalbkpejfgphanhdnpggpopbme",
    "description": page.description
  } : null;

  // 2. Article Schema for blog/guides/help/resources
  const showArticleSchema = ['blog', 'guides', 'help', 'resources'].includes(page.category);
  const articleSchema = showArticleSchema ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": page.title,
    "description": page.description,
    "datePublished": page.publishDate || "2026-07-19",
    "author": {
      "@type": "Organization",
      "name": "WhoFollowsBack",
      "url": "https://www.whofollowsback.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WhoFollowsBack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.whofollowsback.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.whofollowsback.com/${page.category}/${page.slug}`
    }
  } : null;

  // 3. FAQPage Schema
  const showFaqSchema = page.faqs && page.faqs.length > 0;
  const faqSchema = showFaqSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Get Breadcrumb Directory Name
  const directoryName = page.category.charAt(0).toUpperCase() + page.category.slice(1);

  // Set Default Steps if not specified
  const stepsList = page.steps || [
    { name: "Install Extension", text: "Download FollowCheck from the Chrome Web Store and pin it to your browser header." },
    { name: "Log In On Instagram", text: "Open Instagram.com on your desktop browser. Your session cookies authenticate securely." },
    { name: "Initiate Scan", text: "Open FollowCheck from your toolbar and click 'Analyze My Account' to compile connection reports." }
  ];

  // Set Default Benefits if not specified
  const benefitsList = page.benefits || [
    { title: "Local Encryption Safety", text: "Zero tracking servers or remote logging. All scans run securely on your local desktop browser tab." },
    { title: "Optimized Organic Ratios", text: "Audit ghost followers to improve engagement rates and build algorithmic feed reach." },
    { title: "No Password Verification", text: "Authentication is completed securely using your active browser session cookie details." }
  ];

  return (
    <>
      {/* Schema Script Injections */}
      {softwareSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs 
            items={[
              { label: directoryName, href: `/${page.category}` },
              { label: page.title }
            ]} 
          />

          {/* Hero Section */}
          <section className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold text-electric mb-4 uppercase tracking-wider">
              {page.category}
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl mb-4 leading-tight">
              {page.title}
            </h1>
            <p className="text-base sm:text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
              {page.description}
            </p>
          </section>

          {/* Screenshot Placeholder Graphic */}
          <section className="mb-16 rounded-3xl bg-navy/5 border border-navy/5 p-8 flex items-center justify-center text-center">
            <div className="max-w-md">
              <span className="inline-block text-4xl mb-3">🔍</span>
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">FollowCheck User Interface</h3>
              <p className="text-xs text-navy/50 leading-relaxed">
                The FollowCheck extension fits seamlessly into your Instagram profile tab as a clean, responsive sidebar panel. It operates instantly in a single click.
              </p>
            </div>
          </section>

          {/* How It Works Steps Grid */}
          <section className="mb-16 p-8 rounded-3xl bg-white border border-navy/5 shadow-xs">
            <h2 className="text-2xl font-extrabold text-navy text-center mb-10">
              Audit Instructions: Step-by-Step
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stepsList.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4 relative group">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric text-lg font-bold text-white mb-4 shadow-sm group-hover:scale-105 transition-all">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-navy mb-2">{step.name}</h3>
                  <p className="text-xs text-navy/60 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Content Body (Programmatic Text) */}
          <article className="bg-white p-6 sm:p-10 rounded-3xl border border-navy/5 shadow-xs mb-16">
            <div 
              className="prose prose-navy max-w-none text-navy/80 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>

          {/* Benefits Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-navy text-center mb-10">
              Why FollowCheck is Safest
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-navy/5 shadow-xs">
                  <h3 className="text-base font-bold text-navy mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-electric shrink-0" />
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-navy/60 leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Dynamic FAQ Accordion Grid */}
          {page.faqs && page.faqs.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-extrabold text-navy text-center mb-10">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {page.faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-navy/5 shadow-xs">
                    <h3 className="text-base font-bold text-navy mb-2">{faq.question}</h3>
                    <p className="text-sm text-navy/65 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Conversion CTA Block */}
          <section className="p-10 rounded-3xl bg-navy text-white text-center relative overflow-hidden mb-12">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Protect Your Instagram Account Safety</h2>
              <p className="text-sm text-soft-white/70 mb-6 leading-relaxed">
                Download the FollowCheck Chrome extension to safely run audits, track unfollowers, and clean up your connection list with 100% password security.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://chromewebstore.google.com/detail/followcheck/ienniibalbkpejfgphanhdnpggpopbme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-electric px-8 text-sm font-bold text-white shadow-sm hover:bg-electric/95 transition-all"
                >
                  Download Chrome Extension
                </a>
                <Link 
                  href="/how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-white/10 border border-white/10 px-8 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
      <SEOLinks />
      <Footer />
    </>
  );
}
