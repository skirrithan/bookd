import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-zinc-50 mb-6">
          One workspace for every event
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Stop losing details across tools. Track tasks, contacts, and files in one place—from first call to final invoice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[rgb(0,150,225)] hover:bg-amber-700 text-[rgb(197,197,215)] px-8 py-6 h-auto text-lg"
          >
            Join the waitlist
            <ArrowRight className="size-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="lg"
            className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 px-8 py-6 h-auto text-lg border border-zinc-800"
          >
            See how it works
          </Button>
        </div>
        <p className="text-sm text-zinc-500 mt-6">
          Early access opens March 2026 · No credit card required
        </p>
      </div>
    </section>
  );
}