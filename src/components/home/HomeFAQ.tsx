"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import { homeFAQItems } from "@/data/faq";

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Questions Fréquentes"
          subtitle="Tout ce que vous devez savoir avant votre première visite"
          centered
        />

        <AnimateOnScroll delay={0.1}>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {homeFAQItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index}>
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface"
                  >
                    <span className="text-base font-semibold text-foreground">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex-shrink-0 text-muted"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 leading-relaxed text-muted">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-10 text-center">
            <Button href="/faq" variant="outline" size="md">
              Voir Toutes les Questions
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
