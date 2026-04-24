"use client";

import { usePathname } from "next/navigation";
import { useContactModal } from "@/contexts/ContactModalContext";
import { getLocaleFromPathname } from "@/lib/i18n";

const ORANGE_STYLE = "bg-[#ea580c] hover:bg-[#ea580c] rounded-lg shadow-sm";
const BLUE_STYLE = "bg-[#102F77] hover:bg-[#ea580c] rounded-lg shadow-sm";

export default function BookNowButton({ className = "", variant = "orange" }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const { open: openContact } = useContactModal();
  const isSlide = variant === "slide";
  const widthClass = isSlide ? "w-full" : "w-auto max-w-[220px]";

  return (
    <button
      type="button"
      onClick={openContact}
      className={`cursor-pointer inline-flex ${widthClass} items-center justify-center whitespace-nowrap px-7 py-3 text-sm sm:text-base font-poppins font-medium text-white transition-colors ${isSlide ? BLUE_STYLE : ORANGE_STYLE} ${className}`}
    >
      {locale === "en"
        ? "Book now"
        : locale === "es"
          ? "Reservar ahora"
          : "Réserver maintenant"}
    </button>
  );
}
