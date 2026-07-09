"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Translation } from "@/i18n/types";
import { siteConfig } from "@/data/property";

type ContactFormProps = {
  t: Translation;
  locale: Locale;
};

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm({ t, locale }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const whatsappMessage = encodeURIComponent(
    siteConfig.whatsappMessage[locale] ?? siteConfig.whatsappMessage.es
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

  const validate = (data: FormData) => {
    const next: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();

    if (!name) next.name = t.form.required;
    if (!email) next.email = t.form.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = t.form.invalidEmail;
    if (!phone) next.phone = t.form.required;
    else if (phone.replace(/\D/g, "").length < 8)
      next.phone = t.form.invalidPhone;

    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          locale,
          property: "castillo-sohail-fuengirola",
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="label-upper mb-4 text-gold-400">{t.contact.label}</p>
            <h2 className="heading-display mb-6 text-3xl md:text-4xl lg:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/70">
              {t.contact.subtitle}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
            >
              <span className="text-xl">💬</span>
              {t.contact.whatsapp}
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            {state === "success" ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <span className="mb-4 text-4xl">✓</span>
                <p className="text-lg text-white/90">{t.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                    {t.contact.name} *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                    {t.contact.email} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-white/70">
                    {t.contact.phone} *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30"
                  />
                </div>

                {state === "error" && (
                  <p className="text-sm text-red-400">{t.contact.error}</p>
                )}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full rounded-full bg-gold-400 py-4 text-sm font-semibold uppercase tracking-wider text-navy-900 transition hover:bg-gold-500 disabled:opacity-60"
                >
                  {state === "loading" ? t.contact.sending : t.contact.submit}
                </button>

                <p className="text-center text-xs text-white/40">{t.contact.privacy}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
