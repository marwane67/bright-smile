import { Phone } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Prêt pour un Sourire Plus Éclatant ?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/85">
            Prenez rendez-vous dès aujourd&apos;hui pour votre blanchiment
            dentaire professionnel et découvrez la confiance qui accompagne un
            sourire radieux.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-white bg-white text-primary hover:bg-white/90"
            >
              Prendre Rendez-vous
            </Button>

            {siteConfig.phone && (
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:border-white hover:text-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                Appelez-Nous
              </Button>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
