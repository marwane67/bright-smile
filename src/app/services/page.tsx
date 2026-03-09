import { pageMetadata } from "@/data/metadata";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import CTABlock from "@/components/shared/CTABlock";

export const metadata = pageMetadata.services;

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nos Soins de Blanchiment"
            subtitle="Découvrez nos traitements professionnels adaptés à chaque besoin et chaque budget"
            badge="Services"
            centered
          />

          <div className="space-y-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        heading="Prêt à Retrouver un Sourire Éclatant ?"
        text="Prenez rendez-vous dès aujourd'hui et laissez-nous révéler votre plus beau sourire."
        primaryCTA={{ label: "Prendre Rendez-vous", href: "/contact" }}
        secondaryCTA={{ label: "Voir les Tarifs", href: "/pricing" }}
      />
    </>
  );
}
