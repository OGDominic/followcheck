"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Search, 
  ShieldCheck, 
  AlertCircle, 
  RefreshCw, 
  Trash2, 
  ArrowRight, 
  ExternalLink,
  Sparkles,
  UserCheck,
  UserMinus,
  UserPlus,
  HelpCircle,
  X
} from "lucide-react";

// Safe inline SVG icons to prevent older lucide-react compile errors
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

const LoaderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`animate-spin ${props.className}`}
    {...props}
  >
    <line x1="12" x2="12" y1="2" y2="6" />
    <line x1="12" x2="12" y1="18" y2="22" />
    <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
    <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
    <line x1="2" x2="6" y1="12" y2="12" />
    <line x1="18" x2="22" y1="12" y2="12" />
    <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
    <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
  </svg>
);

interface InstagramConnection {
  id: string;
  username: string;
  fullName: string;
  profileImageUrl: string;
}

interface SanitizedAnalysis {
  accountUsername: string;
  scannedAt: string;
  notFollowingBack: InstagramConnection[];
  mutuals: InstagramConnection[];
  youDontFollowBack: InstagramConnection[];
}

// Reusable Ad Slot components
function AdSlot() {
  // Empty initial state, prepared for future Adsense scripts
  return null;
}

function AdDisclosure() {
  return null;
}

