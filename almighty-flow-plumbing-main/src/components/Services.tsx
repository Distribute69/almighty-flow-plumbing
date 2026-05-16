import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Services"
            title="Complete plumbing for homes and businesses"
            description="From emergency repairs to planned installations — modern tools, meticulous work, and communication you can trust."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.06}>
              <article className="glass-card group flex h-full flex-col rounded-2xl p-7 transition-all duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent/25">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="text-lg font-bold text-ink-fg">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-bright"
                >
                  Request this service →
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
