import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  FolderOpen, 
  Calendar, 
  MessageSquare,
  Bell,
  FileText,
  PieChart,
  Link2,
  Lock,
  Smartphone
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Event Dashboard",
    description: "See everything at a glance. Track progress, budget, vendors, and deadlines in one unified view.",
  },
  {
    icon: CheckSquare,
    title: "Smart Task Management",
    description: "Create custom workflows, set priorities, and track completion. Nothing slips through the cracks.",
  },
  {
    icon: Users,
    title: "Contact Management",
    description: "Store vendor details, client preferences, and communication history. All searchable and organized.",
  },
  {
    icon: FolderOpen,
    title: "File Organization",
    description: "Contracts, floor plans, mood boards—keep every document attached to the right event.",
  },
  {
    icon: Calendar,
    title: "Timeline Builder",
    description: "Visual timelines that show what's happening when. Share with your team and clients.",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Internal notes and client messages in one place. Never lose context in email threads.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automated follow-ups for vendors, deadlines, and payments. Stay ahead without the mental load.",
  },
  {
    icon: FileText,
    title: "Budget Tracking",
    description: "Track expenses, payments, and invoices. Know exactly where you stand financially.",
  },
  {
    icon: PieChart,
    title: "Event Analytics",
    description: "Learn from past events. See what works, what doesn't, and improve your process.",
  },
  {
    icon: Link2,
    title: "Integrations",
    description: "Connect with calendar apps, email, and payment tools. Work the way you already work.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Client data is encrypted and protected. GDPR compliant. Your privacy is non-negotiable.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access everything on the go. Check tasks, update statuses, and respond to vendors from anywhere.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-20 lg:px-8 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-zinc-50 mb-4">
            Everything you need to run flawless events
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Powerful features designed specifically for event planners. No bloat, no complexity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="group relative p-6 bg-zinc-800/50 backdrop-blur border border-zinc-800 rounded-xl hover:border-zinc-700 hover:bg-zinc-800/80 transition-all"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#5B7335]/10 border border-[#5B7335]/20 group-hover:bg-[#5B7335]/20 transition-colors">
                  <Icon className="size-6 text-[#5B7335]" />
                </div>
                <h3 className="text-lg text-zinc-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
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



