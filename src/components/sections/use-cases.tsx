import SkewCards, { type GradientCard } from "@/components/ui/gradient-card-showcase";

const cards: GradientCard[] = [
  {
    title: "Engineering ops",
    desc: "Automate on-call handoffs, PR triage, and deploy gates. Ship faster without the midnight pages.",
    gradientFrom: "#ff9a00",
    gradientTo: "#ff2d55",
    cta: { label: "See playbooks", href: "#features" },
  },
  {
    title: "Revenue operations",
    desc: "Route leads, score pipeline, and keep forecasts clean. Your CRM finally tells the truth.",
    gradientFrom: "#ffbc00",
    gradientTo: "#ff5e3a",
    cta: { label: "See playbooks", href: "#features" },
  },
  {
    title: "Data teams",
    desc: "Monitor pipelines, catch schema drift, and trace lineage end-to-end. Trust restored.",
    gradientFrom: "#ffe066",
    gradientTo: "#ff7a00",
    cta: { label: "See playbooks", href: "#features" },
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="bg-black py-24 sm:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-8">
          <p className="text-sm font-medium text-orange-400 mb-3">Use cases</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Built for the teams who ship the thing.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Orbit adapts to how your team already works. Pick a playbook, wire it to your stack, go live the same day.
          </p>
        </div>

        <SkewCards
          cards={cards}
          className="flex justify-center items-center flex-wrap"
        />
      </div>
    </section>
  );
}
