import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-soft-white border-t border-white/5 py-12 sm:py-16 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-black tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              FollowCheck
            </Link>
            <p className="text-sm text-soft-white/60 max-w-sm leading-relaxed">
              A simple and private way to understand your Instagram connections. Local browser-level scanning ensures security and credentials safety.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-2 text-sm text-soft-white/60">
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Auditing Tools
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-sm text-soft-white/60">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-soft-white/60">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-soft-white/40">
          <div className="space-y-1">
            <p>&copy; {currentYear} FollowCheck. All rights reserved.</p>
            <p className="text-[10px] text-soft-white/35">
              Not affiliated with Instagram or Meta Platforms, Inc.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex h-2 w-2 rounded-full bg-electric" />
            <span className="font-semibold text-soft-white/50">All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
