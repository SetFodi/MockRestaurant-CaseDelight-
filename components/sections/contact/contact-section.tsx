"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Reveal } from "@/components/reveal";
import { Phone, Mail, MapPin } from "lucide-react";

type FormState = "idle" | "submitting" | "submitted";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const prefersReducedMotion = useReducedMotion();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state === "submitting") return;

    setState("submitting");
    setTimeout(() => {
      setState("submitted");
    }, 1200);
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="space-y-6">
            <p className="eyebrow text-amber-500/70">Contact & Reservations</p>
            <h1 className="section-heading">
              Tell us about the evening you imagine.
            </h1>
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
              Share your celebration details, party size, and preferred date. Our
              concierge replies within the hour to weave together menu, wine, and
              ambience tailored to your gathering.
            </p>
            <div className="grid gap-4 rounded-3xl border border-white/20 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/70">
              <ContactDetail
                icon={<Phone className="h-5 w-5" />}
                title="Reservations"
                value="+995 555 123 456"
                href="tel:+995555123456"
              />
              <ContactDetail
                icon={<Mail className="h-5 w-5" />}
                title="Concierge"
                value="concierge@casadelight.com"
                href="mailto:concierge@casadelight.com"
              />
              <ContactDetail
                icon={<MapPin className="h-5 w-5" />}
                title="Location"
                value="12 Rustaveli Ave, Tbilisi, Georgia"
                href="https://maps.app.goo.gl/5xHMk4q5oX1HmCBX6"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.form
            onSubmit={onSubmit}
            className="space-y-5 rounded-[2rem] border border-white/25 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/75"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Reservation Date" name="date" type="date" required />
            <div>
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your occasion, party size, and culinary preferences."
                className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black/80 shadow-inner outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 dark:border-white/15 dark:bg-black/40 dark:text-white/80"
              />
            </div>
            <AnimatedButton variant="primary" className="w-full">
              {state === "submitted"
                ? "Request Received — We'll be in touch"
                : state === "submitting"
                ? "Sending..."
                : "Reserve Your Table"}
            </AnimatedButton>
            <p className="text-xs leading-relaxed text-black/50 dark:text-white/50">
              By submitting, you agree to our hospitality concierge reaching out
              with tailored menu suggestions and availability.
            </p>
          </motion.form>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mt-12">
        <div className="overflow-hidden rounded-[2rem] border border-white/25 shadow-2xl">
          <iframe
            title="Casa Delight Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.66492081009!2d44.79301787641619!3d41.69922757612572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd879c5af7b%3A0x155c1d830bca7ff6!2sRustaveli%20Ave%2C%20T'bilisi%2C%20Georgia!5e0!3m2!1sen!2sge!4v1700000000000!5m2!1sen!2sge"
            loading="lazy"
            className="h-[400px] w-full"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
};

function Field({ label, name, type, required }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black/80 shadow-inner outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 dark:border-white/15 dark:bg-black/40 dark:text-white/80"
      />
    </div>
  );
}

type ContactDetailProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
};

function ContactDetail({ icon, title, value, href }: ContactDetailProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/40 px-4 py-3 text-sm text-black/70 transition hover:border-amber-400 hover:bg-white/60 dark:border-white/10 dark:bg-black/40 dark:text-white/70 dark:hover:border-amber-300"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-200/40 text-amber-700 dark:bg-amber-400/20 dark:text-amber-200">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-black/50 dark:text-white/50">
          {title}
        </p>
        <p className="font-medium text-black/80 dark:text-white/80">{value}</p>
      </div>
    </a>
  );
}

