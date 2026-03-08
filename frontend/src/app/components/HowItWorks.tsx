import { ChartNoAxesColumn, QrCode, Ticket } from "lucide-react";

const steps = [
  {
    icon: Ticket,
    step: "01",
    title: "Set up the event",
    description: "Launch the page, configure tickets, and keep guest list logic in one place.",
    details: [
      "Free, paid, and comp ticket types",
      "Simple event info and capacity settings",
      "Team-ready before launch night",
    ],
  },
  {
    icon: QrCode,
    step: "02",
    title: "Run the door on mobile",
    description: "Scan QR codes, resolve edge cases quickly, and keep entry moving.",
    details: [
      "Fast attendee lookup",
      "Manual override when needed",
      "Clear states for every arrival",
    ],
  },
  {
    icon: ChartNoAxesColumn,
    step: "03",
    title: "Watch sales and attendance live",
    description: "See what sold, what scanned, and what still needs attention while the event is active.",
    details: [
      "Revenue and attendance in one dashboard",
      "Useful for organizers and volunteers",
      "Less cleanup after the event",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="workflow" className="px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl sm:mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#B8FF66]">
            How it works
          </p>
          <h2 className="mt-3 text-3xl text-zinc-50 sm:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-lg">
            bookd follows the event lifecycle: launch, check in, monitor live.
          </p>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="min-w-[280px] snap-start rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 sm:min-w-0 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B8FF66] text-zinc-950">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Step {step.step}
                  </span>
                </div>

                <h3 className="mt-5 text-xl text-zinc-50 sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
                  {step.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-zinc-300">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#B8FF66]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
