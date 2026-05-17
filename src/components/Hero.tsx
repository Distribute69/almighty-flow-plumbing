"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneIcon, ServiceIcon, StarIcon } from "@/components/icons/ServiceIcons";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const trust = [
  "24/7 Emergency Response",
  "Licensed & Insured",
  "Locally Owned in Greensboro",
  "Clean Work & Clear Pricing",
];

const quickActions = [
  {
    title: "Schedule Service",
    description: "Book a clean, organized plumbing visit for your home or property.",
    href: "#contact",
    icon: "home",
  },
  {
    title: "Emergency Plumbing",
    description: "Active leak, backup, burst pipe, or no water? Call for priority response.",
    href: `tel:${site.phoneHref}`,
    icon: "emergency",
  },
  {
    title: "Get Free Quote",
    description: "Tell us what is going on and we will help confirm the next best step.",
    href: "#contact",
    icon: "leak",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden border-b border-slate-300/70 bg-[#fbfcfd] pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-100" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white via-white/92 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hero-water h-72 opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 metal-texture opacity-25" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 pt-0 lg:order-1"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/82 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-gold shadow-[0_12px_26px_rgba(16,32,51,0.08)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Premium plumbing service - Greensboro, NC
          </p>

          <h1 className="font-heading text-5xl font-black uppercase leading-[0.96] tracking-[0.02em] sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
            <span className="chrome-text block">Fast Plumbing</span>
            <span className="chrome-text block">Done Clean.</span>
            <span className="water-text block drop-shadow-[0_10px_24px_rgba(16,156,241,0.24)]">
              Built to Flow.
            </span>
          </h1>

          <div className="my-7 h-3 max-w-xl wave-ribbon" />

          <p className="max-w-xl text-lg font-medium leading-relaxed text-ink-muted">
            Almighty Flow Plumbing helps Greensboro homeowners move from plumbing
            problem to clear next step with fast response, clean work, and
            communication that feels organized from the first contact.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-slate-300/80 bg-white/88 px-4 py-2 text-sm font-black text-ink-900 shadow-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5" />
              ))}
              <span className="ml-2">5-star service mindset</span>
            </div>
            <div className="rounded-full border border-accent/24 bg-accent/8 px-4 py-2 text-sm font-black text-accent">
              Emergency availability
            </div>
          </div>

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
              Call Now
            </Button>
            <Button href="#contact" variant="outline" className="px-8 py-4 text-base">
              Schedule Service
            </Button>
          </div>
          <p className="mt-4 text-sm font-semibold text-ink-muted">
            Call {site.phone} for urgent plumbing needs in Greensboro and nearby communities.
          </p>
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
              {["Fast", "Clean", "Local"].map((item) => (
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
                Local response. Professional finish.
              </p>
              <p className="mt-2 max-w-md font-heading text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
                Plumbing-first service for homes that need it handled right.
              </p>
            </div>
            <div className="corner-bracket corner-bracket--tl" aria-hidden />
            <div className="corner-bracket corner-bracket--br" aria-hidden />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-4 md:grid-cols-3">
          {quickActions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              className="glass-card group flex h-full items-start gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-accent/35"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/24 bg-accent/10 text-accent shadow-glow">
                <ServiceIcon name={action.icon} className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-heading text-lg font-black uppercase tracking-wide text-ink-fg">
                  {action.title}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-muted">
                  {action.description}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
