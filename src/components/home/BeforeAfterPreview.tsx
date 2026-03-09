import Image from "next/image";
import { beforeAfterCases } from "@/data/before-after";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Disclaimer from "@/components/ui/Disclaimer";

export default function BeforeAfterPreview() {
  const previewCases = beforeAfterCases.slice(0, 2);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Résultats Réels"
          subtitle="Découvrez ce que le blanchiment professionnel peut faire"
          badge="Avant & Après"
        />

        <div className="grid gap-10 md:grid-cols-2">
          {previewCases.map((caseItem, index) => (
            <AnimateOnScroll key={caseItem.id} delay={index * 0.2}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
                {/* Side-by-side images */}
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="relative aspect-[4/3] bg-muted/10">
                      <Image
                        src={caseItem.beforeImage}
                        alt={caseItem.beforeAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <span className="absolute bottom-2 left-2 rounded-full bg-foreground/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      Avant
                    </span>
                  </div>

                  <div className="relative">
                    <div className="relative aspect-[4/3] bg-muted/10">
                      <Image
                        src={caseItem.afterImage}
                        alt={caseItem.afterAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <span className="absolute bottom-2 right-2 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      Après
                    </span>
                  </div>
                </div>

                {/* Case details */}
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {caseItem.treatmentType}
                    </p>
                    <p className="text-sm text-muted">{caseItem.caption}</p>
                  </div>
                  <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    +{caseItem.shadesImproved}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll delay={0.4} className="mt-12 text-center">
          <Button href="/before-after" variant="outline" size="lg">
            Voir Tous les Résultats
          </Button>
        </AnimateOnScroll>

        {/* Disclaimer */}
        <AnimateOnScroll delay={0.5} className="mt-10">
          <Disclaimer text="Les résultats peuvent varier d'une personne à l'autre. Photos publiées avec le consentement des clients." />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
