import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll className={className}>
      <div className={`mb-12 ${centered ? "text-center" : ""}`}>
        {badge && (
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {badge}
          </span>
        )}
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto max-w-2xl text-lg text-muted">{subtitle}</p>
        )}
      </div>
    </AnimateOnScroll>
  );
}
