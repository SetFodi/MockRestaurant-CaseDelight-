"use client";

import { AnimatedButton } from "@/components/ui/animated-button";
import { motion, useReducedMotion } from "framer-motion";

export function ReservationCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="reservations"
      className="relative mx-auto mt-12 w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-black/10 dark:border-white/25 bg-gradient-to-br from-black/95 via-black/90 to-black/95 dark:from-black/85 dark:via-black/85 dark:to-black/85 px-6 py-12 text-white shadow-2xl backdrop-blur lg:px-16"
    >
      <motion.div
        aria-hidden
        className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl"
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.7 }}
        animate={prefersReducedMotion ? undefined : { opacity: 0.8, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-amber-600/20 blur-3xl"
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.6 }}
        animate={prefersReducedMotion ? undefined : { opacity: 0.7, scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4 lg:max-w-lg">
          <p className="eyebrow text-amber-300/80 dark:text-amber-300/80">Reserve your evening</p>
          <h2 className="font-serif text-4xl tracking-[0.08em] text-white dark:text-white">
            Secure the chef's table or a private salon.
          </h2>
          <p className="max-w-md text-sm text-white/70 dark:text-white/70">
            Our concierge will follow up within the hour to craft a bespoke menu,
            wine journey, and ambiance to match your celebration.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.3em] text-white/60 dark:text-white/60">
          <p>Reservations: +995 555 123 456</p>
          <p>Concierge: concierge@casadelight.com</p>
          <AnimatedButton
            href="/contact"
            variant="primary"
            className="mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black"
          >
            Plan Your Evening
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}

