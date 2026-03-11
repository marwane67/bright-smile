import { beforeAfterCases } from "@/data/before-after";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function BeforeAfterPreview() {
  const previewCases = beforeAfterCases.slice(0, 2);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Résultats Réels"
          subtitle="Glissez pour découvrir la transformation"
          badge="Avant & Après"
        />

        <div className="grid gap-10 md:grid-cols-2">
          {previewCases.map((caseItem, index) => (
            <AnimateOnScroll key={caseItem.id} delay={index * 0.2}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
                {/* Slider */}
                <BeforeAfterSlider
                  beforeImage={caseItem.beforeImage}
                  afterImage={caseItem.afterImage}
                  beforeAlt={caseItem.beforeAlt}
                  afterAlt={caseItem.afterAlt}
                />

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

      </div>
    </section>
  );
}
