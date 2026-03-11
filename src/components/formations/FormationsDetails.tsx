"use client";

import { motion } from "framer-motion";
import { Briefcase, Target, TrendingUp, ShieldCheck, CheckCircle2, UserCheck } from "lucide-react";

export default function FormationsDetails() {
  return (
    <section className="relative bg-[#fafcff] py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#1a1a2e] sm:text-4xl lg:text-5xl mb-6"
          >
            Pourquoi investir dans cette formation ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-medium"
          >
            Conçue pour les futurs entrepreneurs et personnes en reconversion. Un métier très demandé, facile d'accès, avec d'excellentes marges.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <div className="row-span-2 rounded-[2.5rem] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5">
             <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
               <TrendingUp className="h-8 w-8 text-green-600" />
             </div>
             <h3 className="mb-4 text-2xl font-bold text-[#1a1a2e]">Rentabilité Rapide</h3>
             <p className="text-slate-500 font-medium leading-relaxed mb-6">
               Avec un tarif moyen de séance entre 70€ et 120€, votre investissement initial de 500€ est complètement rentabilisé après avoir traité vos 5 à 7 premiers clients. Le reste est de la marge brute.
             </p>
             <ul className="space-y-3">
               <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-600" /><span className="text-slate-600 font-medium">Faibles coûts fixes</span></li>
               <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-600" /><span className="text-slate-600 font-medium">Forte demande constante</span></li>
               <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-600" /><span className="text-slate-600 font-medium">Résultats visibles qui fidélisent</span></li>
             </ul>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5">
             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
               <UserCheck className="h-6 w-6 text-blue-600" />
             </div>
             <h3 className="mb-2 text-xl font-bold text-[#1a1a2e]">Accessible à tous</h3>
             <p className="text-slate-500 font-medium">Pas besoin de diplôme médical. Nous vous enseignons le cadre légal strict pour opérer en toute sérénité avec des gels cosmétiques conformes.</p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5">
             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
               <Target className="h-6 w-6 text-purple-600" />
             </div>
             <h3 className="mb-2 text-xl font-bold text-[#1a1a2e]">Format Accéléré 24H</h3>
             <p className="text-slate-500 font-medium">Vous êtes formé en 1 jour complet. Théorie avancée le matin, pratique sur modèle réel l'après-midi. Prêt le lendemain.</p>
          </div>

          <div className="lg:col-span-2 rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark p-8 sm:p-10 text-white relative overflow-hidden shadow-lg">
             <div className="absolute right-0 top-0 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/3 rounded-full bg-white/10 blur-[60px]" />
             <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
               <div className="flex-1">
                 <h3 className="mb-4 text-2xl font-bold">Le Programme "Zéro Tracas"</h3>
                 <p className="text-primary-light font-medium leading-relaxed">
                   En plus de la pratique, nous abordons l'aspect business de front : comment fixer vos prix, trouver vos premiers clients, gérer l'hygiène, et nous vous donnons <strong>la liste de nos fournisseurs de confiance</strong>.
                 </p>
               </div>
               <div className="shrink-0 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
                 <div className="text-lg font-bold mb-1">Inclus à la fin :</div>
                 <div className="flex items-center gap-2 mt-3">
                   <ShieldCheck className="h-6 w-6 text-accent" />
                   <span className="font-medium text-white">Certificat d'Aptitude</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
