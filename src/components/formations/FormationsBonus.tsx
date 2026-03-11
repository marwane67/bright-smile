"use client";

import { motion } from "framer-motion";
import { Check, Star, ShieldCheck, Zap } from "lucide-react";

export default function FormationsBonus() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="rounded-[3rem] bg-[#1a1a2e] p-8 sm:p-16 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6 backdrop-blur-md border border-white/20">
                <Star className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Le Secret des Pros</span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl mb-6">
                Plus qu'une formation. <br />
                <span className="text-primary">Un partenariat.</span>
              </h2>

              <p className="text-lg text-slate-300 font-light mb-10 leading-relaxed max-w-lg">
                Se former c'est bien, mais trouver les produits CE, sécurisés, fiables et abordables, c'est ce qui bloque 90% des débutants. On a réglé le problème : on vous donne notre carnet d'adresses strict.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Le carnet d'adresses Fournisseurs</h4>
                    <p className="text-slate-400 mt-1">Où acheter vos gels (0.1%), vos machines LED professionnelles, vos bavoirs, et écarteurs aux meilleurs prix (B2B).</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Le Certificat d'Aptitude</h4>
                    <p className="text-slate-400 mt-1">Certificat nominatif <em>Bright Smile</em> remis en main propre à la fin de la journée pour attester de vos capacités cosmétiques.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Le Support Continu</h4>
                    <p className="text-slate-400 mt-1">Vous avez un doute sur un client compliqué la semaine suivante ? On reste disponible via WhatsApp pour vous guider.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
               {/* Certificate abstract preview */}
               <motion.div 
                 initial={{ opacity: 0, rotate: -5, y: 30 }}
                 whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                 viewport={{ once: true }}
                 className="relative w-full max-w-md mx-auto aspect-[4/3] bg-gradient-to-br from-slate-100 to-white rounded-xl shadow-2xl p-8 border-8 border-white flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-500"
               >
                 <ShieldCheck className="h-16 w-16 text-[#D4AF37] mb-4" />
                 <h3 className="text-black font-extrabold text-2xl uppercase tracking-widest mb-2 border-b-2 border-slate-200 pb-2">CERTIFICAT</h3>
                 <p className="text-slate-400 font-serif text-sm">Formation Praticien Blanchiment Esthétique</p>
                 <div className="mt-8 border-t border-slate-300 w-3/4 pt-2">
                   <p className="text-[#1a1a2e] font-bold text-xs uppercase">Certifié par Bright Smile</p>
                 </div>
               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
