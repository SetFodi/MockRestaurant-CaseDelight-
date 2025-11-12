"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/data";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export function GalleryMasonry() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 0.65]);

  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-amber-300/25 to-transparent"
        style={{ opacity: prefersReducedMotion ? undefined : glowOpacity }}
      />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow text-amber-500/70">Visual Memories</p>
          <h1 className="section-heading">
            Moments that linger long after the final toast.
          </h1>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-black/70 dark:text-white/70">
          Step inside Casa Delight’s illuminated salons, chef’s table, and wine
          library. Each gallery capture embraces warm lighting and cinematic
          textures.
        </p>
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryImages.map((image, index) => (
          <motion.figure
            key={image.src}
            className="relative mb-4 overflow-hidden rounded-3xl border border-white/15 bg-white/50 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/60"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: prefersReducedMotion ? 0 : index * 0.06,
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : { scale: 1.015, boxShadow: "0 26px 60px rgba(15,10,6,0.22)" }
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={1200}
              className="h-auto w-full object-cover transition duration-500"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 py-4 text-xs uppercase tracking-[0.3em] text-white/80">
              {image.alt}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

