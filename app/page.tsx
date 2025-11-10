import { Hero } from "@/components/ui/animated-hero";
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";

const services = [
  {
    title: "Brand-forward Websites",
    body:
      "Visual systems and layouts that let you tell your story with clarity, energy, and measurable outcomes.",
  },
  {
    title: "Product Landing Pages",
    body:
      "Conversion-first experiences mixing animation, micro-interactions, and precise messaging to guide visitors.",
  },
  {
    title: "Growth Kits",
    body:
      "Component libraries, decks, and CMS-ready builds so new sections can launch without missing a beat.",
  },
];

const workShowcase = [
  {
    tag: "Research + Strategy",
    title: "Future Farms",
    body: "Immersive storytelling site for an urban agriculture studio.",
    bullets: [
      "Qualitative interviews and resonance testing",
      "Custom CMS for seasonal reporting",
    ],
  },
  {
    tag: "Product Launch",
    title: "Loomio Studios",
    body: "Landing page with interactive data visualization panels.",
    bullets: [
      "Animated charts synced to scroll",
      "Performance-optimized build for global rollouts",
    ],
  },
  {
    tag: "Community Platform",
    title: "Signal Matter",
    body: "Membership site with modular learning paths and events.",
    bullets: [
      "Component library ready for frequent updates",
      "Accessibility-first interactions",
    ],
  },
];

const process = [
  {
    step: "Discovery",
    body:
      "Audit your presence, clarify goals, and map the moments that matter most to your visitors.",
  },
  {
    step: "Design",
    body:
      "Wireframes, prototypes, and high-fidelity screens that keep your team aligned while we add polish.",
  },
  {
    step: "Delivery",
    body:
      "We collaborate with your engineers or build the site ourselves and provide clear documentation.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <main className="px-4 pt-12 pb-20 lg:px-12 space-y-20">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr] bg-slate-900/70 border border-white/10 rounded-3xl p-10 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
              How we partner with bold teams
            </p>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Strategic web design with a meticulous attention to detail.
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Every kickoff begins with research, UX architecture, alignment workshops, high-fidelity design, and an intentional handoff that keeps engineers moving fast.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/5 p-5">
              <p className="text-3xl font-semibold">12+</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 mt-1">
                Years designing
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 p-5">
              <p className="text-3xl font-semibold">40+</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 mt-1">
                Websites delivered
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 p-5">
              <p className="text-3xl font-semibold">100%</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 mt-1">
                Accessibility reviewed
              </p>
            </div>
          </div>
        </section>

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

        <section className="space-y-12">
          <HeroScrollDemo />
        </section>

        <section className="rounded-3xl border border-white/5 bg-white/5 p-8 space-y-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Process
            </p>
            <h2 className="text-3xl font-semibold">
              Simple collaboration, ambitious results.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {process.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-white/5 bg-slate-900/50 p-5 space-y-2"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {item.step}
                </p>
                <p className="text-slate-300 leading-relaxed">{item.body}</p>
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
