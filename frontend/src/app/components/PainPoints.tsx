import { FileQuestion, Users, Calendar } from "lucide-react";

const painPoints = [
  {
    icon: FileQuestion,
    title: "Stop losing things",
    description: "Every detail in one workspace. No more hunting through email threads or spreadsheets.",
  },
  {
    icon: Calendar,
    title: "Know what's next",
    description: "See what needs attention today. Nothing falls through the cracks.",
  },
  {
    icon: Users,
    title: "Keep everyone aligned",
    description: "Vendor contacts, client notes, and follow-ups—accessible to your whole team.",
  },
];

export function PainPoints() {
  return (
    <section className="px-6 py-20 lg:px-8 bg-[#0b0b0b]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-zinc-50 mb-4">
            Less chaos. More control.
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Event planning shouldn't mean scrambling. Get organized and stay that way.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="relative p-8 bg-zinc-800/50 backdrop-blur border border-zinc-800 rounded-2xl">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#5B7335]/10 border border-[#5B7335]/20">
                  <Icon className="size-6 text-[#5B7335]" />
                </div>
                <h3 className="text-xl text-zinc-50 mb-3">
                  {point.title}
                </h3>
                <p className="text-zinc-400">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



