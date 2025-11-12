"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { team } from "@/lib/data";
import { motion, useReducedMotion } from "framer-motion";

export function TeamSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 lg:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow text-amber-500/70">Our Artisans</p>
          <h2 className="section-heading">A collective of Georgian storytellers.</h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-black/70 dark:text-white/70">
          From the kitchen brigade to sommeliers and hosts, Casa Delight is powered by artisans who turn every moment into theatre—sharing the warmth of our homeland with precision.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {team.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.08}>
            <motion.article
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -8, boxShadow: "0 28px 65px rgba(15,10,6,0.24)" }
              }
              className="overflow-hidden rounded-3xl border border-white/20 bg-white/70 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/70"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 px-6 py-6">
                <div>
                  <p className="font-serif text-xl text-black dark:text-white">
                    {member.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-600 dark:text-amber-300">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                  {member.bio}
                </p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

