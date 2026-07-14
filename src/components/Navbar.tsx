"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/5 bg-soft-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a 
          href="/" 
          className="text-2xl sm:text-3xl font-black tracking-tight text-navy hover:opacity-90 transition-opacity"
        >
          FollowCheck
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-semibold text-navy/70 hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/#cta"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-electric px-6 text-sm font-bold text-white shadow-sm hover:bg-electric/95 active:scale-98 transition-all duration-150"
          >
            Check My Followers
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="/#cta"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-electric px-4 text-xs font-bold text-white shadow-xs hover:bg-electric/95 active:scale-98 transition-all"
          >
            Check
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-navy/80 hover:text-navy hover:bg-navy/5 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-navy/5 bg-soft-white animate-fade-in">
          <nav className="flex flex-col gap-4 px-4 py-6 border-t border-navy/5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-navy/85 hover:text-navy py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#cta"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-electric text-sm font-semibold text-white shadow-sm hover:bg-electric/95 transition-all text-center w-full"
            >
              Check My Followers
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
