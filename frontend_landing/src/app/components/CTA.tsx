import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-6 py-20 lg:px-8 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white border-t border-zinc-800">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl text-zinc-50 mb-6">
          Ready to reduce the chaos?
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Join the waitlist for early access. We'll notify you when bookd launches in March 2026.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-12 bg-zinc-800/50 backdrop-blur-sm border-zinc-700 text-zinc-50 placeholder:text-zinc-500"
          />
          <Button className="bg-amber-600 text-zinc-950 hover:bg-amber-700 h-12 px-8">
            Join waitlist
            <ArrowRight className="size-4" />
          </Button>
        </form>
        
        <p className="text-sm text-zinc-500 mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}