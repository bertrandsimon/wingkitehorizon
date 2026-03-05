"use client";

import { usePathname } from "next/navigation";
import { useContactModal } from "@/contexts/ContactModalContext";
import { getLocaleFromPathname } from "@/lib/i18n";

const ORANGE_STYLE =
  "bg-[#ea580c] hover:bg-[#c2410b] rounded-lg shadow-sm";
const BLUE_STYLE =
  "bg-[#102F77] hover:bg-[#55BAC6] rounded-full";

export default function BookNowButton({ className = "", variant = "orange" }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const { open: openContact } = useContactModal();
  const isSlide = variant === "slide";

  return (
    <button
      type="button"
      onClick={openContact}
      className={`cursor-pointer inline-flex items-center justify-center px-7 py-3 text-sm sm:text-base font-poppins font-medium text-white transition-colors ${isSlide ? BLUE_STYLE : ORANGE_STYLE} ${className}`}
    >
      {locale === "en" ? "Book now" : "Réserver maintenant"}
    </button>
  );
}

