"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Lock,
  Activity,
  RefreshCw,
  Trash2,
  LogOut,
  Search,
  MapPin,
  Laptop,
  Calendar,
  Users,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Filter,
  Info,
  X
} from "lucide-react";

// Safe inline spinner SVG
const LoaderIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`animate-spin ${className}`}
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

interface ActivityLog {
  id: string;
  username: string;
  event: string;
  details?: Record<string, any>;
  timestamp: string;
  ip: string;
  country: string;
  region: string;
  city: string;
  userAgent: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [eventFilter, setEventFilter] = useState("all");
  const [selectedLog, setSelectedLog] = useState<ActivityLog | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearing, setClearing] = useState(false);

  // Check if we are already authenticated on mount
  useEffect(() => {
    const savedPassword = sessionStorage.getItem("fc_admin_password");
    if (savedPassword) {
      // Validate on load
      verifyPassword(savedPassword);
    }
  }, []);

  // Set up auto refresh interval (polling for realtime look)
  useEffect(() => {
    if (!isAuthenticated || !autoRefresh) return;

    const interval = setInterval(() => {
      fetchLogs(false);
    }, 2500);

    return () => clearInterval(interval);
  }, [isAuthenticated, autoRefresh]);

  const verifyPassword = async (pwdToVerify: string) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/admin/activity", {
        headers: {
          Authorization: pwdToVerify,
        },
      });

      if (res.status === 200) {
        const data = await res.json();
        setLogs(data);
        setIsAuthenticated(true);
        sessionStorage.setItem("fc_admin_password", pwdToVerify);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Invalid password");
        setIsAuthenticated(false);
        sessionStorage.removeItem("fc_admin_password");
      }
    } catch (err) {
      setErrorMsg("Failed to connect to API server");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    verifyPassword(password);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("fc_admin_password");
    setIsAuthenticated(false);
    setPassword("");
    setLogs([]);
  };

  const fetchLogs = async (showSpinner = true) => {
    const savedPassword = sessionStorage.getItem("fc_admin_password");
    if (!savedPassword) return;

    if (showSpinner) setIsRefreshing(true);
    try {
      const res = await fetch("/api/admin/activity", {
        headers: {
          Authorization: savedPassword,
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        setLogs(data);
      } else if (res.status === 401) {
        handleLogout();
      }
    } catch (err) {
      console.error("Error fetching logs:", err);
    } finally {
      if (showSpinner) setIsRefreshing(false);
    }
  };

  const handleClearLogs = async () => {
    const savedPassword = sessionStorage.getItem("fc_admin_password");
    if (!savedPassword) return;

    setClearing(true);
    try {
      const res = await fetch("/api/admin/activity", {
        method: "DELETE",
        headers: {
          Authorization: savedPassword,
        },
      });

      if (res.status === 200) {
        setLogs([]);
        setShowClearConfirm(false);
      } else {
        alert("Failed to clear logs");
      }
    } catch (err) {
      alert("Error clearing logs");
    } finally {
      setClearing(false);
    }
  };

  // Filter logs based on search and dropdown
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch =
        log.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.ip.includes(searchQuery) ||
        log.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesEvent = eventFilter === "all" || log.event === eventFilter;

      return matchesSearch && matchesEvent;
    });
  }, [logs, searchQuery, eventFilter]);

  // Compute analytics
  const stats = useMemo(() => {
    const totalEvents = logs.length;
    const uniqueUsers = new Set(logs.map((l) => l.username)).size;
    const scanStarts = logs.filter((l) => l.event === "scan_start").length;
    const scanCompletes = logs.filter((l) => l.event === "scan_complete").length;

    return {
      totalEvents,
      uniqueUsers,
      scanStarts,
      scanCompletes,
    };
  }, [logs]);

  // Clean Browser User Agent string for quick display
  const getCleanDevice = (uaString: string) => {
    if (uaString.includes("Windows")) return "Windows PC";
    if (uaString.includes("Macintosh")) return "macOS Device";
    if (uaString.includes("iPhone")) return "iPhone";
    if (uaString.includes("iPad")) return "iPad";
    if (uaString.includes("Android")) return "Android Phone";
    if (uaString.includes("Linux")) return "Linux Device";
    return "Unknown Browser";
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy selection:bg-electric/20 selection:text-white px-4 relative overflow-hidden">
        {/* Background glow effects matching layout.tsx */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-radial from-electric/10 to-transparent blur-[80px]" />
          <div className="absolute bottom-[10%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-radial from-electric/8 to-transparent blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-md animate-fade-up">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="h-14 w-14 rounded-2xl bg-electric/20 text-electric flex items-center justify-center mx-auto border border-electric/30">
                <Lock className="h-6 w-6 text-blue-500" />
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight">Admin Console</h1>
              <p className="text-xs font-semibold text-white/50">
                Enter your password to access the real-time tracker dashboard
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/60 uppercase tracking-wider" htmlFor="password-field">
                  Password
                </label>
                <input
                  id="password-field"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-mono text-center tracking-widest placeholder-white/20 focus:outline-none focus:border-electric transition-colors"
                  autoFocus
                  required
                />
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold rounded-xl flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-extrabold text-white transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? <LoaderIcon className="h-4 w-4 text-white" /> : "Sign In"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-blue-500/20">
      {/* Background glow lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[0%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Top Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                Live Tracking Active
                {autoRefresh && <span className="text-[9px] text-emerald-400/50 normal-case font-medium">(auto-updating 2.5s)</span>}
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white mt-1 flex items-center gap-2">
              <Activity className="h-7 w-7 text-blue-500" />
              FollowCheck Admin
            </h1>
            <p className="text-xs font-semibold text-slate-400 mt-1">
              Monitor extension usage logs, user details, and client origins.
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-2.5">
            {/* Auto refresh toggle button */}
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                autoRefresh
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  : "bg-white/5 border-white/10 text-slate-400"
              }`}
            >
              <RefreshCw className={`h-3.5 w-3.5 ${autoRefresh ? "animate-spin" : ""}`} />
              Auto Refresh
            </button>

            {/* Force refresh button */}
            <button
              onClick={() => fetchLogs(true)}
              disabled={isRefreshing}
              className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-200 transition-all cursor-pointer"
              title="Refresh Logs"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            </button>

            {/* Clear logs button */}
            <button
              onClick={() => setShowClearConfirm(true)}
              className="px-3.5 py-2 bg-red-950/20 border border-red-500/20 text-red-400 hover:bg-red-950/40 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Trash2 className="h-4 w-4" />
              Clear Logs
            </button>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl flex flex-col justify-between space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Scans Run</span>
            <p className="text-2xl font-black text-white">{stats.scanStarts + stats.scanCompletes}</p>
            <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400 font-semibold border-t border-white/5 pt-2">
              <span className="text-blue-400">{stats.scanStarts} starts</span>
              <span>•</span>
              <span className="text-emerald-400">{stats.scanCompletes} completed</span>
            </div>
          </div>
          <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl flex flex-col justify-between space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Unique Instas</span>
            <p className="text-2xl font-black text-blue-400">{stats.uniqueUsers}</p>
            <span className="text-[10px] text-slate-500 font-semibold mt-2 border-t border-white/5 pt-2">Identified usernames</span>
          </div>
          <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl flex flex-col justify-between space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed Scans</span>
            <p className="text-2xl font-black text-emerald-400">
              {stats.scanCompletes}
            </p>
            <span className="text-[10px] text-slate-500 font-semibold mt-2 border-t border-white/5 pt-2">
              {stats.scanStarts > 0 ? `${Math.round((stats.scanCompletes / stats.scanStarts) * 100)}%` : "0%"} Completion rate
            </span>
          </div>
          <div className="bg-slate-900/60 border border-white/5 p-4 rounded-2xl flex flex-col justify-between space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Action Logs</span>
            <p className="text-2xl font-black text-white">{stats.totalEvents}</p>
            <span className="text-[10px] text-slate-500 font-semibold mt-2 border-t border-white/5 pt-2">Saved events</span>
          </div>
        </section>

        {/* Controls Filters */}
        <section className="flex flex-col sm:flex-row gap-3.5 bg-slate-900/30 border border-white/5 p-4 rounded-2xl">
          <div className="relative flex-1">
            <Search className="h-4.5 w-4.5 text-slate-500 absolute left-4 top-3" />
            <input
              type="text"
              placeholder="Search by instagram user, IP, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-white/10 bg-slate-950 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4.5 w-4.5 text-slate-500" />
            <select
              value={eventFilter}
              onChange={(e) => setEventFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-white/10 bg-slate-950 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
            >
              <option value="all">All Events</option>
              <option value="scan_start">Scan Started</option>
              <option value="scan_complete">Scan Completed</option>
            </select>
          </div>
        </section>

        {/* Activity Logs Table */}
        <section className="flex-1 flex flex-col bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden shadow-xl">
          {filteredLogs.length > 0 ? (
            <div className="overflow-x-auto">
              {/* Desktop/Tablet Table Layout */}
              <table className="hidden md:table w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-white/5 bg-slate-900/70 text-slate-400 font-extrabold uppercase tracking-wider">
                    <th className="p-4">User</th>
                    <th className="p-4">Event</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">IP Address</th>
                    <th className="p-4">Device</th>
                    <th className="p-4">Time</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-white/2.5 transition-colors">
                      <td className="p-4">
                        <a
                          href={`https://instagram.com/${log.username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-blue-400 hover:underline hover:text-blue-300"
                        >
                          @{log.username}
                        </a>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-flex px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                            log.event === "scan_complete"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          }`}
                        >
                          {log.event === "scan_complete" ? "Scan Complete" : "Scan Start"}
                        </span>
                        {log.details && log.event === "scan_complete" && (
                          <span className="block text-[10px] text-slate-500 mt-0.5">
                            F: {log.details.followersCount} • Fg: {log.details.followingCount}
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-slate-300 font-semibold">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-slate-500 shrink-0" />
                          {log.city !== "Unknown City" ? `${log.city}, ` : ""}
                          {log.country}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-slate-400">{log.ip}</td>
                      <td className="p-4 text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5" title={log.userAgent}>
                          <Laptop className="h-3 w-3 text-slate-500 shrink-0" />
                          {getCleanDevice(log.userAgent)}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3 text-slate-500 shrink-0" />
                          {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="block text-[10px] text-slate-500 mt-0.5">
                          {new Date(log.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => setSelectedLog(log)}
                          className="px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 rounded-md text-[10px] font-bold transition-all cursor-pointer"
                        >
                          Inspect
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Smartphone Card-based Layout */}
              <div className="block md:hidden divide-y divide-white/5">
                {filteredLogs.map((log) => (
                  <div key={log.id} className="p-4 space-y-3 hover:bg-white/2.5 transition-colors">
                    <div className="flex items-center justify-between">
                      <a
                        href={`https://instagram.com/${log.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-black text-blue-400 hover:underline"
                      >
                        @{log.username}
                      </a>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                          log.event === "scan_complete"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        }`}
                      >
                        {log.event === "scan_complete" ? "Complete" : "Start"}
                      </span>
                      {log.details && log.event === "scan_complete" && (
                        <span className="text-xs text-slate-400 font-bold">
                          F: {log.details.followersCount} • Fg: {log.details.followingCount}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-400 pt-1 border-t border-white/5">
                      <div className="flex items-center gap-1 font-semibold text-slate-300">
                        <MapPin className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                        {log.country}
                      </div>
                      <div className="flex items-center gap-1 font-mono text-slate-500 justify-end">
                        {log.ip}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-1.5">
                      <span className="text-[10px] text-slate-500 flex items-center gap-1">
                        <Laptop className="h-3 w-3 shrink-0" />
                        {getCleanDevice(log.userAgent)}
                      </span>
                      <button
                        onClick={() => setSelectedLog(log)}
                        className="px-3 py-1 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-xs font-bold transition-all cursor-pointer"
                      >
                        Inspect Full Log
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-24 text-slate-500 space-y-4">
              <Activity className="h-10 w-10 text-slate-700 mx-auto" />
              <div className="space-y-1">
                <p className="text-sm font-extrabold text-slate-400">No activity logs found</p>
                <p className="text-xs font-medium text-slate-500 max-w-xs mx-auto">
                  Either no users have run a scan yet, or your search filter does not match existing logs.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* INSPECT LOG DETAILS MODAL */}
      {selectedLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg p-6 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedLog(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Metadata Inspector</span>
              <h3 className="text-lg font-black text-white flex items-center gap-1.5">
                Log Detail for @{selectedLog.username}
              </h3>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto no-scrollbar text-xs">
              <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4">
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase font-extrabold">Event Type</span>
                  <span className="font-bold text-slate-200">{selectedLog.event}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase font-extrabold">Exact Date & Time</span>
                  <span className="font-bold text-slate-200">
                    {new Date(selectedLog.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4">
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase font-extrabold">IP Address</span>
                  <span className="font-mono text-slate-200">{selectedLog.ip}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase font-extrabold">Origin Location</span>
                  <span className="font-bold text-slate-200">
                    {selectedLog.city !== "Unknown City" ? `${selectedLog.city}, ` : ""}
                    {selectedLog.region !== "Unknown Region" ? `${selectedLog.region}, ` : ""}
                    {selectedLog.country}
                  </span>
                </div>
              </div>

              {selectedLog.details && (
                <div className="border-b border-white/5 pb-4">
                  <span className="block text-[10px] text-slate-500 uppercase font-extrabold mb-1">Scan Details</span>
                  <pre className="p-3 bg-slate-950 rounded-xl font-mono text-[11px] text-emerald-400 border border-white/5">
                    {JSON.stringify(selectedLog.details, null, 2)}
                  </pre>
                </div>
              )}

              <div>
                <span className="block text-[10px] text-slate-500 uppercase font-extrabold mb-1">User Agent Header</span>
                <p className="p-3 bg-slate-950 rounded-xl font-mono text-[11px] text-slate-400 border border-white/5 leading-relaxed">
                  {selectedLog.userAgent}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedLog(null)}
              className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-white transition-all cursor-pointer"
            >
              Close Inspector
            </button>
          </div>
        </div>
      )}

      {/* CLEAR LOGS CONFIRMATION MODAL */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm p-6 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl space-y-6">
            <button
              onClick={() => setShowClearConfirm(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-2">
              <h3 className="text-lg font-black text-white">Clear all logs?</h3>
              <p className="text-xs font-semibold text-slate-400 leading-relaxed">
                This action will delete all saved activity logs permanently. This cannot be undone.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-3 border border-white/10 hover:bg-white/5 rounded-xl text-xs font-bold text-slate-300 transition-all cursor-pointer"
                disabled={clearing}
              >
                Cancel
              </button>
              <button
                onClick={handleClearLogs}
                className="flex-1 py-3 bg-red-600 hover:bg-red-500 rounded-xl text-xs font-bold text-white transition-all cursor-pointer flex items-center justify-center gap-1.5"
                disabled={clearing}
              >
                {clearing ? <LoaderIcon className="h-4 w-4 text-white" /> : "Delete Logs"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
