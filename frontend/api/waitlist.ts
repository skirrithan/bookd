import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      email,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
    } = req.body || {};

    // Basic email validation
    const cleanedEmail = String(email || "")
      .trim()
      .toLowerCase();

    if (!cleanedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanedEmail)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Create Supabase client using SERVER-ONLY key
    const supabase = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_SERVICE_ROLE_KEY as string
    );

    const { error } = await supabase.from("waitlist").insert([
      {
        email: cleanedEmail,
        referrer: referrer || null,
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
      },
    ]);

    // Duplicate email (Postgres unique violation)
    if (error) {
      if (error.code === "23505") {
        return res.status(200).json({
          ok: true,
          already: true,
        });
      }

      return res.status(500).json({
        error: error.message,
      });
    }

    return res.status(200).json({
      ok: true,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Server error",
    });
  }
}