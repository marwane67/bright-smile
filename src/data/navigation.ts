import type { NavLink } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "Services", href: "/#services" },
  { label: "Avant & Après", href: "/#before-after" },
  { label: "Témoignages", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const footerNavLinks = {
  services: [
    { label: "Blanchiment Express", href: "/services#express" },
    { label: "Blanchiment Premium", href: "/services#premium" },
    { label: "Séance d'Entretien", href: "/services#maintenance" },
  ],
  company: [
    { label: "À propos", href: "/about" },
    { label: "Avant & Après", href: "/before-after" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions Légales", href: "/legal" },
    { label: "Politique de Confidentialité", href: "/privacy" },
  ],
};
