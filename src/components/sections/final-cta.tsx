import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-black py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-black to-black p-12 sm:p-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-orange-300 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
            Ready to launch?
          </h2>
          <p className="mt-5 text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Starter is free forever. Spin up your first workflow in under a
            minute.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#signup"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:from-orange-400 hover:to-yellow-400 transition-colors duration-150 cursor-pointer"
            >
              Get started for free
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition-colors duration-150 cursor-pointer"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
