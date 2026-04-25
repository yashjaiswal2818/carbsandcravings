"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route-anchor click
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed inset-x-0 top-0 z-50 h-[72px] backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? "border-b border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            : "border-b border-transparent bg-white/85"
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-4 sm:gap-5">
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
            <span
              aria-hidden="true"
              className="hidden h-6 w-px bg-black/10 sm:block"
            />
            <span
              className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-[var(--color-charcoal)] sm:inline-flex"
              aria-label="Serving Bengaluru"
            >
              <LocationPin />
              <span>Bengaluru</span>
              <Caret />
            </span>
          </div>

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
              className="hidden sm:inline-flex items-center rounded-full bg-[var(--color-deep-forest)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#234a31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-champagne)] focus-visible:ring-offset-2 sm:px-5 sm:text-sm"
            >
              Join waitlist
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-charcoal)] transition hover:bg-black/5 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-champagne)]"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-black/5 bg-white/97 backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--color-charcoal)] transition hover:bg-[var(--color-base)] hover:text-[var(--color-deep-forest)]"
              >
                How it works
              </a>
              <a
                href="#for-cooks"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--color-charcoal)] transition hover:bg-[var(--color-base)] hover:text-[var(--color-deep-forest)]"
              >
                For home cooks
              </a>
              <div className="mt-2 border-t border-black/5 pt-3">
                <a
                  href="#waitlist"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-deep-forest)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#234a31]"
                >
                  Join waitlist
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LocationPin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Caret() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
