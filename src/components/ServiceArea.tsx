import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceAreas, site } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="service-area" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 waterline" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Service Area"
              title={`Proudly serving ${site.city} & surrounding communities`}
              description="Local plumbing response across Greensboro and nearby Triad communities, with clear scheduling and clean communication."
            />
            <p className="mt-6 text-ink-muted">
              Not sure if we cover your address? Reach out and we will confirm
              availability before you waste time waiting on the wrong company.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="metal-panel relative overflow-hidden rounded-[2rem] p-8">
              <div className="absolute inset-6 rounded-[1.5rem] border border-accent/16" />
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30" />
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/25" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold">
                  Primary Coverage
                </p>
                <p className="mt-2 font-heading text-3xl font-black uppercase tracking-wide text-ink-fg">
                  {site.city}, {site.stateAbbr}
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm font-semibold text-ink-muted shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
