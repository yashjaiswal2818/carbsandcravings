"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { WaitlistForm } from "@/components/waitlist-form";
import { MenuSection } from "@/components/cuisine-row";
import { SiteFooter } from "@/components/site-footer";
import { SubscriptionPlans } from "@/components/subscription-plans";
import { CookSpotlight } from "@/components/interrupt-strip";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const howSteps = [
  { num: "01", title: "Browse nearby kitchens", detail: "See cooks within 2 km and today's menu.", image: "/working/img1.jpeg" },
  { num: "02", title: "Pick lunch or dinner", detail: "Choose what fits your day, your goals.", image: "/working/img2.jpeg" },
  { num: "03", title: "Schedule a slot", detail: "Lock in your delivery window in seconds.", image: "/working/img3.jpeg" },
  { num: "04", title: "Eat warm, eat home", detail: "Delivered in insulated steel tiffins.", image: "/working/img4.jpeg" },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="top" className="bg-[var(--color-base)]">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative isolate overflow-visible bg-[var(--color-base)] pt-[72px]">
          <div className="pointer-events-none absolute -left-40 top-28 h-80 w-80 rounded-full bg-[#3f7f55]/18 blur-[80px]" />
          <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#c68050]/16 blur-[80px]" />

          <div className="mx-auto max-w-[1240px] px-8 pb-16 pt-8 lg:pb-20 lg:pt-12">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">

              {/* Left copy */}
              <motion.div {...reveal}>
                <span className="inline-flex items-center gap-2.5 rounded-full bg-[var(--color-champagne)] px-3.5 py-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#b7703f]">
                  <span className="dot-live inline-block h-2 w-2 rounded-full bg-[#c68050]" />
                  Marathahalli, Bangalore — Launching soon
                </span>

                <h1
                  className="mt-7 whitespace-nowrap font-semibold text-[var(--color-deep-forest)]"
                  style={{ fontSize: "clamp(52px, 7.5vw, 110px)", lineHeight: 0.95, letterSpacing: "-0.015em" }}
                >
                  Coming{" "}
                  <em className="font-medium" style={{ fontStyle: "italic", color: "#c68050" }}>Soon.</em>
                </h1>

                <p className="mt-7 max-w-[460px] text-[19px] font-medium leading-[1.4] text-[var(--color-charcoal)]">
                  Real home-cooked meals from kitchens 2 km from your door.
                </p>
                <p className="mt-3.5 max-w-[460px] text-[15.5px] leading-relaxed text-[#5b5a58]">
                  Fresh dal, soft rotis, sabzi that tastes like Sunday afternoon. Verified cooks. Macros on every plate. Delivered warm in steel tiffins.
                </p>

                {/* CTAs — always side-by-side, no wrapping */}
                <div className="mt-9 flex gap-3">
                  <a
                    href="#waitlist"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--color-deep-forest)] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#234a31]"
                  >
                    Reserve your spot
                  </a>
                  <a
                    href="#menu"
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#5a7156]/30 bg-white/70 px-6 py-3.5 text-[14px] font-semibold text-[var(--color-deep-forest)] transition-colors hover:bg-white"
                  >
                    Peek at the menu
                  </a>
                </div>

              </motion.div>

              {/* Right hero art */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="relative hidden lg:block"
                style={{ aspectRatio: "1/1.05" }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-[28px]" style={{ boxShadow: "0 30px 80px -30px rgba(45,90,61,0.45), 0 8px 30px rgba(0,0,0,0.08)" }}>
                  <Image src="/cuisines/cuisine-north-indian-thali.webp" alt="A brass thali with dal, palak paneer, jeera rice and roti" fill priority sizes="(min-width: 1024px) 45vw, 0vw" className="object-cover" />
                </div>
                {/* Chip — Today's plate */}
                <div className="absolute -left-6 top-6 flex items-center gap-3 rounded-[18px] bg-white px-[18px] py-3.5" style={{ boxShadow: "0 18px 40px -16px rgba(40,44,63,0.25)" }}>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-muted-sage)]">Today&apos;s plate</div>
                    <div className="mt-0.5 font-semibold text-[var(--color-charcoal)]" style={{ fontFamily: "var(--font-display)", fontSize: "18px" }}>Dal · Palak Paneer · Rice</div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ────────────────────────────��─────────────────── */}
        <div aria-hidden="true" className="overflow-hidden border-t border-white/6 bg-[var(--color-deep-forest)] py-[18px]">
          <div
            className="marquee-track flex gap-14 whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "24px", fontWeight: 500, color: "var(--color-champagne)" }}
          >
            {["North Indian Thali", "Masala Dosa Tiffin", "Fresh dal & rotis", "Steel tiffin delivery", "Macros on every plate", "Verified home cooks",
              "North Indian Thali", "Masala Dosa Tiffin", "Fresh dal & rotis", "Steel tiffin delivery", "Macros on every plate", "Verified home cooks"
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-14">
                <span>{item}</span>
                <span style={{ color: "#c68050", fontStyle: "normal" }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── MENU ───────────────────────��─────────────────────────── */}
        <MenuSection />

        {/* ── MACROS ───────────────────────────────────────────────── */}
        <section className="bg-[var(--color-base)] px-6 py-[120px] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
              <motion.div {...reveal} className="relative overflow-hidden rounded-[28px]" style={{ aspectRatio: "1/0.7", boxShadow: "0 30px 80px -36px rgba(45,90,61,0.45)" }}>
                <Image src="/hero/home-cooked-meals.png" alt="Dal, sabzi and rotis" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                {[{ v: "23g", k: "Protein", pos: "left-6 top-6" }, { v: "372", k: "Calories", pos: "right-6 top-6" }, { v: "12g", k: "Healthy fats", pos: "bottom-6", style: { left: "38%" } }].map((chip) => (
                  <div key={chip.k} className={`absolute flex items-baseline gap-2 rounded-2xl px-[18px] py-3 ${chip.pos}`} style={{ background: "rgba(255,255,255,0.96)", boxShadow: "0 14px 30px -10px rgba(0,0,0,0.18)", ...(chip.style ?? {}) }}>
                    <span className="font-semibold leading-none text-[var(--color-deep-forest)]" style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}>{chip.v}</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-muted-sage)]">{chip.k}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-sage)]">— Honest food</div>
                <h2 className="mt-4 font-semibold text-[var(--color-charcoal)]" style={{ fontSize: "clamp(36px, 4.8vw, 58px)", lineHeight: 0.98, letterSpacing: "-0.015em" }}>
                  Every plate, <em className="font-medium" style={{ fontStyle: "italic", color: "#c68050" }}>weighed</em> &amp; labelled.
                </h2>
                <p className="mt-6 max-w-[480px] text-[17px] text-[#5b5a58]">
                  Most &ldquo;home tiffins&rdquo; guess the macros. We don&apos;t. Each cook follows a portion sheet — your protein, carbs, fat and calories are printed on the lid.
                </p>
                <ul className="mt-8 flex flex-col gap-[18px]">
                  {["Recipes standardised with a nutritionist — same dal, every time.", "Portions weighed in-kitchen. Steel boxes labelled before delivery.", "Track your daily protein in the app — meet your goals on home food."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-[16px] text-[var(--color-charcoal)]">
                      <span className="min-w-[28px] shrink-0 font-medium" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "#c68050", fontSize: "18px" }}>0{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PLANS ────────────────────────────────────────────────── */}
        <SubscriptionPlans />

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <section id="how" className="bg-[var(--color-base)] px-6 py-[120px] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1240px]">
            <motion.div {...reveal} className="mb-14 flex flex-wrap items-end justify-between gap-10">
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-sage)]">— How it works</div>
                <h2 className="mt-4 font-semibold text-[var(--color-charcoal)]" style={{ fontSize: "clamp(36px, 5vw, 62px)", lineHeight: 0.98, letterSpacing: "-0.015em" }}>
                  From craving to <em className="font-medium" style={{ fontStyle: "italic", color: "#c68050" }}>tiffin</em>,<br />in four taps.
                </h2>
              </div>
              <p className="max-w-[420px] text-[17px] text-[#5b5a58]">No browsing fatigue. The day&apos;s menu is curated; your job is to pick a slot and show up hungry.</p>
            </motion.div>
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {howSteps.map((step, i) => (
                <motion.div key={step.num} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }} className="relative overflow-hidden rounded-[22px]" style={{ aspectRatio: "3/2" }}>
                  <Image src={step.image} alt={step.title} fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 92vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/78" />
                  <span className="absolute left-[18px] top-[18px] leading-none text-white opacity-95" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "56px", fontWeight: 500 }}>{step.num}</span>
                  <div className="absolute bottom-[22px] left-[22px] right-[22px] text-white">
                    <div className="font-semibold leading-[1.1]" style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}>{step.title}</div>
                    <div className="mt-2 text-[13.5px] leading-[1.45] text-white/85">{step.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COOK SPOTLIGHT ───────────────────────────────────────── */}
        <CookSpotlight />

        {/* ── WAITLIST ─────────────────────────────────────────────── */}
        <section id="waitlist" className="relative overflow-hidden py-[120px] text-white" style={{ background: "var(--color-charcoal)" }}>
          <div className="absolute inset-0 opacity-35">
            <Image src="/cuisines/cuisine-biryani.webp" alt="" fill className="object-cover" aria-hidden="true" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(44,42,41,0.95) 0%, rgba(45,90,61,0.85) 100%)" }} />
          </div>
          <div className="relative z-10 mx-auto max-w-[1240px] px-8">
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
              <motion.div {...reveal}>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-champagne)]">— Join the waitlist</div>
                <h2 className="mt-4 font-semibold text-white" style={{ fontSize: "clamp(36px, 4.8vw, 58px)", lineHeight: 1, letterSpacing: "-0.015em" }}>
                  Get freshly prepared{" "}
                  <em className="font-medium" style={{ fontStyle: "italic", color: "var(--color-champagne)" }}>home meals</em>{" "}
                  at your door.
                </h2>
                <p className="mt-5 max-w-[420px] text-[17px] text-white/72">
                  Join us to get real home-cooked food made by verified local cooks — warm, nutritious, and delivered fresh to your doorstep every day.
                </p>
                <ul className="mt-8 flex flex-col gap-4">
                  {[
                    "Fresh dal, sabzi & rotis cooked daily by home cooks near you",
                    "Full macros on every meal — protein, carbs, fat & calories",
                    "Delivered warm in steel tiffins, right to your door",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-white/80">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-champagne)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
                <WaitlistForm compact />
              </motion.div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
