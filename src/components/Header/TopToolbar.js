"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { contactInfo } from "@/lib/constants";
import { getLocaleFromPathname, getLocaleSwitchHref } from "@/lib/i18n";
import { FlagES, FlagFR, FlagUK } from "./FlagIcon";

export default function TopToolbar({ isSticky = false }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
  const dividerColor = theme === "light" ? "bg-black/30" : "bg-white/30";
  const spacingClass = isSticky ? "mb-2 sm:mb-4" : "";

  const whatsappLabel =
    locale === "en"
      ? "Chat with us on WhatsApp"
      : locale === "es"
        ? "Chatea con nosotros en WhatsApp"
        : "Parlez-nous sur WhatsApp";

  const emailLabel =
    locale === "en"
      ? "Contact by email"
      : locale === "es"
        ? "Contactar por correo"
        : "Nous contacter par email";

  return (
    <div className="w-full bg-transparent py-1 sm:py-2 pb-2 sm:pb-4">
      <div className="w-full max-w-[1260px] mx-auto px-2 sm:px-4">
        <div
          className={`flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4 ${spacingClass}`}
        >
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#1da851] px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-poppins font-medium text-white transition-colors hover:bg-[#189845] cursor-pointer shrink-0"
            aria-label={whatsappLabel}
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.52 2 2 6.48 2 12c0 1.88.5 3.71 1.45 5.33L2 22l4.8-1.4c1.56.85 3.3 1.3 5.24 1.3h.01c5.52 0 9.99-4.48 9.99-10S17.56 2 12.04 2zm5.8 14.52c-.24.67-1.17 1.23-1.9 1.39-.5.1-1.14.18-3.32-.73-2.79-1.15-4.6-3.97-4.74-4.15-.13-.19-1.12-1.5-1.12-2.86 0-1.36.71-2.03.96-2.3.24-.27.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4-.07.62.48.24.58.81 2 .88 2.14.07.14.11.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.39-.43.52-.14.14-.29.29-.13.58.16.29.7 1.15 1.52 1.86 1.05.93 1.94 1.22 2.23 1.36.29.15.46.13.62-.08.17-.21.73-.85.93-1.13.2-.29.4-.24.67-.15.27.09 1.68.79 1.97.93.29.14.48.21.55.32.07.11.07.65-.17 1.32z" />
            </svg>
            <span className="hidden sm:inline">{whatsappLabel}</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
          <div
            className={`hidden sm:block h-4 w-px shrink-0 ${dividerColor}`}
          ></div>
          <a
            href={`mailto:${contactInfo.email}`}
            className={`inline-flex items-center gap-1.5 sm:gap-3 text-xs ${textColor} font-poppins cursor-pointer hover:underline hover:decoration-current/60 underline-offset-4 shrink-0 min-w-0`}
            aria-label={emailLabel}
          >
            <EnvelopeIcon className={`w-3 h-3 sm:w-4 sm:h-4 shrink-0`} />
            <span className="hidden sm:inline truncate max-w-[140px] lg:max-w-none">
              {contactInfo.email}
            </span>
          </a>
          <div
            className={`hidden sm:block h-4 w-px shrink-0 ${dividerColor}`}
          ></div>
          <div className="inline-flex items-center gap-1.5 shrink-0">
            {locale !== "fr"
              ? <Link
                  href={getLocaleSwitchHref(pathname, "fr")}
                  aria-label="Version française"
                  className={`p-0.5 rounded-md font-poppins transition-colors ${textColor} hover:bg-black/5`}
                >
                  <FlagFR className="w-4 h-4" />
                </Link>
              : null}
            {locale !== "en"
              ? <Link
                  href={getLocaleSwitchHref(pathname, "en")}
                  aria-label="English version"
                  className={`p-0.5 rounded-md font-poppins transition-colors ${textColor} hover:bg-black/5`}
                >
                  <FlagUK className="w-4 h-4" />
                </Link>
              : null}
            {locale !== "es"
              ? <Link
                  href={getLocaleSwitchHref(pathname, "es")}
                  aria-label="Versión en español"
                  className={`p-0.5 rounded-md font-poppins transition-colors ${textColor} hover:bg-black/5`}
                >
                  <FlagES className="w-4 h-4" />
                </Link>
              : null}
          </div>
          <div
            className={`hidden sm:block h-4 w-px shrink-0 ${dividerColor}`}
          ></div>
          <Image
            src="/images/airush2x.png"
            alt="Airush"
            width={102}
            height={31}
            className="shrink-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
