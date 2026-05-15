"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/icons/ServiceIcons";
import { serviceOptions, site } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            {submitted ? (
              <div
                className="glass-card rounded-2xl p-10 text-center"
                role="status"
              >
                <p className="text-2xl font-bold text-ink-fg">Message received</p>
                <p className="mt-3 text-ink-muted">
                  Thanks for reaching out. {site.owner.split(" ")[0]} or a team member will
                  contact you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card space-y-5 rounded-2xl p-8 sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-ink-fg">
                      Name *
                    </span>
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-ink-fg outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-ink-fg">
                      Phone *
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="w-full rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-ink-fg outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink-fg">
                    Email *
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-ink-fg outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink-fg">
                    Service Needed *
                  </span>
                  <select
                    name="service"
                    required
                    className="w-full rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-ink-fg outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink-fg">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe the issue or project..."
                    className="w-full resize-none rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-ink-fg outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>
                <Button type="submit" className="w-full py-4 text-base">
                  Submit Request
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
