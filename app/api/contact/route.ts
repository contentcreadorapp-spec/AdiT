import { NextResponse } from "next/server";

// Forwards contact submissions to a Google Sheet via a Google Apps Script
// web app. The script URL is server-side only, so it never ships to the
// browser. Set CONTACT_SHEET_WEBAPP_URL in Vercel (the /exec URL from
// Apps Script > Deploy > Web app) and redeploy.
export async function POST(req: Request) {
  const webappUrl = process.env.CONTACT_SHEET_WEBAPP_URL;
  if (!webappUrl) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let data: {
    name?: unknown;
    email?: unknown;
    projectType?: unknown;
    message?: unknown;
  };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  try {
    // text/plain avoids a CORS preflight; Apps Script parses postData.contents.
    const res = await fetch(webappUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name,
        email,
        projectType: String(data.projectType ?? "Not specified"),
        message,
      }),
    });
    if (!res.ok) throw new Error(`sheet web app responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact sheet forward failed:", err);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
