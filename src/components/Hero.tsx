import Image from "next/image";
import type { Translation } from "@/i18n/types";
import { property } from "@/data/property";

type HeroProps = {
  t: Translation;
};

export function Hero({ t }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src={property.heroImage}
        alt="Vistas al Castillo Sohail desde la terraza"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-navy-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28 lg:px-12">
        <div className="max-w-3xl animate-fade-up">
          <p className="label-upper mb-4 text-gold-400">{t.hero.badge}</p>
          <h1 className="heading-display mb-6 text-4xl text-white md:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mb-10 flex flex-wrap items-end gap-4">
            <div>
              <p className="font-serif text-3xl text-white md:text-4xl">
                {t.hero.price}
              </p>
              <p className="mt-1 text-sm text-white/60">{t.hero.priceNote}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-up-delay">
            <a
              href="#contact"
              className="rounded-full bg-gold-400 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-900 transition hover:bg-gold-500"
            >
              {t.hero.cta}
            </a>
            <a
              href="#video"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <a
          href="#property"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition hover:text-white/80 md:flex"
        >
          <span className="text-xs uppercase tracking-[0.3em]">{t.hero.scroll}</span>
          <span className="animate-bounce text-xl">↓</span>
        </a>
      </div>
    </section>
  );
}
