"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/i18n/config";
import type { Translation } from "@/i18n/types";
import { siteConfig } from "@/data/property";

type HeaderProps = {
  locale: Locale;
  t: Translation;
};

export function Header({ locale, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#property", label: t.nav.property },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#video", label: t.nav.video },
    { href: "#location", label: t.nav.location },
    { href: "#contact", label: t.nav.contact },
  ];

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || `/${newLocale}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-navy-900/90 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12">
        <Link
          href={`/${locale}`}
          className={`font-serif text-lg tracking-wide transition-colors md:text-xl ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          {siteConfig.brand}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-white/80 transition hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/5 p-1 sm:flex">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchLocale(l)}
                className={`rounded-full px-2.5 py-1 text-xs font-medium uppercase transition ${
                  l === locale
                    ? "bg-gold-400 text-navy-900"
                    : "text-white/70 hover:text-white"
                }`}
                title={localeNames[l]}
              >
                {l}
              </Link>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-gold-400 px-5 py-2.5 text-sm font-medium text-navy-900 transition hover:bg-gold-500 md:inline-block"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            aria-label="Menu"
          >
            <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-navy-900/95 px-5 py-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/90"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-gold-400 px-5 py-3 text-center font-medium text-navy-900"
            >
              {t.nav.cta}
            </a>
            <div className="mt-4 flex flex-wrap gap-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchLocale(l)}
                  className={`rounded-full px-3 py-1 text-xs uppercase ${
                    l === locale
                      ? "bg-gold-400 text-navy-900"
                      : "border border-white/20 text-white/70"
                  }`}
                >
                  {localeNames[l]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
