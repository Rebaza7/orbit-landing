import { Orbit, Github, Twitter, Linkedin } from "lucide-react";

const cols = [
  {
    heading: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Docs", "API reference", "Status", "Security"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "DPA", "Cookies"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <a
              href="#top"
              className="flex items-center gap-2 text-white font-semibold"
            >
              <Orbit
                className="w-5 h-5 text-orange-400"
                aria-hidden="true"
              />
              <span>Orbit</span>
            </a>
            <p className="mt-4 text-sm text-neutral-500 max-w-xs leading-relaxed">
              AI-native workflow automation for the next generation of teams.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-neutral-500 hover:text-white transition-colors duration-150"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-neutral-500 hover:text-white transition-colors duration-150"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-neutral-500 hover:text-white transition-colors duration-150"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.heading}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {c.heading}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-neutral-500 hover:text-white transition-colors duration-150"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Orbit Labs, Inc. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Crafted for teams who ship.
          </p>
        </div>
      </div>
    </footer>
  );
}
