import { CheckCircle2, Circle, Calendar, Mail, Phone, Building2, MoreHorizontal } from "lucide-react";

export function ProductPreview() {
  return (
    <section className="px-6 py-20 lg:px-8 bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-zinc-50 mb-4">
            Everything you need, nothing you don't
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Built for event planners who need clarity, not complexity.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16">
          <h3 className="text-sm text-zinc-500 mb-4 ml-1">DASHBOARD</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 px-8 py-6 border-b border-zinc-800">
              <h4 className="text-2xl text-zinc-50 mb-2">Summer Corporate Retreat 2026</h4>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  June 15-17, 2026
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  On track
                </span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
              <div className="p-6">
                <div className="text-sm text-zinc-500 mb-2">Total Tasks</div>
                <div className="text-3xl text-zinc-50">47</div>
                <div className="text-sm text-zinc-400 mt-1">32 completed</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-zinc-500 mb-2">Active Vendors</div>
                <div className="text-3xl text-zinc-50">12</div>
                <div className="text-sm text-zinc-400 mt-1">3 pending responses</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-zinc-500 mb-2">Budget Used</div>
                <div className="text-3xl text-zinc-50">$42,500</div>
                <div className="text-sm text-zinc-400 mt-1">of $65,000</div>
              </div>
            </div>
          </div>
        </div>

        {/* Task List Preview */}
        <div className="mb-16">
          <h3 className="text-sm text-zinc-500 mb-4 ml-1">TASK LIST</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-8 py-5 border-b border-zinc-800 bg-zinc-900/50">
              <h4 className="text-lg text-zinc-50">Upcoming Tasks</h4>
            </div>
            <div className="divide-y divide-zinc-800/50">
              {[
                { title: "Confirm catering headcount", status: "done", priority: "high", date: "Feb 8" },
                { title: "Send venue layout to team", status: "done", priority: "medium", date: "Feb 7" },
                { title: "Review AV equipment proposal", status: "pending", priority: "high", date: "Feb 10" },
                { title: "Book ground transportation", status: "pending", priority: "medium", date: "Feb 12" },
                { title: "Finalize room assignments", status: "pending", priority: "low", date: "Feb 15" },
              ].map((task, index) => (
                <div key={index} className="px-8 py-4 hover:bg-zinc-800/30 transition-colors flex items-center gap-4">
                  {task.status === "done" ? (
                    <CheckCircle2 className="size-5 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <Circle className="size-5 text-zinc-700 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className={`text-zinc-50 ${task.status === "done" ? "line-through text-zinc-600" : ""}`}>
                      {task.title}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 text-xs rounded-md border ${
                      task.priority === "high" 
                        ? "bg-red-500/10 text-red-400 border-red-500/20" 
                        : task.priority === "medium"
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        : "bg-zinc-800 text-zinc-400 border-zinc-700"
                    }`}>
                      {task.priority}
                    </span>
                    <span className="text-sm text-zinc-500 min-w-[3rem] text-right">{task.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact List Preview */}
        <div>
          <h3 className="text-sm text-zinc-500 mb-4 ml-1">CONTACTS</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-8 py-5 border-b border-zinc-800 bg-zinc-900/50">
              <h4 className="text-lg text-zinc-50">Event Vendors</h4>
            </div>
            <div className="divide-y divide-zinc-800/50">
              {[
                { name: "Sarah Chen", company: "Grand Oak Catering", role: "Head Chef", email: "sarah@grandoak.com", phone: "(555) 123-4567", status: "active" },
                { name: "Michael Torres", company: "Soundwave AV", role: "Technical Director", email: "m.torres@soundwave.co", phone: "(555) 234-5678", status: "pending" },
                { name: "Jennifer Park", company: "Bloom & Co. Florals", role: "Lead Designer", email: "jennifer@bloomco.com", phone: "(555) 345-6789", status: "active" },
              ].map((contact, index) => (
                <div key={index} className="px-8 py-5 hover:bg-zinc-800/30 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-amber-600/10 border border-amber-600/20 flex items-center justify-center text-amber-600">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-zinc-50">{contact.name}</div>
                          <div className="text-sm text-zinc-500">{contact.role}</div>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-1">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <Building2 className="size-4 text-zinc-600" />
                          {contact.company}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <Mail className="size-4 text-zinc-600" />
                          {contact.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <Phone className="size-4 text-zinc-600" />
                          {contact.phone}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 text-xs rounded-md border ${
                        contact.status === "active" 
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}>
                        {contact.status}
                      </span>
                      <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                        <MoreHorizontal className="size-4 text-zinc-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}