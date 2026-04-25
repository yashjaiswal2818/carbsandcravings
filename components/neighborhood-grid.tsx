"use client";

import { motion } from "framer-motion";

const neighborhoods = [
  "Koramangala", "Indiranagar", "HSR", "BTM", "Whitefield",
  "Jayanagar", "JP Nagar", "Bellandur", "Marathahalli", "Sarjapur Road",
  "Kalyan Nagar", "Banashankari", "Basavanagudi", "Hebbal", "Yelahanka",
  "RT Nagar", "Ulsoor", "Richmond Town", "Domlur", "CV Raman Nagar",
  "Frazer Town", "Cooke Town", "Malleshwaram", "Rajajinagar", "Hennur"
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function NeighborhoodGrid() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <motion.div {...reveal} className="mx-auto w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-[var(--color-charcoal)] sm:text-3xl">
          Serving neighborhoods across Bengaluru
        </h2>
        <p className="mt-3 text-base text-[#4a4a49]">
          Select your area to join the local waitlist.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-2.5">
          {neighborhoods.map((hood) => (
            <a
              key={hood}
              href="#waitlist"
              className="rounded-full border border-[var(--color-muted-sage)]/30 px-3.5 py-1.5 text-sm font-medium text-[var(--color-muted-sage)] transition-colors hover:border-[var(--color-deep-forest)] hover:bg-[var(--color-deep-forest)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-deep-forest)] focus-visible:ring-offset-2"
            >
              {hood}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
