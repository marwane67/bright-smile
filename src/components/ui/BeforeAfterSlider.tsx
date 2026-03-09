"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) {
        updatePosition(e.clientX);
      }
    },
    [isDragging, updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden bg-muted/10"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      onClick={handleClick}
      role="slider"
      aria-label="Glissez pour comparer avant et après"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft")
          setSliderPosition((p) => Math.max(0, p - 2));
        if (e.key === "ArrowRight")
          setSliderPosition((p) => Math.min(100, p + 2));
      }}
    >
      {/* After image (full background) */}
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        className="pointer-events-none object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        draggable={false}
      />

      {/* Before image (clipped via clip-path) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="pointer-events-none object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute bottom-0 top-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white shadow-lg transition-transform group-hover:scale-110">
          <ChevronsLeftRight className="h-5 w-5 text-primary" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 z-10 rounded-full bg-foreground/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        Avant
      </span>
      <span className="absolute bottom-3 right-3 z-10 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        Après
      </span>

      {/* Hint overlay (fades on interaction) */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-center pb-14 transition-opacity duration-500 ${
          sliderPosition !== 50 ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="rounded-full bg-foreground/60 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
          ← Glissez pour comparer →
        </div>
      </div>
    </div>
  );
}
