"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent/12 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hero-water h-64 opacity-80" aria-hidden />
      <div className="pointer-events-none absolute inset-0 metal-texture opacity-35" aria-hidden />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-5 pb-20 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 pt-4"
        >
          <div className="mb-7 flex max-w-xs items-center gap-4 sm:max-w-sm">
            <Image
              src="/logo.png"
              alt={site.name}
              width={420}
              height={420}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_0_34px_rgba(19,159,243,0.22)]"
            />
          </div>

          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-soft">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Greensboro&apos;s premium emergency plumber
          </p>

          <p className="font-script text-4xl leading-none text-accent-bright drop-shadow-[0_0_20px_rgba(98,213,255,0.34)] sm:text-5xl">
            Premium Flow
          </p>
          <h1 className="font-heading text-4xl font-black uppercase leading-[1.02] tracking-wide sm:text-5xl lg:text-6xl xl:text-[4.4rem]">
            <span className="chrome-text">When water won&apos;t wait,</span>{" "}
            <span className="water-text block">Almighty Flow answers.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Luxury blue-collar plumbing for Greensboro homes and businesses:
            emergency-ready, technology-driven, and built around trust inside
            your home.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-semibold text-ink-muted"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/15 text-accent-bright shadow-glow">
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
          <div className="metal-panel relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-78"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581093458791-9d2ed2b1f4a9?w=1200&q=80&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold-soft">
                Emergency ready
              </p>
              <p className="mt-2 max-w-md font-heading text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
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
