export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-zinc-400 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <div className="text-2xl text-zinc-50">bookd</div>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Event ticketing and operations for teams that need sales, check-in, and attendee flow in one system.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <h4 className="mb-3 text-sm text-zinc-50">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#product" className="transition-colors hover:text-zinc-300">Product</a></li>
                <li><a href="#features" className="transition-colors hover:text-zinc-300">Features</a></li>
                <li><a href="#workflow" className="transition-colors hover:text-zinc-300">How it works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm text-zinc-50">Action</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#cta" className="transition-colors hover:text-zinc-300">Join waitlist</a></li>
                <li><a href="mailto:hello@bookd.co" className="transition-colors hover:text-zinc-300">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 bookd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@bookd.co" className="transition-colors hover:text-zinc-300">
              hello@bookd.co
            </a>
            <a href="#cta" className="transition-colors hover:text-zinc-300">
              Request access
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
