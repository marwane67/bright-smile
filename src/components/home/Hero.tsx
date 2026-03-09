"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Star, Users, Clock, Sparkles, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
  },
};

const floatCardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.8 },
  },
};

const floatCardRightVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 1 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-gradient-to-br from-[#f0fafa] via-white to-[#f5f9ff]">
      {/* Decorative shapes */}
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/5" />
      <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/5" />
      <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-primary/30" />
      <div className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-accent/40" />
      <div className="absolute bottom-1/4 right-[12%] h-2 w-2 rounded-full bg-primary/20" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0d9488 1px, transparent 1px), linear-gradient(to bottom, #0d9488 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 py-16 sm:px-6 lg:min-h-[calc(100vh-73px)] lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <MapPin className="h-3.5 w-3.5" />
                Bruxelles, Belgique
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl"
            >
              Votre Sourire{" "}
              <span className="text-primary">Mérite</span>{" "}
              le Meilleur Soin
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            >
              Technologie LED avancée pour un blanchiment dentaire
              professionnel. Jusqu&apos;à 8 teintes plus clair en une seule
              visite &mdash; sûr, rapide et personnalisé.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="/contact" variant="primary" size="lg">
                Prendre Rendez-vous
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                Voir les Tarifs
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary/10 text-[10px] font-bold text-primary"
                    >
                      {["A", "S", "M", "L"][i]}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted">500+ clients satisfaits</p>
                </div>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              variants={itemVariants}
              className="text-[11px] leading-relaxed text-muted-light"
            >
              Blanchiment dentaire cosmétique &mdash; il ne s&apos;agit pas
              d&apos;un acte dentaire ou médical.
            </motion.p>
          </motion.div>

          {/* Right: Visual */}
          <div className="relative flex items-center justify-center">
            {/* Main image area */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Background shape behind image */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />

              {/* Image placeholder */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary/10 via-[#e8f5f4] to-[#f0f9ff] shadow-xl sm:h-[480px] sm:w-[400px]">
                {/* Decorative smile icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/80 shadow-lg">
                    <Sparkles className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-primary/60">
                    Bright Smile
                  </p>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              </div>

              {/* Floating card: left */}
              <motion.div
                variants={floatCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute -left-6 bottom-16 z-20 rounded-xl border border-border/50 bg-white px-4 py-3 shadow-lg sm:-left-12"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">500+</p>
                    <p className="text-xs text-muted">Clients satisfaits</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card: right */}
              <motion.div
                variants={floatCardRightVariants}
                initial="hidden"
                animate="visible"
                className="absolute -right-4 top-16 z-20 rounded-xl border border-border/50 bg-white px-4 py-3 shadow-lg sm:-right-10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">1 Séance</p>
                    <p className="text-xs text-muted">Résultats immédiats</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge: top-left */}
              <motion.div
                variants={floatCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute -left-2 top-8 z-20 rounded-full border border-border/50 bg-white px-3 py-1.5 shadow-md sm:-left-6"
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span className="text-xs font-semibold text-foreground">
                    8 teintes +
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-border/50 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center divide-x divide-border/50 px-4 py-5 sm:px-6 lg:px-8">
          {[
            { value: "500+", label: "Clients Traités", icon: Users },
            { value: "8", label: "Teintes Plus Clair", icon: Sparkles },
            { value: "45min", label: "Par Séance", icon: Clock },
            { value: "4.9/5", label: "Satisfaction", icon: Star },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center gap-1 px-3 sm:px-6"
            >
              <stat.icon className="mb-0.5 h-4 w-4 text-primary" />
              <span className="text-xl font-bold text-foreground sm:text-2xl">
                {stat.value}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
