import { createClient } from "@supabase/supabase-js";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, referrer, utm_source, utm_medium, utm_campaign } = req.body || {};

    const cleanedEmail = String(email || "").trim().toLowerCase();
    if (!cleanedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanedEmail)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

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

    if (error) {
      // unique violation = already exists
      if ((error as any).code === "23505") {
        return res.status(200).json({ ok: true, already: true });
      }
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Server error" });
  }
}