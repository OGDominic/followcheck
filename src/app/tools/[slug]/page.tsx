import { toolPages } from "@/data/tools";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOLinks from "@/components/SEOLinks";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return toolPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = toolPages.find((p) => p.slug === slug);
  
  if (!page) {
    return {
      title: "Utility Not Found",
    };
  }

  // Under 55 chars for title and 150 chars for description (standard limits)
  const displayTitle = page.metaTitle.length > 55 ? `${page.metaTitle.slice(0, 52)}...` : page.metaTitle;
  const displayDesc = page.metaDescription.length > 150 ? `${page.metaDescription.slice(0, 147)}...` : page.metaDescription;

  return {
    title: `${displayTitle} | WhoFollowsBack`,
    description: displayDesc,
    alternates: {
      canonical: `/tools/${slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.whofollowsback.com/tools/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    }
  };
}

export default async function ToolLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = toolPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  // JSON-LD SoftwareApplication Schema
  const softwareSchema = {
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
    "description": page.metaDescription
  };

  // JSON-LD FAQ Schema
  const faqSchema = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <main className="flex-grow py-12 bg-soft-white relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs 
            items={[
              { label: "Tools", href: "/tools" },
              { label: page.title }
            ]} 
          />

          {/* Intro Section */}
          <section className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold text-electric mb-4">
              Local Browser Utility
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl mb-4 leading-tight">
              {page.intro.heading}
            </h1>
            <p className="text-lg text-navy/60 font-semibold mb-6">
              {page.intro.subheading}
            </p>
            <p className="text-base text-navy/70 leading-relaxed">
              {page.intro.description}
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-16 p-8 rounded-3xl bg-white border border-navy/5 shadow-xs">
            <h2 className="text-2xl font-extrabold text-navy text-center mb-10">
              {page.howItWorks.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {page.howItWorks.steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center p-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric text-lg font-bold text-white mb-4 shadow-sm">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-navy mb-2">{step.name}</h3>
                  <p className="text-xs text-navy/60 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-navy text-center mb-10">
              {page.benefits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {page.benefits.items.map((benefit, idx) => (
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

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-navy text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {page.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-navy/5 shadow-xs">
                  <h3 className="text-base font-bold text-navy mb-2">{faq.question}</h3>
                  <p className="text-sm text-navy/60 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conversion CTA Block */}
          <section className="p-10 rounded-3xl bg-navy text-white text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Ready to Run Your Connection Audit?</h2>
              <p className="text-sm text-soft-white/70 mb-6 leading-relaxed">
                Download the FollowCheck Chrome extension and analyze your Instagram profile safely, with zero passwords or logs.
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
                  Read Usage Guide
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
