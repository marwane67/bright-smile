"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FormationsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Faut-il un diplôme d'esthéticienne ou médical pour exercer ?",
      answer: "Absolument pas. Le blanchiment dentaire esthétique utilisant des gels dont la concentration en peroxyde d'hydrogène est inférieure ou égale à 0.1% est considéré comme un soin cosmétique. La profession est ouverte à tous, sans diplôme requis, à condition de strictement respecter la législation (ce que nous vous apprenons en détail durant la formation)."
    },
    {
      question: "Les 500€ comprennent-ils le matériel de démarrage ?",
      answer: "Non, les 500€ couvrent l'intégralité de la formation de 24h, la pratique supervisée sur modèle réel, le livret récapitulatif, le Certificat d'Aptitude, et surtout, notre carnet d'adresses fournisseurs secrètes. Le matériel de démarrage (lampe LED pro, nuancier, écarteurs, gels) s'acquiert à part auprès de nos partenaires (comptez entre 200€ et 400€ pour un équipement pro complet selon vos choix)."
    },
    {
      question: "Est-ce vraiment rentable si vite ?",
      answer: "Oui, c'est l'un des domaines cosmétiques les plus lucratifs. Une séance 'Express' ou 'Premium' dure entre 30 et 60 minutes et est facturée entre 70€ et 120€. Le coût de votre matériel 'consommable' par client (gel, bavoir, écarteur jetable) avoisine les 15€. Vous réalisez donc entre 55€ et 105€ de marge brute par client. Avec seulement 5 clients, vous remboursez votre formation."
    },
    {
      question: "Comment ça se passe pour le modèle réel l'après-midi ?",
      answer: "L'après-midi est dédié à 100% à la pratique. Vous pouvez venir avec la personne de votre choix (ami, famille) qui bénéficiera d'un blanchiment complet gratuit pendant que vous vous entraînerez sous la stricte supervision de notre formateur expert."
    },
    {
      question: "Et si j'ai un problème plus tard avec un client ?",
      answer: "Nous ne vous abandonnons pas avec votre certificat dans la nature. Vous intégrez la famille Bright Smile : vous aurez un accès direct via WhatsApp à nos formateurs pour poser vos questions (réactions, doutes sur un cas particulier) lors de vos premières semaines d'activité."
    }
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a2e] sm:text-4xl">
            Questions Fréquentes
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">Tout ce que vous devez savoir avant de valider votre réservation de 500€.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50"
              >
                <span className="text-lg font-bold text-[#1a1a2e]">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-500 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
