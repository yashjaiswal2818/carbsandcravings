"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#menu", label: "This week's menu" },
  { href: "#how",  label: "How it works" },
  { href: "#cook", label: "For cooks" },
];

export function SiteNav() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed inset-x-0 top-0 z-50 h-[72px] backdrop-blur-[14px] transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? "border-b border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            : "border-b border-transparent bg-[rgba(254,248,246,0.85)]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-4 xs:px-5 sm:px-8">
          {/* Logo */}
          <a href="#top" aria-label="Carbs & Cravings home" className="flex items-center focus-visible:outline-none">
            <Image
              src="/brand/carbs-cravings-logo.png"
              alt="Carbs & Cravings"
              width={614}
              height={274}
              priority
              className="h-24 w-auto xs:h-28"
            />
          </a>

          {/* Desktop nav — visible at tablet (750px) and up */}
          <div className="hidden items-center gap-7 text-[14px] font-medium text-[var(--color-charcoal)] tablet:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[var(--color-deep-forest)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="inline-flex items-center rounded-full bg-[var(--color-deep-forest)] px-[22px] py-[11px] text-[13.5px] font-semibold text-white transition-colors hover:bg-[#234a31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-champagne)] focus-visible:ring-offset-2"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile controls — hidden at tablet+ */}
          <div className="flex items-center gap-2.5 tablet:hidden">
            <a
              href="#waitlist"
              onClick={close}
              className="inline-flex items-center rounded-full bg-[var(--color-deep-forest)] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#234a31]"
            >
              Join Waitlist
            </a>

            {/* Hamburger button */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-black/8 bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
            >
              <span
                className={`block h-[2px] w-[18px] rounded-full bg-[var(--color-charcoal)] transition-all duration-300 ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[18px] rounded-full bg-[var(--color-charcoal)] transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[18px] rounded-full bg-[var(--color-charcoal)] transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 tablet:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "72px" }}
      />

      {/* Drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed inset-x-0 z-40 overflow-hidden border-b border-black/6 bg-[rgba(254,248,246,0.98)] backdrop-blur-[20px] transition-[max-height,opacity] duration-300 ease-in-out tablet:hidden ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ top: "72px" }}
      >
        <nav className="mx-auto max-w-[1240px] px-4 xs:px-5 sm:px-8 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="flex items-center gap-3 rounded-2xl px-4 py-4 text-[16px] font-medium text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-champagne)]/50 hover:text-[var(--color-deep-forest)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider + social cue */}
          <div className="mt-4 border-t border-black/6 pt-4 pb-2">
            <p className="px-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-sage)]">
              Launching in Marathahalli, Bangalore
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
