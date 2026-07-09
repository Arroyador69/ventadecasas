export const locales = ["es", "en", "de", "fr", "nl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  nl: "Nederlands",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
