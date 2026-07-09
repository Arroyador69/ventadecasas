import type { Translation } from "@/i18n/types";
import { siteConfig } from "@/data/property";

type FooterProps = {
  t: Translation;
};

export function Footer({ t }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-navy-900">{siteConfig.brand}</p>
            <p className="mt-1 text-sm text-navy-900/50">{t.footer.tagline}</p>
          </div>

          <div className="text-center">
            <span className="label-upper text-gold-500">{t.footer.exclusive}</span>
            <p className="mt-2 text-sm text-navy-900/40">{t.footer.comingSoon}</p>
          </div>

          <p className="text-sm text-navy-900/40">
            © {year} {siteConfig.brand}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
