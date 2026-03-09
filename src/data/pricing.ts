import type { PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Blanchiment Express",
    price: "89",
    description: "Un coup d'éclat rapide en 30 minutes",
    features: [
      "Séance de 30 minutes",
      "Activation par lumière LED",
      "Application de gel blanchissant",
      "Évaluation de teinte",
      "Conseils post-soin",
    ],
    ctaText: "Réserver Express",
    ctaHref: "/contact",
  },
  {
    name: "Blanchiment Premium",
    price: "149",
    description: "Résultats maximaux en une seule visite",
    features: [
      "Séance de 60 minutes",
      "Double activation LED",
      "Gel blanchissant professionnel",
      "Évaluation de teinte",
      "Stylo d'entretien à emporter",
      "Plan de soins personnalisé",
    ],
    highlighted: true,
    badge: "Le Plus Populaire",
    ctaText: "Réserver Premium",
    ctaHref: "/contact",
  },
  {
    name: "Séance d'Entretien",
    price: "59",
    description: "Gardez vos résultats au top",
    features: [
      "Retouche de 20 minutes",
      "Activation LED simple cycle",
      "Gel blanchissant de retouche",
      "Vérification de teinte",
      "Conseils post-soin",
    ],
    ctaText: "Réserver Entretien",
    ctaHref: "/contact",
  },
];

export const packageDeal: PricingTier = {
  name: "Forfait Sourire",
  price: "229",
  description: "Meilleur rapport qualité-prix — Séance Premium + 2 retouches d'entretien",
  features: [
    "1 séance Blanchiment Premium (60 min)",
    "2 séances d'entretien (20 min chacune)",
    "Stylo d'entretien à emporter",
    "Réservation prioritaire",
    "Économisez plus de 35 €",
  ],
  highlighted: false,
  badge: "Meilleur Rapport Qualité-Prix",
  ctaText: "Réserver le Forfait",
  ctaHref: "/contact",
};

export const pricingNotes: string[] = [
  "Tous les prix sont TVA comprise.",
  "Une consultation gratuite est incluse avec chaque première visite.",
  "Les séances d'entretien ne sont disponibles qu'après avoir complété un traitement initial.",
  "Les résultats peuvent varier d'une personne à l'autre.",
  "Les tarifs d'entretien sont valables dans les 6 mois suivant votre dernier traitement.",
];
