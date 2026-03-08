import { Button } from "./ui/button";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  QrCode,
  ScanLine,
  Ticket,
  Users,
} from "lucide-react";

export function Hero() {
  const personas = [
    "Event organizers",
    "Campus teams",
    "Planners",
    "Venue hosts",
  ];

  const quickStats = [
    { label: "Live sales", value: "247" },
    { label: "Checked in", value: "198" },
    { label: "Pending comps", value: "12" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(184,255,102,0.18),transparent_48%)]" />
      <div className="absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full bg-[#B8FF66]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8FF66]/20 bg-[#B8FF66]/8 px-3 py-1 text-xs text-[#d7ffad] sm:text-sm">
            <BadgeCheck className="size-4" />
            Ticketing, check-in, and attendee ops in one place
          </div>

          <h1 className="max-w-xl text-[2.5rem] leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Run the event,
            <span className="block text-[#B8FF66]">not five separate tools.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            bookd helps organizers, planners, student teams, and hosts sell tickets,
            scan QR codes, manage attendees, and track sales from one event dashboard.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {personas.map((persona) => (
              <span
                key={persona}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 sm:text-sm"
              >
                {persona}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-[#B8FF66] px-6 text-base text-zinc-950 hover:bg-[#a2ed53]"
            >
              <a href="#cta">
                Join the pilot waitlist
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 border border-white/10 bg-white/[0.03] px-6 text-base text-zinc-100 hover:bg-white/[0.06]"
            >
              <a href="#product">See the product flow</a>
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
            <span>Launching with a private early-access group</span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:inline-block" />
            <span>No spam. Product updates only.</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0b0b]">
              <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(184,255,102,0.12),rgba(184,255,102,0.02))] px-4 py-4 sm:px-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                      Tonight's event
                    </p>
                    <h2 className="mt-2 text-xl text-white sm:text-2xl">
                      Rooftop Welcome Party
                    </h2>
                    <p className="mt-1 text-sm text-zinc-400">
                      Box office, guest list, check-in, and sales tracking
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    Doors open in 48m
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-3 sm:grid-cols-3 sm:p-4">
                {quickStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      {item.label}
                    </div>
                    <div className="mt-2 text-2xl text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 p-3 pt-0 sm:grid-cols-[1.1fr,0.9fr] sm:p-4 sm:pt-0">
                <div className="rounded-2xl border border-white/8 bg-[#090909] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm text-white">Check-in queue</h3>
                      <p className="text-xs text-zinc-500">Fast QR-based entry</p>
                    </div>
                    <div className="rounded-full bg-[#B8FF66]/12 px-2.5 py-1 text-xs text-[#d7ffad]">
                      4 scanners live
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ["Main door", "86 scanned", ScanLine],
                      ["VIP", "24 scanned", QrCode],
                      ["Walk-ups", "18 tickets sold", Ticket],
                    ].map(([label, value, Icon]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl border border-[#B8FF66]/20 bg-[#B8FF66]/10 p-2">
                            <Icon className="size-4 text-[#B8FF66]" />
                          </div>
                          <span className="text-sm text-zinc-200">{label}</span>
                        </div>
                        <span className="text-sm text-zinc-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-sm text-white">
                      <BarChart3 className="size-4 text-[#B8FF66]" />
                      Sales pulse
                    </div>
                    <div className="mt-4 flex h-24 items-end gap-2">
                      {[28, 45, 38, 62, 74, 68, 91].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-full bg-[linear-gradient(180deg,#d9ffb0,#6a9035)]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">
                      Peaks are visible before doors open.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-sm text-white">
                      <Users className="size-4 text-[#B8FF66]" />
                      Attendee status
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        ["Paid", "212"],
                        ["Guest list", "21"],
                        ["Needs help", "3"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between text-sm">
                          <span className="text-zinc-400">{label}</span>
                          <span className="text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
