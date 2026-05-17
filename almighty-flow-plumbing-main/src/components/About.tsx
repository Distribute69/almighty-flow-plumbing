import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-slate-300/70 bg-gradient-to-b from-slate-300/45 via-white to-chrome py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 metal-texture opacity-25" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="metal-panel relative aspect-[4/5] max-h-[560px] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80&auto=format&fit=crop"
              alt="Premium plumbing work inside a home"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/68 via-ink-950/14 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold-soft">
                Modern service model
              </p>
              <p className="mt-1 font-heading text-2xl font-black uppercase tracking-wide text-white">
                Organized from the first call
              </p>
            </div>
            <div className="corner-bracket corner-bracket--tl" aria-hidden />
            <div className="corner-bracket corner-bracket--br" aria-hidden />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold">About Us</p>
          <h2 className="mt-3 font-heading text-3xl font-black uppercase tracking-wide text-ink-fg sm:text-4xl">
            Built like a premium service brand. Run like a response team.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {site.name} was founded by {site.owner} with a simple promise: show up fast,
            communicate clearly, and deliver plumbing that lasts. Based in {site.city},{" "}
            {site.stateAbbr}, the brand blends old-school craftsmanship with a modern
            CRM-powered customer experience.
          </p>
          <p className="mt-4 leading-relaxed text-ink-muted">
            Whether it&apos;s a midnight emergency or a planned water heater upgrade, you get
            direct access to an owner who cares about your home, your timeline, and your
            peace of mind.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Personally overseen by the owner on every job",
              "Responsive scheduling and real-time updates",
              "Clean, respectful crews who protect your space",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-ink-muted">
                <span className="mt-1 text-gold">◆</span>
                {item}
              </li>
            ))}
          </ul>
          <Button href="#contact" className="mt-10">
            Work With {site.owner.split(" ")[0]}
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
