import { Check, Gift } from "lucide-react";
import { pricingTiers, packageDeal, pricingNotes } from "@/data/pricing";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";

export default function PricingTable() {
  return (
    <div>
      {/* Pricing Tiers Grid */}
      <div className="grid gap-8 md:grid-cols-3 md:items-center">
        {pricingTiers.map((tier, index) => (
          <AnimateOnScroll key={tier.name} delay={index * 0.15}>
            <div
              className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-lg ${
                tier.highlighted
                  ? "border-primary ring-2 ring-primary/20 md:scale-105 md:z-10"
                  : "border-border"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  {tier.badge}
                </span>
              )}

              {/* Name */}
              <h3 className="mb-2 text-xl font-bold text-foreground">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">
                  &euro;{tier.price}
                </span>
                {tier.period && (
                  <span className="ml-1 text-sm text-muted">{tier.period}</span>
                )}
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-muted">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href={tier.ctaHref}
                variant={tier.highlighted ? "primary" : "outline"}
                size="lg"
                className="w-full"
              >
                {tier.ctaText}
              </Button>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Package Deal Banner */}
      <AnimateOnScroll delay={0.5} className="mt-12">
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5 p-8 sm:p-10">
          {packageDeal.badge && (
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
              {packageDeal.badge}
            </span>
          )}

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <Gift className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">
                  {packageDeal.name}
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted md:mb-0">
                {packageDeal.description}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {packageDeal.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-3 md:items-end">
              <div>
                <span className="text-4xl font-bold text-foreground">
                  &euro;{packageDeal.price}
                </span>
              </div>
              <Button href={packageDeal.ctaHref} variant="primary" size="lg">
                {packageDeal.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Pricing Notes */}
      <AnimateOnScroll delay={0.6} className="mt-8">
        <ul className="space-y-1">
          {pricingNotes.map((note) => (
            <li key={note} className="text-xs leading-relaxed text-muted">
              {note}
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
    </div>
  );
}
