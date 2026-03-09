"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const total = testimonials.length;

  function goTo(index: number) {
    setCurrent((index + total) % total);
  }

  const testimonial = testimonials[current];

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ce Que Disent Nos Clients"
          badge="Témoignages"
          centered
        />

        <AnimateOnScroll delay={0.15}>
          <div className="relative rounded-2xl border border-border bg-white p-8 shadow-lg md:p-12">
            {/* Star rating */}
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonial.rating
                      ? "fill-amber-400 text-amber-400"
                      : "fill-border text-border"
                  }`}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mb-8 text-center text-lg italic leading-relaxed text-foreground md:text-xl">
              &laquo; {testimonial.quote} &raquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {testimonial.initials}
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => goTo(current - 1)}
              aria-label="Témoignage précédent"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-white p-2 text-muted shadow-sm transition-colors hover:border-primary hover:text-primary md:-left-5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => goTo(current + 1)}
              aria-label="Témoignage suivant"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-white p-2 text-muted shadow-sm transition-colors hover:border-primary hover:text-primary md:-right-5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-primary"
                    : "bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
