import type { Metadata } from "next";
import { siteConfig } from "./site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

function buildMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const fullTitle =
    path === "/"
      ? `${siteConfig.brandName} | ${title}`
      : `${title} | ${siteConfig.brandName}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: `${baseUrl}${path}` },
    openGraph: {
      title: fullTitle,
      description,
      url: `${baseUrl}${path}`,
      siteName: siteConfig.brandName,
      type: "website",
      locale: "fr_BE",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.brandName} — Blanchiment Dentaire Professionnel`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
  };
}

export const pageMetadata: Record<string, Metadata> = {
  home: buildMetadata(
    "Blanchiment Dentaire Professionnel à Bruxelles",
    "Retrouvez un sourire éclatant et confiant grâce au blanchiment dentaire cosmétique professionnel à Bruxelles. Soins LED sûrs, résultats visibles en une séance. Prenez rendez-vous dès aujourd'hui.",
    "/"
  ),
  services: buildMetadata(
    "Nos Soins de Blanchiment",
    "Découvrez nos traitements de blanchiment dentaire : Blanchiment Express (30 min), Blanchiment Premium (60 min) et Séances d'Entretien. Technologie LED professionnelle à Bruxelles.",
    "/services"
  ),
  pricing: buildMetadata(
    "Tarifs",
    "Des tarifs clairs et transparents pour tous nos soins de blanchiment dentaire. De 59 € pour l'entretien à 149 € pour notre séance premium. Aucun frais caché.",
    "/pricing"
  ),
  "before-after": buildMetadata(
    "Résultats Avant & Après",
    "Découvrez les résultats réels de nos soins de blanchiment dentaire. Parcourez notre galerie avant et après pour voir la différence qu'un blanchiment professionnel peut faire.",
    "/before-after"
  ),
  faq: buildMetadata(
    "Questions Fréquentes",
    "Trouvez les réponses à vos questions sur le blanchiment dentaire : douleur, sécurité, durée, soins post-traitement, tarifs et plus encore. Tout ce que vous devez savoir avant de réserver.",
    "/faq"
  ),
  about: buildMetadata(
    "À Propos",
    "Découvrez notre studio de blanchiment dentaire à Bruxelles. Notre engagement envers l'hygiène, la sécurité et des résultats sublimes. Découvrez pourquoi nos clients nous font confiance.",
    "/about"
  ),
  contact: buildMetadata(
    "Contact & Rendez-vous",
    "Prenez rendez-vous pour votre blanchiment dentaire à Bruxelles. Contactez-nous par téléphone, email ou WhatsApp. Réservation en ligne disponible.",
    "/contact"
  ),
  legal: buildMetadata(
    "Mentions Légales",
    "Mentions légales et conditions d'utilisation pour nos services de blanchiment dentaire à Bruxelles, Belgique.",
    "/legal"
  ),
  privacy: buildMetadata(
    "Politique de Confidentialité",
    "Notre politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.",
    "/privacy"
  ),
};
