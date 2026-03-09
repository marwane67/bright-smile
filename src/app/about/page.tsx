import { pageMetadata } from "@/data/metadata";
import { Heart, Shield, Users, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTABlock from "@/components/shared/CTABlock";

export const metadata = pageMetadata.about;

const values = [
  {
    icon: Shield,
    title: "Hygiène Irréprochable",
    description:
      "Nous suivons des protocoles de stérilisation stricts pour chaque séance. Tout notre matériel est à usage unique ou stérilisé selon les normes les plus élevées.",
  },
  {
    icon: Heart,
    title: "Bien-être du Client",
    description:
      "Votre confort est notre priorité. Nous prenons le temps d'expliquer chaque étape et d'adapter le traitement à vos besoins spécifiques.",
  },
  {
    icon: Users,
    title: "Expertise Professionnelle",
    description:
      "Notre équipe est formée aux dernières techniques de blanchiment cosmétique et utilise uniquement des produits de qualité professionnelle.",
  },
  {
    icon: Sparkles,
    title: "Résultats Visibles",
    description:
      "Nous nous engageons à vous offrir des résultats concrets et mesurables dès la première séance, avec une évaluation de teinte avant et après.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="À Propos de Bright Smile"
            subtitle="Votre studio de blanchiment dentaire professionnel au cœur de Bruxelles"
            badge="Notre Histoire"
            centered
          />

          <AnimateOnScroll delay={0.1}>
            <div className="prose prose-lg mx-auto max-w-3xl text-center text-muted">
              <p className="text-lg leading-relaxed">
                Bright Smile est né d&apos;une conviction simple : tout le monde mérite
                un sourire dont il est fier. Installés au cœur de Bruxelles, nous
                proposons des soins de blanchiment dentaire cosmétique dans un
                environnement chaleureux, professionnel et parfaitement hygiénique.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                Notre mission est de rendre le blanchiment dentaire accessible,
                sûr et efficace. Grâce à notre technologie LED de dernière
                génération et à des gels professionnels doux, nous offrons des
                résultats visibles dès la première séance — le tout dans une
                atmosphère détendue et accueillante.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nos Valeurs"
            subtitle="Les principes qui guident chacun de nos soins"
            centered
          />

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Notre Engagement"
            badge="Qualité"
            centered
          />

          <AnimateOnScroll delay={0.1}>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
              <div className="space-y-4 text-center text-muted">
                <p className="text-lg leading-relaxed">
                  Chez Bright Smile, nous croyons que la transparence et la
                  confiance sont essentielles. C&apos;est pourquoi nous vous
                  expliquons tout avant, pendant et après votre traitement.
                </p>
                <p className="text-lg leading-relaxed">
                  Nous utilisons exclusivement des produits conformes aux
                  réglementations européennes, et notre personnel est
                  régulièrement formé aux meilleures pratiques du secteur.
                </p>
                <p className="text-lg leading-relaxed">
                  Votre satisfaction est notre meilleure publicité — c&apos;est
                  pourquoi plus de 500 clients à Bruxelles nous font déjà
                  confiance pour leur sourire.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABlock
        heading="Prêt à Nous Faire Confiance ?"
        text="Rejoignez les centaines de clients satisfaits et offrez-vous le sourire que vous méritez."
        primaryCTA={{ label: "Prendre Rendez-vous", href: "/contact" }}
        secondaryCTA={{ label: "Voir Nos Résultats", href: "/before-after" }}
      />
    </>
  );
}
