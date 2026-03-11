import { pageMetadata } from "@/data/metadata";
import Hero from "@/components/home/Hero";
import Advantages from "@/components/home/Advantages";
import ServicesSummary from "@/components/home/ServicesSummary";
import ThreeStepProcess from "@/components/home/ThreeStepProcess";
import BeforeAfterPreview from "@/components/home/BeforeAfterPreview";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import HomeFAQ from "@/components/home/HomeFAQ";
import LocationSection from "@/components/home/LocationSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = pageMetadata.home;

export default function Home() {
  return (
    <>
      {/* 1. Attention & Clarity (Hero) */}
      <Hero />
      
      {/* 2. Cognitive Load Reduction & Fear Alleviation (Advantages) */}
      <section id="advantages">
        <Advantages />
      </section>

      {/* 3. Picture Superiority Effect (Before / After Contrast) */}
      <section id="before-after">
        <BeforeAfterPreview />
      </section>

      {/* 4. Rule of 3 (Simple Process to eliminate effort bias) */}
      <section id="how-it-works">
        <ThreeStepProcess />
      </section>

      {/* 5. Logical Justification (Services / Pricing context) */}
      <section id="services">
        <ServicesSummary />
      </section>

      {/* 6. Mirror Neurons & Social Proof (Testimonials) */}
      <section id="testimonials">
        <TestimonialsCarousel />
      </section>

      {/* 7. Objection Handling (FAQ) */}
      <section id="faq">
        <HomeFAQ />
      </section>

      {/* 8. Reassurance & Practicality (Location) */}
      <section id="location">
        <LocationSection />
      </section>

      {/* 9. Final Call to Action (Urgency/Scarcity) */}
      <section id="contact">
        <FinalCTA />
      </section>
    </>
  );
}
