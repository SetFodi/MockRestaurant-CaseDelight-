"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";

export function Hero() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const parallax = useTransform(scrollY, [0, 300], [0, -80]);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-32 sm:pt-40">
      <motion.div
        style={{ y: prefersReducedMotion ? undefined : parallax }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=1600&q=80"
          alt="Casa Delight fine dining table"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/40 to-black/75" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 text-white lg:flex-row lg:items-center lg:gap-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="glass-panel glow-ring max-w-2xl px-8 py-10 text-balance shadow-2xl lg:px-10"
        >
          <p className="eyebrow text-white/50">Tbilisi · Rustaveli Avenue</p>
          <h1 className="section-heading mt-6 text-white">
            Taste the Art of Fine Dining
          </h1>
          <p className="description mt-4 text-white/80">
            A cinematic culinary house celebrating Georgian heritage through
            modern craftsmanship. Every seating becomes a multi-sensory story
            guided by Chef Elene Mdivani and our wine artisans.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <AnimatedButton href="#reservations">
              Reserve a Table
            </AnimatedButton>
            <AnimatedButton
              href="/menu"
              variant="secondary"
              className="text-white"
            >
              Explore the Menu
            </AnimatedButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex-1"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Heritage-inspired Tasting",
                detail: "7 course seasonal journey",
              },
              {
                label: "Cellar of Qvevri Wines",
                detail: "Curated rare vintages",
              },
              {
                label: "Live Fire Kitchen",
                detail: "Harnessing ancient techniques",
              },
              {
                label: "Immersive Atmosphere",
                detail: "Warm lighting and curated jazz",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { scale: 1.02, translateY: -4 }
                }
                className="glass-panel flex h-full flex-col gap-2 rounded-3xl border border-white/15 bg-white/10 p-5 text-white/80 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200/90">
                  {item.label}
                </p>
                <p className="text-base font-semibold text-white">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

