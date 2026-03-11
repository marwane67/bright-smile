"use client";

import { useState } from "react";
import Image from "next/image";
import { beforeAfterCases } from "@/data/before-after";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Lightbox from "@/components/before-after/Lightbox";
import CTABlock from "@/components/shared/CTABlock";

export default function BeforeAfterPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const isOpen = lightboxIndex >= 0;
  const total = beforeAfterCases.length;

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Résultats Avant & Après"
            subtitle="Découvrez les transformations réelles de nos clients"
            badge="Galerie"
            centered
          />

          <div className="grid gap-10 md:grid-cols-2">
            {beforeAfterCases.map((caseItem, index) => (
              <AnimateOnScroll key={caseItem.id} delay={index * 0.15}>
                <button
                  onClick={() => setLightboxIndex(index)}
                  className="w-full overflow-hidden rounded-2xl border border-border bg-white text-left shadow-sm transition-all hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
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
                </button>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section>

      <CTABlock
        heading="Envie des Mêmes Résultats ?"
        text="Prenez rendez-vous et découvrez ce que le blanchiment professionnel peut faire pour votre sourire."
        primaryCTA={{ label: "Prendre Rendez-vous", href: "/contact" }}
      />

      <Lightbox
        cases={beforeAfterCases}
        currentIndex={lightboxIndex}
        isOpen={isOpen}
        onClose={() => setLightboxIndex(-1)}
        onPrev={() => setLightboxIndex((lightboxIndex - 1 + total) % total)}
        onNext={() => setLightboxIndex((lightboxIndex + 1) % total)}
      />
    </>
  );
}
