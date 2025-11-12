"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import clsx from "clsx";

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
  once?: boolean;
}>;

export function Reveal({
  children,
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "0px 0px -10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={clsx("will-change-transform", className)}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

