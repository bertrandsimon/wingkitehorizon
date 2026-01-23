"use client";

import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { contactInfo } from "@/lib/constants";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();

  const portalTarget = useMemo(() => {
    if (typeof document === "undefined") return null;
    return document.body;
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  if (!isOpen || !portalTarget) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999]">
      <button
        type="button"
        aria-label="Close contact dialog"
        className="absolute inset-0 bg-black/50"
        onClick={close}
      />

      <div className="absolute left-1/2 top-1/2 w-[calc(100%-24px)] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] border border-black/10 bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
          <div>
            <p className="font-poppins text-sm text-gray-600">Contact</p>
            <p className="font-display text-2xl sm:text-3xl text-[#102F77]">
              Parlons de votre croisière
            </p>
            <p className="mt-2 font-poppins text-sm text-gray-600 leading-relaxed">
              Dites-nous votre niveau en kite/wing, vos dates et vos envies. On
              vous répond rapidement.
            </p>
          </div>

          <button
            type="button"
            onClick={close}
            className="shrink-0 rounded-full w-9 h-9 flex items-center justify-center text-black/70 hover:bg-black/5 transition-colors"
            aria-label="Close"
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>

        <form
          className="px-5 sm:px-6 pb-5 sm:pb-6"
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-name"
                className="font-poppins text-xs text-gray-600"
              >
                Nom
              </label>
              <input
                id="contact-name"
                className="h-10 rounded-[10px] border border-black/10 px-3 font-poppins text-sm outline-none focus:border-[#55BAC6]"
                placeholder="Votre nom"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-email"
                className="font-poppins text-xs text-gray-600"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="h-10 rounded-[10px] border border-black/10 px-3 font-poppins text-sm outline-none focus:border-[#55BAC6]"
                placeholder="vous@exemple.com"
              />
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-1">
            <label
              htmlFor="contact-message"
              className="font-poppins text-xs text-gray-600"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              className="rounded-[10px] border border-black/10 px-3 py-2 font-poppins text-sm outline-none focus:border-[#55BAC6] resize-none"
              placeholder="Votre niveau, vos dates, vos objectifs (kite/wing), etc."
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="font-poppins text-sm text-gray-600">
              <div>
                <span className="font-medium text-[#102F77]">Email:</span>{" "}
                {contactInfo.email}
              </div>
              <div>
                <span className="font-medium text-[#102F77]">Tel:</span>{" "}
                {contactInfo.phone}
              </div>
            </div>

            <button
              type="submit"
              className="h-10 px-5 rounded-full bg-[#55BAC6] text-white font-poppins text-sm hover:bg-[#49a9b3] transition-colors"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>,
    portalTarget,
  );
}

