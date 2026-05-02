"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type MealSlot = "lunch" | "dinner";

const plans = [
  {
    id: "starter",
    name: "3-Day Trial",
    days: 3,
    meals: 3,
    totalPrice: "₹699",
    perMeal: "₹233",
    tag: null,
    description: "Try it before you commit. 3 freshly cooked meals delivered to your door.",
    features: [
      "Choose lunch or dinner",
      "Protein & nutrition info",
      "Doorstep delivery",
      "Cancel anytime",
    ],
    popular: false,
  },
  {
    id: "kickstart",
    name: "4-Day Plan",
    days: 4,
    meals: 4,
    totalPrice: "₹1,499",
    perMeal: "₹374",
    tag: "Best value",
    description: "A full working-week of real home-cooked food. Most customers start here.",
    features: [
      "Choose lunch or dinner",
      "Protein & nutrition info",
      "Priority slot booking",
      "Doorstep delivery",
      "Dedicated cook match",
    ],
    popular: true,
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function SubscriptionPlans() {
  const [slot, setSlot] = useState<MealSlot>("dinner");

  return (
    <section id="plans" className="bg-[var(--color-section)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div {...reveal} className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-sage)]">
            Plans & Pricing
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[var(--color-charcoal)]">
            Simple plans, no surprises
          </h2>
          <p className="mt-4 text-lg text-[#4a4a49]">
            Start with a trial. Scale when you&apos;re ready. No lock-ins, no hidden fees.
          </p>
        </motion.div>

        {/* Meal toggle */}
        <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="mt-8">
          <div className="inline-flex rounded-full bg-white p-1.5 shadow-[0_8px_20px_rgba(45,90,61,0.10)]">
            <button
              onClick={() => setSlot("lunch")}
              className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-colors sm:text-base ${
                slot === "lunch"
                  ? "bg-[var(--color-deep-forest)] text-white"
                  : "text-[var(--color-charcoal)] hover:bg-[var(--color-base)]"
              }`}
            >
              Lunch
            </button>
            <button
              onClick={() => setSlot("dinner")}
              className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-colors sm:text-base ${
                slot === "dinner"
                  ? "bg-[var(--color-deep-forest)] text-white"
                  : "text-[var(--color-charcoal)] hover:bg-[var(--color-base)]"
              }`}
            >
              Dinner
            </button>
          </div>
        </motion.div>

        {/* Plan cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 + i * 0.1 }}
              className={`relative flex flex-col rounded-[2rem] p-8 ${
                plan.popular
                  ? "bg-[var(--color-deep-forest)] text-white ring-0"
                  : "bg-white ambient-shadow"
              }`}
            >
              {plan.tag && (
                <span className="absolute -top-3 left-8 rounded-full bg-[var(--color-champagne)] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-forest)] shadow-sm">
                  {plan.tag}
                </span>
              )}

              {/* Plan name + slot */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${plan.popular ? "text-white/55" : "text-[var(--color-muted-sage)]"}`}>
                    {slot === "lunch" ? "Lunch" : "Dinner"}
                  </p>
                  <h3 className={`mt-1.5 text-2xl font-semibold ${plan.popular ? "text-white" : "text-[var(--color-charcoal)]"}`}>
                    {plan.name}
                  </h3>
                </div>
                <span className={`mt-1 shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${plan.popular ? "bg-white/15 text-white/80" : "bg-[var(--color-base)] text-[var(--color-muted-sage)]"}`}>
                  {plan.days} days
                </span>
              </div>

              <p className={`mt-3 text-sm leading-relaxed ${plan.popular ? "text-white/70" : "text-[#5a5a58]"}`}>
                {plan.description}
              </p>

              {/* Price block */}
              <div className={`mt-7 rounded-2xl p-4 ${plan.popular ? "bg-white/10" : "bg-[var(--color-base)]"}`}>
                <div className="flex items-end gap-2">
                  <span className={`text-[2.4rem] font-semibold leading-none ${plan.popular ? "text-white" : "text-[var(--color-charcoal)]"}`}>
                    {plan.totalPrice}
                  </span>
                  <span className={`mb-0.5 text-sm ${plan.popular ? "text-white/60" : "text-[#6a6a69]"}`}>
                    total
                  </span>
                </div>
                <p className={`mt-1.5 text-sm font-medium ${plan.popular ? "text-white/65" : "text-[var(--color-muted-sage)]"}`}>
                  {plan.perMeal} per meal &middot; {plan.meals} meals
                </p>
              </div>

              {/* Features */}
              <ul className="mt-7 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <span className={`shrink-0 ${plan.popular ? "text-[var(--color-champagne)]" : "text-[var(--color-deep-forest)]"}`}>
                      {checkIcon}
                    </span>
                    <span className={plan.popular ? "text-white/85" : "text-[#4a4a49]"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA — mt-auto pins this to the bottom regardless of feature count */}
              <a
                href="#waitlist"
                className={`mt-auto pt-8 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition duration-300 hover:scale-[1.01] shadow-md ${
                  plan.popular
                    ? "bg-[var(--color-champagne)] text-[var(--color-deep-forest)] hover:brightness-105"
                    : "bg-[var(--color-deep-forest)] text-white hover:bg-[#234a31]"
                }`}
              >
                Join Waitlist
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.3 }}
          className="mt-8 text-sm text-[#7a7a78]"
        >
          No contracts. No auto-renewals. Pay once, enjoy your meals.
        </motion.p>

      </div>
    </section>
  );
}
