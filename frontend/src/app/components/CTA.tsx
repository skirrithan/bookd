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
    <section className="px-6 py-20 lg:px-8 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white border-t border-zinc-800">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl text-zinc-50 mb-6">
          Ready to reduce the chaos?
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Join the waitlist for early access. We'll notify you when bookd launches in March 2026.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="flex-1 h-12 bg-zinc-800/50 backdrop-blur-sm border-zinc-700 text-zinc-50 placeholder:text-zinc-500"
          />

          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-amber-600 text-zinc-950 hover:bg-amber-700 h-12 px-8"
          >
            {status === "loading" ? "Joining..." : "Join waitlist"}
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </form>

        {message && (
          <p
            className={`mt-6 text-sm ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-sm text-zinc-500 mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}