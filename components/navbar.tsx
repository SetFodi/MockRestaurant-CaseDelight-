"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Reservations" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const borderOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 0.32]);
  const navBackground = useTransform(scrollYProgress, [0, 0.15], [0.24, 0.75]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Map numeric motion values to color strings for style props
  const backgroundColor = useTransform(navBackground, (value) => `rgba(18, 14, 10, ${value})`);
  const borderBottomColor = useTransform(borderOpacity, (value) => `rgba(255, 255, 255, ${value * 0.3})`);

  const activePath = useMemo(() => {
    if (pathname === "/") return "/";
    return (
      navLinks.find((link) => pathname.startsWith(link.href))?.href ?? "/"
    );
  }, [pathname]);

  return (
    <motion.header
      style={{ backgroundColor, borderBottomColor }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 backdrop-blur-xl"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="relative flex items-center gap-3 font-serif text-lg tracking-[0.3em] text-white"
        >
          <motion.span
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-base font-semibold uppercase text-white"
            initial={{ scale: 0.82, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 20 }}
          >
            C
          </motion.span>
          Casa&nbsp;Delight
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.28em] text-white/80 lg:flex">
          {navLinks.map((link) => {
            const isActive = activePath === link.href;
            return (
              <motion.div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={clsx(
                    "transition-colors duration-200 hover:text-white",
                    isActive ? "text-white" : "text-white/70"
                  )}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-white/20 via-white to-transparent"
                    transition={{ type: "spring", stiffness: 420, damping: 40 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <motion.a
            href="#reservations"
            className="glass-panel rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-black dark:text-white transition"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Reserve
          </motion.a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-lg"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", bounce: 0, duration: prefersReducedMotion ? 0 : 0.4 }}
            className="border-t border-white/10 bg-black/65 px-6 pb-6 pt-2 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.32em] text-white/80">
              {navLinks.map((link) => {
                const isActive = activePath === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-xl px-4 py-3 transition",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="#reservations"
                className="rounded-xl bg-white/10 px-4 py-3 text-center text-white/90"
                onClick={() => setMobileOpen(false)}
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

