import { ShieldCheck, Award, ThumbsUp } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Normes d'Hygiène Strictes",
    description: "Protocoles de stérilisation de grade médical",
  },
  {
    icon: Award,
    title: "500+ Clients Satisfaits",
    description: "La confiance de clients à travers Bruxelles",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Garantie",
    description: "Satisfait de vos résultats ou nous corrigeons le tir",
  },
] as const;

export default function TrustProofs() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {trustItems.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 0.15}>
              <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
