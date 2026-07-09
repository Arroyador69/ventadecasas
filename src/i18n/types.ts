export type Translation = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    property: string;
    gallery: string;
    video: string;
    location: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    price: string;
    priceNote: string;
    cta: string;
    ctaSecondary: string;
    scroll: string;
  };
  stats: {
    bedrooms: string;
    bathrooms: string;
    area: string;
    beach: string;
    orientation: string;
    parking: string;
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  features: {
    label: string;
    title: string;
    items: { title: string; description: string }[];
  };
  gallery: {
    label: string;
    title: string;
    subtitle: string;
  };
  video: {
    label: string;
    title: string;
    subtitle: string;
    play: string;
    comingSoon: string;
  };
  location: {
    label: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    privacy: string;
    whatsapp: string;
    or: string;
  };
  footer: {
    tagline: string;
    exclusive: string;
    rights: string;
    comingSoon: string;
  };
  form: {
    required: string;
    invalidEmail: string;
    invalidPhone: string;
  };
};
