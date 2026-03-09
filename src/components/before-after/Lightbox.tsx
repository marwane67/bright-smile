"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { BeforeAfterCase } from "@/types";

interface LightboxProps {
  cases: BeforeAfterCase[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  cases,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  // Keyboard support
  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const currentCase = cases[currentIndex];
  if (!currentCase) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Fermer la visionneuse"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Images */}
            <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-xl sm:gap-4">
              <div className="relative">
                <div className="absolute left-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                  Avant
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                  <Image
                    src={currentCase.beforeImage}
                    alt={currentCase.beforeAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 640px"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-3 z-10 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-white">
                  Après
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                  <Image
                    src={currentCase.afterImage}
                    alt={currentCase.afterAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 640px"
                  />
                </div>
              </div>
            </div>

            {/* Info Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center">
              <span className="rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-white">
                {currentCase.treatmentType}
              </span>
              <span className="text-sm font-medium text-white">
                {currentCase.shadesImproved} d&apos;amélioration
              </span>
              <span className="text-sm text-white/70">
                {currentCase.caption}
              </span>
            </div>

            {/* Counter */}
            <div className="mt-2 text-center text-xs text-white/50">
              {currentIndex + 1} / {cases.length}
            </div>

            {/* Navigation Arrows */}
            {cases.length > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:-translate-x-14"
                  aria-label="Cas précédent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:translate-x-14"
                  aria-label="Cas suivant"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
