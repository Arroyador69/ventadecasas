"use client";

import { useState } from "react";
import Image from "next/image";
import type { Translation } from "@/i18n/types";
import { property } from "@/data/property";

type VideoSectionProps = {
  t: Translation;
};

export function VideoSection({ t }: VideoSectionProps) {
  const [playing, setPlaying] = useState(false);
  const hasYoutube = Boolean(property.videoYoutubeId);
  const hasMp4 = Boolean(property.videoMp4);
  const hasVideo = hasYoutube || hasMp4;

  return (
    <section id="video" className="section-padding bg-sand-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="label-upper mb-4">{t.video.label}</p>
          <h2 className="heading-display mb-4 text-3xl text-navy-900 md:text-4xl lg:text-5xl">
            {t.video.title}
          </h2>
          <p className="text-lg text-navy-900/60">{t.video.subtitle}</p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-900 shadow-2xl">
          {!playing || !hasVideo ? (
            <>
              <Image
                src={property.posterImage}
                alt="Vídeo tour de la propiedad"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-navy-900/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                {hasVideo ? (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-400 text-navy-900 shadow-lg transition hover:scale-105 hover:bg-gold-500"
                    aria-label={t.video.play}
                  >
                    <span className="ml-1 text-3xl">▶</span>
                  </button>
                ) : (
                  <p className="rounded-full bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm">
                    {t.video.comingSoon}
                  </p>
                )}
                {hasVideo && (
                  <span className="text-sm uppercase tracking-[0.2em] text-white/80">
                    {t.video.play}
                  </span>
                )}
              </div>
            </>
          ) : hasYoutube ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${property.videoYoutubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={t.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <video
              src={property.videoMp4}
              controls
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
            >
              <track kind="captions" />
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
