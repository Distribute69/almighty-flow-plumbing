import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 waterline" />
      <div className="pointer-events-none absolute inset-0 metal-texture opacity-20" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Core Services"
            title="High-performance plumbing for high-expectation homes"
            description="Clean execution, modern diagnostics, and emergency-ready service across the jobs that matter most."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.06}>
              <article className="glass-card group relative flex h-full min-h-64 flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-60" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/12 text-accent-bright shadow-glow transition-all group-hover:scale-105 group-hover:border-gold/40 group-hover:text-gold-soft">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="font-heading text-xl font-black uppercase tracking-wide text-ink-fg">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.18em] text-accent-bright transition-colors hover:text-gold-soft"
                >
                  Request Service
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
