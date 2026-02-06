import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="text-2xl text-zinc-50">
              bookd
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                How it works
              </a>
              <a href="#pricing" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900">
              Sign in
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-zinc-950">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}