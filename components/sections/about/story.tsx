"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { motion, useReducedMotion } from "framer-motion";

export function StorySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <div className="space-y-6">
            <p className="eyebrow text-amber-500/70">Our Story</p>
            <h1 className="section-heading">
              From Kakheti vineyards to a cinematic urban dining room.
            </h1>
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
              Casa Delight began as a three-generation family passion for
              winemaking. Guided by Executive Chef Elene Mdivani, we reinterpret
              Georgia’s pantry with modern expression—aging sauces in qvevri,
              cold-smoking cheeses over cherrywood, and plating with theatrical
              flair.
            </p>
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
              Our salon envelopes guests in warm lighting, tactile textures, and
              curated jazz—inviting evenings that stretch into intimate hours.
              Every service is choreographed by our guest experience director to
              feel personal and fluid.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            whileHover={
              prefersReducedMotion ? undefined : { scale: 1.015, rotate: -0.4 }
            }
            className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/60 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/70"
          >
            <Image
              src="https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=1200&q=80"
              alt="Casa Delight dining room"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
            <div className="absolute bottom-6 left-6 space-y-2 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Est. 2011 · Tbilisi
              </p>
              <p className="text-base font-semibold tracking-[0.3em]">
                Crafted Warmth
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

