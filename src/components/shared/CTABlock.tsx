import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";

interface CTABlockProps {
  heading: string;
  text: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  className?: string;
}

export default function CTABlock({
  heading,
  text,
  primaryCTA = { label: "Réserver", href: "/contact" },
  secondaryCTA,
  className = "",
}: CTABlockProps) {
  return (
    <section className={`py-20 ${className}`}>
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl rounded-3xl bg-primary px-8 py-16 text-center text-white shadow-2xl shadow-primary/20 md:px-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{heading}</h2>
          <p className="mb-8 text-lg text-white/80">{text}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={primaryCTA.href}
              variant="secondary"
              size="lg"
              className="border-white bg-white text-primary hover:bg-white/90"
            >
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-white hover:text-white"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
