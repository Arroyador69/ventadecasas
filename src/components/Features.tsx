import type { Translation } from "@/i18n/types";

type FeaturesProps = {
  t: Translation;
};

const icons = ["🌊", "🏰", "☀️", "🌴", "✨", "🏊", "🚗", "📍"];

export function Features({ t }: FeaturesProps) {
  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="label-upper mb-4 text-gold-400">{t.features.label}</p>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl">
            {t.features.title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item, i) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-gold-400/30 hover:bg-white/10"
            >
              <span className="mb-4 block text-2xl" aria-hidden>
                {icons[i]}
              </span>
              <h3 className="mb-2 font-serif text-xl text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
