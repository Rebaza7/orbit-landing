import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How is Orbit different from Zapier or n8n?",
    a: "Orbit is AI-native from the first primitive. Instead of wiring triggers and actions by hand, you describe the outcome and the planner builds the flow. When you need precision, drop into the visual canvas — it's the same graph underneath.",
  },
  {
    q: "Can I self-host?",
    a: "Yes. Enterprise customers can deploy Orbit into their own cloud (AWS, GCP, or bare metal). Starter and Pro run on our managed multi-tenant platform.",
  },
  {
    q: "What happens if a workflow fails mid-run?",
    a: "Every step is checkpointed. Orbit retries with exponential backoff, surfaces the failure in the trace view, and lets you resume from the failing step once the upstream issue is resolved.",
  },
  {
    q: "How does pricing scale?",
    a: "You pay for active seats and monthly runs. Additional runs are billed in blocks of 10k. There are no charges for stored data or connection credentials.",
  },
  {
    q: "Is there a free trial?",
    a: "Starter is free forever. Pro includes a 14-day trial with no credit card required — you can upgrade or downgrade at any time.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-black py-24 sm:py-32 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-orange-400 mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Questions, answered.
          </h2>
        </div>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
                >
                  <span className="text-lg font-medium text-white group-hover:text-orange-200 transition-colors duration-150">
                    {item.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 shrink-0 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-45 text-orange-400" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-neutral-400 leading-relaxed pr-10">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
