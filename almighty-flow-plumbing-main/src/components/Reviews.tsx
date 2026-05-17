"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon } from "@/components/icons/ServiceIcons";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/lib/site";

export function Reviews() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="relative overflow-hidden border-y border-slate-300/70 bg-gradient-to-b from-chrome via-white to-slate-300/35 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 metal-texture opacity-20" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Reviews"
            title="The kind of plumbing visit homeowners remember"
            description="Responsive, clear, respectful, and focused on getting the issue handled without making the day harder."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-14">
          <div className="relative mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="glass-card section-badge p-8 sm:p-12"
              >
                <div className="flex gap-1" aria-label={`${reviews[index].rating} out of 5 stars`}>
                  {Array.from({ length: reviews[index].rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="mt-6 text-xl leading-relaxed text-ink-fg sm:text-2xl">
                  &ldquo;{reviews[index].quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center justify-between border-t border-slate-300 pt-6">
                  <div>
                    <cite className="not-italic font-bold text-ink-fg">{reviews[index].name}</cite>
                    <p className="text-sm text-ink-muted">{reviews[index].location}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-ink-fg shadow-sm transition-colors hover:border-accent hover:text-accent"
              aria-label="Previous review"
            >
              ←
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "w-2 bg-slate-300 hover:bg-accent/50"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-ink-fg shadow-sm transition-colors hover:border-accent hover:text-accent"
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.08}>
              <article className="section-badge border border-slate-300/80 bg-white/88 p-5 shadow-sm transition-colors hover:border-accent/35">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <StarIcon key={j} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-muted">
                  {review.quote}
                </p>
                <p className="mt-4 text-sm font-semibold text-ink-fg">{review.name}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
