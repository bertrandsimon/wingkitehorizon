"use client";

import { useContactModal } from "@/contexts/ContactModalContext";

export default function BookNowButton({ className = "" }) {
  const { open: openContact } = useContactModal();

  return (
    <button
      type="button"
      onClick={openContact}
      className={`cursor-pointer inline-flex items-center justify-center rounded-full bg-[#102F77] px-7 py-3 text-sm sm:text-base font-poppins text-white transition-colors hover:bg-[#55BAC6] ${className}`}
    >
      Réserver maintenant
    </button>
  );
}

