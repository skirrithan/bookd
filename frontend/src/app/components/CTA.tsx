import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const params = new URLSearchParams(window.location.search);

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          referrer: document.referrer || null,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage(
        data?.already
          ? "You're already on the waitlist!"
          : "You're on the waitlist!"
      );
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section
      id="cta"
      className="px-5 py-14 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-5 text-white sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#B8FF66]">
              Early access
            </p>
            <h2 className="mt-3 text-3xl text-zinc-50 sm:text-5xl">
              Join the waitlist for the first bookd pilot.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-lg">
              Sign up if you run events and want early access to ticketing, QR check-in,
              attendee management, and live sales tracking in one product.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                "Private rollout for early teams",
                "Feedback-driven product access",
                "Updates as pilot spots open",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#090909] p-4 sm:p-5">
            <div className="mb-4">
              <h3 className="text-lg text-white">Get launch updates</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Tell us where to send early-access details.
              </p>
            </div>

            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                placeholder="you@team.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="h-12 border-white/10 bg-white/[0.04] text-zinc-50 placeholder:text-zinc-500"
              />

              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-12 bg-[#B8FF66] px-6 text-zinc-950 hover:bg-[#a2ed53]"
              >
                {status === "loading" ? "Joining..." : "Join the waitlist"}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>

            {message && (
              <p
                className={`mt-4 text-sm ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}

            <p className="mt-4 text-xs leading-5 text-zinc-500">
              Joining means you’ll hear when pilot access opens and what kinds of events bookd is
              best suited for first. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
