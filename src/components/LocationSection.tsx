import type { Translation } from "@/i18n/types";

type LocationSectionProps = {
  t: Translation;
};

export function LocationSection({ t }: LocationSectionProps) {
  return (
    <section id="location" className="section-padding bg-sand-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="label-upper mb-4">{t.location.label}</p>
            <h2 className="heading-display mb-8 text-3xl text-navy-900 md:text-4xl lg:text-5xl">
              {t.location.title}
            </h2>
            <div className="space-y-5">
              {t.location.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-navy-900/75">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 overflow-hidden rounded-2xl border border-sand-200 shadow-lg">
              <iframe
                title="Castillo Sohail, Fuengirola"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.635%2C36.525%2C-4.615%2C36.545&layer=mapnik&marker=36.535%2C-4.625"
                className="h-72 w-full grayscale-[30%]"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {t.location.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-sand-200 bg-white px-4 py-3 text-center text-sm font-medium text-navy-900/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
