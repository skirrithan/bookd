import { 
  BarChart3,
  CreditCard,
  QrCode,
  Smartphone,
  Ticket,
  UserRoundCheck,
} from "lucide-react";

const features = [
  {
    icon: Ticket,
    title: "Ticketing that matches the event",
    description: "Paid, free, guest list, and last-minute comps in one checkout flow.",
  },
  {
    icon: QrCode,
    title: "Fast QR check-in",
    description: "Scan at the door, handle issues quickly, and keep lines moving on mobile.",
  },
  {
    icon: UserRoundCheck,
    title: "Clear attendee states",
    description: "See who paid, who arrived, who is comped, and who still needs attention.",
  },
  {
    icon: BarChart3,
    title: "Live sales visibility",
    description: "Track volume, revenue, and pacing without waiting for a spreadsheet export.",
  },
  {
    icon: Smartphone,
    title: "Built for the phone first",
    description: "Useful on-site when you're moving, scanning, and answering attendee questions.",
  },
  {
    icon: CreditCard,
    title: "Cleaner organizer economics",
    description: "Transparent fees and payout visibility so you know what the event is making.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl sm:mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#B8FF66]">
            Why bookd
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-zinc-50 sm:text-5xl">
            A tighter system for selling tickets and running the room.
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-lg">
            bookd is for teams that need ticketing, door operations, and sales data to work together.
          </p>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="group min-w-[272px] snap-start rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 transition-all hover:border-[#B8FF66]/30 hover:bg-white/[0.06] sm:min-w-0 sm:p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#B8FF66]/20 bg-[#B8FF66]/10 transition-colors group-hover:bg-[#B8FF66]/16">
                  <Icon className="size-5 text-[#B8FF66]" />
                </div>
                <h3 className="text-base text-zinc-50 sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
