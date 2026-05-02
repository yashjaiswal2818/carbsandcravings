"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 h-[72px] backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? "border-b border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
          : "border-b border-transparent bg-white/85"
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          aria-label="Carbs & Cravings home"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-champagne)] focus-visible:ring-offset-2 rounded-sm"
        >
          <Image
            src="/brand/carbs-cravings-logo.png"
            alt="Carbs & Cravings"
            width={614}
            height={274}
            priority
            className="h-32 w-auto sm:h-40"
          />
        </a>

        <div className="flex items-center gap-4 sm:gap-7 text-sm font-medium text-[var(--color-charcoal)]">
          <div className="hidden md:flex items-center gap-7">
            <a
              href="#how-it-works"
              className="transition-colors hover:text-[var(--color-deep-forest)]"
            >
              How it works
            </a>
            <a
              href="#for-cooks"
              className="transition-colors hover:text-[var(--color-deep-forest)]"
            >
              For home cooks
            </a>
          </div>
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-full bg-[var(--color-deep-forest)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#234a31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-champagne)] focus-visible:ring-offset-2 sm:px-5 sm:text-sm"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
