import Hero from "@/components/ui/animated-shader-hero";
import Nav from "@/components/sections/nav";
import Logos from "@/components/sections/logos";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import UseCases from "@/components/sections/use-cases";
import Testimonials from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function App() {
  return (
    <div id="top" className="w-full bg-black text-white">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main">
      <Hero
        trustBadge={{
          text: "Trusted by forward-thinking teams.",
          icons: ["✨"],
        }}
        headline={{
          line1: "Launch Your",
          line2: "Workflow Into Orbit",
        }}
        subtitle="Supercharge productivity with AI-powered automation and integrations built for the next generation of teams — fast, seamless, and limitless."
        buttons={{
          primary: {
            text: "Get started for free",
            onClick: () =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" }),
          },
          secondary: {
            text: "Explore features",
            onClick: () =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" }),
          },
        }}
      />
      <Logos />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
