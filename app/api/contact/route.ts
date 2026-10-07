import { NextResponse } from "next/server";

// Forwards contact submissions to a Google Sheet via a Google Apps Script
// web app. The script URL is server-side only, so it never ships to the
// browser. Set CONTACT_SHEET_WEBAPP_URL in Vercel (the /exec URL from
// Apps Script > Deploy > Web app) and redeploy.
// Lightweight status check: reports whether server-side delivery is configured.
// (No sheet writes; safe to visit any time.)
export async function GET() {
  return NextResponse.json({
    contactDelivery: process.env.CONTACT_SHEET_WEBAPP_URL
      ? "configured"
      : "missing",
  });
}

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
    // Google Apps Script web apps answer a POST with a 302 redirect to
    // script.googleusercontent.com carrying the script's output. A default
    // fetch follows that redirect as a GET, which mangles the response even
    // though the row was already appended. So the redirect is inspected
    // manually: a redirect to googleusercontent means the script ran.
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
      redirect: "manual",
    });
    const location = res.headers.get("location") || "";
    const delivered =
      res.ok ||
      ((res.status === 301 || res.status === 302 || res.status === 303) &&
        location.includes("googleusercontent.com"));
    if (!delivered) throw new Error(`sheet web app responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact sheet forward failed:", err);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
