import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/data/site";

export default function LocationSection() {
  const details = [
    {
      icon: MapPin,
      label: "Adresse",
      value: `${siteConfig.address}, ${siteConfig.city}`,
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
  ];

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Retrouvez-Nous à Bruxelles" badge="Localisation" centered />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left column: contact details */}
          <AnimateOnScroll direction="left" delay={0.1}>
            <div className="space-y-6">
              {details.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Opening hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">
                    Horaires d&apos;Ouverture
                  </p>
                  <ul className="mt-1 space-y-1">
                    {siteConfig.openingHoursStructured.map((entry) => (
                      <li key={entry.days} className="text-foreground">
                        <span className="font-medium">{entry.days} :</span>{" "}
                        {entry.hours}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right column: map placeholder */}
          <AnimateOnScroll direction="right" delay={0.2}>
            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border-2 border-dashed border-border bg-white md:min-h-full">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <p className="font-medium text-muted">
                  La carte s&apos;affichera ici
                </p>
                <p className="mt-1 text-sm text-muted/60">
                  {siteConfig.address}, {siteConfig.city}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