export default function ResultsPageClient() {
  const [pageState, setPageState] = useState<"connecting" | "no_extension" | "no_analysis" | "success">("connecting");
  const [analysis, setAnalysis] = useState<SanitizedAnalysis | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState<"notFollowingBack" | "mutuals" | "youDontFollowBack">("notFollowingBack");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Custom developer-override Extension ID (persisted locally for easy local dev testing)
  const [devExtensionId, setDevExtensionId] = useState("");
  const [showDevIdInput, setShowDevIdInput] = useState(false);
  
  // Pagination limit state
  const [visibleCount, setVisibleCount] = useState(50);

  // Clear analysis modal confirmation state
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearing, setClearing] = useState(false);

  // References for broken images fallback tracking
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDevId = localStorage.getItem("fc_dev_extension_id") || "";
      setDevExtensionId(savedDevId);
    }
  }, []);

  // Securely request analysis from extension background script
  const fetchAnalysis = async (customId?: string) => {
    setPageState("connecting");
    setErrorMsg("");

    if (typeof window === "undefined") return;

    // Check if chrome extension API is available
    if (!(window as any).chrome || !(window as any).chrome.runtime) {
      setPageState("no_extension");
      setErrorMsg("Chrome extension APIs are not available. Make sure you are using a Chrome-based browser.");
      return;
    }

    const currentExtId = customId !== undefined ? customId : (localStorage.getItem("fc_dev_extension_id") || process.env.NEXT_PUBLIC_EXTENSION_ID || "");

    if (!currentExtId) {
      // Prompt for development extension ID if none is configured
      setPageState("no_extension");
      setShowDevIdInput(true);
      return;
    }

    try {
      (window as any).chrome.runtime.sendMessage(currentExtId, { type: "GET_LATEST_ANALYSIS" }, (response: any) => {
        const runtimeErr = (window as any).chrome.runtime.lastError;
        if (runtimeErr) {
          console.error("Communication error:", runtimeErr.message);
          setPageState("no_extension");
          setErrorMsg(runtimeErr.message || "Could not connect to extension.");
          setShowDevIdInput(true);
          return;
        }

        if (!response) {
          setPageState("no_extension");
          setErrorMsg("Received empty response from extension.");
          setShowDevIdInput(true);
          return;
        }

        if (response.status === "success" && response.data) {
          setAnalysis(response.data);
          setPageState("success");
        } else if (response.status === "no_analysis") {
          setPageState("no_analysis");
        } else {
          setPageState("no_extension");
          setErrorMsg(response.error || "Failed to retrieve connection lists.");
        }
      });
    } catch (e: any) {
      console.error("External runtime sendMessage failure:", e);
      setPageState("no_extension");
      setErrorMsg(e.message || "Failed to initiate extension request.");
      setShowDevIdInput(true);
    }
  };

  useEffect(() => {
    // Initial fetch attempts
    const timeout = setTimeout(() => {
      fetchAnalysis();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleSaveDevId = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("fc_dev_extension_id", devExtensionId.trim());
      fetchAnalysis(devExtensionId.trim());
    }
  };

  const handleClearDevId = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("fc_dev_extension_id");
      setDevExtensionId("");
      fetchAnalysis("");
    }
  };

  const handleClearAnalysis = async () => {
    if (typeof window === "undefined" || !(window as any).chrome || !(window as any).chrome.runtime) return;
    setClearing(true);

    const currentExtId = localStorage.getItem("fc_dev_extension_id") || process.env.NEXT_PUBLIC_EXTENSION_ID || "";

    try {
      (window as any).chrome.runtime.sendMessage(currentExtId, { type: "CLEAR_LATEST_ANALYSIS" }, (response: any) => {
        setClearing(false);
        setShowClearConfirm(false);
        const runtimeErr = (window as any).chrome.runtime.lastError;
        if (runtimeErr) {
          alert(`Failed to clear: ${runtimeErr.message}`);
          return;
        }

        if (response && response.status === "success") {
          setAnalysis(null);
          setPageState("no_analysis");
        } else {
          alert(response?.error || "Failed to clear analysis storage.");
        }
      });
    } catch (err: any) {
      setClearing(false);
      setShowClearConfirm(false);
      alert(err.message || "Communication error.");
    }
  };

  const handleOpenInstagram = () => {
    window.open("https://www.instagram.com", "_blank");
  };

  // Profile image load fail handler
  const handleImageError = (username: string) => {
    setBrokenImages(prev => ({
      ...prev,
      [username]: true
    }));
  };

  // Local filtering & pagination
  const filteredList = useMemo(() => {
    if (!analysis) return [];
    const list = analysis[activeTab] || [];
    if (!searchQuery) return list;

    const query = searchQuery.toLowerCase();
    return list.filter(item => 
      (item.username && item.username.toLowerCase().includes(query)) ||
      (item.fullName && item.fullName.toLowerCase().includes(query))
    );
  }, [analysis, activeTab, searchQuery]);

  // Dynamic paginated slice
  const paginatedList = useMemo(() => {
    return filteredList.slice(0, visibleCount);
  }, [filteredList, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 50);
  };

  // Format Scan Date/Time helper
  const formattedDate = useMemo(() => {
    if (!analysis?.scannedAt) return "";
    try {
      const date = new Date(analysis.scannedAt);
      return date.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return analysis.scannedAt;
    }
  }, [analysis]);

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-transparent selection:bg-electric/10 selection:text-electric py-12 relative z-10 min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* STATE A: CONNECTING */}
          {pageState === "connecting" && (
            <div className="text-center py-24 space-y-6">
              <div className="flex justify-center">
                <LoaderIcon className="h-10 w-10 text-electric" />
              </div>
              <h1 className="text-2xl font-extrabold text-navy">Loading Your Analysis</h1>
              <p className="text-sm font-semibold text-navy/50 max-w-xs mx-auto">
                Connecting securely to the FollowCheck extension...
              </p>
            </div>
          )}

          {/* STATE B: NO EXTENSION OR BLOCKED CONNECTION */}
          {pageState === "no_extension" && (
            <div className="py-16 text-center space-y-8 max-w-xl mx-auto">
              <div className="card p-8 rounded-2xl border border-navy/5 bg-white space-y-6 shadow-xs">
                <div className="h-14 w-14 rounded-2xl bg-electric/10 text-electric flex items-center justify-center mx-auto">
                  <ChromeIcon className="h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h1 className="text-2xl font-extrabold text-navy tracking-tight">
                    FollowCheck Extension Required
                  </h1>
                  <p className="text-sm font-medium leading-relaxed text-navy/60">
                    Your connection analysis is stored locally in the FollowCheck browser extension. Install or enable the extension to view your results.
                  </p>
                  {errorMsg && (
                    <p className="text-xs font-bold text-navy/40 bg-soft-white/60 p-2 rounded-lg italic">
                      Details: {errorMsg}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://chromewebstore.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-electric text-sm font-bold text-white hover:bg-electric/95 transition-all shadow-xs"
                  >
                    Get FollowCheck Extension
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="/how-it-works"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-navy/15 text-sm font-bold text-navy hover:bg-navy/5 transition-all"
                  >
                    How It Works
                  </a>
                </div>

                <div className="text-xs font-medium text-navy/50 pt-2 border-t border-navy/5">
                  <p className="font-bold">Already installed?</p>
                  <p className="mt-1">Refresh this page and make sure the FollowCheck extension is enabled.</p>
                </div>
              </div>

              {/* Developer Configuration Overrides (only visible when extension is not found) */}
              {showDevIdInput && (
                <div className="p-6 rounded-2xl border border-dashed border-navy/10 bg-white/40 backdrop-blur-xs text-left space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-navy/50 flex items-center gap-1.5">
                    <AlertCircle className="h-4 w-4 text-electric" />
                    Developer Configuration
                  </h2>
                  <p className="text-xs font-medium leading-relaxed text-navy/60">
                    Because unpacked dev extensions have dynamically generated IDs, you must specify your extension's ID to allow connection from the website:
                  </p>
                  <form onSubmit={handleSaveDevId} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter extension ID (e.g. pbpblnkgom...)"
                      value={devExtensionId}
                      onChange={(e) => setDevExtensionId(e.target.value)}
                      className="flex-1 px-3 py-2 border border-navy/10 rounded-xl bg-white text-xs font-mono text-navy focus:outline-hidden focus:border-electric"
                      required
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-navy text-xs font-bold text-white hover:bg-navy/90 transition-all cursor-pointer"
                    >
                      Connect
                    </button>
                  </form>
                  {localStorage.getItem("fc_dev_extension_id") && (
                    <button 
                      onClick={handleClearDevId}
                      className="text-[10px] font-bold text-rose-600 hover:underline block"
                    >
                      Clear Saved Developer ID
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* STATE C: NO ANALYSIS FOUND */}
          {pageState === "no_analysis" && (
            <div className="py-16 text-center space-y-6 max-w-md mx-auto">
              <div className="card p-8 rounded-2xl border border-navy/5 bg-white space-y-6 shadow-xs">
                <div className="h-14 w-14 rounded-2xl bg-electric/10 text-electric flex items-center justify-center mx-auto">
                  <Sparkles className="h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h1 className="text-2xl font-extrabold text-navy tracking-tight">
                    No Analysis Found
                  </h1>
                  <p className="text-sm font-medium leading-relaxed text-navy/60">
                    Open Instagram and run a FollowCheck analysis first to generate your connections dashboard.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleOpenInstagram}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-electric text-sm font-bold text-white hover:bg-electric/95 transition-all shadow-xs cursor-pointer"
                  >
                    Open Instagram
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="/how-it-works"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-navy/15 text-sm font-bold text-navy hover:bg-navy/5 transition-all"
                  >
                    How It Works
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* STATE D: SUCCESS VIEW */}
          {pageState === "success" && analysis && (
            <div className="space-y-8 animate-fade-in">
              
              {/* Results Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-navy/5 pb-6">
                <div>
                  <span className="text-[11px] font-black text-electric uppercase tracking-widest">Connection Report</span>
                  <h1 className="text-3xl font-extrabold tracking-tight text-navy mt-1">@{analysis.accountUsername}</h1>
                  <p className="text-xs font-semibold text-navy/55 mt-1">Scanned: {formattedDate}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowClearConfirm(true)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-rose-200 text-xs font-bold text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear Analysis
                  </button>
                  <button
                    onClick={handleOpenInstagram}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-electric text-xs font-bold text-white hover:bg-electric/95 transition-all shadow-xs cursor-pointer"
                  >
                    Re-Scan on Instagram
                  </button>
                </div>
              </div>

              {/* Stats overview cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-white border border-navy/5 shadow-[0_4px_12px_rgba(11,18,32,0.01)] text-center">
                  <p className="text-3xl font-black text-rose-600">{analysis.notFollowingBack.length}</p>
                  <p className="text-xs font-bold text-navy/50 mt-1 uppercase tracking-wider">Don't Follow Back</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-navy/5 shadow-[0_4px_12px_rgba(11,18,32,0.01)] text-center">
                  <p className="text-3xl font-black text-emerald-600">{analysis.mutuals.length}</p>
                  <p className="text-xs font-bold text-navy/50 mt-1 uppercase tracking-wider">Mutual Followers</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-navy/5 shadow-[0_4px_12px_rgba(11,18,32,0.01)] text-center">
                  <p className="text-3xl font-black text-blue-600">{analysis.youDontFollowBack.length}</p>
                  <p className="text-xs font-bold text-navy/50 mt-1 uppercase tracking-wider">You Don't Follow Back</p>
                </div>
              </div>

              {/* Future Advertising Slot Zone 1 */}
              <AdSlot />
              <AdDisclosure />

              {/* Tabs & Search controls */}
              <div className="space-y-4">
                
                {/* Custom Tabs */}
                <div className="flex border-b border-navy/5" role="tablist">
                  <button
                    role="tab"
                    id="tab-notFollowingBack"
                    aria-controls="panel-notFollowingBack"
                    aria-selected={activeTab === "notFollowingBack"}
                    onClick={() => {
                      setActiveTab("notFollowingBack");
                      setVisibleCount(50);
                    }}
                    className={`flex-1 py-4 text-center text-xs sm:text-sm font-extrabold border-b-2 focus:outline-hidden transition-all ${
                      activeTab === "notFollowingBack"
                        ? "border-rose-600 text-rose-600"
                        : "border-transparent text-navy/45 hover:text-navy/70"
                    }`}
                  >
                    Don't Follow Back ({analysis.notFollowingBack.length})
                  </button>
                  <button
                    role="tab"
                    id="tab-mutuals"
                    aria-controls="panel-mutuals"
                    aria-selected={activeTab === "mutuals"}
                    onClick={() => {
                      setActiveTab("mutuals");
                      setVisibleCount(50);
                    }}
                    className={`flex-1 py-4 text-center text-xs sm:text-sm font-extrabold border-b-2 focus:outline-hidden transition-all ${
                      activeTab === "mutuals"
                        ? "border-emerald-600 text-emerald-600"
                        : "border-transparent text-navy/45 hover:text-navy/70"
                    }`}
                  >
                    Mutuals ({analysis.mutuals.length})
                  </button>
                  <button
                    role="tab"
                    id="tab-youDontFollowBack"
                    aria-controls="panel-youDontFollowBack"
                    aria-selected={activeTab === "youDontFollowBack"}
                    onClick={() => {
                      setActiveTab("youDontFollowBack");
                      setVisibleCount(50);
                    }}
                    className={`flex-1 py-4 text-center text-xs sm:text-sm font-extrabold border-b-2 focus:outline-hidden transition-all ${
                      activeTab === "youDontFollowBack"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-navy/45 hover:text-navy/70"
                    }`}
                  >
                    You Don't Follow ({analysis.youDontFollowBack.length})
                  </button>
                </div>

                {/* Search Field */}
                <div className="relative">
                  <Search className="h-4.5 w-4.5 text-navy/40 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search usernames or names..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(50);
                    }}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-navy/10 bg-white/70 text-sm text-navy focus:outline-hidden focus:border-electric transition-colors"
                  />
                </div>

                {/* TabPanel lists */}
                <div 
                  role="tabpanel" 
                  id={`panel-${activeTab}`} 
                  aria-labelledby={`tab-${activeTab}`} 
                  className="space-y-2.5"
                >
                  {paginatedList.length > 0 ? (
                    <div className="border border-navy/5 bg-white/80 rounded-2xl overflow-hidden shadow-xs divide-y divide-navy/5">
                      {paginatedList.map((item, idx) => {
                        const hasBrokenImg = brokenImages[item.username];
                        return (
                          <div key={item.id || idx} className="flex items-center justify-between p-4 hover:bg-soft-white/30 transition-colors">
                            <div className="flex items-center gap-3.5">
                              {/* Avatar display with safe image fallback */}
                              <div className={`h-10 w-10 rounded-full flex items-center justify-center overflow-hidden shrink-0 select-none ${
                                item.profileImageUrl && !hasBrokenImg
                                  ? "bg-electric/10 border border-navy/5"
                                  : "bg-navy text-soft-white border border-electric/30 font-extrabold"
                              }`}>
                                {item.profileImageUrl && !hasBrokenImg ? (
                                  <img 
                                    src={item.profileImageUrl} 
                                    alt={item.username} 
                                    referrerPolicy="no-referrer"
                                    onError={() => handleImageError(item.username)}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  item.username.charAt(0).toUpperCase()
                                )}
                              </div>
                              
                              <div>
                                <p className="text-sm font-bold text-navy">
                                  <a 
                                    href={`https://instagram.com/${item.username}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:underline flex items-center gap-1 inline-flex"
                                  >
                                    {item.username}
                                    <ExternalLink className="h-3 w-3 text-navy/40" />
                                  </a>
                                </p>
                                {item.fullName && (
                                  <p className="text-[11px] font-semibold text-navy/50">{item.fullName}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-16 border border-navy/5 bg-white/80 rounded-2xl text-navy/50 space-y-2">
                      <p className="text-sm font-bold">No connections found</p>
                      <p className="text-xs font-semibold max-w-xs mx-auto">Try refining your search filter.</p>
                    </div>
                  )}

                  {/* Show More Incremental Loading */}
                  {filteredList.length > visibleCount && (
                    <div className="pt-4 text-center space-y-2.5">
                      <p className="text-xs font-semibold text-navy/50">
                        Showing {visibleCount} of {filteredList.length} results
                      </p>
                      <button
                        onClick={handleShowMore}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-navy/15 text-xs font-bold text-navy hover:bg-navy/5 transition-all cursor-pointer"
                      >
                        Show More
                      </button>
                    </div>
                  )}
                </div>

              </div>

              {/* Future Advertising Slot Zone 2 */}
              <AdSlot />
              <AdDisclosure />

              {/* Contextual Results Explanation section */}
              <div className="border border-navy/5 bg-white/60 rounded-2xl p-6 sm:p-8 space-y-6">
                <h2 className="text-lg font-extrabold text-navy flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-electric" />
                  Understanding Your Results
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm font-semibold leading-relaxed">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-rose-600 uppercase tracking-wider">Don't Follow Back</span>
                    <p className="text-navy/75">
                      These are accounts identified in your completed analysis as profiles you follow, but were not identified as following you back.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">Mutuals</span>
                    <p className="text-navy/75">
                      These are connections where both accounts were identified as following each other in the scan results.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">You Don't Follow</span>
                    <p className="text-navy/75">
                      These are accounts identified as following you, but you do not currently follow them.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-navy/5 flex gap-2">
                  <ShieldCheck className="h-4.5 w-4.5 text-electric shrink-0 mt-0.5" />
                  <p className="text-[11px] font-bold leading-normal text-navy/50">
                    Results reflect connection information available during the completed analysis. Instagram relationships can change after a scan. FollowCheck is an independent browser utility and does not store account logins or transfer lists to external servers.
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* Confirmation modal for clearing results */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-sm p-6 bg-white border border-navy/5 rounded-2xl shadow-xl space-y-6">
            <button 
              onClick={() => setShowClearConfirm(false)} 
              className="absolute right-4 top-4 text-navy/40 hover:text-navy"
              aria-label="Close dialog"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            <div className="space-y-2">
              <h3 className="text-lg font-extrabold text-navy">Clear analysis?</h3>
              <p className="text-xs font-semibold text-navy/60 leading-relaxed">
                This removes the saved FollowCheck analysis from your browser extension. It does not change anything on Instagram.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-3 border border-navy/15 rounded-xl text-xs font-bold text-navy hover:bg-navy/5 transition-all cursor-pointer"
                disabled={clearing}
              >
                Cancel
              </button>
              <button
                onClick={handleClearAnalysis}
                className="flex-1 py-3 bg-rose-600 rounded-xl text-xs font-bold text-white hover:bg-rose-700 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                disabled={clearing}
              >
                {clearing ? <LoaderIcon className="h-3.5 w-3.5 text-white" /> : "Clear Analysis"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
