import { NextResponse } from "next/server";

/*
 * Waitlist capture — the only input on the site (§4 Panel 6).
 *
 * This endpoint is public and unauthenticated, and in production it writes
 * straight to the live Airtable base. Two guards keep casual abuse off that
 * table: a format check on the address, and a per-IP rate limit.
 */

// RFC-5321 caps the whole address at 254 characters.
const MAX_EMAIL_LENGTH = 254;

// Pragmatic shape check: something, @, something, dot, something, no spaces.
// Deliberately not a full RFC-5322 grammar — that rejects real addresses and
// accepts unusable ones. Deliverability is proven by sending, not by regex.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Per-IP rate limit. In-memory, so it resets on cold start and is not shared
// between concurrent serverless instances — a speed bump against junk-
// flooding, not a hard guarantee. Proportionate for a waitlist form; move to
// a shared store only if real abuse shows up.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const MAX_TRACKED_IPS = 5000;

const attempts = new Map();

function isRateLimited(ip) {
  const now = Date.now();

  // Bound the map so a spray of spoofed IPs cannot grow it without limit.
  if (attempts.size > MAX_TRACKED_IPS) {
    for (const [key, times] of attempts) {
      if (times.every((t) => now - t >= WINDOW_MS)) attempts.delete(key);
    }
  }

  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    attempts.set(ip, recent);
    return true;
  }

  recent.push(now);
  attempts.set(ip, recent);
  return false;
}

function clientIp(request) {
  // Vercel sets x-forwarded-for; the client address is the first entry.
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request) {
  try {
    if (isRateLimited(clientIp(request))) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    // A malformed body is the caller's mistake, not a server fault.
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const raw = body?.email;
    if (typeof raw !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const email = raw.trim().toLowerCase();
    if (
      email.length === 0 ||
      email.length > MAX_EMAIL_LENGTH ||
      !EMAIL_PATTERN.test(email)
    ) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // §8.10: only production writes to the live Airtable table. Preview and
    // local submissions log only. VERCEL_ENV, not NODE_ENV — preview builds
    // run with NODE_ENV=production too.
    if (process.env.VERCEL_ENV !== "production") {
      return NextResponse.json({ success: true, preview: true });
    }

    const response = await fetch(
      "https://api.airtable.com/v0/appaHeYgfCpWRkVLp/Waitlist",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: email,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to save to Airtable");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save email" }, { status: 500 });
  }
}
