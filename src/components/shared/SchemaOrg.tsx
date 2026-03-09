import { siteConfig } from "@/data/site";

export default function SchemaOrg() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: siteConfig.brandName,
    description: siteConfig.description,
    url: baseUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "BE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok],
    areaServed: {
      "@type": "City",
      name: "Bruxelles",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
