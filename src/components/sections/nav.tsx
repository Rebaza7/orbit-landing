import { useEffect, useState } from "react";
import { Orbit, Menu, X } from "lucide-react";

const links = [
  { id: "features", label: "Features" },
  { id: "how", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-white font-semibold tracking-tight"
          aria-label="Orbit home"
        >
          <Orbit className="w-5 h-5 text-orange-400" aria-hidden="true" />
          <span>Orbit</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className={`text-sm transition-colors duration-150 ${
                active === l.id
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#signin"
            className="hidden sm:inline-flex text-sm text-neutral-300 hover:text-white transition-colors duration-150"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors duration-150"
          >
            Get started
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition-colors duration-150"
          >
            {open ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-200 ease-out border-b border-white/10 bg-black/95 backdrop-blur-md ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav
          className="px-6 py-6 flex flex-col gap-1"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === l.id ? "true" : undefined}
              className={`py-3 text-base transition-colors duration-150 ${
                active === l.id
                  ? "text-white"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#signin"
              onClick={() => setOpen(false)}
              className="py-3 text-base text-neutral-300 hover:text-white transition-colors duration-150"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-white text-black text-base font-semibold hover:bg-neutral-200 transition-colors duration-150"
            >
              Get started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
