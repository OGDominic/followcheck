import type { Metadata } from "next";
import HowWorksPageClient from "./HowWorksPageClient";

export const metadata: Metadata = {
  title: "How to Check Who Doesn't Follow You Back on Instagram | FollowCheck",
  description: "Learn how to use FollowCheck to find people who don't follow you back on Instagram. Follow our simple step-by-step guide. No Instagram password required.",
  keywords: [
    "how to check who doesn't follow you back on instagram",
    "unfollowers on instagram",
    "instagram unfollower guide",
    "how to see who unfollowed you on instagram",
    "instagram follower analysis steps"
  ],
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How to Check Who Doesn't Follow You Back on Instagram | FollowCheck",
    description: "Learn how to use FollowCheck to find people who don't follow you back on Instagram. Follow our simple step-by-step guide. No Instagram password required.",
    url: "https://followcheck.com/how-it-works",
    siteName: "FollowCheck",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Check Who Doesn't Follow You Back on Instagram | FollowCheck",
    description: "Learn how to use FollowCheck to find people who don't follow you back on Instagram. Follow our simple step-by-step guide. No Instagram password required.",
  },
};

export default function HowItWorksPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check Who Doesn't Follow You Back on Instagram",
    "description": "Learn how to use FollowCheck to find who doesn't follow you back on Instagram in 6 easy, password-free steps.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Open Instagram and Sign In",
        "text": "Open Instagram in a new tab in your Google Chrome browser and make sure you are signed in to the account you want to analyze.",
        "url": "https://followcheck.com/how-it-works#step-1"
      },
      {
        "@type": "HowToStep",
        "name": "Install the FollowCheck Extension",
        "text": "Go to the Chrome Web Store, download and install the FollowCheck extension, and pin it to your toolbar.",
        "url": "https://followcheck.com/how-it-works#step-2"
      },
      {
        "@type": "HowToStep",
        "name": "Open the Extension",
        "text": "Click on the FollowCheck extension icon in your Chrome toolbar. The sidebar panel will open next to your active Instagram page.",
        "url": "https://followcheck.com/how-it-works#step-3"
      },
      {
        "@type": "HowToStep",
        "name": "Click 'Analyze My Account'",
        "text": "Read the privacy policy details and click on the 'Analyze My Account' button to start checking followers.",
        "url": "https://followcheck.com/how-it-works#step-4"
      },
      {
        "@type": "HowToStep",
        "name": "Keep the Instagram Tab Open",
        "text": "Wait for the extension to complete scanning. Avoid refreshing or closing the Instagram tab to prevent stopping the scan.",
        "url": "https://followcheck.com/how-it-works#step-5"
      },
      {
        "@type": "HowToStep",
        "name": "View Your Results",
        "text": "View your follower relationships, including mutual connections, non-followers, and people you forgot to follow back.",
        "url": "https://followcheck.com/how-it-works#step-6"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HowWorksPageClient />
    </>
  );
}
