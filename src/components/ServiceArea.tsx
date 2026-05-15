import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceAreas, site } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="service-area" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Service Area"
              title={`Proudly serving ${site.city} & surrounding communities`}
              description="Rapid response across the Triad — when you need a plumber who knows the area and shows up ready to work."
            />
            <p className="mt-6 text-ink-muted">
              Not sure if we cover your address? Reach out — we&apos;ll confirm availability
              and get you scheduled fast.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Primary Coverage
              </p>
              <p className="mt-2 text-3xl font-bold text-ink-fg">
                {site.city}, {site.stateAbbr}
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-sm font-medium text-ink-muted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
