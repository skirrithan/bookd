import { FolderOpen, CheckSquare, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: FolderOpen,
    step: "01",
    title: "Create an event workspace",
    description: "One workspace per event. All your tasks, contacts, files, and notes in a single view.",
    details: [
      "Import client details and requirements",
      "Set your event date and budget",
      "Invite team members to collaborate",
    ],
  },
  {
    icon: CheckSquare,
    step: "02",
    title: "Track what matters",
    description: "Custom task lists and deadlines. See exactly what needs your attention right now.",
    details: [
      "Build task lists from templates or scratch",
      "Assign tasks to team members",
      "Set priorities and due dates",
    ],
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Keep everyone in sync",
    description: "Shared timelines and automatic reminders. Your team and vendors always know what's next.",
    details: [
      "Share timelines with clients and vendors",
      "Get automatic reminders for follow-ups",
      "Track communication history",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20 lg:px-8 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-zinc-50 mb-4">
            How it works
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From chaos to clarity in three simple steps. Set up your first event in minutes.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={step.step} className="relative">
                {/* Connector Line - only show if not last */}
                {!isLast && (
                  <div className="hidden lg:block absolute left-7 top-20 bottom-0 w-px bg-gradient-to-b from-amber-600/50 to-transparent" 
                    style={{ height: 'calc(100% + 2rem)' }} 
                  />
                )}
                
                <div className="grid lg:grid-cols-[auto,1fr] gap-6 lg:gap-8">
                  {/* Icon and Number */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="relative">
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-600 shadow-lg shadow-amber-600/20">
                        <Icon className="size-7 text-zinc-950" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-zinc-800/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-amber-600 tracking-wide font-medium">
                        STEP {step.step}
                      </span>
                      <span className="flex-1 h-px bg-gradient-to-r from-amber-600/20 to-transparent" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl text-zinc-50 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-lg mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-zinc-300">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-6">
            Ready to see it in action?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 hover:text-zinc-100 transition-all">
            <span>Watch demo video</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}