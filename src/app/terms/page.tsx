import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms",
  description: `Terms for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink-950 px-5 py-20 text-ink-fg sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-accent hover:text-accent-bright">
          Back to home
        </Link>
        <h1 className="mt-8 text-4xl font-bold tracking-tight">Terms</h1>
        <p className="mt-4 text-sm text-ink-muted">Last updated: May 16, 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-ink-muted">
          <section>
            <h2 className="text-xl font-bold text-ink-fg">Service Requests</h2>
            <p className="mt-3">
              Website, phone, text, and chat requests are used to help Almighty Flow Plumbing
              understand your plumbing issue and coordinate next steps. A request does not
              guarantee appointment availability, dispatch, or pricing until confirmed by our
              team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-fg">Messaging Terms</h2>
            <p className="mt-3">
              By submitting an inquiry, calling, texting, or using our chat widget, you agree
              to receive service-related calls and text messages from {site.name}. Messages
              may include responses to your inquiry, scheduling, appointment reminders,
              service updates, job follow-up, payment follow-up, and review requests. Message
              and data rates may apply. Message frequency varies. Reply STOP to opt out or
              HELP for help.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-fg">Payments And Estimates</h2>
            <p className="mt-3">
              Any estimates, quotes, or service recommendations are subject to inspection,
              scope confirmation, and approval. Payment terms may vary by service type and
              will be communicated before work is completed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-fg">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
