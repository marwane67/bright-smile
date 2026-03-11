"use client";

import { motion } from "framer-motion";

const syllabus = [
  {
    phase: "Matin",
    title: "1. Théorie, Législation & Couleur",
    content: "Le blanchiment cosmétique vs médical. Anatomie de la dent. L'échelle de teintes. Les contre-indications absolues et relatives. Les normes européennes sur les gels à 0.1% de peroxyde.",
  },
  {
    phase: "Midi",
    title: "2. Les Outils du Praticien",
    content: "Présentation de la lampe LED professionnelle, manipulation de l'écarteur buccal, utilisation de la digue gingivale (barrière), et choix de la concentration des gels.",
  },
  {
    phase: "Après-midi",
    title: "3. Pratique Clinique (Sur modèle réel)",
    content: "Dalle à pas du protocole Bright Smile : Installation du client, pose de l'écarteur, application de la protection gingivale, application du gel, réglage de la lampe, nettoyage et recommandations post-soin.",
  },
  {
    phase: "Fin de journée",
    title: "4. Business, Tarifs & Marketing",
    content: "Comment facturer ? Comment créer des offres (Premium, Express) ? Réseaux sociaux, photos Avant/Après, fidélisation client et gestion des plaintes éventuelles.",
  }
];

export default function FormationsCurriculum() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a2e] sm:text-4xl">Le Programme des 24H</h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">Conçu méthodiquement pour vous rendre 100% autonome dès la fin de la journée.</p>
        </div>

        <div className="space-y-8">
          {syllabus.map((item, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="flex flex-col sm:flex-row gap-6 bg-slate-50 p-6 sm:p-8 rounded-[2rem] ring-1 ring-slate-100"
             >
               <div className="sm:w-1/4 shrink-0">
                 <div className="rounded-xl bg-primary/10 px-4 py-2 text-primary font-bold inline-block text-sm">
                   {item.phase}
                 </div>
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">{item.title}</h3>
                 <p className="text-slate-500 leading-relaxed font-medium">{item.content}</p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
