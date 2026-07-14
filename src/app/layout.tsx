import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://followcheck.com"),
  title: "Who Doesn't Follow Me Back on Instagram? | FollowCheck",
  description: "See who doesn't follow you back on Instagram. Find non-followers, mutuals, and more with a simple privacy-first follower checker.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Who Doesn't Follow Me Back on Instagram? | FollowCheck",
    description: "See who doesn't follow you back on Instagram. Find non-followers, mutuals, and more with a simple privacy-first follower checker.",
    url: "https://followcheck.com",
    siteName: "FollowCheck",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Doesn't Follow Me Back on Instagram? | FollowCheck",
    description: "See who doesn't follow you back on Instagram. Find non-followers, mutuals, and more with a simple privacy-first follower checker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data configurations
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FollowCheck",
    "url": "https://followcheck.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://followcheck.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is FollowCheck free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FollowCheck is completely free to use. There are no hidden fees, subscriptions, or premium tiers for the core follower scanning features."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to enter my Instagram password?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. FollowCheck runs as a Chrome extension and operates on your active browser session. We never ask for, collect, or store your Instagram password."
        }
      },
      {
        "@type": "Question",
        "name": "Does FollowCheck store my followers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, your data is processed locally in your browser. We do not run databases to collect your followers or account details. Your lists stay entirely on your device."
        }
      },
      {
        "@type": "Question",
        "name": "Can I see who doesn't follow me back?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Once the scan is complete, FollowCheck will list everyone you follow who doesn't follow you back, as well as mutual connections and accounts you forgot to follow back."
        }
      },
      {
        "@type": "Question",
        "name": "Does this work with private Instagram accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Since the extension runs locally in your own browser session, it can analyze connections for private accounts that you have access to. It cannot view private accounts you do not follow."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an analysis take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, it takes less than a minute. The speed depends on the total number of connections (followers and followings) on your profile, as we throttle requests slightly to respect Instagram's rate limits."
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans relative overflow-x-hidden bg-grid-pattern">
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TLGF9JDJLF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TLGF9JDJLF');
          `}
        </Script>

        {/* Ambient background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="orb-glow-1" />
          <div className="orb-glow-2" />
          <div className="orb-glow-3" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-full w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
