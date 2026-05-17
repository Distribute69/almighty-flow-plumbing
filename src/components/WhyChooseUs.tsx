import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyUs } from "@/lib/site";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/6 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A higher standard for the work inside your home"
            description="Premium is not noise. It is speed, clarity, clean work, and the confidence that every detail is handled."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="metal-panel group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:border-accent/45 hover:shadow-glow">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
                <span className="font-heading text-3xl font-black text-accent/50">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-extrabold text-ink-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
