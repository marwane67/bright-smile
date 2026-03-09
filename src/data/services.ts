import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "express",
    title: "Blanchiment Express",
    shortDescription:
      "Une séance rapide de 30 minutes avec activation LED professionnelle pour un éclat visible — idéal avant une occasion spéciale.",
    fullDescription:
      "Notre soin Blanchiment Express est conçu pour ceux qui souhaitent des résultats visibles en peu de temps. Grâce à une lampe LED professionnelle combinée à un gel blanchissant doux, cette séance de 30 minutes peut éclaircir votre sourire de plusieurs teintes. Le soin commence par une évaluation de teinte afin que vous puissiez constater la différence immédiatement. Idéal si vous découvrez le blanchiment dentaire ou si vous avez besoin d'un coup d'éclat rapide avant un événement, un entretien ou une occasion spéciale.",
    duration: "30 minutes",
    price: "89",
    inclusions: [
      "Activation par lumière LED professionnelle",
      "Application de gel blanchissant cosmétique",
      "Évaluation de teinte avant & après",
      "Fiche de conseils post-soin",
    ],
    whoIsItFor:
      "Idéal pour les nouveaux clients, toute personne se préparant pour un événement spécial, ou ceux qui recherchent un coup d'éclat rapide sans un long rendez-vous.",
    recommendations: [
      "Évitez le café, le thé, le vin rouge et les aliments foncés pendant 24 heures après le soin",
      "Utilisez une brosse à dents à poils souples pendant les 48 premières heures",
      "Envisagez une séance d'entretien tous les 3 à 4 mois",
    ],
    contraindications: [
      "Déconseillé aux femmes enceintes ou allaitantes",
      "Non adapté aux personnes de moins de 18 ans",
      "Déconseillé aux personnes ayant des caries non traitées ou une maladie des gencives",
      "Consultez votre dentiste si vous avez des couronnes, facettes ou bridges (le blanchiment n'affecte pas les restaurations dentaires)",
    ],
    image: "/images/services/express-whitening.jpg",
    icon: "Zap",
  },
  {
    id: "premium",
    title: "Blanchiment Premium",
    shortDescription:
      "Notre soin signature de 60 minutes avec double activation LED pour des résultats maximaux — jusqu'à 8 teintes plus claires en une seule visite.",
    fullDescription:
      "Le Blanchiment Premium est notre option la plus populaire, offrant les meilleurs résultats en une seule séance. En 60 minutes, nous appliquons deux cycles de gel blanchissant professionnel avec activation LED, donnant au traitement plus de temps pour agir et produisant des résultats plus spectaculaires. Vous remarquerez que vos dents deviennent significativement plus claires — jusqu'à 8 teintes dans de nombreux cas. La séance comprend une évaluation complète de la teinte avant et après, ainsi qu'un kit d'entretien à emporter pour prolonger vos résultats à la maison.",
    duration: "60 minutes",
    price: "149",
    inclusions: [
      "Double activation par lumière LED",
      "Gel blanchissant cosmétique professionnel",
      "Évaluation de teinte avant & après",
      "Stylo d'entretien à emporter",
      "Plan de soins post-traitement personnalisé",
    ],
    whoIsItFor:
      "Parfait pour toute personne souhaitant les résultats de blanchiment les plus spectaculaires en une seule visite. Idéal pour les mariages, séances photo ou un boost de confiance.",
    recommendations: [
      "Suivez un régime blanc pendant 48 heures après le soin pour de meilleurs résultats",
      "Utilisez le stylo d'entretien selon les instructions pendant 5 à 7 jours",
      "Planifiez une séance d'entretien après 4 à 6 mois pour garder votre sourire éclatant",
    ],
    contraindications: [
      "Déconseillé aux femmes enceintes ou allaitantes",
      "Non adapté aux personnes de moins de 18 ans",
      "Déconseillé aux personnes ayant des caries non traitées ou une maladie des gencives",
      "Les personnes aux dents très sensibles devraient discuter des options lors de leur consultation",
    ],
    image: "/images/services/premium-whitening.jpg",
    icon: "Sparkles",
    highlighted: true,
  },
  {
    id: "maintenance",
    title: "Séance d'Entretien",
    shortDescription:
      "Une séance rapide de 20 minutes pour maintenir vos résultats — recommandée tous les 3 à 6 mois après votre traitement initial.",
    fullDescription:
      "La Séance d'Entretien est conçue pour les clients ayant déjà complété un soin Express ou Premium et souhaitant garder leur sourire au meilleur de sa forme. En seulement 20 minutes, nous appliquons un gel blanchissant léger avec activation LED pour rafraîchir vos résultats et contrer les taches progressives dues à l'alimentation et aux boissons du quotidien. Des séances d'entretien régulières tous les 3 à 6 mois sont le moyen le plus efficace de maintenir un éclat durable sans avoir besoin d'un traitement complet à chaque fois.",
    duration: "20 minutes",
    price: "59",
    inclusions: [
      "Activation LED simple cycle",
      "Gel blanchissant de retouche",
      "Vérification de teinte",
      "Conseils post-soin",
    ],
    whoIsItFor:
      "Pour les clients existants souhaitant maintenir leurs résultats de blanchiment dans le temps. Disponible uniquement après avoir complété une séance Express ou Premium.",
    recommendations: [
      "Planifiez une séance tous les 3 à 6 mois pour des résultats constants",
      "Maintenez une bonne hygiène bucco-dentaire entre les séances",
      "Limitez les boissons colorantes autant que possible",
    ],
    contraindications: [
      "Les mêmes précautions que pour les traitements initiaux s'appliquent",
      "Déconseillé aux femmes enceintes ou allaitantes",
      "Non adapté aux personnes de moins de 18 ans",
    ],
    image: "/images/services/maintenance-session.jpg",
    icon: "RefreshCw",
  },
];
