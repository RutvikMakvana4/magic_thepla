export const BRAND = {
  name: "Magic Thepla",
  tagline: "Every bite feels like home",
  taglineGu: "Maa na haath no magic, darek bite ma",
  festivalLine: "Festival hoy ke safar — Thepla tayyar",
  whatsapp: "+916355423641",
  email: "info@magicthepla.com",
  instagram: "https://instagram.com/magic_thepla",
  facebook: "https://facebook.com/magic_thepla",
  address: "Surat, Gujarat, India",
  minOrderAmount: 200,
  freeDeliveryAbove: 500,
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Bulk Order", href: "/bulk-order" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const EVENT_TYPES = [
  "Wedding",
  "Engagement",
  "Birthday Party",
  "Corporate Event",
  "Festival Celebration",
  "Family Function",
  "Religious Event",
  "Other",
];

export const WHATSAPP_MESSAGE = (name: string, quantity: string) =>
  `Hi! I'm ${name} and I'd like to place a bulk order for ${quantity} theplas. Please let me know the details!`;
