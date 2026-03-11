"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, Star, Users, Sparkles, ChevronRight, Timer } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

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

// Custom Icon matching the reference exactly
const CustomSparklesIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Main four-point spark */}
    <path d="M12 2v5" />
    <path d="M12 17v5" />
    <path d="M17 12h5" />
    <path d="M2 12h5" />
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Z" />
    <path d="M18 6l-1 1" />
  </svg>
);

// Premium Detailed Tooth Icon matching reference
const CustomToothIcon = ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth * 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M32 16 c-4-10-18-10-22 0 c-2 6 2 18 5 26 c3 8 7 10 9 2 c1-4 3-4 4 0 c2 8 6 6 9-2 c3-8 7-20 5-26 c-4-10-18-10-22 0z" />
    <path d="M32 16 c5 4 12 5 18 2" />
  </svg>
);

// Premium Detailed Dentist Chair Icon matching reference
const CustomDentistChairIcon = ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth * 1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Floor */}
    <path d="M4 60h10 M20 60h28 M54 60h6" />
    
    {/* Pedestal Base */}
    <path d="M22 60c0-4 2-6 6-6h8c4 0 6 2 6 6" />
    <path d="M30 46v8 M34 46v8" />
    <path d="M26 44c0 3 2 4 6 4s6-1 6-4" />

    {/* Lamp pole */}
    <path d="M38 42V12c0-4-2-6-5-6-2 0-4 1-5 2" />

    {/* Lamp head */}
    <path d="M28 8c-1 3-2 6-6 8-2-2-3-5 0-8 2-1 4-1 6 0z" />
    {/* Rays */}
    <path d="M18 16l-3 2 M22 20l-2 3 M15 20l-3-1" />

    {/* Instrument Tray */}
    <path d="M38 22h8" />
    <rect x="46" y="18" width="14" height="8" rx="1.5" />
    <path d="M49 26v4 M53 26v6 M57 26v4" />

    {/* Chair main outline (with dash array for modern icon effect) */}
    <path 
      d="M12 26l10 8c2 2 5 3 9 3h10c3 0 5 1 7 4l7 10c1 2 4 3 6 1 2-2 1-5-1-7l-7-10c-3-4-7-6-12-6h-10c-2 0-3-1-5-2l-10-8c-1-1-3-2-5-1-1 1-1 3 1 5z" 
      strokeDasharray="24 6" 
    />

    {/* Headrest */}
    <path d="M6 16c-2-2-5-1-6 1-2 2-1 5 2 7 2 2 5 1 6-1 2-2 1-5-2-7z" strokeDasharray="16 6" />
  </svg>
);

interface ModernCardProps {
  icon: React.ElementType;
  title: string;
  delay?: number;
  className?: string;
  iconBgColor?: string;
  iconColor?: string;
}

const ModernCard = ({
  icon: Icon,
  title,
  delay = 0,
  className = "",
  iconBgColor = "bg-primary/10",
  iconColor = "text-primary",
}: ModernCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={`absolute z-20 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/5 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconBgColor}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={1.5} />
        </div>
        <p className="text-sm font-bold tracking-tight text-[#1a1a2e]">{title}</p>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-gradient-to-br from-[#f0fafa] via-white to-[#f5f9ff]">
      {/* Decorative shapes */}
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/5" />
      <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/5" />
      <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-primary/30" />

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

              {/* Image Box */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary/10 via-[#e8f5f4] to-[#f0f9ff] shadow-xl sm:h-[480px] sm:w-[400px]">
                <Image
                  src="/images/hero-whitening.jpg"
                  alt="Soin Blanchiment Dentaire Bright Smile"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-[1.5rem]"
                  priority
                />

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-[1.5rem]" />
              </div>

              {/* Floating badge: top-left (8 teintes +) */}
              <motion.div
                variants={floatCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute -left-6 top-16 z-30 flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md px-5 py-2.5 shadow-[0_4px_15px_rgb(0,0,0,0.05)] ring-1 ring-black/5 sm:-left-12"
              >
                <CustomToothIcon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <span className="text-sm font-bold text-[#1a1a2e]">8 teintes +</span>
              </motion.div>

              {/* Modern card: right (1 Séance) */}
              <ModernCard
                icon={CustomDentistChairIcon}
                title="1 Séance"
                delay={1.0}
                className="-right-6 top-32 sm:-right-16 px-6 py-4"
                iconBgColor="bg-[#fff8ec]"
                iconColor="text-accent"
              />

              {/* Modern card: bottom-left (60 minutes) */}
              <ModernCard
                icon={Timer}
                title="60 minutes"
                delay={0.8}
                className="-left-6 bottom-24 sm:-left-16"
                iconBgColor="bg-[#eefcf8]"
                iconColor="text-primary"
              />
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
            { value: "60min", label: "Par Séance", icon: Timer },
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
