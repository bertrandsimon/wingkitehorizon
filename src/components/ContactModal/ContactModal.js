"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { contactInfo } from "@/lib/constants";
import { useContactModal } from "@/contexts/ContactModalContext";
import { getLocaleFromPathname } from "@/lib/i18n";

const FORMSUBMIT_AJAX = "https://formsubmit.co/ajax";

export default function ContactModal() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const { isOpen, close } = useContactModal();
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const t = {
    title: locale === "en" ? "Let's talk about your cruise" : "Parlons de votre croisière",
    subtitle: locale === "en"
      ? "Tell us your kite/wing level, dates and preferences. We'll reply quickly."
      : "Dites-nous votre niveau en kite/wing, vos dates et vos envies. On vous répond rapidement.",
    nameLabel: locale === "en" ? "Name" : "Nom",
    namePlaceholder: locale === "en" ? "Your name" : "Votre nom",
    emailPlaceholder: locale === "en" ? "you@example.com" : "vous@exemple.com",
    messageLabel: locale === "en" ? "Message" : "Message",
    messagePlaceholder: locale === "en"
      ? "Your level, dates, goals (kite/wing), etc."
      : "Votre niveau, vos dates, vos objectifs (kite/wing), etc.",
    success: locale === "en" ? "Message sent! Thank you." : "Message envoyé ! Merci.",
    error: locale === "en"
      ? "Error. Please try again or contact us by email."
      : "Erreur. Réessayez ou contactez-nous par email.",
    sending: locale === "en" ? "Sending..." : "Envoi...",
    send: locale === "en" ? "Send" : "Envoyer",
    closeLabel: locale === "en" ? "Close contact form" : "Fermer le formulaire",
    emailLabel: "Email:",
    whatsappLabel: locale === "en" ? "Chat with us on WhatsApp" : "Parlez-nous sur WhatsApp",
  };

  const portalTarget = useMemo(() => {
    if (typeof document === "undefined") return null;
    return document.body;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setStatus("idle");

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

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements["contact-name"].value.trim();
    const email = form.elements["contact-email"].value.trim();
    const message = form.elements["contact-message"].value.trim();

    if (!name || !email || !message) return;

    setStatus("submitting");
    const subject =
      locale === "en"
        ? `[Wing Kite Horizon] Contact from ${name}`
        : `[Wing Kite Horizon] Contact de ${name}`;
    const payload = { name, email, message, _subject: subject };
    try {
      const results = await Promise.all(
        contactInfo.formRecipients.map((recipient) =>
          fetch(`${FORMSUBMIT_AJAX}/${recipient}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload),
          }).then((r) => r.json()),
        ),
      );
      const allSuccess = results.every((data) => data.success);
      if (allSuccess) {
        setStatus("success");
        form.reset();
        setTimeout(() => {
          close();
          setStatus("idle");
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!isOpen || !portalTarget) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999]">
      <button
        type="button"
        aria-label={t.closeLabel}
        className="absolute inset-0 bg-black/50"
        onClick={close}
      />

      <div className="absolute left-1/2 top-1/2 w-[calc(100%-24px)] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] border border-black/10 bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
          <div>
            <p className="font-poppins text-sm text-gray-600">Contact</p>
            <p className="font-display text-2xl sm:text-3xl text-[#102F77]">
              {t.title}
            </p>
            <p className="mt-2 font-poppins text-sm text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={close}
            className="shrink-0 rounded-full w-9 h-9 flex items-center justify-center text-black/70 hover:bg-black/5 transition-colors"
            aria-label={t.closeLabel}
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>

        <form
          className="px-5 sm:px-6 pb-5 sm:pb-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-name"
                className="font-poppins text-xs text-gray-600"
              >
                {t.nameLabel}
              </label>
              <input
                id="contact-name"
                name="contact-name"
                required
                disabled={status === "submitting"}
                className="h-10 rounded-[10px] border border-black/10 px-3 font-poppins text-sm outline-none focus:border-[#55BAC6] disabled:opacity-60"
                placeholder={t.namePlaceholder}
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
                name="contact-email"
                type="email"
                required
                disabled={status === "submitting"}
                className="h-10 rounded-[10px] border border-black/10 px-3 font-poppins text-sm outline-none focus:border-[#55BAC6] disabled:opacity-60"
                placeholder={t.emailPlaceholder}
              />
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-1">
            <label
              htmlFor="contact-message"
              className="font-poppins text-xs text-gray-600"
            >
              {t.messageLabel}
            </label>
            <textarea
              id="contact-message"
              name="contact-message"
              rows={4}
              required
              disabled={status === "submitting"}
              className="rounded-[10px] border border-black/10 px-3 py-2 font-poppins text-sm outline-none focus:border-[#55BAC6] resize-none disabled:opacity-60"
              placeholder={t.messagePlaceholder}
            />
          </div>

          {status === "success" && (
            <p className="mt-3 font-poppins text-sm text-green-600">
              {t.success}
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 font-poppins text-sm text-red-600">
              {t.error}
            </p>
          )}

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="font-poppins text-sm text-gray-600">
              <div>
                <span className="font-medium text-[#102F77]">{t.emailLabel}</span>{" "}
                {contactInfo.email}
              </div>
              <div>
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1da851] px-3 py-1.5 text-sm font-poppins font-medium text-white transition-colors hover:bg-[#189845]"
                >
                  {t.whatsappLabel}
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="h-10 px-5 rounded-lg bg-[#ea580c] text-white font-poppins font-medium text-sm shadow-sm hover:bg-[#c2410b] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? t.sending : t.send}
            </button>
          </div>
        </form>
      </div>
    </div>,
    portalTarget,
  );
}

