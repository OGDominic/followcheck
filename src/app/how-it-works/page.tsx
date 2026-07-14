import type { Metadata } from "next";
import HowWorksPageClient from "./HowWorksPageClient";

export const metadata: Metadata = {
  title: "How to Check Who Doesn't Follow You Back on Instagram | FollowCheck",
  description: "Learn how to use FollowCheck to find people who don't follow you back on Instagram. Follow our simple step-by-step guide. No Instagram password required.",
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
  return <HowWorksPageClient />;
}
