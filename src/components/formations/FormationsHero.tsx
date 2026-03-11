"use client";

import { motion, Variants } from "framer-motion";
import { TrendingUp, ArrowRight, Euro, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function FormationsHero() {
  return (
    <section className="relative overflow-hidden bg-[#fafcff] pt-32 pb-20 sm:pt-40 sm:pb-28">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 shadow-sm">
               <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs font-bold uppercase tracking-wider text-[#1a1a2e]">Le marché de l'esthétique explose en 2026.</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="mb-6 text-5xl font-extrabold tracking-tight text-[#1a1a2e] sm:text-6xl lg:text-7xl leading-[1.1]">
              Devenez Praticien.<br />
              <span className="text-primary">Générez des revenus</span><br />
              Dès demain.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="mb-8 text-lg font-medium leading-relaxed max-w-xl text-slate-500">
              Que vous cherchiez une 
              <span className="inline-block bg-blue-50/80 border border-blue-200 text-[#1a1a2e] font-bold px-3 py-1 rounded-xl shadow-[0_2px_0_0_#bfdbfe] -translate-y-[2px] mx-1">
                reconversion professionnelle
              </span>, 
              un 
              <span className="inline-block bg-blue-50/80 border border-blue-200 text-[#1a1a2e] font-bold px-3 py-1 rounded-xl shadow-[0_2px_0_0_#bfdbfe] -translate-y-[2px] mx-1">
                complément de revenu
              </span> 
              ou à lancer votre 
              <span className="inline-block bg-blue-50/80 border border-blue-200 text-[#1a1a2e] font-bold px-3 py-1 rounded-xl shadow-[0_2px_0_0_#bfdbfe] -translate-y-[2px] mx-1">
                propre entreprise
              </span>, 
              maîtrisez l'art du blanchiment dentaire cosmétique et générez une rentabilité immédiate.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="group flex h-16 items-center justify-center rounded-full bg-primary px-8 text-lg font-bold text-white shadow-[0_8px_30px_rgb(56,189,248,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(56,189,248,0.4)]"
              >
                Réserver ma place - 500€
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Quick stats floating bar */}
            <motion.div variants={fadeInUp} className="hidden sm:flex items-center divide-x divide-slate-200">
               <div className="pr-6">
                 <div className="text-2xl font-extrabold text-[#1a1a2e]">24h</div>
                 <div className="text-sm font-medium text-slate-500">De Formation</div>
               </div>
               <div className="px-6">
                 <div className="text-2xl font-extrabold text-[#1a1a2e]">100%</div>
                 <div className="text-sm font-medium text-slate-500">Pratique incluse</div>
               </div>
               <div className="pl-6">
                 <div className="text-2xl font-extrabold text-[#1a1a2e]">∞</div>
                 <div className="text-sm font-medium text-slate-500">Rentabilité illimitée</div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
             <div className="relative aspect-[4/5] w-full rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-80 z-10" />
               <div className="h-full w-full bg-slate-100 flex items-center justify-center relative">
                   {/* Abstract representation, replace with a real photo of training */}
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80')] bg-cover bg-center" />
               </div>
               
               <div className="absolute bottom-8 left-8 right-8 z-20">
                 <div className="rounded-2xl bg-white/95 backdrop-blur-md p-6 shadow-xl border border-white/20">
                   <div className="flex gap-4">
                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 shrink-0">
                       <TrendingUp className="h-6 w-6 text-green-600" />
                     </div>
                     <div>
                       <h3 className="font-bold text-[#1a1a2e]">Ticket d'entrée de 500€</h3>
                       <p className="text-slate-600 font-medium text-sm mt-1">
                         Un investissement dérisoire par rapport au potentiel de revenus mensuels dans l'esthétique.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
