import { 
  Lock, 
  ShieldCheck, 
  Info, 
  Search, 
  ArrowRight,
  ArrowDown
} from "lucide-react";

const ChromeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" x2="12" y1="8" y2="8" />
    <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
    <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
  </svg>
);

export default function DetailedOnboardingGuide() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 md:py-32 bg-transparent border-y border-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header if rendered on homepage */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-electric">
            Step-By-Step Guide
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How FollowCheck Works
          </h2>
          <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/60">
            Follow these detailed steps to analyze your account connections safely without exposing your password.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-36 md:space-y-48">
          
          {/* STEP 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 lg:pr-6 order-1 lg:order-1">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-2xl font-black text-electric">
                1
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Open Instagram in Google Chrome
              </h3>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/65">
                Open Instagram in Google Chrome on your computer and sign in to the Instagram account you want to analyze. You must remain signed in while FollowCheck analyzes your connections.
              </p>
              <div className="flex gap-3 p-4 rounded-xl border border-navy/5 bg-white/70">
                <Info className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                <p className="text-xs font-semibold leading-relaxed text-navy/70">
                  <strong className="text-navy">Important:</strong> FollowCheck never asks you to type your Instagram password into our website or extension.
                </p>
              </div>
            </div>
            
            {/* Step 1 Illustration */}
            <div className="lg:col-span-6 order-2 lg:order-2">
              <div className="w-full rounded-2xl border border-navy/10 bg-white shadow-lg overflow-hidden select-none hover:shadow-xl transition-shadow duration-300">
                {/* Browser Header */}
                <div className="bg-soft-white border-b border-navy/5 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-navy/10" />
                    <span className="w-3.5 h-3.5 rounded-full bg-navy/10" />
                    <span className="w-3.5 h-3.5 rounded-full bg-navy/10" />
                  </div>
                  <div className="flex-1 bg-white border border-navy/5 rounded-lg py-1 px-3 text-xs text-navy/40 font-semibold text-center max-w-sm mx-auto shadow-xs">
                    instagram.com
                  </div>
                </div>
                {/* Browser Content */}
                <div className="p-6 bg-white min-h-64 flex gap-6">
                  {/* Instagram Sidebar Placeholder */}
                  <div className="w-1/4 border-r border-navy/5 pr-4 space-y-4">
                    <div className="h-4 w-16 bg-navy/15 rounded-md" />
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-navy/5 rounded-md" />
                      <div className="h-2 w-5/6 bg-navy/5 rounded-md" />
                      <div className="h-2 w-4/5 bg-navy/5 rounded-md" />
                    </div>
                  </div>
                  {/* Main Instagram Feed mockup */}
                  <div className="flex-1 space-y-6">
                    {/* Signed-in Account Info */}
                    <div className="flex items-center justify-between pb-4 border-b border-navy/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-electric/15 flex items-center justify-center font-bold text-xs text-electric border border-electric/10">
                          FC
                        </div>
                        <div>
                          <div className="h-3 w-20 bg-navy/80 rounded-md mb-1.5" />
                          <div className="h-2.5 w-28 bg-navy/35 rounded-md" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Signed In
                      </span>
                    </div>
                    {/* Feed items */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-navy/5 rounded-md border border-navy/5" />
                      <div className="aspect-square bg-navy/5 rounded-md border border-navy/5" />
                      <div className="aspect-square bg-navy/5 rounded-md border border-navy/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 lg:pl-6 order-1 lg:order-2">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-2xl font-black text-electric">
                2
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Install the FollowCheck Extension
              </h3>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/65">
                Install the FollowCheck browser extension and pin it to your Chrome toolbar for easy access. After installation, you will see the FollowCheck icon in your browser extensions area.
              </p>
              
              <div className="space-y-3">
                <a
                  href="https://chromewebstore.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-electric text-sm font-bold text-white hover:bg-electric/95 active:scale-98 transition-all shadow-sm"
                >
                  <ChromeIcon className="h-4.5 w-4.5" />
                  Add FollowCheck to Chrome
                </a>
                <p className="text-xs font-semibold text-navy/50">
                  After installation, click the Extensions icon in Chrome and pin FollowCheck.
                </p>
              </div>
            </div>
            
            {/* Step 2 Illustration */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="w-full rounded-2xl border border-navy/10 bg-white shadow-lg overflow-hidden select-none hover:shadow-xl transition-shadow duration-300">
                {/* Browser Toolbar Mockup */}
                <div className="bg-soft-white border-b border-navy/5 px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-navy/10" />
                    <span className="w-3.5 h-3.5 rounded-full bg-navy/10" />
                  </div>
                  {/* Active pinned extension in toolbar */}
                  <div className="flex items-center gap-3 bg-white border border-navy/5 rounded-lg px-3 py-1 shadow-xs">
                    <span className="text-[10px] font-semibold text-navy/50">extensions</span>
                    <div className="h-5 w-0.5 bg-navy/10" />
                    {/* FollowCheck pinned logo */}
                    <div className="flex items-center gap-1.5 font-black text-[11px] text-electric bg-electric/5 px-2 py-0.5 rounded-sm border border-electric/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                      FC
                    </div>
                    {/* Extension puzzle piece */}
                    <svg className="h-4 w-4 text-navy/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                </div>
                {/* Expanded Extensions Popup Menu */}
                <div className="p-6 bg-white min-h-64 flex flex-col justify-center items-center">
                  <div className="w-72 rounded-xl border border-navy/10 shadow-md bg-white overflow-hidden">
                    <div className="bg-soft-white px-3 py-2 border-b border-navy/5 text-left">
                      <span className="text-[11px] font-bold text-navy/70 uppercase tracking-wider">Extensions Menu</span>
                    </div>
                    <div className="p-2 space-y-1 text-left">
                      {/* Other extensions */}
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-navy/5">
                        <span className="text-xs font-semibold text-navy/60">Google Translate</span>
                        <span className="text-xs text-navy/30">📌</span>
                      </div>
                      {/* FollowCheck extension item with active pin */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-electric/5 border border-electric/10">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-electric">FollowCheck</span>
                          <span className="text-[9px] font-bold bg-electric/10 text-electric px-1.5 py-0.5 rounded-sm">0.1.0</span>
                        </div>
                        <button className="text-xs font-bold text-electric px-2 py-1 rounded bg-electric/10 border border-electric/25 hover:bg-electric/20 transition-all flex items-center gap-1">
                          Pinned <span className="text-electric">★</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 lg:pr-6 order-1 lg:order-1">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-2xl font-black text-electric">
                3
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Keep Instagram Open
              </h3>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/65">
                Return to your Instagram tab and keep it open while using FollowCheck. The extension works with the Instagram account currently signed in within your browser.
              </p>
              
              <div className="flex gap-3 p-4 rounded-xl border border-amber-500/10 bg-amber-500/5">
                <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs font-medium text-navy/70 leading-relaxed">
                  <strong className="text-navy font-bold">Want to analyze another Instagram account?</strong>
                  <p className="mt-1">Sign out of Instagram, sign in to the other account, and then restart FollowCheck.</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 Illustration */}
            <div className="lg:col-span-6 order-2 lg:order-2">
              <div className="w-full rounded-2xl border border-navy/10 bg-white shadow-lg overflow-hidden select-none hover:shadow-xl transition-shadow duration-300">
                {/* Browser Tab mock */}
                <div className="bg-soft-white border-b border-navy/5 pt-3 px-4 flex items-end gap-1.5">
                  {/* Active Tab */}
                  <div className="bg-white border-t border-x border-navy/10 rounded-t-lg px-4 py-2 text-xs font-bold text-navy flex items-center gap-2 translate-y-[1px] z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    Instagram (Active)
                  </div>
                  {/* Inactive Tab */}
                  <div className="bg-navy/5 rounded-t-lg px-3 py-1.5 text-[11px] font-semibold text-navy/40 flex items-center gap-1.5 mb-[1px]">
                    Google Search
                  </div>
                </div>
                {/* Browser Window Body showing Sidepanel Open Link */}
                <div className="p-6 bg-white min-h-64 flex gap-4">
                  <div className="flex-1 border border-dashed border-navy/15 rounded-xl p-4 flex flex-col justify-center items-center bg-soft-white/30 text-center">
                    <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-3">
                      <span className="w-4 h-4 rounded-full bg-rose-500" />
                    </div>
                    <p className="text-xs font-bold text-navy">Instagram Feed Screen</p>
                    <p className="text-[10px] text-navy/45 mt-1">Keep this tab active & focused</p>
                  </div>
                  
                  {/* Connecting visual pointer */}
                  <div className="flex flex-col justify-center items-center text-electric">
                    <ArrowRight className="h-6 w-6 animate-pulse hidden lg:block" />
                    <ArrowDown className="h-6 w-6 animate-pulse lg:hidden" />
                  </div>

                  <div className="w-1/3 border-2 border-electric rounded-xl p-4 flex flex-col justify-center items-center bg-electric/5">
                    <div className="w-8 h-8 rounded-full bg-electric/15 flex items-center justify-center mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-electric" />
                    </div>
                    <p className="text-xs font-bold text-electric">FollowCheck</p>
                    <p className="text-[9px] text-electric/70 font-semibold mt-1">Side Panel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 lg:pl-6 order-1 lg:order-2">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-2xl font-black text-electric">
                4
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Click “Analyze My Account”
              </h3>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/65">
                Open FollowCheck from your Chrome toolbar. The FollowCheck side panel will appear beside Instagram. Review the privacy notice and click “Analyze My Account” to start the analysis.
              </p>
              
              <div className="flex gap-3 p-4 rounded-xl border border-navy/5 bg-white/70">
                <Info className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                <p className="text-xs font-semibold leading-relaxed text-navy/70">
                  <strong className="text-navy font-bold">Privacy Note:</strong> Analysis only starts after you click the button. FollowCheck does not automatically scan your account when you open Instagram.
                </p>
              </div>
            </div>
            
            {/* Step 4 Illustration */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="w-full rounded-2xl border border-navy/10 bg-white shadow-lg overflow-hidden select-none hover:shadow-xl transition-shadow duration-300">
                {/* Simulated Extension Side panel */}
                <div className="bg-navy p-4 flex items-center justify-between border-b border-white/5">
                  <span className="text-sm font-black text-white">FollowCheck</span>
                  <span className="text-[9px] bg-electric font-bold text-white px-2 py-0.5 rounded-sm">SIDE PANEL</span>
                </div>
                <div className="p-6 bg-white space-y-6 min-h-64 flex flex-col justify-between">
                  {/* State status card */}
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-navy/5 bg-soft-white/60">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse flex items-center justify-center" />
                    <div>
                      <p className="text-[9px] font-bold text-navy/40 uppercase tracking-wide">Status</p>
                      <p className="text-xs font-bold text-navy">Instagram is ready</p>
                    </div>
                  </div>

                  {/* Local analysis note */}
                  <div className="p-3 bg-electric/5 rounded-lg border border-electric/10 text-center">
                    <p className="text-xs font-semibold leading-relaxed text-navy/80">
                      Analysis runs locally in your browser.
                    </p>
                  </div>

                  {/* Primary Button */}
                  <button className="w-full py-3 px-4 rounded-xl bg-electric text-xs font-bold text-white shadow-xs hover:bg-electric/95 transition-all text-center">
                        Analyze My Account
                  </button>

                  {/* Trust Row */}
                  <div className="flex justify-between items-center text-[9px] font-bold text-navy/45 border-t border-navy/5 pt-4">
                    <span>🔒 No password requested</span>
                    <span>📦 No database</span>
                    <span>💻 Local processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 lg:pr-6 order-1 lg:order-1">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-2xl font-black text-electric">
                5
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Keep Instagram Open During Analysis
              </h3>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/65">
                FollowCheck will analyze the follower and following connection information available during the scan. Keep the Instagram tab open until the analysis finishes. Do not close the Instagram tab or refresh the page while analysis is running.
              </p>
              
              <div className="flex gap-3 p-4 rounded-xl border border-navy/5 bg-white/70">
                <Info className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                <p className="text-xs font-semibold leading-relaxed text-navy/70">
                  <strong className="text-navy font-bold">Please Note:</strong> Scan time may vary depending on the size of your follower and following lists and the information available during the browser session.
                </p>
              </div>
            </div>
            
            {/* Step 5 Illustration */}
            <div className="lg:col-span-6 order-2 lg:order-2">
              <div className="w-full rounded-2xl border border-navy/10 bg-white shadow-lg overflow-hidden select-none hover:shadow-xl transition-shadow duration-300">
                <div className="bg-navy p-4 flex items-center justify-between border-b border-white/5">
                  <span className="text-sm font-black text-white">Analyzing Connections</span>
                  <span className="text-[10px] text-soft-white/60 animate-pulse font-bold">Scanning...</span>
                </div>
                <div className="p-6 bg-white space-y-6 min-h-64 flex flex-col justify-between">
                  {/* Scanning lists stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3.5 border border-navy/5 bg-soft-white/60 rounded-xl">
                      <span className="text-xs font-bold text-navy/75">Followers</span>
                      <span className="text-xs font-extrabold text-electric">2,431 scanned</span>
                    </div>
                    <div className="flex justify-between items-center p-3.5 border border-navy/5 bg-soft-white/60 rounded-xl">
                      <span className="text-xs font-bold text-navy/75">Following</span>
                      <span className="text-xs font-extrabold text-electric">821 scanned</span>
                    </div>
                  </div>

                  {/* Pulse animated progress bar */}
                  <div className="w-full bg-navy/5 h-2.5 rounded-full overflow-hidden">
                    <div className="h-full bg-electric rounded-full w-2/3 animate-pulse" />
                  </div>

                  {/* Warning notice */}
                  <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg text-center">
                    <p className="text-[11px] font-bold text-amber-800">
                      Keep Instagram open while analysis is running.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 6 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 lg:pl-6 order-1 lg:order-2">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-2xl font-black text-electric">
                6
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                View Your Results
              </h3>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/65">
                When the analysis is complete, FollowCheck organizes your Instagram connections into three simple categories.
              </p>

              {/* 3 Result cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-navy/5 bg-white space-y-1.5 shadow-xs">
                  <p className="text-xs font-extrabold text-rose-600 uppercase tracking-wider">Don't Follow Back</p>
                  <p className="text-[11px] font-medium leading-normal text-navy/70">
                    People you follow who are not identified as following you back in the completed analysis.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-navy/5 bg-white space-y-1.5 shadow-xs">
                  <p className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">Mutual Followers</p>
                  <p className="text-[11px] font-medium leading-normal text-navy/70">
                    People where both accounts follow each other.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-navy/5 bg-white space-y-1.5 shadow-xs">
                  <p className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">You Don't Follow</p>
                  <p className="text-[11px] font-medium leading-normal text-navy/70">
                    People identified as following you that you do not currently follow.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 6 Illustration */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="w-full rounded-2xl border border-navy/10 bg-white shadow-lg overflow-hidden select-none hover:shadow-xl transition-shadow duration-300">
                <div className="bg-navy p-3 flex justify-between items-center text-white text-[11px] font-bold">
                  <span>Example analysis preview</span>
                  <span className="opacity-65">Done</span>
                </div>
                <div className="p-4 bg-white space-y-4">
                  {/* Category Switch Tabs Mockup */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 border border-electric bg-electric/5 rounded-lg text-center">
                      <p className="text-sm font-black text-electric">243</p>
                      <p className="text-[9px] font-bold text-electric">Don't Follow Back</p>
                    </div>
                    <div className="p-2 border border-navy/5 bg-soft-white rounded-lg text-center">
                      <p className="text-sm font-black text-navy/70">891</p>
                      <p className="text-[9px] font-bold text-navy/40">Mutuals</p>
                    </div>
                    <div className="p-2 border border-navy/5 bg-soft-white rounded-lg text-center">
                      <p className="text-sm font-black text-navy/70">102</p>
                      <p className="text-[9px] font-bold text-navy/40">You Don't</p>
                    </div>
                  </div>

                  {/* Search Connections input */}
                  <div className="relative">
                    <Search className="h-3.5 w-3.5 text-navy/35 absolute left-3 top-2.5" />
                    <div className="w-full border border-navy/10 rounded-lg py-2 pl-9 pr-3 text-xs text-navy/35 bg-soft-white/40">
                      Search connections...
                    </div>
                  </div>

                  {/* Users rows list */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg border border-navy/5 bg-white">
                      <div className="w-8 h-8 rounded-full bg-rose-500/10 text-xs font-bold text-rose-600 flex items-center justify-center">
                        AT
                      </div>
                      <div>
                        <p className="text-xs font-bold text-navy">alice_travels</p>
                        <p className="text-[10px] text-navy/40">Alice Smith</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg border border-navy/5 bg-white">
                      <div className="w-8 h-8 rounded-full bg-rose-500/10 text-xs font-bold text-rose-600 flex items-center justify-center">
                        FD
                      </div>
                      <div>
                        <p className="text-xs font-bold text-navy">fitness_dan</p>
                        <p className="text-[10px] text-navy/40">Dan Johnson</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 7 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 lg:pr-6 order-1 lg:order-1">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-2xl font-black text-electric">
                7
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Review and Clear Your Analysis
              </h3>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/65">
                Use the result filters and search field to review your analyzed connections. When you are finished, you can select “Clear Analysis” to remove the saved analysis information from the FollowCheck extension's local storage.
              </p>
              
              <div className="flex gap-3 p-4 rounded-xl border border-navy/5 bg-white/70">
                <Info className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                <p className="text-xs font-semibold leading-relaxed text-navy/70">
                  <strong className="text-navy font-bold">Privacy Note:</strong> Clearing your analysis removes the stored analysis data used by FollowCheck on your device. This does not delete any information from Instagram.
                </p>
              </div>
            </div>
            
            {/* Step 7 Illustration */}
            <div className="lg:col-span-6 order-2 lg:order-2">
              <div className="w-full rounded-2xl border border-navy/10 bg-white shadow-lg overflow-hidden select-none hover:shadow-xl transition-shadow duration-300 relative min-h-72 flex flex-col">
                {/* Inner mock header */}
                <div className="bg-navy p-3 flex justify-between items-center text-white text-[11px] font-bold border-b border-white/5">
                  <span>FollowCheck Options</span>
                  <button className="text-[10px] bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded-sm">Settings</button>
                </div>
                {/* Mock Action Section */}
                <div className="p-6 bg-white space-y-4 flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between p-3.5 border border-navy/5 bg-soft-white rounded-lg">
                    <span className="text-xs font-semibold text-navy/70">Analysis storage details</span>
                    <button className="px-3.5 py-1.5 text-xs font-bold text-rose-600 bg-rose-500/10 border border-rose-200 rounded-lg hover:bg-rose-500/15">
                      Clear Analysis
                    </button>
                  </div>
                </div>

                {/* Modal Overlay Confirmation */}
                <div className="absolute inset-0 bg-navy/40 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="w-72 bg-white rounded-xl border border-navy/10 shadow-lg p-5 text-left">
                    <h4 className="text-sm font-black text-navy mb-1">Clear analysis?</h4>
                    <p className="text-xs text-navy/60 leading-relaxed mb-4">
                      This removes the saved FollowCheck analysis from this browser.
                    </p>
                    <div className="flex justify-end gap-2.5">
                      <button className="px-3.5 py-1.5 border border-navy/10 rounded-lg text-xs font-bold text-navy/60 hover:bg-navy/5">
                        Cancel
                      </button>
                      <button className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-rose-600 hover:bg-rose-650 shadow-sm">
                        Clear Analysis
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
