import type { Locale } from "@/i18n/config";
import type { Translation } from "@/i18n/types";
import { property } from "@/data/property";

type StatsProps = {
  t: Translation;
  locale: Locale;
};

export function Stats({ t, locale }: StatsProps) {
  const items = [
    { value: String(property.bedrooms), label: t.stats.bedrooms },
    { value: String(property.bathrooms), label: t.stats.bathrooms },
    {
      value: `~${property.area} ${property.areaUnit}`,
      label: t.stats.area,
    },
    { value: property.beachDistance, label: t.stats.beach },
    {
      value: property.orientation[locale],
      label: t.stats.orientation,
    },
    {
      value: property.parking[locale],
      label: t.stats.parking,
    },
  ];

  return (
    <section className="border-b border-sand-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-sand-200 md:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center px-4 py-8 text-center md:py-10"
          >
            <span className="font-serif text-2xl text-navy-900 md:text-3xl">
              {item.value}
            </span>
            <span className="mt-2 text-xs uppercase tracking-[0.2em] text-navy-900/50">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
