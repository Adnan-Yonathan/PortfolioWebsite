import { HeroSection } from "@/components/ui/hero-section-1";
import { Button } from "@/components/ui/button";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Calendar, Code, FileText, User, Clock } from "lucide-react";

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

const timelineData = [
  {
    id: 1,
    title: "Discovery Sprint",
    date: "Week 1",
    content:
      "Research sprints, stakeholder interviews, and measurement plans for trades, agencies, and product teams.",
    category: "Discovery",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Content & Messaging",
    date: "Week 2",
    content:
      "Story-driven narratives, voice experiments, and conversion paths modeled after high-performing financial workflows.",
    category: "Strategy",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Glassmorphic Designs",
    date: "Week 3",
    content:
      "Polished layouts, orbital gradients, and responsive systems inspired by financing dashboards.",
    category: "Design",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 4,
    title: "Engineering Handoff",
    date: "Week 4",
    content:
      "Component libraries, micro interactions, and QA protocols synced with dev sprints.",
    category: "Delivery",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 45,
  },
  {
    id: 5,
    title: "Launch & Learn",
    date: "Week 5",
    content:
      "Performance dashboards, analytics setups, and iteration kits for growth teams.",
    category: "Launch",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 30,
  },
];

const actionButtons = [
  {
    label: "Launch Brand Sites",
    description: "Service-focused landing pages that turn bookings into loyal customers.",
  },
  {
    label: "Optimize Conversions",
    description: "Conversion architecture, micro-interactions, and trust cues ready for testing.",
  },
  {
    label: "Scale Product Stories",
    description: "Modular systems keeping SaaS and agency narratives consistent at any scale.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <main className="px-4 pt-12 pb-20 lg:px-12 space-y-20">
        <section id="services">
          <div className="space-y-3 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Our orbital process
            </p>
            <h2 className="text-3xl font-semibold">
              A radial timeline that mirrors how we design for ambitious teams
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Each orbit represents a phase of research, storytelling, and precision execution tuned to home services, agencies, and software companies.
            </p>
          </div>
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {actionButtons.map((action) => (
              <article
                key={action.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300"
              >
                <Button variant="ghost" className="px-6 py-3 text-white">
                  {action.label}
                </Button>
                <p className="mt-3 text-xs opacity-80">{action.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work">
          <div className="space-y-3 mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Showcase
            </p>
            <h2 className="text-3xl font-semibold">
              Momentum from home service, agency, and product partners
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Case studies designed to show how your audiences respond to clarity, trust, and speed.
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
              Tell us about your project and we’ll map the first steps within 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
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
