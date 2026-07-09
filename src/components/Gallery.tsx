"use client";

import { useState } from "react";
import Image from "next/image";
import type { Translation } from "@/i18n/types";
import { property } from "@/data/property";

type GalleryProps = {
  t: Translation;
};

export function Gallery({ t }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="label-upper mb-4">{t.gallery.label}</p>
          <h2 className="heading-display mb-4 text-3xl text-navy-900 md:text-4xl lg:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-navy-900/60">{t.gallery.subtitle}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {property.gallery.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightbox(index)}
              className={`group relative overflow-hidden rounded-xl bg-sand-100 ${
                index === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[16/10]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
              />
              <div className="absolute inset-0 bg-navy-900/0 transition group-hover:bg-navy-900/20" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/95 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
            aria-label="Close"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + property.gallery.length) % property.gallery.length);
            }}
            className="absolute left-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:flex"
            aria-label="Previous"
          >
            ‹
          </button>

          <div
            className="relative h-[70vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={property.gallery[lightbox].src}
              alt={property.gallery[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % property.gallery.length);
            }}
            className="absolute right-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:flex"
            aria-label="Next"
          >
            ›
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {lightbox + 1} / {property.gallery.length}
          </p>
        </div>
      )}
    </section>
  );
}
