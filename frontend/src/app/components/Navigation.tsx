import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#top" className="text-2xl text-zinc-50">
              bookd
            </a>
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="#product"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                Product
              </a>
              <a
                href="#features"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                Features
              </a>
              <a
                href="#workflow"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                How it works
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              className="hidden text-zinc-400 hover:bg-[#101010] hover:text-zinc-100 sm:inline-flex"
            >
              <a href="#features">See the flow</a>
            </Button>
            <Button
              asChild
              className="bg-[#B8FF66] text-zinc-950 hover:bg-[#a2ed53]"
            >
              <a href="#cta">Join waitlist</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}



