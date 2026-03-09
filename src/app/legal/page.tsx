import { pageMetadata } from "@/data/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/data/site";

export const metadata = pageMetadata.legal;

export default function LegalPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Mentions Légales"
          centered
        />

        <AnimateOnScroll delay={0.1}>
          <div className="prose prose-sm max-w-none rounded-2xl border border-border bg-white p-8 text-muted shadow-sm sm:p-10">
            <h2 className="text-lg font-bold text-foreground">1. Éditeur du site</h2>
            <p>
              <strong>Raison sociale :</strong> {siteConfig.brandName}<br />
              <strong>Forme juridique :</strong> Entreprise individuelle<br />
              <strong>Siège social :</strong> {siteConfig.address}, {siteConfig.city}, {siteConfig.country}<br />
              <strong>Téléphone :</strong> {siteConfig.phone}<br />
              <strong>Email :</strong> {siteConfig.email}<br />
              <strong>Numéro BCE :</strong> [À compléter]<br />
              <strong>Numéro TVA :</strong> BE [À compléter]
            </p>

            <h2 className="text-lg font-bold text-foreground">2. Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis.
            </p>

            <h2 className="text-lg font-bold text-foreground">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes,
              logo, icônes) est la propriété exclusive de {siteConfig.brandName},
              sauf mention contraire. Toute reproduction, distribution,
              modification ou utilisation de ce contenu sans autorisation
              préalable écrite est strictement interdite.
            </p>

            <h2 className="text-lg font-bold text-foreground">4. Nature des services</h2>
            <p>
              {siteConfig.brandName} propose des services de blanchiment
              dentaire cosmétique. Il ne s&apos;agit en aucun cas d&apos;un acte
              dentaire ou médical. Nos soins sont purement cosmétiques et ne
              remplacent pas une consultation chez un dentiste qualifié.
            </p>

            <h2 className="text-lg font-bold text-foreground">5. Limitation de responsabilité</h2>
            <p>
              Les résultats du blanchiment dentaire peuvent varier d&apos;une
              personne à l&apos;autre en fonction de facteurs individuels. Les
              photos et témoignages présents sur ce site sont publiés avec le
              consentement des clients et ne constituent pas une garantie de
              résultats identiques.
            </p>
            <p>
              {siteConfig.brandName} ne pourra être tenu responsable des
              dommages directs ou indirects résultant de l&apos;utilisation de ce
              site ou de ses services, dans les limites permises par la loi
              belge.
            </p>

            <h2 className="text-lg font-bold text-foreground">6. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. {siteConfig.brandName} n&apos;exerce
              aucun contrôle sur ces sites et décline toute responsabilité quant
              à leur contenu.
            </p>

            <h2 className="text-lg font-bold text-foreground">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit belge.
              Tout litige relatif à l&apos;utilisation du site sera soumis à la
              compétence exclusive des tribunaux de Bruxelles.
            </p>

            <h2 className="text-lg font-bold text-foreground">8. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez
              nous contacter à l&apos;adresse suivante : {siteConfig.email}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
