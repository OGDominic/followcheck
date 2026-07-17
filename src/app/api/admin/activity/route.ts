import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const DATA_FILE = path.join(DATA_DIR, "activity.json");
const DEFAULT_PASSWORD = "86808680";

// Helper to authenticate the admin password
function authenticate(request: Request): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;

  // Support both "86808680" and "Bearer 86808680"
  const password = authHeader.startsWith("Bearer ") 
    ? authHeader.slice(7).trim() 
    : authHeader.trim();

  const expectedPassword = process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD;
  return password === expectedPassword;
}

// CORS headers for convenience
function getCorsHeaders(request: Request) {
  const origin = request.headers.get("origin") || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}

// GET: Retrieve all activities
export async function GET(request: Request) {
  const corsHeaders = getCorsHeaders(request);

  if (!authenticate(request)) {
    return NextResponse.json(
      { error: "Unauthorized. Invalid admin password." },
      { status: 401, headers: corsHeaders }
    );
  }

  try {
    let logs = [];
    try {
      const fileData = await fs.readFile(DATA_FILE, "utf-8");
      logs = JSON.parse(fileData);
    } catch {
      // File doesn't exist yet, which is fine, return empty list
    }

    if (!Array.isArray(logs)) {
      logs = [];
    }

    return NextResponse.json(logs, { status: 200, headers: corsHeaders });
  } catch (error: any) {
    console.error("Error reading admin activities:", error);
    return NextResponse.json(
      { error: error.message || "Failed to read activities" },
      { status: 500, headers: corsHeaders }
    );
  }
}

// DELETE: Clear all activities
export async function DELETE(request: Request) {
  const corsHeaders = getCorsHeaders(request);

  if (!authenticate(request)) {
    return NextResponse.json(
      { error: "Unauthorized. Invalid admin password." },
      { status: 401, headers: corsHeaders }
    );
  }

  try {
    // Write empty array to the file
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), "utf-8");

    return NextResponse.json(
      { success: true, message: "Logs cleared successfully" },
      { status: 200, headers: corsHeaders }
    );
  } catch (error: any) {
    console.error("Error clearing admin activities:", error);
    return NextResponse.json(
      { error: error.message || "Failed to clear activities" },
      { status: 500, headers: corsHeaders }
    );
  }
}
