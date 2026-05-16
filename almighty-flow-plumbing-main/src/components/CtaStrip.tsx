import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CtaStrip() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-ink-900 to-accent/10" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center sm:px-8 md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-ink-fg sm:text-3xl">
            Plumbing emergency? We&apos;re on it.
          </h2>
          <p className="mt-2 text-ink-muted">
            24/7 dispatch across {site.city} and surrounding areas.
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
