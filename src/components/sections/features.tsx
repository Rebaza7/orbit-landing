import {
  Workflow,
  Zap,
  ShieldCheck,
  Bot,
  GitBranch,
  LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

const features: Feature[] = [
  {
    icon: Bot,
    title: "AI-native automation",
    body: "Describe the outcome; Orbit wires the steps. Large-model reasoning plans, drafts, and executes workflows end-to-end.",
  },
  {
    icon: Workflow,
    title: "Visual flow builder",
    body: "A canvas that feels like thinking. Drag, connect, branch — no YAML, no webhooks you have to babysit.",
  },
  {
    icon: Zap,
    title: "Sub-second triggers",
    body: "Event-driven runtime built on a real-time engine. Orbit reacts the moment something happens, not minutes later.",
  },
  {
    icon: GitBranch,
    title: "200+ integrations",
    body: "Slack, Linear, Notion, Stripe, GitHub, Salesforce. First-class APIs for whatever isn't on the list yet.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    body: "SOC 2 Type II, SSO/SAML, role-based access, and full audit trails. Your data stays in your region.",
  },
  {
    icon: LineChart,
    title: "Observability built-in",
    body: "Every run traced, every step inspectable. Find the broken edge in seconds, not after the Slack post-mortem.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-black py-24 sm:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-orange-400 mb-3">
            Everything you need
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            A single surface for your whole workflow.
          </h2>
          <p className="mt-5 text-lg text-neutral-400 leading-relaxed">
            Orbit replaces the tangle of scripts, Zaps, and cron jobs with one
            coherent system. Build in minutes; scale to millions of runs.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {features.map((f) => (
            <li
              key={f.title}
              className="bg-black p-8 hover:bg-neutral-950 transition-colors duration-150"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-400/20 flex items-center justify-center mb-5">
                <f.icon
                  className="w-5 h-5 text-orange-400"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
