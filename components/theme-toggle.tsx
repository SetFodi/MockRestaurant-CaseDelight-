"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { useIsClient } from "@/lib/hooks/use-is-client";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isClient = useIsClient();
  const [toggling, setToggling] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (!isClient) {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/20 backdrop-blur">
        <Sun className="h-4 w-4 text-amber-500" />
      </span>
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <motion.button
      type="button"
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
      onClick={() => {
        if (toggling) return;
        setToggling(true);
        setTheme(isDark ? "light" : "dark");
        setTimeout(() => setToggling(false), prefersReducedMotion ? 0 : 240);
      }}
      className={clsx(
        "relative inline-flex h-11 w-20 items-center rounded-full border border-white/25 px-1",
        "backdrop-blur-xl glass-panel transition-all duration-300 ease-out",
        "shadow-lg shadow-black/10 dark:shadow-black/30"
      )}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { scale: 1.02, boxShadow: "0 18px 35px rgba(0,0,0,0.18)" }
      }
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={clsx(
          "absolute inset-1 flex items-center justify-center rounded-full bg-white/80 text-amber-600 shadow-inner",
          "dark:bg-zinc-900/80 dark:text-amber-200"
        )}
        style={{
          width: "calc(50% - 0.25rem)",
          left: isDark ? "calc(50% + 0.125rem)" : "0.5rem",
        }}
      >
        {isDark ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </motion.span>
      <span className="relative z-10 flex w-1/2 items-center justify-center text-xs font-medium uppercase tracking-[0.16em] text-zinc-700 dark:text-zinc-200">
        <Sun className="mr-1 h-3.5 w-3.5" />
        <span className="hidden sm:inline">Day</span>
      </span>
      <span className="relative z-10 flex w-1/2 items-center justify-center text-xs font-medium uppercase tracking-[0.16em] text-zinc-700 dark:text-zinc-200">
        <Moon className="mr-1 h-3.5 w-3.5" />
        <span className="hidden sm:inline">Night</span>
      </span>
    </motion.button>
  );
}

