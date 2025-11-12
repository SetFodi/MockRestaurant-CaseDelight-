"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { dishes } from "@/lib/data";
import { motion, useReducedMotion } from "framer-motion";

const featured = dishes.filter((dish) =>
  ["Khachapuri Supreme", "Black Garlic Khinkali", "Pelamushi Parfait"].includes(
    dish.name
  )
);

export function SignatureDishes() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 lg:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow text-amber-500/70">Signature Dishes</p>
          <h2 className="section-heading">
            Georgian icons, interpreted with modern elegance.
          </h2>
        </div>
        <p
          className="max-w-md text-sm leading-relaxed opacity-90 dark:opacity-70"
          style={{ color: "var(--foreground)" }}
        >
          Ingredients sourced from small-batch Georgian producers meet cutting-edge culinary technique. Each plate celebrates contrasts of texture, temperature, and aroma.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((dish, index) => (
          <Reveal key={dish.name} delay={index * 0.08}>
            <motion.article
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { scale: 1.015, y: -4, rotateX: 1.2 }
              }
              className="group overflow-hidden rounded-3xl border border-white/20 bg-white/70 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/70"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[0.4px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/80">
                  {dish.category}
                </span>
              </div>
              <div className="space-y-3 px-6 py-6">
                <h3 className="font-serif text-2xl tracking-[0.04em] text-gray-900 dark:text-white">
                  {dish.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-800 dark:text-white/70">
                  {dish.description}
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">
                  {dish.price}
                </p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

