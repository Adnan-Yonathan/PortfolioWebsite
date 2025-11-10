import { Hero } from "@/components/ui/animated-hero";

const services = [
  {
    title: "Home Service Websites",
    body:
      "Modern site foundations for plumbers, HVAC teams, and contractors—live routing, lead forms, and schedules that feel effortless.",
  },
  {
    title: "Agency Partnerships",
    body:
      "Fractional design support for boutique agencies that need polished visuals, interaction kits, and rapid iterations.",
  },
  {
    title: "Software & Product Campaigns",
    body:
      "Product-focused marketing hubs with storytelling, motion, and analytics-ready sections for SaaS founders.",
  },
];

const workShowcase = [
  {
    tag: "Research + Strategy",
    title: "Future Homes Collective",
    body: "Immersive storytelling site for a home service collective offering landscaping and roofing.",
    bullets: [
      "Qualitative interviews and resonance testing",
      "Custom CMS for seasonal reporting",
    ],
  },
  {
    tag: "Product Launch",
    title: "Loomio Studios",
    body: "Landing page with interactive data visualization panels for a creative agency platform.",
    bullets: [
      "Animated charts synced to scroll",
      "Performance-optimized build for global rollouts",
    ],
  },
  {
    tag: "Community Platform",
    title: "Signal Matter",
    body: "Membership site with modular learning paths and events for a software education brand.",
    bullets: [
      "Component library ready for frequent updates",
      "Accessibility-first interactions",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <main className="px-4 pt-12 pb-20 lg:px-12 space-y-20">
        <section id="services">
          <div className="space-y-3 mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              What we do
            </p>
            <h2 className="text-3xl font-semibold">Full-spectrum web design</h2>
            <p className="text-slate-400 leading-relaxed">
              Core deliveries include research, UX architecture, high-fidelity design, and a frictionless handoff or self-serve build.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work">
          <div className="space-y-3 mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Showcase
            </p>
            <h2 className="text-3xl font-semibold">
              Areas where our work speaks.
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Curated case studies that demonstrate how we translate concepts into compelling digital experiences.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {workShowcase.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/5 bg-slate-900/40 p-6 space-y-3"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                  <span>{project.tag}</span>
                  <span>{project.title}</span>
                </div>
                <p className="text-slate-300">{project.body}</p>
                <ul className="list-disc list-inside text-slate-500 text-sm space-y-1">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <footer
          id="contact"
          className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/40 to-slate-800/50 p-10 space-y-6"
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Contact
            </p>
            <h2 className="text-3xl font-semibold">
              Ready to design something meaningful?
            </h2>
            <p className="text-slate-400">
              Tell us about your project and we’ll map the first steps within 48
              hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              href="mailto:hello@studioelemental.com"
            >
              Email hello@studioelemental.com
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              href="#work"
            >
              Download agency PDF
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
