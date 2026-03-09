"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/contact/ContactForm";
import BookingForm from "@/components/contact/BookingForm";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"booking" | "contact">("booking");

  const contactDetails = [
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
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Envoyez-nous un message",
      href: siteConfig.whatsappLink,
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: `${siteConfig.address}, ${siteConfig.city}`,
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact & Rendez-vous"
          subtitle="Prenez rendez-vous ou envoyez-nous un message — nous vous répondons dans les 24 heures"
          badge="Contact"
          centered
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left column: Contact Info */}
          <AnimateOnScroll direction="left" delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              {contactDetails.map((item) => (
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
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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

              {/* Opening Hours */}
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

          {/* Right column: Forms */}
          <AnimateOnScroll direction="right" delay={0.2} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              {/* Tab Switcher */}
              <div className="mb-8 flex rounded-full border border-border bg-surface p-1">
                <button
                  onClick={() => setActiveTab("booking")}
                  className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === "booking"
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  Prendre Rendez-vous
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === "contact"
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  Nous Contacter
                </button>
              </div>

              {activeTab === "booking" ? <BookingForm /> : <ContactForm />}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
