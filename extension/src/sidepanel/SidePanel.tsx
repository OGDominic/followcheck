import { useState, useEffect, useMemo } from "react";
import { 
  Lock, 
  ShieldCheck, 
  Sparkles, 
  Globe, 
  AlertCircle, 
  RefreshCw, 
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { storage } from "../lib/storage";
import { compareConnections } from "../lib/comparator";
import { AnalysisResult, InstagramState, ScanProgress } from "../lib/types";
import { ExtensionMessage } from "../lib/messages";
import { FOLLOWCHECK_WEB_ORIGIN } from "../lib/config";

export default function SidePanel() {
  // Application States
  const [igState, setIgState] = useState<InstagramState>({ isOpen: false, isLoggedIn: false });
  const [scanProgress, setScanProgress] = useState<ScanProgress>({
    status: "idle",
    followersScanned: 0,
    followingScanned: 0,
  });
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [checkingState, setCheckingState] = useState(true);

  // Initialize and load cached data
  useEffect(() => {
    async function init() {
      setCheckingState(true);
      const cachedResults = await storage.getAnalysisResult();
      if (cachedResults) {
        setResults(cachedResults);
      }
      
      // Query active Instagram tab state
      await checkInstagramTab();
      setCheckingState(false);
    }
    init();

    // Listen for scanning updates from background script
    const messageListener = (message: ExtensionMessage) => {
      console.log("[FollowCheck SidePanel] Received message:", message);
      
      if (message.type === "SCAN_PROGRESS") {
        setScanProgress(message.progress);
      } else if (message.type === "SCAN_COMPLETE") {
        const calculatedResults = compareConnections(
          message.followers,
          message.following,
          message.currentUser
        );
        storage.saveAnalysisResult(calculatedResults);
        setResults(calculatedResults);
        setScanProgress({
          status: "complete",
          followersScanned: message.followers.length,
          followingScanned: message.following.length,
        });
      } else if (message.type === "SCAN_ERROR") {
        setScanProgress((prev) => ({
          ...prev,
          status: "error",
          error: message.error,
        }));
      }
    };

    if (typeof chrome !== "undefined" && chrome.runtime?.onMessage) {
      chrome.runtime.onMessage.addListener(messageListener);
    }

    return () => {
      if (typeof chrome !== "undefined" && chrome.runtime?.onMessage) {
        chrome.runtime.onMessage.removeListener(messageListener);
      }
    };
  }, []);

  // Check Instagram tab helper
  const checkInstagramTab = async () => {
    if (typeof chrome !== "undefined" && chrome.runtime?.sendMessage) {
      try {
        const response = await chrome.runtime.sendMessage({ type: "CHECK_INSTAGRAM_STATE" });
        if (response && response.state) {
          setIgState(response.state);
        }
      } catch (err) {
        console.error("Error checking Instagram state:", err);
      }
    }
  };

  // Button actions
  const handleOpenInstagram = () => {
    if (typeof chrome !== "undefined" && chrome.tabs?.create) {
      chrome.tabs.create({ url: "https://www.instagram.com/" });
    } else {
      window.open("https://www.instagram.com/", "_blank");
    }
  };

  const handleStartScan = async () => {
    if (!privacyChecked) return;
    
    setScanProgress({
      status: "scanning",
      followersScanned: 0,
      followingScanned: 0,
    });
    setResults(null);

    if (typeof chrome !== "undefined" && chrome.runtime?.sendMessage) {
      try {
        await chrome.runtime.sendMessage({ type: "START_SCAN" });
      } catch (err) {
        console.error("Failed to start scan:", err);
        setScanProgress({
          status: "error",
          followersScanned: 0,
          followingScanned: 0,
          error: "Could not establish connection with Instagram. Try reloading the tab.",
        });
      }
    }
  };

  const handleCancelScan = async () => {
    if (typeof chrome !== "undefined" && chrome.runtime?.sendMessage) {
      await chrome.runtime.sendMessage({ type: "CANCEL_SCAN" });
    }
    setScanProgress((prev) => ({ ...prev, status: "cancelled" }));
  };

  const handleClearAnalysis = async () => {
    await storage.clearAnalysisResult();
    setResults(null);
    setScanProgress({
      status: "idle",
      followersScanned: 0,
      followingScanned: 0,
    });
  };



  // Determine current active display state
  const appState = useMemo(() => {
    if (checkingState) return "LOADING";
    if (scanProgress.status === "scanning") return "SCANNING";
    if (results) return "RESULTS";
    if (!igState.isOpen) return "NOT_ON_INSTAGRAM";
    if (!igState.isLoggedIn) return "NOT_LOGGED_IN";
    return "READY";
  }, [checkingState, scanProgress.status, results, igState]);

  return (
    <div className="panel-container">
      {/* Header */}
      <div className="header">
        <span className="logo">FollowCheck</span>
        {appState === "READY" && (
          <button 
            onClick={checkInstagramTab} 
            className="btn btn-secondary" 
            style={{ width: "auto", height: "32px", padding: "0 8px" }}
            aria-label="Refresh Instagram status"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* STATE 0: LOADING */}
      {appState === "LOADING" && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ color: "var(--muted)", fontWeight: 600 }}>Checking connection...</p>
        </div>
      )}

      {/* STATE 1: INSTAGRAM NOT OPEN */}
      {appState === "NOT_ON_INSTAGRAM" && (
        <div style={{ marginTop: "24px" }} className="animate-fade-in">
          <div className="card" style={{ textAlign: "center", padding: "32px 20px" }}>
            <Globe className="h-10 w-10 text-electric" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ marginBottom: "8px", fontWeight: 800 }}>Open Instagram</h3>
            <p style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5, marginBottom: "20px" }}>
              Please open Instagram in your active tab to analyze your follower connections.
            </p>
            <button onClick={handleOpenInstagram} className="btn btn-primary">
              Open Instagram
            </button>
          </div>
        </div>
      )}

      {/* STATE 1.5: ON INSTAGRAM BUT NOT LOGGED IN */}
      {appState === "NOT_LOGGED_IN" && (
        <div style={{ marginTop: "24px" }} className="animate-fade-in">
          <div className="card" style={{ textAlign: "center", padding: "32px 20px" }}>
            <AlertCircle className="h-10 w-10 text-electric" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ marginBottom: "8px", fontWeight: 800 }}>Sign In Required</h3>
            <p style={{ color: "var(--muted)", fontSize: "12px", lineHeight: 1.5, marginBottom: "20px" }}>
              Please sign in to your Instagram account to initiate connection checks.
            </p>
            <button onClick={handleOpenInstagram} className="btn btn-primary">
              Go to Instagram
            </button>
          </div>
        </div>
      )}

      {/* STATE 2: READY */}
      {appState === "READY" && (
        <div className="animate-fade-in">
          {/* Status Panel */}
          <div className="card" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 16px" }}>
            <CheckCircle className="h-5 w-5 text-electric" />
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase" }}>Status</p>
              <p style={{ fontSize: "13px", fontWeight: 800 }}>Instagram is ready</p>
            </div>
          </div>

          {/* Privacy Disclosure Consent */}
          <div className="disclosure-box">
            <p className="disclosure-text">
              <strong>Disclosure:</strong> FollowCheck analyzes follower and following connection information for your currently logged-in account. The analysis runs locally in your browser and is never stored on or sent to external servers.
            </p>
            <div className="disclosure-checkbox-row">
              <input 
                type="checkbox" 
                id="consent-check" 
                checked={privacyChecked} 
                onChange={(e) => setPrivacyChecked(e.target.checked)} 
              />
              <label htmlFor="consent-check" className="disclosure-checkbox-label">
                I understand, proceed to scan
              </label>
            </div>
          </div>

          {/* Main Action */}
          <button 
            disabled={!privacyChecked} 
            onClick={handleStartScan} 
            className="btn btn-primary"
            style={{ opacity: privacyChecked ? 1 : 0.6, cursor: privacyChecked ? "pointer" : "not-allowed" }}
          >
            Analyze My Account
          </button>

          {/* Trust Row */}
          <div className="trust-row">
            <span className="trust-badge">
              <Lock className="h-3 w-3 text-electric" />
              No password
            </span>
            <span className="trust-badge">
              <ShieldCheck className="h-3 w-3 text-electric" />
              Private analysis
            </span>
            <span className="trust-badge">
              <Sparkles className="h-3 w-3 text-electric" />
              Free tool
            </span>
          </div>
        </div>
      )}

      {/* STATE 3: SCANNING */}
      {appState === "SCANNING" && (
        <div className="card animate-fade-in" style={{ padding: "24px 20px" }}>
          <h3 style={{ fontWeight: 800, marginBottom: "4px" }}>Analyzing Connections</h3>
          <p style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "16px" }}>
            Keep Instagram open while analysis is running.
          </p>

          <div style={{ margin: "20px 0" }}>
            <div className="progress-row">
              <span>Followers</span>
              <span>{scanProgress.followersScanned} scanned</span>
            </div>
            <div className="progress-row">
              <span>Following</span>
              <span>{scanProgress.followingScanned} scanned</span>
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar-fill animate-pulse" style={{ width: "100%" }} />
          </div>

          <button onClick={handleCancelScan} className="btn btn-danger" style={{ marginTop: "12px" }}>
            Cancel Scan
          </button>
        </div>
      )}

      {/* ERROR SUBSTATE */}
      {scanProgress.status === "error" && appState !== "SCANNING" && (
        <div className="card animate-fade-in" style={{ borderColor: "rgba(220, 38, 38, 0.2)", backgroundColor: "rgba(220, 38, 38, 0.03)", padding: "16px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <AlertCircle className="h-5 w-5 text-danger flex-shrink-0" style={{ color: "#dc2626" }} />
            <div>
              <p style={{ fontWeight: 800, fontSize: "13px", color: "#dc2626" }}>Scan Error</p>
              <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px", lineHeight: 1.4 }}>
                {scanProgress.error}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setScanProgress({ status: "idle", followersScanned: 0, followingScanned: 0 })} 
            className="btn btn-secondary" 
            style={{ marginTop: "12px", height: "32px", fontSize: "11px" }}
          >
            Dismiss
          </button>
        </div>
      )}

      {/* STATE 4: RESULTS */}
      {appState === "RESULTS" && results && (
        <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1, gap: "16px" }}>
          
          {/* Overview Info */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)" }}>ACCOUNT</p>
              <p style={{ fontSize: "14px", fontWeight: 800 }}>@{results.currentUser}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)" }}>SCAN TIME</p>
              <p style={{ fontSize: "11px", fontWeight: 600 }}>{new Date(results.scannedAt).toLocaleTimeString()}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stat-grid" style={{ pointerEvents: "none" }}>
            <div className="stat-card active" style={{ cursor: "default" }}>
              <p className="stat-count">{results.notFollowingBack.length}</p>
              <p className="stat-label">Don't Follow</p>
            </div>
            <div className="stat-card active" style={{ cursor: "default" }}>
              <p className="stat-count">{results.mutuals.length}</p>
              <p className="stat-label">Mutuals</p>
            </div>
            <div className="stat-card active" style={{ cursor: "default" }}>
              <p className="stat-count">{results.youDontFollowBack.length}</p>
              <p className="stat-label">You Don't</p>
            </div>
          </div>

          {/* View Full Results Button */}
          <div style={{ textAlign: "center", marginTop: "8px" }}>
            <button
              onClick={() => {
                if (typeof chrome !== "undefined" && chrome.tabs?.create) {
                  chrome.tabs.create({ url: `${FOLLOWCHECK_WEB_ORIGIN}/results` });
                } else {
                  window.open(`${FOLLOWCHECK_WEB_ORIGIN}/results`, "_blank");
                }
              }}
              className="btn btn-primary"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%" }}
            >
              <span>View Full Results</span>
              <ExternalLink className="h-4 w-4" />
            </button>
            <p style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600, marginTop: "8px" }}>
              Results open securely on FollowCheck.
            </p>
          </div>

          {/* Footer Actions */}
          <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
            <button 
              disabled={!privacyChecked}
              onClick={handleStartScan} 
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              Re-Scan
            </button>
            <button 
              onClick={handleClearAnalysis} 
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              Clear Analysis
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
