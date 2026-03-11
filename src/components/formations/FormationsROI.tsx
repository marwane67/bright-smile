"use client";

import { motion } from "framer-motion";
import { Calculator, Euro, CheckCircle2 } from "lucide-react";

export default function FormationsROI() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32 border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 mb-6">
              <Calculator className="h-4 w-4 text-green-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-700">Calcul de Rentabilité</span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a2e] sm:text-4xl lg:text-5xl mb-6">
              Amortissez votre formation en <span className="text-primary line-through decoration-red-400 decoration-4">1 an</span>  <br/>5 clients.
            </h2>
            
            <p className="text-lg text-slate-500 font-medium mb-8">
              Une séance de blanchiment cosmétique est facturée en moyenne entre <strong>70€ et 120€</strong>. Le coût de revient du matériel consommable (gel, écarteur) est d'environ <strong>15€</strong> par client. Le calcul est vite fait.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="text-[#1a1a2e] font-semibold">Générez 100€ de bénéfice net par heure.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="text-[#1a1a2e] font-semibold">Traitez seulement 2 clients/jour pour gagner 4000€/mois.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="text-[#1a1a2e] font-semibold">Travaillez à domicile, en salon partenaire ou en institut.</span>
              </div>
            </div>
          </div>

          {/* ROI Simulator Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_20px_50px_rgb(0,0,0,0.06)] ring-1 ring-slate-100"
          >
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-6">Simulation Financière Conservatrice</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-slate-500 font-medium">Prix moyen par prestation</span>
                <span className="text-xl font-bold text-[#1a1a2e]">80 €</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-slate-500 font-medium">Coût de revient par prestation (gel, etc.)</span>
                <span className="text-xl font-bold text-red-500">- 15 €</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-slate-500 font-medium">Bénéfice Net par Prestation</span>
                <span className="text-2xl font-black text-green-600">65 €</span>
              </div>
              
              <div className="pt-4 rounded-xl bg-slate-50 p-6 mt-4 ring-1 ring-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600 font-bold">Revenu pour 10 clients / semaine étudiante :</span>
                  <span className="text-2xl font-black text-[#1a1a2e]">650 € / sem</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-bold">Revenu Mensuel (Temps Partiel) :</span>
                  <span className="text-3xl font-black text-primary">2 600 €</span>
                </div>
              </div>

              <div className="mt-6 text-sm text-center font-medium text-slate-400">
                L'investissement de 500€ est couvert par vos 8 premiers clients.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
