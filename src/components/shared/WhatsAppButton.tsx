"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  if (!siteConfig.whatsappLink || siteConfig.whatsappLink.startsWith("[")) return null;

  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discutez avec nous sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-2"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
