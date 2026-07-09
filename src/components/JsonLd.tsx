import { property } from "@/data/property";

type JsonLdProps = {
  locale: string;
  description: string;
};

export function JsonLd({ locale, description }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: `Exclusive Apartment — Castillo Sohail, Fuengirola`,
    description,
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.area,
      unitCode: "MTK",
    },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: property.currency,
      availability: "https://schema.org/InStock",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location.city,
      addressRegion: property.location.region,
      addressCountry: property.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.535,
      longitude: -4.625,
    },
    inLanguage: locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
