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
      className={`fixed inset-x-0 top-0 z-50 h-[72px] backdrop-blur-[14px] transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? "border-b border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
          : "border-b border-transparent bg-[rgba(254,248,246,0.85)]"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-8">
        <a href="#top" aria-label="Carbs & Cravings home" className="flex items-center focus-visible:outline-none">
          <Image src="/brand/carbs-cravings-logo.png" alt="Carbs & Cravings" width={614} height={274} priority className="h-28 w-auto sm:h-32" />
        </a>

        <div className="flex items-center gap-7 text-[14px] font-medium text-[var(--color-charcoal)]">
          <div className="hidden items-center gap-7 md:flex">
            <a href="#menu" className="transition-colors hover:text-[var(--color-deep-forest)]">This week&apos;s menu</a>
            <a href="#how" className="transition-colors hover:text-[var(--color-deep-forest)]">How it works</a>
            <a href="#cook" className="transition-colors hover:text-[var(--color-deep-forest)]">For cooks</a>
          </div>
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-full bg-[var(--color-deep-forest)] px-[22px] py-[11px] text-[13.5px] font-semibold text-white transition-colors hover:bg-[#234a31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-champagne)] focus-visible:ring-offset-2"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
