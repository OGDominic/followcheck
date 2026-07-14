"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Shield, AlertTriangle, ArrowRight, MessageSquare, Info } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

export default function ContactPageClient() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "demo">("idle");

  const categories = [
    { title: "Product Support", desc: "Having trouble using FollowCheck or completing an analysis?", icon: MessageSquare },
    { title: "Privacy", desc: "Questions about information handling or local analysis?", icon: Shield },
    { title: "Bug Report", desc: "Found something that is not working correctly in the extension?", icon: AlertTriangle },
    { title: "General Feedback", desc: "Have an idea, suggestion, or comment for FollowCheck?", icon: Mail },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    // Clear error dynamically
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!form.topic) tempErrors.topic = "Please select a topic";
    
    if (!form.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid! Set status to demo mode as required
      // TODO: Configure a real form delivery provider (e.g. Formspree, Web3Forms, Vercel Serverless Function) before production.
      setSubmissionStatus("demo");
    }
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-transparent selection:bg-electric/10 selection:text-electric">
        
        {/* HERO SECTION */}
        <section className="relative px-4 py-16 text-center sm:px-6 lg:px-8 bg-transparent border-b border-navy/5">
          <div className="mx-auto max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-electric">
              Support
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              How Can We Help?
            </h1>
            <p className="mx-auto max-w-xl text-sm sm:text-base font-semibold leading-relaxed text-navy/60">
              Have a question, found a problem, or want to share feedback? Get in touch with FollowCheck.
            </p>
          </div>
        </section>

        {/* CONTACT PAGE MAIN BODY */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Categories and Info */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold tracking-tight text-navy">
                    Contact Channels
                  </h2>
                  <p className="text-sm font-medium text-navy/65">
                    Select a topic and fill out the contact form. We review messages and respond when appropriate.
                  </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categories.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                      <div key={idx} className="p-5 rounded-xl border border-navy/5 bg-white/70 space-y-2">
                        <div className="h-8 w-8 rounded-lg bg-electric/10 text-electric flex items-center justify-center">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="text-xs font-bold text-navy uppercase tracking-wider">{cat.title}</h3>
                        <p className="text-[11px] font-medium leading-relaxed text-navy/60">{cat.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* FAQ / Troubleshooting card */}
                <div className="p-6 rounded-2xl border border-electric/15 bg-electric/5 space-y-4">
                  <h3 className="text-sm font-bold text-navy">Looking for a quick answer?</h3>
                  <p className="text-xs font-medium text-navy/65 leading-relaxed">
                    Check our How It Works guide and troubleshooting section. Most setup, permission, and connection state questions are answered there.
                  </p>
                  <a
                    href="/how-it-works"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-electric hover:underline"
                  >
                    View How It Works
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7 bg-white/60 backdrop-blur-xs border border-navy/5 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs">
                <h2 className="text-xl font-extrabold tracking-tight text-navy mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-navy/85">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      autoComplete="name"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-navy focus:outline-hidden focus:border-electric transition-colors ${
                        errors.name ? "border-rose-500 focus:border-rose-500" : "border-navy/10"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs font-bold text-rose-500 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-navy/85">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-navy focus:outline-hidden focus:border-electric transition-colors ${
                        errors.email ? "border-rose-500 focus:border-rose-500" : "border-navy/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs font-bold text-rose-500 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Topic dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="topic" className="text-xs font-bold text-navy/85">
                      Topic <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={form.topic}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-navy focus:outline-hidden focus:border-electric transition-colors ${
                        errors.topic ? "border-rose-500 focus:border-rose-500" : "border-navy/10"
                      }`}
                    >
                      <option value="">Select a topic...</option>
                      <option value="Product Support">Product Support</option>
                      <option value="Privacy Question">Privacy Question</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="General Feedback">General Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.topic && (
                      <p className="text-xs font-bold text-rose-500 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {errors.topic}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-navy/85">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-navy focus:outline-hidden focus:border-electric transition-colors ${
                        errors.message ? "border-rose-500 focus:border-rose-500" : "border-navy/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs font-bold text-rose-500 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submission Alert */}
                  {submissionStatus === "demo" && (
                    <div className="p-4 rounded-xl border border-amber-500/10 bg-amber-500/5 space-y-2">
                      <div className="flex gap-2 items-center text-amber-800 text-xs font-bold">
                        <Info className="h-4 w-4 shrink-0" />
                        Demo Mode Notice
                      </div>
                      <p className="text-[11px] font-semibold leading-relaxed text-navy/70">
                        Contact form is currently in demo mode. A server-side email delivery service has not been configured yet.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-electric text-sm font-bold text-white hover:bg-electric/95 active:scale-98 transition-all text-center cursor-pointer shadow-sm"
                  >
                    Send Message
                  </button>
                </form>

                {/* Privacy and credentials disclaimer */}
                <div className="mt-6 pt-4 border-t border-navy/5 flex gap-2.5">
                  <Info className="h-4 w-4 text-electric shrink-0 mt-0.5" />
                  <p className="text-[11px] font-semibold leading-relaxed text-navy/50">
                    Please do not send your Instagram password, browser cookies, authentication tokens, or other sensitive account credentials. FollowCheck support will never ask you to send your Instagram password through this form.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
