"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const menuCards = [
  {
    image: "/cuisines/cuisine-north-indian-thali.webp",
    alt: "North Indian Thali",
    day: "Featured plate",
    name: "North Indian Thali",
  },
  {
    image: "/cuisines/cuisine-south-indian-dosa.webp",
    alt: "Masala Dosa Tiffin",

    day: "Bengaluru classic",
    name: "Masala Dosa Tiffin",
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function MenuSection() {
  return (
    <section id="menu" className="bg-[var(--color-section)] px-4 xs:px-6 py-16 sm:py-20 sm:px-10 desktop:py-[120px] lg:px-16">
      <div className="mx-auto max-w-[1240px]">
        <motion.div {...reveal} className="mb-10 sm:mb-14 flex flex-wrap items-end justify-between gap-6 sm:gap-10">
          <div>
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-sage)]">— This week&apos;s rotation</div>
            <h2 className="mt-4 font-semibold text-[var(--color-charcoal)]" style={{ fontSize: "clamp(30px, 5vw, 62px)", lineHeight: 0.98, letterSpacing: "-0.015em" }}>
              Two signatures. <em className="font-medium" style={{ fontStyle: "italic", color: "#c68050" }}>Every day.</em><br />One steel tiffin.
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] sm:text-[17px] text-[#5b5a58]">Two homestyle plates, prepared fresh every day. Pick what fits your craving.</p>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 tablet:grid-cols-2">
          {menuCards.map((card, i) => (
            <motion.a
              key={card.name}
              href="#waitlist"
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.1 }}
              className="group relative block overflow-hidden rounded-[24px]"
              style={{ aspectRatio: "1.05" }}
            >
              <Image src={card.image} alt={card.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.78) 100%)" }} />
              <div className="absolute bottom-[18px] left-[18px] right-[18px] text-white">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-85">{card.day}</div>
                <div className="mt-1.5 font-semibold leading-[1.1]" style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}>{card.name}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export { MenuSection as CuisineRow };
