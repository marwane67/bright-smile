"use client";

import { motion } from "framer-motion";
import { Copy, Gift, Link2, Users } from "lucide-react";
import { useState } from "react";

export default function FormationsReferral() {
  const [copied, setCopied] = useState(false);
  const code = "BRIGHT100";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-br from-[#1a1a2e] to-[#0A0A16] py-24 sm:py-32 border-y border-white/5 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-10 bg-[url('/images/noise.png')] mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="rounded-[3rem] bg-white/5 border border-white/10 p-8 sm:p-12 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 mb-6 border border-accent/20">
              <Gift className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent-light">Programme Ambassadeur</span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
              Formez-vous à deux.<br />
              <span className="text-accent">Économisez 100€.</span>
            </h2>
            
            <p className="text-slate-300 font-medium leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              C'est toujours plus facile de se lancer avec un(e) ami(e) ou un associé. 
              Parrainez une connaissance et recevez chacun <strong>50€ de remise immédiate</strong> sur votre formation, soit 450€ au lieu de 500€.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="flex items-center bg-black/40 border border-white/10 rounded-full p-2 pl-6">
                <span className="text-white font-mono font-bold tracking-widest mr-4">{code}</span>
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-white transition-all hover:bg-accent/80 hover:scale-105"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copié !" : "Copier le code"}
                </button>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 font-medium">À renseigner lors de votre prise de contact ou réservation en ligne.</p>
          </div>

          <div className="shrink-0 relative">
            <div className="h-48 w-48 rounded-full bg-gradient-to-tr from-accent to-primary p-1 shadow-2xl shadow-accent/20 animate-spin-slow">
              <div className="h-full w-full rounded-full bg-[#1a1a2e] flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
            </div>
            {/* Floating connecting line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#1a1a2e] rounded-full p-2 border border-white/10 shadow-lg">
              <Link2 className="h-8 w-8 text-accent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Quick helper for the copy icon state
function Check(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
