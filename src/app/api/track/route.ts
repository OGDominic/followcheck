import { NextResponse } from "next/server";
import { addLog, ActivityLog } from "@/lib/db";

// Explicitly use the standard Node.js serverless environment to support file/in-memory DB
export const runtime = "nodejs";

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

    // Save to hybrid database (in-memory + file)
    await addLog(newLog);

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
