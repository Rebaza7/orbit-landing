const steps = [
  {
    n: "01",
    title: "Connect your stack",
    body: "Link the tools your team already uses. OAuth in; no IT ticket required.",
  },
  {
    n: "02",
    title: "Describe the outcome",
    body: "Type it, draw it, or import a template. Orbit's planner turns intent into a flow.",
  },
  {
    n: "03",
    title: "Launch and observe",
    body: "Ship to production with one click. Every run is traced, versioned, and rollback-safe.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="bg-neutral-950 py-24 sm:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-orange-400 mb-3">
            How it works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            From idea to orbit in three steps.
          </h2>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-0 right-0 top-[3.25rem] h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"
          />

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {steps.map((s, i) => (
              <li key={s.n} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-black border border-orange-400/40 flex items-center justify-center text-sm font-semibold text-orange-400 tabular-nums">
                    {s.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="md:hidden flex-1 h-px bg-gradient-to-r from-orange-400/40 to-transparent"
                    />
                  )}
                </div>
                <div className="p-8 rounded-2xl bg-black border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
