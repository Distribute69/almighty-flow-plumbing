import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 waterline" />
      <div className="pointer-events-none absolute inset-0 metal-texture opacity-20" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Core Services"
            title="Plumbing services built around response, clarity, and clean work"
            description="From urgent leaks to planned repairs, Almighty Flow keeps the service path simple: tell us the issue, get clear next steps, and know what happens next."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.06}>
              <article className="glass-card section-badge group relative flex h-full min-h-72 flex-col overflow-hidden p-7 transition-all duration-300">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-60" />
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-gold/20" />
                <div className="absolute right-5 top-5 font-heading text-5xl font-black text-ink-950/[0.04]">
                  0{i + 1}
                </div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/24 bg-accent/10 text-accent shadow-glow transition-all group-hover:scale-105 group-hover:border-gold/40 group-hover:text-gold">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="font-heading text-xl font-black uppercase tracking-wide text-ink-fg">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <div className="mt-6 h-1.5 w-32 wave-ribbon" />
                <a
                  href="#contact"
                  className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.18em] text-accent transition-colors hover:text-gold"
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
