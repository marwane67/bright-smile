"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";

export default function FormationsSuccess() {
  const alumni = [
    {
      name: "Sarah M.",
      role: "Esthéticienne Indépendante",
      quote: "J'ai ajouté le blanchiment à ma carte de soins. Résultat : +1500€ de chiffre d'affaires dès le premier mois. La formation est super claire et on se sent vraiment prête à l'issue de la journée.",
      roi: "Amorti en 1 semaine"
    },
    {
      name: "Yassine B.",
      role: "Étudiant, Side Hustle",
      quote: "Je voulais une source de revenus à côté de mes études. J'ai aménagé une pièce chez moi, je prends 4 clients le week-end, et je gagne plus que dans mon ancien job étudiant. C'est le meilleur investissement que j'ai fait.",
      roi: "Génère 1200€/mois"
    },
    {
      name: "Léa C.",
      role: "En Reconversion",
      quote: "Je n'y connaissais absolument rien au milieu de l'esthétique dentaire. Le formateur a été très patient, la théorie est pointue, mais le bloc pratique l'après-midi lève tous les derniers doutes. On repart avec les contacts pour le matériel.",
      roi: "A ouvert son propre salon"
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a2e] sm:text-4xl">
            Ils ont franchi le cap.
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Découvrez comment nos anciens élèves ont transformé une journée de formation en une activité hyper rentable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumni.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-100 relative group transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 font-medium italic mb-8 grow leading-relaxed">"{story.quote}"</p>
              
              <div className="border-t border-slate-200 mt-auto pt-6 flex flex-col gap-1">
                <span className="font-bold text-[#1a1a2e]">{story.name}</span>
                <span className="text-sm text-slate-400">{story.role}</span>
              </div>

              {/* ROI floating badge */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 xl:translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg pointer-events-none">
                <TrendingUp className="h-3 w-3" />
                {story.roi}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
