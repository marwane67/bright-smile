import { pageMetadata } from "@/data/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingTable from "@/components/pricing/PricingTable";
import CTABlock from "@/components/shared/CTABlock";

export const metadata = pageMetadata.pricing;

export default function PricingPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nos Tarifs"
            subtitle="Des prix clairs et transparents, sans frais cachés"
            badge="Tarifs"
            centered
          />

          <PricingTable />
        </div>
      </section>

      <CTABlock
        heading="Prêt à Commencer ?"
        text="Réservez votre séance de blanchiment dès maintenant et profitez de résultats visibles en une seule visite."
        primaryCTA={{ label: "Prendre Rendez-vous", href: "/contact" }}
      />
    </>
  );
}
