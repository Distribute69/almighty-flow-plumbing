"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneIcon } from "@/components/icons/ServiceIcons";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-700/80 bg-ink-800/95 shadow-md shadow-ink-fg/5 backdrop-blur-xl"
          : "bg-ink-950/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Link href="/" className="relative z-10 flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt={site.name}
            width={160}
            height={48}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav
          className={cn(
            "fixed inset-0 top-[4.5rem] flex flex-col gap-1 bg-ink-800 px-6 py-8 shadow-xl transition-all duration-300 sm:static sm:inset-auto sm:flex-row sm:items-center sm:gap-8 sm:bg-transparent sm:p-0 sm:shadow-none",
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0 sm:pointer-events-auto sm:opacity-100"
          )}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-ink-muted transition-colors hover:text-accent sm:py-2 sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-4 flex items-center gap-2 rounded-lg px-2 py-3 text-accent sm:hidden"
          >
            <PhoneIcon />
            {site.phone}
          </a>
        </nav>

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-accent transition-colors hover:text-accent-bright lg:flex"
          >
            <PhoneIcon />
            {site.phone}
          </a>
          <Button href="#contact" className="hidden sm:inline-flex">
            Request Service
          </Button>
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-ink-700 bg-ink-900 sm:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-ink-fg transition-all",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-ink-fg transition-all",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-ink-fg transition-all",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
