import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact FollowCheck",
  description: "Contact FollowCheck for product support, privacy questions, feedback, or general inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact FollowCheck",
    description: "Contact FollowCheck for product support, privacy questions, feedback, or general inquiries.",
    url: "https://followcheck.com/contact",
    siteName: "FollowCheck",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FollowCheck",
    description: "Contact FollowCheck for product support, privacy questions, feedback, or general inquiries.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
