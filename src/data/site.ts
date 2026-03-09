export const siteConfig = {
  brandName: "Bright Smile",
  tagline: "Blanchiment Dentaire Professionnel à Bruxelles",
  description:
    "Retrouvez un sourire plus éclatant et confiant grâce à nos soins de blanchiment dentaire cosmétique professionnel au cœur de Bruxelles.",
  phone: "+32 2 123 45 67",
  email: "contact@brightsmile.be",
  address: "Rue Neuve 123",
  city: "Bruxelles",
  country: "Belgique",
  whatsappLink: "https://wa.me/3221234567",
  calendlyLink: "[CALENDLY_LINK]",
  openingHours: "Lun-Ven 9h-19h, Sam 10h-17h",
  openingHoursStructured: [
    { days: "Lundi - Vendredi", hours: "9h00 - 19h00" },
    { days: "Samedi", hours: "10h00 - 17h00" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  social: {
    instagram: "https://instagram.com/brightsmile.be",
    tiktok: "https://tiktok.com/@brightsmile.be",
  },
} as const;
