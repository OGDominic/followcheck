import path from "path";

export interface ActivityLog {
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

// Global in-memory logs array to support read-only hosting environments like Vercel
// without throwing filesystem errors.
const globalForDb = global as unknown as {
  _activityLogs: ActivityLog[];
};

if (!globalForDb._activityLogs) {
  globalForDb._activityLogs = [];
  
  // Try to load initial logs from the committed activity.json on startup
  try {
    const fs = require("fs");
    const dataPath = path.join(process.cwd(), "src", "data", "activity.json");
    if (fs.existsSync(dataPath)) {
      const fileData = fs.readFileSync(dataPath, "utf-8");
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed)) {
        globalForDb._activityLogs = parsed;
        console.log(`[FollowCheck DB] Loaded ${parsed.length} logs from disk`);
      }
    }
  } catch (err: any) {
    console.warn("[FollowCheck DB] Could not load initial logs from disk:", err.message);
  }
}

export async function getLogs(): Promise<ActivityLog[]> {
  return globalForDb._activityLogs;
}

export async function addLog(log: ActivityLog): Promise<void> {
  globalForDb._activityLogs.unshift(log);

  // Keep log size capped at 1000 items
  if (globalForDb._activityLogs.length > 1000) {
    globalForDb._activityLogs = globalForDb._activityLogs.slice(0, 1000);
  }

  // Attempt to persist to disk for local dev / persistent server hosts
  try {
    const fs = require("fs").promises;
    const dataDir = path.join(process.cwd(), "src", "data");
    const dataPath = path.join(dataDir, "activity.json");
    
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(globalForDb._activityLogs, null, 2), "utf-8");
  } catch (err: any) {
    // Fail silently on read-only filesystems (like Vercel)
    console.warn("[FollowCheck DB] Failed to save log to disk (read-only environment):", err.message);
  }
}

export async function clearLogs(): Promise<void> {
  globalForDb._activityLogs = [];

  try {
    const fs = require("fs").promises;
    const dataDir = path.join(process.cwd(), "src", "data");
    const dataPath = path.join(dataDir, "activity.json");
    
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify([], null, 2), "utf-8");
  } catch (err: any) {
    console.warn("[FollowCheck DB] Failed to clear disk logs (read-only environment):", err.message);
  }
}
