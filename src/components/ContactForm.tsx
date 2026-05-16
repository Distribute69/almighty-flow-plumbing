import { FadeIn } from "@/components/ui/FadeIn";
import { PhoneIcon } from "@/components/icons/ServiceIcons";
import { site } from "@/lib/site";

export function ContactForm() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-fg sm:text-4xl">
              Request service today
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Tell us what you need — we respond quickly with clear next steps and honest
              pricing. For emergencies, call directly.
            </p>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent/10 px-6 py-4 text-lg font-bold text-accent transition-colors hover:bg-accent/20"
            >
              <PhoneIcon className="h-6 w-6" />
              {site.phone}
            </a>
            <p className="mt-4 text-sm text-ink-muted">
              Email:{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                {site.email}
              </a>
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-card space-y-6 rounded-2xl p-8 sm:p-10">
              <div>
                <p className="text-2xl font-bold text-ink-fg">Start your request</p>
                <p className="mt-3 text-ink-muted">
                  Use the chat button on this page to send details about your plumbing issue,
                  or call now if water is actively leaking, backing up, or shut off.
                </p>
              </div>

              <div className="grid gap-3">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold tracking-wide text-white shadow-glow transition-all duration-300 hover:bg-accent-bright hover:shadow-glow-lg"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call {site.phone}
                </a>
                <p className="text-center text-sm text-ink-muted">
                  The chat widget appears in the lower corner of the page.
                </p>
              </div>

              <p className="text-xs leading-relaxed text-ink-muted">
                By contacting Almighty Flow Plumbing through chat, phone, or text, you agree
                to receive service-related messages about your inquiry. Message and data rates
                may apply. Message frequency varies. Reply STOP to opt out.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
