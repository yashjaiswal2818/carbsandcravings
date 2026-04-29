"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { WaitlistForm } from "@/components/waitlist-form";
import { ProductCardRow } from "@/components/product-card-row";
import { CuisineRow } from "@/components/cuisine-row";
import { InterruptStrip } from "@/components/interrupt-strip";
import { SiteFooter } from "@/components/site-footer";

const steps = [
  { title: "Browse kitchens", detail: "See nearby home cooks and today's menu." },
  { title: "Pick lunch or dinner", detail: "Choose a meal that fits your day." },
  { title: "Order in a tap", detail: "Schedule quickly with your preferred slot." },
  { title: "Enjoy it fresh", detail: "Warm home-style food delivered to you." },
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

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M11 3a8 8 0 106.32 12.9l3.4 3.4 1.4-1.4-3.4-3.4A8 8 0 0011 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 5h10M5.5 9.5h13M8 14h8M10.5 18h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="top" className="bg-[var(--color-base)] pt-[72px]">
        <section className="relative isolate overflow-hidden bg-[var(--color-base)] text-[var(--color-charcoal)]">
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
                <p className="inline-flex items-center gap-3 rounded-full bg-[var(--color-champagne)] px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#b7703f]">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#edc3a0]" />
                  Coming soon — Marathahalli, Bangalore
                </p>
                <h1 className="mt-8 text-[3rem] font-semibold leading-[0.95] text-[var(--color-deep-forest)] sm:text-[4.2rem] lg:text-[5.1rem]">
                  <span className="block">COMING</span>
                  <span className="block text-[#c68050]" style={{ fontStyle: "italic", fontWeight: 500 }}>
                    SOON.
                  </span>
                </h1>
                <p className="mt-7 max-w-xl text-[1.7rem] font-semibold leading-tight text-[var(--color-charcoal)] sm:text-[2rem]">
                  Home-style food, balanced for your body.
                  <br />
                  No cooking, no stress.
                </p>
                <p className="mt-5 max-w-xl text-lg text-[#5b5a58]">
                  Ghar ka taste, gym ka balance — simple meals that feel familiar
                  while quietly supporting your protein and nutrition needs every
                  single day.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#waitlist"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-deep-forest)] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#234a31]"
                  >
                    Reserve Your Spot
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--color-muted-sage)]/35 bg-white/80 px-8 py-3 text-base font-semibold text-[var(--color-deep-forest)] transition-colors hover:bg-white"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <ProductCardRow />

      <CuisineRow />

      <section id="how-it-works" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <motion.div {...reveal} className="mx-auto w-full max-w-6xl">
          <h2 className="text-4xl font-semibold text-[var(--color-charcoal)]">
            How it works
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#585755] sm:text-lg">
            From craving to checkout in 4 quick steps.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="ambient-shadow relative overflow-hidden rounded-[1.75rem] bg-[var(--color-card)] p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-deep-forest)]/10 text-[var(--color-deep-forest)]">
                    <StepVisual index={index} />
                  </span>
                  <span className="rounded-full bg-[var(--color-section)] px-2.5 py-1 text-xs font-semibold tracking-[0.12em] text-[var(--color-muted-sage)]">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-5 text-xl font-semibold leading-tight text-[var(--color-charcoal)]">
                  {step.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#5f5e5c]">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="waitlist" className="bg-[var(--color-champagne)]/40 px-6 py-20 sm:px-10 lg:px-16">
        <motion.div
          {...reveal}
          className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center"
        >
          <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            Ready to try home-style meals?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#4a4a49]">
            Now that you know how it works, join the waitlist and we&apos;ll let
            you know as soon as carbs &amp; cravings launches in your neighborhood.
          </p>
          <div className="mt-10 w-full max-w-2xl text-left">
            <WaitlistForm />
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

      <SiteFooter />
      </main>
    </>
  );
}
