"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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

type MealType = "lunch" | "dinner";

type Meal = {
  kitchen: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  price: string;
  protein: string;
  carbs: string;
  fat: string;
  calories: string;
};

const mealsByType: Record<MealType, Meal[]> = {
  lunch: [
    {
      kitchen: "Grill & Grain",
      title: "Dal Makhani with Jeera Rice",
      badge: "Veg",
      image: "/products/card-home-cooked.png",
      description:
        "Slow-cooked black dal in a light makhani gravy with fragrant jeera rice and green chutney.",
      price: "₹149",
      protein: "18g",
      carbs: "44g",
      fat: "10g",
      calories: "356",
    },
    {
      kitchen: "Maa Ke Haath",
      title: "Palak Paneer + 2 Phulkas",
      badge: "High Protein",
      image: "/hero/home-cooked-meals.png",
      description:
        "Fresh spinach-paneer curry with soft phulkas and cucumber salad for a balanced midday meal.",
      price: "₹159",
      protein: "23g",
      carbs: "32g",
      fat: "12g",
      calories: "372",
    },
    {
      kitchen: "Namma Oota",
      title: "Sambar Rice Bowl + Poriyal",
      badge: "Comfort",
      image: "/products/card-home-cooked.png",
      description:
        "Hearty sambar rice paired with seasonal poriyal and curd for an easy daily lunch routine.",
      price: "₹129",
      protein: "14g",
      carbs: "48g",
      fat: "8g",
      calories: "338",
    },
  ],
  dinner: [
    {
      kitchen: "Late Night Rasoi",
      title: "Rajma Bowl with Rice",
      badge: "Veg",
      image: "/hero/home-cooked-meals.png",
      description:
        "Punjabi-style rajma in tomato gravy, served with steamed rice and fresh onion-cucumber kachumber.",
      price: "₹149",
      protein: "17g",
      carbs: "46g",
      fat: "9g",
      calories: "349",
    },
    {
      kitchen: "Protein Plate Co.",
      title: "Paneer Bhurji + Millet Rotis",
      badge: "Protein Focus",
      image: "/products/card-home-cooked.png",
      description:
        "Masala paneer bhurji with two millet rotis, designed for a lighter dinner with stronger macros.",
      price: "₹169",
      protein: "26g",
      carbs: "29g",
      fat: "13g",
      calories: "361",
    },
    {
      kitchen: "South Bowl Kitchen",
      title: "Lemon Rice + Egg Masala",
      badge: "Egg",
      image: "/hero/home-cooked-meals.png",
      description:
        "Tangy lemon rice and homestyle egg masala, packed as a warm no-fuss dinner for weeknights.",
      price: "₹159",
      protein: "22g",
      carbs: "38g",
      fat: "11g",
      calories: "374",
    },
  ],
};

function MealCard({ meal }: { meal: Meal }) {
  return (
    <motion.article
      variants={itemVariants}
      className="overflow-hidden rounded-[1.8rem] bg-white card-shadow"
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={meal.image}
          alt={meal.title}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 92vw"
          className="object-cover object-center"
        />
      </div>
      <div className="p-6">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-sage)]">
          {meal.kitchen}
        </p>
        <h3 className="mt-1.5 text-2xl font-semibold leading-tight text-[var(--color-charcoal)]">
          {meal.title}
        </h3>
        <span className="mt-4 inline-flex rounded-full bg-[#dce8dd] px-3 py-1 text-xs font-semibold text-[var(--color-deep-forest)]">
          {meal.badge}
        </span>
        <p className="mt-4 text-[0.98rem] leading-relaxed text-[#4a4a49]">
          {meal.description}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-[var(--color-section)] p-3 text-sm text-[var(--color-charcoal)] sm:grid-cols-4">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-[#6a6a69]">Protein</p>
            <p className="mt-1 font-semibold text-[var(--color-deep-forest)]">{meal.protein}</p>
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-[#6a6a69]">Carbs</p>
            <p className="mt-1 font-semibold">{meal.carbs}</p>
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-[#6a6a69]">Fat</p>
            <p className="mt-1 font-semibold">{meal.fat}</p>
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.12em] text-[#6a6a69]">Calories</p>
            <p className="mt-1 font-semibold">{meal.calories}</p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-lg font-semibold text-[var(--color-deep-forest)]">{meal.price}</p>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-muted-sage)]/35 px-4 py-2 text-sm font-semibold text-[var(--color-deep-forest)] transition-colors hover:bg-[var(--color-base)]"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function ProductCardRow() {
  const [mealType, setMealType] = useState<MealType>("dinner");
  const meals = useMemo(() => mealsByType[mealType], [mealType]);

  return (
    <section className="bg-[var(--color-base)] px-6 py-20 sm:px-10 lg:px-16">
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
            Meals for every day
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-[#4a4a49]"
          >
            Pick lunch or dinner and see exactly what you get, including protein
            and nutrition details.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 inline-flex rounded-full bg-white p-1.5 shadow-[0_10px_24px_rgba(45,90,61,0.12)]">
            <button
              onClick={() => setMealType("lunch")}
              className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-colors sm:text-base ${
                mealType === "lunch"
                  ? "bg-[var(--color-deep-forest)] text-white"
                  : "text-[var(--color-charcoal)] hover:bg-[var(--color-base)]"
              }`}
            >
              ☀ Lunch
            </button>
            <button
              onClick={() => setMealType("dinner")}
              className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-colors sm:text-base ${
                mealType === "dinner"
                  ? "bg-[var(--color-deep-forest)] text-white"
                  : "text-[var(--color-charcoal)] hover:bg-[var(--color-base)]"
              }`}
            >
              🌙 Dinner
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          key={mealType}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {meals.map((meal) => (
            <MealCard key={`${mealType}-${meal.title}`} meal={meal} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
