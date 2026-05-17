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
    <section className="relative min-h-[100svh] overflow-hidden border-b border-slate-300/70 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hero-water h-80 opacity-100" aria-hidden />
      <div className="pointer-events-none absolute inset-0 metal-texture opacity-45" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-gold/20 gold-arc opacity-70" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 pt-0 lg:order-1"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/82 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-gold shadow-[0_12px_26px_rgba(16,32,51,0.08)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Premium emergency plumbing · Greensboro, NC
          </p>

          <h1 className="font-heading text-5xl font-black uppercase leading-[0.94] tracking-wide sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
            <span className="chrome-text block">When Water</span>
            <span className="chrome-text block">Won&apos;t Wait,</span>
            <span className="water-text block drop-shadow-[0_10px_24px_rgba(16,156,241,0.24)]">
              Flow Answers.
            </span>
          </h1>

          <div className="my-7 h-3 max-w-xl wave-ribbon" />

          <p className="max-w-xl text-lg font-medium leading-relaxed text-ink-muted">
            A bold, modern plumbing company built for urgent calls, premium homes,
            and clean communication from the first touch to job completion.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-semibold text-ink-muted"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-white text-accent shadow-glow">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={`tel:${site.phoneHref}`} className="px-8 py-4 text-base">
              <PhoneIcon />
              Emergency Call
            </Button>
            <Button
              href="#contact"
              variant="outline"
              className="px-8 py-4 text-base"
            >
              Schedule Service
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <div className="emblem-shell badge-cut relative mx-auto max-w-xl overflow-hidden p-5 sm:p-7">
            <div className="pointer-events-none absolute inset-x-10 top-8 h-32 gold-arc opacity-80" />
            <div className="pointer-events-none absolute inset-0 metal-texture opacity-40" />
            <Image
              src="/logo.png"
              alt={site.name}
              width={900}
              height={900}
              priority
              className="relative z-10 h-auto w-full object-contain drop-shadow-[0_0_42px_rgba(19,159,243,0.34)]"
            />
            <div className="relative z-10 mx-auto mt-3 h-2 w-4/5 wave-ribbon" />
            <div className="relative z-10 mt-5 grid grid-cols-3 gap-2 text-center">
              {["24/7", "Clean", "Fast"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-300/80 bg-white/86 px-3 py-3 font-heading text-sm font-black uppercase tracking-[0.18em] text-ink-900 shadow-glow"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="metal-panel relative mt-6 overflow-hidden rounded-[2rem]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-65"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581093458791-9d2ed2b1f4a9?w=1200&q=80&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/72 via-ink-950/16 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/45 to-transparent" />
            <div className="relative aspect-[16/9] p-6 sm:p-8" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold-soft">
                Van-ready brand. Home-ready service.
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
