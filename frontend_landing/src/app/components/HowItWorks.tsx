import { FolderOpen, CheckSquare, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: FolderOpen,
    step: "01",
    title: "Create an event workspace",
    description: "One workspace per event. All your tasks, contacts, files, and notes in a single view.",
  },
  {
    icon: CheckSquare,
    step: "02",
    title: "Track what matters",
    description: "Custom task lists and deadlines. See exactly what needs your attention right now.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Keep everyone in sync",
    description: "Shared timelines and automatic reminders. Your team and vendors always know what's next.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-20 lg:px-8 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-zinc-50 mb-4">
            How it works
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A simple workflow designed for the way you actually plan events.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-600">
                  <Icon className="size-7 text-zinc-950" />
                </div>
                <div className="text-sm text-amber-600 mb-2 tracking-wide">
                  STEP {step.step}
                </div>
                <h3 className="text-2xl text-zinc-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-lg">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}