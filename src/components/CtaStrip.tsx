import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CtaStrip() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-chrome to-gold/10" />
      <div className="absolute inset-0 metal-texture opacity-35" />
      <div className="section-badge metal-panel relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 text-center sm:px-10 md:flex-row md:text-left">
        <div>
          <h2 className="font-heading text-2xl font-black uppercase tracking-wide text-ink-fg sm:text-3xl">
            Plumbing problem? Get a clear next step.
          </h2>
          <p className="mt-2 text-ink-muted">
            Call for urgent service or send a request and we will help route the issue.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={`tel:${site.phoneHref}`} variant="primary">
            Call Now
          </Button>
          <Button href="#contact" variant="outline">
            Request Service
          </Button>
        </div>
      </div>
    </section>
  );
}
