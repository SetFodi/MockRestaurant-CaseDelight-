"use client";

import Image from "next/image";
import { storyHighlights } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { motion, useReducedMotion } from "framer-motion";

export function StoryHighlights() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,161,90,0.15),transparent_65%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {storyHighlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 0.12}>
              <motion.article
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        translateY: -6,
                        boxShadow: "0 28px 75px rgba(20,15,10,0.22)",
                      }
                }
                className="group overflow-hidden rounded-3xl border border-white/20 bg-white/60 text-black shadow-xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/65 dark:text-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105 group-hover:blur-[0.5px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.4em] text-white/70">
                    Casa Delight
                  </p>
                </div>
                <div className="space-y-3 px-6 py-8">
                  <h3 className="font-serif text-2xl tracking-[0.05em]">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                    {highlight.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

