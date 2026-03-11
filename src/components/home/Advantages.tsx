"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, ShieldCheck, Timer } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Advantages() {
  return (
    <section className="relative overflow-hidden bg-[#fafcff] py-20 sm:py-28">
      {/* Decorative gradient background (from DA) */}
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-translate-x-1/2">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/10 to-accent/5 opacity-40"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Vos Avantages
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-[#1a1a2e] sm:text-4xl lg:text-5xl leading-[1.1]"
          >
            L'excellence d'un sourire éclatant.
          </motion.h2>
        </div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
           {/* Card 1: Résultat Immédiat (Large 2/3) */}
           <motion.div 
             variants={itemVariants} 
             className="relative overflow-hidden rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/5 md:col-span-2 flex flex-col justify-between"
           >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
              <div>
                 <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff8ec]">
                   <Sparkles className="h-6 w-6 text-accent" />
                 </div>
                 <h3 className="mb-3 text-2xl font-bold text-[#1a1a2e]">
                   Résultat immédiat
                 </h3>
                 <p className="max-w-md text-base leading-relaxed text-muted">
                   Des dents visiblement plus blanches dès la première séance. Gagnez jusqu'à 8 teintes instantanément, sans avoir à attendre des semaines de traitement.
                 </p>
              </div>
           </motion.div>

           {/* Card 2: Sans douleur (Small 1/3) */}
           <motion.div 
             variants={itemVariants} 
             className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/10 via-[#e8f5f4] to-[#f0f9ff] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-primary/10 md:col-span-1 flex flex-col justify-between"
           >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#1a1a2e]">
                  100% Sans douleur
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  Procédé doux cosmétique garanti absolument sans aucune sensibilité.
                </p>
              </div>
           </motion.div>

           {/* Card 3: Séance Rapide (Wide horizontal 3/3) */}
           <motion.div 
             variants={itemVariants} 
             className="relative overflow-hidden rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/5 md:col-span-3 flex flex-col md:flex-row md:items-center justify-between gap-8"
           >
              <div className="md:w-2/3">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#eefcf8]">
                  <Timer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#1a1a2e]">
                  Séance rapide & Efficace
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-muted">
                  Obtenez un sourire éclatant en seulement 60 minutes avec notre technologie de pointe LED. Une prestation esthétique haut de gamme, rapide et relaxante sur place.
                </p>
              </div>
              
              {/* Decorative side element matching DA */}
              <div className="hidden md:flex flex-1 justify-end">
                  <div className="relative h-32 w-full max-w-[200px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary/10 to-transparent">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-white shadow-sm flex items-center justify-center ring-1 ring-black/5">
                           <Sparkles className="h-8 w-8 text-primary/50" />
                        </div>
                     </div>
                  </div>
              </div>
           </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
