"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function CookSpotlight() {
  return (
    <section id="cook" className="bg-[var(--color-deep-forest)] px-4 xs:px-6 py-16 sm:py-20 text-white sm:px-10 desktop:py-[110px] lg:px-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-10 sm:gap-16 desktop:grid-cols-2">

          {/* Portrait image — 4:3 on mobile, 4:5 on tablet+ */}
          <motion.div
            {...reveal}
            className="cook-portrait relative overflow-hidden rounded-[20px] sm:rounded-[28px] w-full"
            style={{ boxShadow: "0 30px 80px -26px rgba(0,0,0,0.5)" }}
          >
            <Image src="/working/img2.jpeg" alt="A home cook at her stove" fill sizes="(min-width: 1001px) 45vw, 100vw" className="object-cover" />
          </motion.div>

          {/* Copy */}
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-champagne)]">— For home cooks</div>
            <h2 className="mt-4 font-semibold text-white" style={{ fontSize: "clamp(32px, 5vw, 62px)", lineHeight: 1, letterSpacing: "-0.015em" }}>
              Cook at home <em className="font-medium" style={{ fontStyle: "italic", color: "var(--color-champagne)" }}>already?</em><br />Turn it into income.
            </h2>
            <p className="mt-6 max-w-[480px] leading-[1.4]" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(18px, 2.2vw, 22px)", color: "var(--color-champagne)" }}>
              &ldquo;I cook for my family every day. Now I cook for ten more, and it pays my daughter&apos;s tuition.&rdquo;
            </p>
            <p className="mt-5 max-w-[480px] text-[15px] sm:text-[16px] leading-relaxed text-white/78">
              We onboard 1–2 cooks a week, personally. We visit your kitchen, taste your food, set you up with steel boxes, training, and a steady weekly income. No app fees. We take care of everything but the cooking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#waitlist" className="inline-flex items-center justify-center rounded-full bg-[var(--color-champagne)] px-7 py-3.5 text-[14px] font-semibold text-[var(--color-deep-forest)] transition-colors hover:brightness-105">
                Apply as a cook
              </a>
              <button className="inline-flex items-center justify-center rounded-full border border-white/55 bg-white/10 px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-white/85 hover:bg-white/20">
                How it works for cooks →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function InterruptStrip({ id }: { id?: string }) {
  return <CookSpotlight />;
}
