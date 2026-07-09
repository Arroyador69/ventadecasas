import type { Translation } from "@/i18n/types";

type AboutProps = {
  t: Translation;
};

export function About({ t }: AboutProps) {
  return (
    <section id="property" className="section-padding bg-sand-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-upper mb-4">{t.about.label}</p>
          <h2 className="heading-display mb-10 text-3xl text-navy-900 md:text-4xl lg:text-5xl">
            {t.about.title}
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {t.about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-navy-900/75 md:text-xl md:leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
