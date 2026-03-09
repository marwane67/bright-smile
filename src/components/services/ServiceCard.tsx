import Image from "next/image";
import { Zap, Sparkles, RefreshCw, Check, AlertTriangle, type LucideIcon } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Sparkles,
  RefreshCw,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <AnimateOnScroll delay={index * 0.1}>
      <article
        id={service.id}
        className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-lg ${
          service.highlighted
            ? "border-primary ring-2 ring-primary/20"
            : "border-border"
        }`}
      >
        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-surface">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="p-6 sm:p-8">
          {/* Icon + Title */}
          <div className="mb-4 flex items-center gap-3">
            {Icon && (
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  service.highlighted
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                {service.title}
              </h3>
              {service.highlighted && (
                <span className="mt-1 inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white">
                  Le Plus Populaire
                </span>
              )}
            </div>
          </div>

          {/* Duration + Price */}
          <div className="mb-5 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-surface px-3 py-1 text-sm font-medium text-muted">
              {service.duration}
            </span>
            <span className="text-2xl font-bold text-foreground">
              &euro;{service.price}
            </span>
          </div>

          {/* Full Description */}
          <p className="mb-6 text-sm leading-relaxed text-muted">
            {service.fullDescription}
          </p>

          {/* Inclusions */}
          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Ce Qui Est Inclus
            </h4>
            <ul className="space-y-2">
              {service.inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who Is It For */}
          <div className="mb-6 rounded-xl bg-surface p-4">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              Pour Qui ?
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              {service.whoIsItFor}
            </p>
          </div>

          {/* Recommendations */}
          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Recommandations
            </h4>
            <ul className="space-y-2">
              {service.recommendations.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contraindications */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 text-amber-500" />
              <h4 className="text-sm font-semibold text-amber-800">
                Informations Importantes
              </h4>
            </div>
            <ul className="space-y-1.5">
              {service.contraindications.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-amber-800"
                >
                  &bull; {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </AnimateOnScroll>
  );
}
