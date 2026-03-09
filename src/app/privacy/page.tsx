import { pageMetadata } from "@/data/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/data/site";

export const metadata = pageMetadata.privacy;

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Politique de Confidentialité"
          centered
        />

        <AnimateOnScroll delay={0.1}>
          <div className="prose prose-sm max-w-none rounded-2xl border border-border bg-white p-8 text-muted shadow-sm sm:p-10">
            <p className="text-sm text-muted">
              Dernière mise à jour : mars 2026
            </p>

            <h2 className="text-lg font-bold text-foreground">1. Responsable du traitement</h2>
            <p>
              <strong>{siteConfig.brandName}</strong><br />
              {siteConfig.address}, {siteConfig.city}, {siteConfig.country}<br />
              Email : {siteConfig.email}<br />
              Téléphone : {siteConfig.phone}
            </p>

            <h2 className="text-lg font-bold text-foreground">2. Données collectées</h2>
            <p>Nous collectons les données suivantes lorsque vous utilisez notre site :</p>
            <ul>
              <li><strong>Formulaire de contact :</strong> nom, adresse email, numéro de téléphone (optionnel), message, moyen de contact préféré</li>
              <li><strong>Formulaire de réservation :</strong> nom, adresse email, numéro de téléphone, soin souhaité, date et horaire préférés, notes</li>
              <li><strong>Données de navigation :</strong> adresse IP (pour la protection anti-spam), pages visitées (via Google Analytics si activé)</li>
            </ul>

            <h2 className="text-lg font-bold text-foreground">3. Finalités du traitement</h2>
            <p>Vos données personnelles sont utilisées pour :</p>
            <ul>
              <li>Répondre à vos demandes de contact</li>
              <li>Traiter vos demandes de rendez-vous</li>
              <li>Améliorer notre site et nos services</li>
              <li>Protéger notre site contre les abus (limitation de requêtes)</li>
            </ul>

            <h2 className="text-lg font-bold text-foreground">4. Base juridique</h2>
            <p>
              Le traitement de vos données est fondé sur votre consentement
              (soumission volontaire du formulaire) et sur notre intérêt légitime
              à protéger notre site contre les abus, conformément au Règlement
              Général sur la Protection des Données (RGPD).
            </p>

            <h2 className="text-lg font-bold text-foreground">5. Durée de conservation</h2>
            <p>
              Vos données de contact sont conservées pendant une durée maximale
              de 12 mois après votre dernière interaction avec nous, sauf
              obligation légale de conservation plus longue.
            </p>

            <h2 className="text-lg font-bold text-foreground">6. Partage des données</h2>
            <p>
              Vos données personnelles ne sont jamais vendues à des tiers. Elles
              peuvent être partagées uniquement avec :
            </p>
            <ul>
              <li><strong>Resend :</strong> pour l&apos;envoi des emails de notification (si configuré)</li>
              <li><strong>Vercel :</strong> hébergeur du site</li>
              <li><strong>Google Analytics :</strong> pour l&apos;analyse du trafic (si activé, données anonymisées)</li>
            </ul>

            <h2 className="text-lg font-bold text-foreground">7. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos
              données personnelles :
            </p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
            <p>
              Pour exercer l&apos;un de ces droits, contactez-nous à : {siteConfig.email}
            </p>

            <h2 className="text-lg font-bold text-foreground">8. Cookies</h2>
            <p>
              Ce site utilise des cookies strictement nécessaires à son
              fonctionnement. Si Google Analytics ou le Pixel Meta sont activés,
              des cookies de mesure d&apos;audience peuvent être déposés. Vous
              pouvez configurer votre navigateur pour refuser les cookies.
            </p>

            <h2 className="text-lg font-bold text-foreground">9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès non
              autorisé, modification, divulgation ou destruction.
            </p>

            <h2 className="text-lg font-bold text-foreground">10. Réclamation</h2>
            <p>
              Si vous estimez que le traitement de vos données personnelles
              constitue une violation du RGPD, vous avez le droit d&apos;introduire
              une réclamation auprès de l&apos;Autorité de Protection des Données
              (APD) belge :
            </p>
            <p>
              Autorité de Protection des Données<br />
              Rue de la Presse 35, 1000 Bruxelles<br />
              www.autoriteprotectiondonnees.be
            </p>

            <h2 className="text-lg font-bold text-foreground">11. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Les modifications seront publiées
              sur cette page avec la date de mise à jour.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
