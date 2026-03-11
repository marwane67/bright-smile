"use client";

import { motion } from "framer-motion";
import { Briefcase, UserPlus, Scissors } from "lucide-react";

export default function FormationsAudience() {
  const audiences = [
    {
      icon: UserPlus,
      title: "En Reconversion Professionnelle",
      desc: "Vous cherchez un nouveau souffle ? Vous êtes au chômage ou insatisfait de votre job actuel ? L'esthétique dentaire est un marché accessible immédiatement, sans études médicales ni diplômes longs.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Briefcase,
      title: "Entrepreneurs & Indépendants",
      desc: "Vous voulez lancer votre propre affaire ou générer un complément de revenu significatif (Side Hustle) le week-end ou le soir. Le blanchiment offre une flexibilité totale quant à vos horaires de travail.",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Scissors,
      title: "Professionnels de la Beauté",
      desc: "Esthéticiennes, coiffeurs, maquilleurs, bars à cils/ongles : Vous avez déjà une clientèle ? Ajoutez cette prestation très lucrative à votre carte de services et augmentez mécaniquement votre panier moyen.",
      color: "bg-purple-50 text-purple-600",
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a2e] sm:text-4xl">
            À qui s'adresse cette formation ?
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Le blanchiment dentaire esthétique (sans peroxyde ou &lt;0.1%) est 100% cosmétique. Il n'est pas réservé aux dentistes médicaux. C'est l'opportunité de s'immiscer dans le monde très fermé de l'esthétique dentaire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((aud, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-slate-50 p-8 pt-10 ring-1 ring-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${aud.color}`}>
                <aud.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-[#1a1a2e]">{aud.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{aud.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
