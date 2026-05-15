"use client";

import { motion } from "framer-motion";
import { PhoneIcon } from "@/components/icons/ServiceIcons";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const trust = [
  "24/7 Emergency Response",
  "Licensed & Insured",
  "Locally Owned in Greensboro",
  "Upfront Honest Pricing",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-5 pb-20 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Greensboro&apos;s Premium Plumber
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ink-fg sm:text-5xl lg:text-6xl xl:text-[3.75rem]">
            When water won&apos;t wait,{" "}
            <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
              Almighty Flow
            </span>{" "}
            answers.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Elite residential and commercial plumbing led by {site.owner} — fast
            response, modern diagnostics, and service that feels as premium as
            it performs.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-medium text-ink-muted"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact" className="px-8 py-4 text-base">
              Request Service
            </Button>
            <Button
              href={`tel:${site.phoneHref}`}
              variant="outline"
              className="px-8 py-4 text-base"
            >
              <PhoneIcon className="text-accent" />
              Call Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-700 bg-ink-800 shadow-xl shadow-ink-fg/10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1607472586893-adb848a0e752?w=1200&q=80&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-fg/75 via-ink-fg/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Emergency Ready
              </p>
              <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Industrial-grade solutions. Boutique-level care.
              </p>
            </div>
            <div className="corner-bracket corner-bracket--tl" aria-hidden />
            <div className="corner-bracket corner-bracket--br" aria-hidden />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
