import {
  Zap,
  DollarSign,
  Percent,
  QrCode,
  Wallet,
  BarChart3,
} from "lucide-react";

const ticketingFeatures = [
  {
    icon: Zap,
    title: "High-Volume Ticket Sales",
    description:
      "Seamless checkout built for 500–1,000+ attendees without performance issues.",
  },
  {
    icon: DollarSign,
    title: "Ultra-Low Booking Fees",
    description: "Dramatically lower than major platforms.",
  },
  {
    icon: Percent,
    title: "Transparent Organizer Fees",
    description:
      "Simple, predictable pricing. No hidden deductions.",
  },
  {
    icon: QrCode,
    title: "Instant QR Check-In",
    description:
      "Fast, reliable QR scanning at the door. No paper lists. No lag.",
  },
  {
    icon: Wallet,
    title: "Clean Payout Structure",
    description:
      "Organizers see exactly what they earn. Stripe-backed secure payments.",
  },
  {
    icon: BarChart3,
    title: "Live Sales Dashboard",
    description:
      "Track ticket sales in real time and monitor capacity instantly.",
  },
];

export function Ticketing() {
  return (
    <section className="px-6 py-20 lg:px-8 bg-[#050505]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-zinc-50 mb-4">
            Built-in ticketing that actually works
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Sell tickets directly from your event workspace.
            Fair pricing, instant payouts, zero headaches.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ticketingFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 bg-[#0b0b0b]/50 backdrop-blur border border-zinc-800 rounded-xl hover:border-[#5B7335]/30 hover:bg-[#0b0b0b]/80 transition-all"
              >
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-[#5B7335]/20 group-hover:border-[#5B7335]/40 transition-colors">
                  <Icon
                    className="size-6 text-[#5B7335]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl text-zinc-50 mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
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



