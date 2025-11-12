"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { dishes, menuCategories, type MenuCategory } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const categoryLabels: Record<MenuCategory, string> = {
  Starters: "Starters",
  "Main Courses": "Main Courses",
  Desserts: "Desserts",
  Drinks: "Drinks",
};

export function MenuGrid() {
  const [category, setCategory] = useState<MenuCategory | "All">("All");
  const prefersReducedMotion = useReducedMotion();

  const filteredDishes = useMemo(() => {
    if (category === "All") return dishes;
    return dishes.filter((dish) => dish.category === category);
  }, [category]);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 lg:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow text-amber-500/70">Epicurean Menu</p>
          <h1 className="section-heading">
            Georgian soul, reimagined for modern palates.
          </h1>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-black/70 dark:text-white/70">
          Each dish honors the regions of Georgia. Savor house-fermented sauces,
          wood-fired breads, seasonal produce, and cellar-aged qvevri wines.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {["All", ...menuCategories].map((item) => (
          <motion.button
            key={item}
            onClick={() => setCategory(item as MenuCategory | "All")}
            className={clsx(
              "rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition backdrop-blur",
              category === item
                ? "border-amber-400 bg-amber-300/20 text-amber-800 dark:text-amber-200"
                : "border-black/10 bg-white/40 text-black/60 hover:border-black/30 hover:text-black dark:border-white/15 dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
            )}
            whileHover={
              prefersReducedMotion ? undefined : { scale: 1.05, y: -2 }
            }
            whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
          >
            {item}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {filteredDishes.map((dish, index) => (
            <Reveal key={`${dish.name}-${index}`} delay={index * 0.04}>
              <motion.article
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { translateY: -6, scale: 1.01 }
                }
                className="group overflow-hidden rounded-3xl border border-white/20 bg-white/70 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/70"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[0.4px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/80">
                    {categoryLabels[dish.category]}
                  </span>
                </div>
                <div className="space-y-3 px-6 py-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl tracking-[0.04em] text-black dark:text-white">
                      {dish.name}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                    {dish.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

