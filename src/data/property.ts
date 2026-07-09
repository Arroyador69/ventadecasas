export const siteConfig = {
  brand: "Costa Prime Collection",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600000000",
  whatsappMessage: {
    es: "Hola, me interesa el apartamento exclusivo en Castillo Sohail, Fuengirola.",
    en: "Hello, I am interested in the exclusive apartment at Sohail Castle, Fuengirola.",
    de: "Hallo, ich interessiere mich für die exklusive Wohnung am Castillo Sohail, Fuengirola.",
    fr: "Bonjour, je suis intéressé(e) par l'appartement exclusif au Castillo Sohail, Fuengirola.",
    nl: "Hallo, ik ben geïnteresseerd in het exclusieve appartement bij Castillo Sohail, Fuengirola.",
  },
  contactEmail: process.env.CONTACT_EMAIL ?? "info@example.com",
};

export const property = {
  id: "castillo-sohail-fuengirola",
  slug: "castillo-sohail-fuengirola",
  price: 600000,
  currency: "EUR",
  bedrooms: 2,
  bathrooms: 2,
  area: 100,
  areaUnit: "m²",
  beachDistance: "50 m",
  orientation: {
    es: "Suroeste",
    en: "South-west",
    de: "Südwest",
    fr: "Sud-ouest",
    nl: "Zuidwest",
  },
  parking: {
    es: "Incluido",
    en: "Included",
    de: "Inklusive",
    fr: "Inclus",
    nl: "Inbegrepen",
  },
  location: {
    city: "Fuengirola",
    area: "Castillo Sohail",
    region: "Costa del Sol",
    country: "Spain",
  },
  heroImage: "/images/photo-04.png",
  posterImage: "/images/photo-05.png",
  /**
   * VIDEO: Recomendación
   * - YouTube "no listado" (unlisted): mejor opción. Rápido, gratis, CDN global.
   *   Pega aquí solo el ID del vídeo (ej: "dQw4w9WgXcQ")
   * - O URL directa a MP4 en /public/video/tour.mp4 para self-hosted
   */
  videoYoutubeId: process.env.NEXT_PUBLIC_VIDEO_YOUTUBE_ID ?? "",
  videoMp4: process.env.NEXT_PUBLIC_VIDEO_MP4 ?? "",
  gallery: [
    { src: "/images/photo-04.png", alt: "Terraza con vistas al Castillo Sohail y al mar" },
    { src: "/images/photo-05.png", alt: "Terraza comedor con vistas al Mediterráneo" },
    { src: "/images/photo-11.png", alt: "Salón comedor luminoso con acceso a terraza" },
    { src: "/images/photo-09.png", alt: "Salón comedor con terraza" },
    { src: "/images/photo-12.png", alt: "Salón amplio con luz natural" },
    { src: "/images/photo-10.png", alt: "Salón con sofá y terraza" },
    { src: "/images/photo-13.png", alt: "Comedor con diseño contemporáneo" },
    { src: "/images/photo-02.png", alt: "Dormitorio con vistas y acceso a terraza" },
    { src: "/images/photo-07.png", alt: "Dormitorio principal con armarios empotrados" },
    { src: "/images/photo-01.png", alt: "Distribución con suelos de mármol" },
    { src: "/images/photo-03.png", alt: "Dormitorio luminoso" },
    { src: "/images/photo-08.png", alt: "Dormitorio con luz natural" },
    { src: "/images/photo-14.png", alt: "Baño doble lavabo con acabados premium" },
    { src: "/images/photo-06.png", alt: "Baño con ducha de diseño" },
  ],
};

export type PropertyListing = typeof property;

// Future listings will be added here
export const listings: PropertyListing[] = [property];

export function getListingBySlug(slug: string): PropertyListing | undefined {
  return listings.find((l) => l.slug === slug);
}
