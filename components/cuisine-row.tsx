"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cuisines = [
  { label: "North Indian Thali", image: "/cuisines/cuisine-north-indian-thali.webp" },
  { label: "South Indian Thali", image: "/cuisines/cuisine-south-tiffin.webp" },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function CuisineRow() {
  return (
    <section className="bg-[var(--color-section)] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal}>
          <h2 className="text-4xl font-semibold text-[var(--color-charcoal)]">
            Meals you&apos;ll find this week
          </h2>
          <p className="mt-4 text-lg text-[#4a4a49]">
            Freshly prepared by local home cooks.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {cuisines.map((cuisine, i) => (
            <motion.div
              key={cuisine.label}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.1 }}
              className="group relative h-[280px] w-full overflow-hidden rounded-[1.75rem] sm:h-[320px]"
            >
              <Image
                src={cuisine.image}
                alt={cuisine.label}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-xl font-semibold leading-tight text-white">
                {cuisine.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
