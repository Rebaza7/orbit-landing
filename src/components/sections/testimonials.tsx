import { Quote } from "lucide-react";

const quotes = [
  {
    body: "We replaced 30+ Zaps and a cron server with a single Orbit workspace. Our ops team got its weekends back.",
    name: "Maya Patel",
    role: "Head of Operations, Nebula",
  },
  {
    body: "The planner is genuinely intelligent. I described a refund flow in English and it generated a version our engineers shipped unchanged.",
    name: "Luca Reyes",
    role: "CTO, Fieldnote",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-orange-400 mb-3">
            Customers
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Teams move faster on Orbit.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="p-8 rounded-2xl bg-neutral-950 border border-white/10"
            >
              <Quote
                className="w-6 h-6 text-orange-400 mb-6"
                aria-hidden="true"
              />
              <blockquote className="text-lg text-neutral-100 leading-relaxed">
                &ldquo;{q.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="text-white font-medium">{q.name}</span>
                <span className="text-neutral-500"> — {q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
