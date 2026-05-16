import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative border-y border-ink-700/60 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="relative aspect-[4/5] max-h-[520px] overflow-hidden rounded-2xl border border-ink-700 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop"
              alt={`${site.owner}, owner of ${site.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-fg/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Owner & Operator
              </p>
              <p className="mt-1 text-2xl font-bold text-white">{site.owner}</p>
            </div>
            <div className="corner-bracket corner-bracket--tl" aria-hidden />
            <div className="corner-bracket corner-bracket--br" aria-hidden />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About Us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-fg sm:text-4xl">
            Built on reliability. Driven by modern service.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {site.name} was founded by {site.owner} with a simple promise: show up fast,
            communicate clearly, and deliver plumbing that lasts. Based in {site.city},{" "}
            {site.stateAbbr}, we combine old-school craftsmanship with today&apos;s best
            diagnostic technology.
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
                <span className="mt-1 text-accent">◆</span>
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
