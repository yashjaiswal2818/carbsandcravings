"use client";

import { motion } from "framer-motion";

const plans = [
  {
    id: "starter",
    slot: "Dinner · 3 days",
    name: "3-Day Trial",
    tag: null,
    description: "Try us before you commit. Three freshly cooked dinners delivered to your door.",
    totalPrice: "₹699",
    perMeal: "₹233 per meal · 3 meals",
    features: ["Choose lunch or dinner", "Macros on every plate", "Doorstep delivery in steel tiffins", "Cancel anytime"],
    popular: false,
    cta: "Reserve trial spot",
  },
  {
    id: "kickstart",
    slot: "Dinner · 4 days",
    name: "4-Day Plan",
    tag: "Best value",
    description: "A full working-week of real home-cooked food. Most customers start here.",
    totalPrice: "₹1,499",
    perMeal: "₹374 per meal · 4 meals",
    features: ["Choose lunch or dinner", "Macros on every plate", "Priority slot booking", "Dedicated cook match", "Skip a day, no charge"],
    popular: true,
    cta: "Reserve weekly spot",
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
  return (
    <section id="plans" className="bg-[var(--color-section)] px-6 py-[120px] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1240px]">

        {/* Header */}
        <motion.div {...reveal} className="mb-14 flex flex-wrap items-end justify-between gap-10">
          <div>
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-sage)]">— Plans &amp; pricing</div>
            <h2 className="mt-4 font-semibold text-[var(--color-charcoal)]" style={{ fontSize: "clamp(36px, 5vw, 62px)", lineHeight: 0.98, letterSpacing: "-0.015em" }}>
              Start with a <em className="font-medium" style={{ fontStyle: "italic", color: "#c68050" }}>taste</em>.<br />Stay for a week.
            </h2>
          </div>
          <p className="max-w-[420px] text-[17px] text-[#5b5a58]">No lock-ins. No auto-renewals. Pay once, eat well.</p>
        </motion.div>

        {/* Plan cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 + i * 0.1 }}
              className={`relative flex min-h-[460px] flex-col rounded-[28px] p-9 ${plan.popular ? "bg-[var(--color-deep-forest)] text-white" : "bg-white ambient-shadow"}`}
            >
              {plan.tag && (
                <span className="absolute -top-3 left-9 rounded-full bg-[var(--color-champagne)] px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[var(--color-deep-forest)]">
                  {plan.tag}
                </span>
              )}

              <div className={`text-[11.5px] font-semibold uppercase tracking-[0.16em] ${plan.popular ? "text-white/55" : "text-[var(--color-muted-sage)]"}`}>{plan.slot}</div>
              <h3 className={`mt-1.5 font-semibold leading-none ${plan.popular ? "text-white" : "text-[var(--color-charcoal)]"}`} style={{ fontFamily: "var(--font-display)", fontSize: "34px" }}>
                {plan.name}
              </h3>
              <p className={`mt-4 text-[14.5px] ${plan.popular ? "text-white/72" : "text-[#5b5a58]"}`}>{plan.description}</p>

              {/* Price block — centered */}
              <div className={`mt-7 rounded-2xl p-[18px] text-center ${plan.popular ? "bg-white/10" : "bg-[var(--color-base)]"}`}>
                <div className={`font-semibold leading-none ${plan.popular ? "text-white" : "text-[var(--color-charcoal)]"}`} style={{ fontFamily: "var(--font-display)", fontSize: "40px" }}>
                  {plan.totalPrice}
                  <small className={`ml-1.5 text-[14px] font-normal ${plan.popular ? "text-white/60" : "text-[#6a6a69]"}`} style={{ fontFamily: "inherit" }}>total</small>
                </div>
                <div className={`mt-1.5 text-[13.5px] font-medium ${plan.popular ? "text-white/65" : "text-[var(--color-muted-sage)]"}`}>{plan.perMeal}</div>
              </div>

              {/* Features */}
              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-[14.5px]">
                    <span className={`shrink-0 ${plan.popular ? "text-[var(--color-champagne)]" : "text-[var(--color-deep-forest)]"}`}>{checkIcon}</span>
                    <span className={plan.popular ? "text-white/85" : "text-[#4a4a49]"}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 text-[14.5px] font-semibold transition duration-200 hover:scale-[1.01] ${
                  plan.popular ? "bg-[var(--color-champagne)] text-[var(--color-deep-forest)] hover:brightness-105" : "bg-[var(--color-deep-forest)] text-white hover:bg-[#234a31]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.3 }} className="mt-8 text-[13px] text-[#7a7a78]">
          No contracts. No auto-renewals. Pay once, enjoy your meals.
        </motion.p>
      </div>
    </section>
  );
}
