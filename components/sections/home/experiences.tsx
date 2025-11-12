"use client";

import { experiences } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

export function Experiences() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 lg:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow text-amber-500/70">Signature Evenings</p>
          <h2 className="section-heading">
            Crafted for connoisseurs who savor detail.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-black/70 dark:text-white/70">
          Each Casa Delight experience weaves ancient Georgian techniques with
          contemporary craft. Expect tableside storytelling, theatrical reveals,
          and impeccable pacing attuned to your evening.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {experiences.map((experience, index) => (
          <Reveal key={experience.title} delay={index * 0.1}>
            <motion.article
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -6, scale: 1.01, boxShadow: "0 28px 60px rgba(20,15,10,0.18)" }
              }
              className={clsx(
                "card-surface relative h-full rounded-3xl border border-white/25 bg-white/70 backdrop-blur dark:bg-zinc-900/70"
              )}
            >
              <div className="absolute -right-4 top-4 hidden h-12 w-12 items-center justify-center rounded-full border border-amber-200 bg-amber-100/60 font-serif text-xl text-amber-700 shadow-lg sm:flex">
                0{index + 1}
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl tracking-[0.05em] text-black dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                  {experience.description}
                </p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

