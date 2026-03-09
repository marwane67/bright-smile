import { ClipboardCheck, Smile, Star } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: 1,
    icon: ClipboardCheck,
    title: "Réservez & Consultez",
    description:
      "Planifiez votre rendez-vous en ligne ou par téléphone. Nous commençons par une consultation rapide et une évaluation de teinte.",
  },
  {
    number: 2,
    icon: Smile,
    title: "Détendez-vous & Blanchissez",
    description:
      "Installez-vous confortablement pendant que notre technologie LED professionnelle fait son effet. La plupart des séances durent 30 à 60 minutes.",
  },
  {
    number: 3,
    icon: Star,
    title: "Souriez & Brillez",
    description:
      "Repartez avec un sourire visiblement plus éclatant. Nous vous fournissons des conseils post-soin pour maintenir vos résultats.",
  },
] as const;

export default function ThreeStepProcess() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Comment Ça Marche"
          subtitle="Trois étapes simples vers un sourire plus éclatant"
          badge="Processus"
        />

        <div className="relative">
          {/* Connecting line (visible on md+) */}
          <div className="absolute left-0 right-0 top-16 z-0 hidden md:block">
            <div className="mx-auto h-0.5 w-2/3 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          </div>

          <div className="relative z-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.number} delay={index * 0.2}>
                <div className="flex flex-col items-center text-center">
                  {/* Numbered circle with icon */}
                  <div className="relative mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-primary/10 sm:h-24 sm:w-24">
                      <step.icon className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>

                  <p className="max-w-xs text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
