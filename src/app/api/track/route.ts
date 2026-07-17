import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Define the shape of a logged activity
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

const DATA_DIR = path.join(process.cwd(), "src", "data");
const DATA_FILE = path.join(DATA_DIR, "activity.json");

// Helper to ensure data directory and file exist
async function ensureDataFile() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(DATA_FILE);
    } catch {
      await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Failed to initialize tracking storage:", err);
  }
}

// CORS headers configuration helper
function getCorsHeaders(request: Request) {
  const origin = request.headers.get("origin") || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

// Handle CORS Preflight OPTIONS requests
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}

// Tracking POST request handler
export async function POST(request: Request) {
  const corsHeaders = getCorsHeaders(request);

  try {
    const body = await request.json();
    const { username, event, details } = body;

    if (!username || !event) {
      return NextResponse.json(
        { error: "Missing required fields: username and event" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Get client details from request headers
    const headers = request.headers;
    
    // IP extraction
    const xForwardedFor = headers.get("x-forwarded-for");
    const ip = xForwardedFor 
      ? xForwardedFor.split(",")[0].trim() 
      : headers.get("x-real-ip") || "127.0.0.1";

    // Location details from Vercel/Cloudflare geo headers
    const country = headers.get("x-vercel-ip-country") || headers.get("cf-ipcountry") || "Local/Unknown";
    const region = headers.get("x-vercel-ip-country-region") || "Unknown Region";
    const city = headers.get("x-vercel-ip-city") || "Unknown City";

    // Browser user-agent
    const userAgent = headers.get("user-agent") || "Unknown Browser";

    const timestamp = new Date().toISOString();
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const newLog: ActivityLog = {
      id,
      username,
      event,
      details,
      timestamp,
      ip,
      country,
      region,
      city,
      userAgent,
    };

    // Save to file
    await ensureDataFile();
    let logs: ActivityLog[] = [];
    try {
      const fileData = await fs.readFile(DATA_FILE, "utf-8");
      logs = JSON.parse(fileData);
      if (!Array.isArray(logs)) {
        logs = [];
      }
    } catch {
      logs = [];
    }

    // Prepend the new activity so most recent appears first
    logs.unshift(newLog);

    // Keep log file to a reasonable size (e.g. limit to last 2000 events)
    if (logs.length > 2000) {
      logs = logs.slice(0, 2000);
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(logs, null, 2), "utf-8");

    return NextResponse.json(
      { success: true, log: newLog },
      { status: 200, headers: corsHeaders }
    );
  } catch (error: any) {
    console.error("Error in tracking API:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
