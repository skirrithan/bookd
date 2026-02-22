import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#141414]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="text-2xl text-zinc-50">
              bookd
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                How it works
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-zinc-100 hover:bg-[#0b0b0b]"
            >
              Sign in
            </Button>
            <Button className="bg-[#5B7335] hover:bg-[#4D632D] text-zinc-950">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}



