"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function ArrowBtn() {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2d5a3d] text-white">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M3.5 9h11M10 4.5l4.5 4.5L10 13.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── Card 1: Home Cooked ─────────────────────────────────────────────────── */
function HomeCookedCard() {
  return (
    <motion.a
      href="#waitlist"
      variants={itemVariants}
      className="group relative flex overflow-hidden rounded-[2rem] bg-white card-shadow card-lift aspect-[1776/1362] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a3d] focus-visible:ring-offset-2"
    >
      {/* Left: white text panel */}
      <div className="flex w-[46%] shrink-0 flex-col justify-between p-6">
        <div>
          <h3 className="text-[clamp(1.35rem,_3vw,_2.1rem)] font-bold leading-[1.05] text-[#1e3d29]">
            Home<br />Cooked
          </h3>
          <p className="mt-3 text-[clamp(0.65rem,_1.1vw,_0.85rem)] leading-snug text-[#2d5a3d]">
            Lunch & dinner for your daily meals.
          </p>
          <span className="mt-4 inline-block rounded-full bg-[#2d5a3d] px-4 py-1.5 text-[clamp(0.55rem,_0.9vw,_0.78rem)] font-medium text-white">
            Meals from ₹120
          </span>
        </div>
        <ArrowBtn />
      </div>

      {/* Right: food photo fills the panel */}
      <div className="relative flex-1 overflow-hidden">
        <Image
          src="/products/card-home-cooked.png"
          alt="Indian home-cooked thali — roti, rice, dal, sabzi"
          fill
          sizes="(min-width: 768px) 20vw, 55vw"
          className="object-cover object-center transition duration-300 group-hover:scale-[1.04]"
        />
      </div>
    </motion.a>
  );
}

/* ── Card 2: Tiffin Plans ───────────────────────────────────────────────── */
function TiffinPlansCard() {
  return (
    <motion.a
      href="#waitlist"
      variants={itemVariants}
      className="group relative flex overflow-hidden rounded-[2rem] bg-[#eae5dd] card-shadow card-lift aspect-[1776/1362] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a3d] focus-visible:ring-offset-2 p-5 gap-4"
    >
      {/* Left: text */}
      <div className="flex w-[46%] shrink-0 flex-col justify-between">
        <div>
          <h3 className="text-[clamp(1.35rem,_3vw,_2.1rem)] font-bold leading-[1.05] text-[#1e3d29]">
            Tiffin<br />Plans
          </h3>
          <p className="mt-3 text-[clamp(0.65rem,_1.1vw,_0.85rem)] leading-snug text-[#2d5a3d]">
            Weekly & monthly subscription plans
          </p>
          <span className="mt-4 inline-block rounded-full bg-[#d4c5a3] px-4 py-1.5 text-[clamp(0.55rem,_0.9vw,_0.78rem)] font-medium text-[#2d5a3d]">
            Coming soon
          </span>
        </div>
        <ArrowBtn />
      </div>

      {/* Right: green gradient panel with tiffin photo */}
      <div className="relative flex-1 overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#8ca885] via-[#a8be9f] to-[#c6d4be]">
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <Image
            src="/products/card-tiffin-plans.png"
            alt="Stainless steel tiffin dabba"
            width={300}
            height={300}
            sizes="(min-width: 768px) 13vw, 40vw"
            className="w-[82%] h-auto object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.04]"
          />
        </div>
      </div>
    </motion.a>
  );
}

/* ── Card 3: For the Best Home Cooks ───────────────────────────────────── */
function ForCooksCard() {
  return (
    <motion.a
      href="#for-cooks"
      variants={itemVariants}
      className="group relative flex overflow-hidden rounded-[2rem] bg-[#eae5dd] card-shadow card-lift aspect-[1776/1362] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a3d] focus-visible:ring-offset-2 p-6"
    >
      {/* Left: text */}
      <div className="flex w-[46%] shrink-0 flex-col justify-between">
        <div>
          <h3 className="text-[clamp(1.35rem,_3vw,_2.1rem)] font-bold leading-[1.05] text-[#1e3d29]">
            For the best home Cooks
          </h3>
          <p className="mt-3 text-[clamp(0.65rem,_1.1vw,_0.85rem)] leading-snug text-[#2d5a3d]">
            Handpicked & premium ingredients
          </p>
        </div>
        <ArrowBtn />
      </div>

      {/* Right: sage circle backdrop + brass cookware photo */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full bg-[#b5c4b1]/45" />
        <div className="relative z-10 w-[95%]">
          <Image
            src="/products/card-for-cooks.png"
            alt="Traditional brass karahi and cookware"
            width={380}
            height={380}
            sizes="(min-width: 768px) 13vw, 40vw"
            className="w-full h-auto object-contain drop-shadow-md transition duration-300 group-hover:scale-[1.04]"
          />
        </div>
      </div>
    </motion.a>
  );
}

/* ── Section ─────────────────────────────────────────────────────────────── */
export function ProductCardRow() {
  return (
    <section className="bg-[var(--color-base)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-10 lg:mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-semibold text-[var(--color-charcoal)]"
          >
            Choose your mode
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-[#4a4a49]"
          >
            One-off meals, weekly plans, or earning from your own kitchen.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <HomeCookedCard />
          <TiffinPlansCard />
          <ForCooksCard />
        </motion.div>
      </div>
    </section>
  );
}
