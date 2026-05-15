import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyUs } from "@/lib/site";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Almighty Flow standard"
            description="Premium isn't a price point — it's how we show up, communicate, and stand behind every repair."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 p-7 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/5 blur-2xl transition-all group-hover:bg-accent/15" />
                <span className="text-3xl font-bold text-accent/40">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-ink-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
