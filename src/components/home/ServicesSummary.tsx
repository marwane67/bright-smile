import { Zap, Sparkles, RefreshCw, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Sparkles,
  RefreshCw,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className="h-7 w-7" />;
}

export default function ServicesSummary() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nos Soins"
          subtitle="Des options de blanchiment professionnel adaptées à vos besoins"
          badge="Services"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.id} delay={index * 0.15}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-lg ${
                  service.highlighted
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border"
                }`}
              >
                {service.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    Le Plus Populaire
                  </span>
                )}

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
                    service.highlighted
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <ServiceIcon name={service.icon} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {service.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    &euro;{service.price}
                  </span>
                  <span className="ml-1 text-sm text-muted">/ séance</span>
                </div>

                <Button
                  href={`/services#${service.id}`}
                  variant={service.highlighted ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                >
                  En Savoir Plus
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
