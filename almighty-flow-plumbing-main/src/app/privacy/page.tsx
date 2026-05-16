import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink-950 px-5 py-20 text-ink-fg sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-accent hover:text-accent-bright">
          Back to home
        </Link>
        <h1 className="mt-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-muted">Last updated: May 16, 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-ink-muted">
          <section>
            <h2 className="text-xl font-bold text-ink-fg">Information We Collect</h2>
            <p className="mt-3">
              Almighty Flow Plumbing may collect your name, phone number, email address,
              service address, plumbing issue, appointment preferences, and related details
              when you call, text, submit a website request, or use our chat widget.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-fg">How We Use Information</h2>
            <p className="mt-3">
              We use this information to respond to plumbing inquiries, schedule service,
              send appointment reminders, provide service updates, follow up after jobs,
              process payments, request reviews, and improve our customer service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-fg">Text Messaging</h2>
            <p className="mt-3">
              By contacting us through our website, chat widget, phone, text message, or
              service request form, you agree to receive service-related text messages from
              {` ${site.name}`} about your inquiry or appointment. Message and data rates may
              apply. Message frequency varies. Reply STOP to opt out or HELP for help.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-fg">Information Sharing</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share necessary service
              details with trusted providers who help us operate the business, such as
              customer communication, scheduling, payment, or fulfillment tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink-fg">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
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
