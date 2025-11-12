import Link from "next/link";
import clsx from "clsx";
import { Instagram, Facebook, Phone, Mail, ArrowUpRight } from "lucide-react";

const social = [
  { href: "https://www.instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com", label: "Facebook", icon: Facebook },
  { href: "tel:+995555123456", label: "+995 555 123 456", icon: Phone },
  { href: "mailto:hello@casadelight.com", label: "hello@casadelight.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative mt-24 bg-black/90 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,170,100,0.18),transparent_60%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.42em] text-white/60">
            Casa Delight
          </p>
          <h2 className="font-serif text-4xl tracking-[0.12em]">
            Taste the Experience
            <span aria-hidden className="text-amber-300"> →</span>
          </h2>
          <p className="max-w-sm text-sm text-white/70">
            Immerse yourself in the soulful flavors of Georgia elevated with contemporary finesse.
          </p>
          <Link
            href="https://pixelweb.ge"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Taste the Experience
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-6 lg:items-end">
          <div className="grid grid-cols-2 gap-4 text-sm text-white/70 sm:grid-cols-4">
            {social.map(({ href, label, icon: Icon }) => {
              const isExternal = href.startsWith("http");
              const isEmail = label.includes("@");
              return (
                <Link
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={clsx(
                    "flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition hover:border-white/30 hover:bg-white/10",
                    "min-w-0",
                    isEmail && "col-span-2 sm:col-span-2"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span
                    className={clsx(
                      "text-xs uppercase tracking-[0.2em]",
                      isEmail ? "break-words" : "truncate"
                    )}
                    title={label}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/50">
            © {new Date().getFullYear()} Casa Delight. Crafted for connoisseurs.
          </p>
        </div>
      </div>
    </footer>
  );
}

