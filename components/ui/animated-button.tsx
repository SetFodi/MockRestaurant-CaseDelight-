"use client";

import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type AnimatedButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
}>;

export function AnimatedButton({
  children,
  variant = "primary",
  className,
  href,
}: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70";

  const variantClasses: Record<typeof variant, string> = {
    primary:
      "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40",
    secondary:
      "glass-panel border text-black dark:text-white border-black/10 dark:border-white/20 hover:border-black/30 dark:hover:border-white/40",
    ghost:
      "bg-transparent text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 border border-transparent",
  };

  const hoverAnimation = prefersReducedMotion
    ? undefined
    : { scale: 1.03, y: -2, boxShadow: "0 24px 45px rgba(182, 129, 56, 0.35)" };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      type={href ? undefined : "button"}
      className={clsx(baseClasses, variantClasses[variant], className)}
      whileHover={hoverAnimation}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
    >
      {children}
    </Component>
  );
}

