"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { WaitlistForm } from "@/components/waitlist-form";
import { ProductCardRow } from "@/components/product-card-row";
import { CuisineRow } from "@/components/cuisine-row";
import { InterruptStrip } from "@/components/interrupt-strip";
import { SiteFooter } from "@/components/site-footer";
import { SubscriptionPlans } from "@/components/subscription-plans";

const steps = [
  {
    title: "Browse kitchens",
    detail: "See nearby home cooks and today's menu.",
    image: "/working/img1.jpeg",
  },
  {
    title: "Pick lunch or dinner",
    detail: "Choose a meal that fits your day.",
    image: "/working/img2.jpeg",
  },
  {
    title: "Order in a tap",
    detail: "Schedule quickly with your preferred slot.",
    image: "/working/img3.jpeg",
  },
  {
    title: "Enjoy it fresh",
    detail: "Warm home-style food delivered to you.",
    image: "/working/img4.jpeg",
  },
];

const trustPoints = [
  {
    title: "Verified home cooks",
    detail: "Every cook on our platform is personally verified — we visit their kitchen before they go live.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l2.5 5.5 6 .9-4.3 4.2 1 6-5.2-2.7L6.8 18.6l1-6L3.5 8.4l6-.9L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Hygiene-first kitchens",
    detail: "Clean preparation standards, proper storage, and fresh ingredients sourced daily.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Transparent pricing",
    detail: "What you see is what you pay. No platform fees, no hidden delivery charges.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Reliable delivery",
    detail: "Meals delivered in insulated tiffin boxes within your committed time window, every day.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3M9 17h10a2 2 0 002-2v-5a2 2 0 00-2-2H9v9zM7 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
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

        {/* Hero */}
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
              maskImage: "linear-gradient(to right, transparent 0%, black 28%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 28%)",
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
                  Fresh home-cooked meals,
                  <br />
                  delivered to your door.
                </p>
                <p className="mt-5 max-w-xl text-lg text-[#5b5a58]">
                  Real food made by verified home cooks in your neighbourhood — warm, familiar, and ready when you need it. No cooking, no stress.
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

        {/* Trust Section */}
        <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
          <motion.div {...reveal} className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-[1.5rem] bg-[var(--color-base)] p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-deep-forest)]/10 text-[var(--color-deep-forest)]">
                    {point.icon}
                  </span>
                  <p className="mt-4 text-base font-semibold text-[var(--color-charcoal)]">
                    {point.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5a5a58]">
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Subscription Plans */}
        <SubscriptionPlans />

        {/* Meal Cards */}
        <ProductCardRow />

        {/* Cuisine Row */}
        <CuisineRow />

        {/* How It Works */}
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
                  <div className="relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={640}
                      height={400}
                      unoptimized
                      className="h-44 w-full rounded-2xl object-cover"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold tracking-[0.12em] text-[var(--color-muted-sage)] shadow-sm backdrop-blur">
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

        {/* Waitlist */}
        <section id="waitlist" className="bg-[var(--color-champagne)]/40 px-6 py-20 sm:px-10 lg:px-16">
          <motion.div
            {...reveal}
            className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center"
          >
            <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
              Ready to try home-style meals?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#4a4a49]">
              Join the waitlist and we&apos;ll let you know as soon as Carbs &amp; Cravings launches in your neighbourhood.
            </p>
            <div className="mt-10 w-full max-w-2xl text-left">
              <WaitlistForm />
            </div>
          </motion.div>
        </section>

        <InterruptStrip id="for-cooks" />

        <SiteFooter />
      </main>
    </>
  );
}
