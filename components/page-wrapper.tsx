"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export function PageWrapper({ children }: PropsWithChildren) {
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();

  if (prefersReducedMotion) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex-1"
    >
      {children}
    </motion.main>
  );
}

