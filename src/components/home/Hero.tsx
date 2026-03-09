"use client";

import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden bg-foreground">
      {/* Background image placeholder with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/90" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm"
          >
            Blanchiment Dentaire Professionnel à Bruxelles
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Un Sourire Plus Éclatant{" "}
            <span className="text-accent">Commence Ici</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Révélez votre plus beau sourire grâce à notre technologie LED
            avancée. Repartez jusqu&apos;à 8 teintes plus clair en une seule
            visite &mdash; sûr, rapide et personnalisé.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" variant="primary" size="lg">
              Prendre Rendez-vous
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              Voir les Tarifs
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-xs leading-relaxed text-white/50"
          >
            Blanchiment dentaire cosmétique professionnel &mdash; il ne
            s&apos;agit pas d&apos;un acte dentaire ou médical.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
