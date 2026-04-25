"use client";

import { motion } from "framer-motion";

export function InterruptStrip({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-[var(--color-deep-forest)] px-6 py-16 text-center text-white sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10"
      >
        <h2 className="text-2xl sm:text-3xl">
          <em style={{fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400}}>Cook at home already?</em>{" "}
          <span className="font-bold">Turn it into income.</span>
        </h2>
        <a
          href="#for-cooks"
          className="whitespace-nowrap rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-[var(--color-deep-forest)] transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-deep-forest)]"
        >
          Apply as a cook
        </a>
      </motion.div>
    </section>
  );
}
