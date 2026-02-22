export function Footer() {
  return (
    <footer className="px-6 py-12 lg:px-8 bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="text-2xl text-zinc-50 mb-2">bookd</div>
            <p className="text-sm text-zinc-500 max-w-md">
              Event planning made calm and organized. Built for event planners, organizers, and teams who value clarity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="text-zinc-50 mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-50 mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-zinc-300 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-50 mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2026 bookd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@bookd.co" className="hover:text-zinc-300 transition-colors">
              hello@bookd.co
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-zinc-600 text-center">
          We respect your privacy. Your data is never shared or sold. Read our{" "}
          <a href="#" className="text-amber-600 hover:text-amber-500">
            privacy policy
          </a>
          .
        </div>
      </div>
    </footer>
  );
}