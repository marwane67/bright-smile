import { pageMetadata } from "@/data/metadata";
import Hero from "@/components/home/Hero";
import TrustProofs from "@/components/home/TrustProofs";
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
      <Hero />
      <TrustProofs />
      <section id="services">
        <ServicesSummary />
      </section>
      <section id="how-it-works">
        <ThreeStepProcess />
      </section>
      <section id="results">
        <BeforeAfterPreview />
      </section>
      <section id="testimonials">
        <TestimonialsCarousel />
      </section>
      <section id="faq">
        <HomeFAQ />
      </section>
      <section id="location">
        <LocationSection />
      </section>
      <FinalCTA />
    </>
  );
}
