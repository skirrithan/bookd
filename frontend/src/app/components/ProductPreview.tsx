import {
  ArrowUpRight,
  Calendar,
  CreditCard,
  QrCode,
  Ticket,
  Users,
} from "lucide-react";

export function ProductPreview() {
  return (
    <section id="product" className="px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#B8FF66]">
              Product view
            </p>
            <h2 className="mt-3 text-3xl leading-tight text-zinc-50 sm:text-5xl">
              One event workspace from launch to last scan.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Not a generic project board. bookd is designed around ticket sales, attendee flow,
            and what operators need on event day.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
            <div className="border-b border-white/10 px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-zinc-500">
                    <Calendar className="size-3.5" />
                    Spring showcase
                  </div>
                  <h3 className="mt-2 text-xl text-white sm:text-2xl">
                    Event command center
                  </h3>
                </div>
                <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  Sales ahead of plan
                </div>
              </div>
            </div>
            <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
              <div className="rounded-3xl border border-white/8 bg-[#0a0a0a] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white">Ticket mix</p>
                    <p className="text-xs text-zinc-500">What is moving right now</p>
                  </div>
                  <Ticket className="size-4 text-[#B8FF66]" />
                </div>
                <div className="space-y-3">
                  {[
                    ["General admission", "148 sold", "74%"],
                    ["VIP", "36 sold", "18%"],
                    ["Guest list", "16 approved", "8%"],
                  ].map(([label, value, share]) => (
                    <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-200">{label}</span>
                        <span className="text-zinc-500">{share}</span>
                      </div>
                      <div className="mt-2 text-sm text-zinc-400">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/8 bg-[#0a0a0a] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white">Door activity</p>
                    <p className="text-xs text-zinc-500">Everything at a glance</p>
                  </div>
                  <QrCode className="size-4 text-[#B8FF66]" />
                </div>
                <div className="space-y-3">
                  {[
                    ["Scanned in", "198"],
                    ["Duplicates blocked", "4"],
                    ["Manual approvals", "3"],
                    ["Walk-up conversions", "18"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3 text-sm"
                    >
                      <span className="text-zinc-400">{label}</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/8 bg-[#0a0a0a] p-4 sm:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white">Organizer summary</p>
                    <p className="text-xs text-zinc-500">The numbers the team needs to act on</p>
                  </div>
                  <ArrowUpRight className="size-4 text-[#B8FF66]" />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["Gross sales", "$5,420", CreditCard],
                    ["Expected arrivals", "233", Users],
                    ["Capacity remaining", "67", Ticket],
                  ].map(([label, value, Icon]) => (
                    <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                        <Icon className="size-3.5 text-[#B8FF66]" />
                        {label}
                      </div>
                      <div className="mt-3 text-2xl text-white">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "For event organizers",
                body: "Track performance, payout visibility, and the door from one view.",
              },
              {
                title: "For planners and hosts",
                body: "Handle attendees, guest lists, and event-day issues without switching tabs.",
              },
              {
                title: "For student teams",
                body: "Give volunteers a mobile check-in workflow that is simple under pressure.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-base text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
