"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { WaitlistForm } from "@/components/waitlist-form";
import { ProductCardRow } from "@/components/product-card-row";
import { CuisineRow } from "@/components/cuisine-row";
import { InterruptStrip } from "@/components/interrupt-strip";
import { NeighborhoodGrid } from "@/components/neighborhood-grid";
import { SiteFooter } from "@/components/site-footer";

const steps = [
  "Browse nearby kitchens",
  "Pick your meal \u2014 lunch or dinner",
  "Order ahead with lead time",
  "Get it fresh at your door",
];

const customerPoints = [
  "Fresh home-cooked meals from nearby kitchens",
  "Daily pricing in the ₹120-180 range",
  "No subscriptions, no lock-ins, no mess plans",
];

const cookPoints = [
  "Turn existing daily cooking into steady income",
  "Discoverability without social media marketing",
  "Orders, payments, and logistics support from us",
];

const credibilityStats = [
  { number: "25+", label: "Home cooks interviewed" },
  { number: "15+", label: "Customers validated" },
  { number: "#1", label: "Bengaluru is our launch city" },
  { number: "2×", label: "Daily meal habits served" },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="top" className="bg-[var(--color-base)] pt-[72px]">
        <section className="relative isolate overflow-hidden bg-[var(--color-deep-forest)] text-white">
          <div className="pointer-events-none absolute -left-36 top-24 h-72 w-72 rounded-full bg-[#3f7f55]/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-14 h-64 w-64 rounded-full bg-[#6f9975]/25 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 28%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 28%)",
            }}
          >
            <Image
              src="/hero/home-cooked-meals.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 0px"
              className="object-cover object-center"
            />
          </motion.div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col justify-center px-6 py-16 sm:py-20 lg:py-24">
            <div className="lg:w-[58%]">
              <motion.div {...reveal}>
                <p className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em]">
                  Launching first in Bengaluru
                </p>
                <h1 className="mt-6 text-3xl font-semibold leading-[1.05] sm:text-4xl lg:text-[3.6rem]">
                  Home-cooked lunch and dinner, from nearby kitchens
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                  <em style={{fontFamily: "var(--font-display)", fontStyle: "italic"}}>Ghar ka khana, bina ghar ke.</em>{" "}
                  Fresh meals cooked in real homes near you — delivered warm for
                  ₹120–180. No subscription, no lock-in.
                </p>
                <p className="mt-3 text-sm text-white/60">
                  Join 200+ Bengaluru residents already on the waitlist.
                </p>
              </motion.div>

              <motion.div
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.12 }}
                className="mt-8"
              >
                <WaitlistForm compact />
              </motion.div>
            </div>
          </div>
        </section>

        <ProductCardRow />

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <motion.div {...reveal} className="mx-auto w-full max-w-5xl">
          <h2 className="max-w-2xl text-4xl font-semibold text-[var(--color-charcoal)]">
            Tired of paying ₹250 for food that tastes like nothing?
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-[#4a4a49]">
            Restaurant food is expensive, oily, and soulless. Mess food is even
            worse. There has to be a better way for people living away from
            home.
          </p>
        </motion.div>
      </section>

      <CuisineRow />

      <section id="how-it-works" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <motion.div {...reveal} className="mx-auto w-full max-w-6xl">
          <h2 className="text-4xl font-semibold text-[var(--color-charcoal)]">
            How it works
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className="ambient-shadow relative overflow-hidden rounded-[1.75rem] bg-[var(--color-card)] p-6"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-2 right-4 select-none text-[5.5rem] font-bold leading-none text-[var(--color-muted-sage)]/10"
                  style={{fontFamily: "var(--font-display)"}}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted-sage)]">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-xl font-medium text-[var(--color-charcoal)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[var(--color-section)] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
          <motion.article
            {...reveal}
            className="ambient-shadow rounded-[2rem] bg-[var(--color-card)] p-8 border-t-4 border-[var(--color-champagne)]"
          >
            <h2 className="text-3xl font-semibold text-[var(--color-charcoal)]">
              Finally, food that tastes like home
            </h2>
            <p className="mt-4 text-base text-[#4a4a49]">
              Browse nearby home cooks, see what&apos;s cooking today, and get
              fresh meals delivered for ₹120-180. No subscription. No
              commitment. Just good food.
            </p>
            <ul className="mt-6 space-y-3">
              {customerPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--color-charcoal)]">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-deep-forest)] text-white" aria-hidden="true">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l1.75 1.75L6.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.08 }}
            className="ambient-shadow rounded-[2rem] bg-[var(--color-section)] p-8 border-t-4 border-[var(--color-muted-sage)]"
          >
            <h2 className="text-3xl font-semibold text-[var(--color-charcoal)]">
              Turn your kitchen into an income
            </h2>
            <p className="mt-4 text-base text-[#4a4a49]">
              Already cooking? Get more customers without any marketing. We
              handle orders, payments, and logistics. You just cook.
            </p>
            <ul className="mt-6 space-y-3">
              {cookPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--color-charcoal)]">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-muted-sage)] text-white" aria-hidden="true">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l1.75 1.75L6.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <InterruptStrip id="for-cooks" />

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <motion.div {...reveal} className="mx-auto w-full max-w-6xl">
          <h2 className="text-4xl font-semibold text-[var(--color-charcoal)]">
            Building with real Bengaluru demand
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityStats.map((stat) => (
              <div
                key={stat.label}
                className="ambient-shadow rounded-[1.5rem] bg-[var(--color-card)] p-5 text-center"
              >
                <p className="text-[2.2rem] font-semibold leading-none text-[var(--color-deep-forest)]" style={{fontFamily: "var(--font-display)"}}>
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-[#4a4a49]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <NeighborhoodGrid />

      <section className="bg-[var(--color-champagne)]/40 px-6 py-24 sm:px-10 lg:px-16">
        <motion.div {...reveal} className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            Be first in your neighborhood
          </h2>
          <p className="mt-4 text-base text-[#4a4a49]">
            Join the waitlist to get early access when we open near you.
          </p>
          <div className="mt-10 w-full max-w-2xl text-left">
            <WaitlistForm />
          </div>
        </motion.div>
      </section>

      <SiteFooter />
      </main>
    </>
  );
}
