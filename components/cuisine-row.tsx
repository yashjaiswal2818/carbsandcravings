"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const cuisines = [
  { label: "North Indian Thali", image: "/cuisines/cuisine-north-indian-thali.webp" },
  { label: "South Indian Dosa", image: "/cuisines/cuisine-south-indian-dosa.webp" },
  { label: "Biryani", image: "/cuisines/cuisine-biryani.webp" },
  { label: "Rolls & Street Food", image: "/cuisines/cuisine-rolls.webp" },
  { label: "Bengali", image: "/cuisines/cuisine-bengali.webp" },
  { label: "Maharashtrian", image: "/cuisines/cuisine-maharashtrian.webp" },
  { label: "Gujarati", image: "/cuisines/cuisine-gujarati.webp" },
  { label: "South Indian Tiffin", image: "/cuisines/cuisine-south-tiffin.webp" },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function CuisineRow() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    scrollRef.current?.scrollBy({ left: direction === "right" ? 280 : -280, behavior: "smooth" });
  }

  return (
    <section className="bg-[var(--color-section)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...reveal} className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-semibold text-[var(--color-charcoal)]">
              Meals you&apos;ll find this week
            </h2>
            <p className="mt-4 text-lg text-[#4a4a49]">
              Freshly prepared by local home cooks.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-muted-sage)]/40 bg-white text-[var(--color-charcoal)] transition hover:bg-[var(--color-deep-forest)] hover:text-white hover:border-[var(--color-deep-forest)]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-muted-sage)]/40 bg-white text-[var(--color-charcoal)] transition hover:bg-[var(--color-deep-forest)] hover:text-white hover:border-[var(--color-deep-forest)]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={scrollRef}
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.1 }}
        className="mt-10 flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
      >
        {cuisines.map((cuisine, index) => (
          <div
            key={cuisine.label}
            className={`group relative h-[240px] w-[240px] shrink-0 snap-center overflow-hidden rounded-2xl ${
              index === 0
                ? "ml-[max(1.5rem,calc((100%-72rem)/2))]"
                : ""
            } ${
              index === cuisines.length - 1
                ? "mr-[max(1.5rem,calc((100%-72rem)/2))]"
                : ""
            }`}
          >
            <Image
              src={cuisine.image}
              alt={cuisine.label}
              fill
              sizes="240px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Caption */}
            <p className="absolute bottom-4 left-4 right-4 text-lg font-medium leading-tight text-white">
              {cuisine.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
