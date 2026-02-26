"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/contexts/ThemeContext";
import { contactInfo } from "@/lib/constants";

export default function TopToolbar({ isSticky = false }) {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
  const dividerColor = theme === "light" ? "bg-black/30" : "bg-white/30";
  const spacingClass = isSticky ? "mb-2 sm:mb-4" : "";

  return (
    <div className="w-full bg-transparent py-1 sm:py-2">
      <div className="w-full max-w-[1260px] mx-auto px-2 sm:px-4">
        <div
          className={`flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-end gap-2 sm:gap-4 ${spacingClass}`}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <svg
              className={`w-3 h-3 sm:w-4 sm:h-4 ${textColor}`}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.52 2 2 6.48 2 12c0 1.88.5 3.71 1.45 5.33L2 22l4.8-1.4c1.56.85 3.3 1.3 5.24 1.3h.01c5.52 0 9.99-4.48 9.99-10S17.56 2 12.04 2zm5.8 14.52c-.24.67-1.17 1.23-1.9 1.39-.5.1-1.14.18-3.32-.73-2.79-1.15-4.6-3.97-4.74-4.15-.13-.19-1.12-1.5-1.12-2.86 0-1.36.71-2.03.96-2.3.24-.27.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4-.07.62.48.24.58.81 2 .88 2.14.07.14.11.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.39-.43.52-.14.14-.29.29-.13.58.16.29.7 1.15 1.52 1.86 1.05.93 1.94 1.22 2.23 1.36.29.15.46.13.62-.08.17-.21.73-.85.93-1.13.2-.29.4-.24.67-.15.27.09 1.68.79 1.97.93.29.14.48.21.55.32.07.11.07.65-.17 1.32z" />
            </svg>
            <span className={`text-xs ${textColor} font-poppins`}>
              {contactInfo.phone}
            </span>
          </div>
          <div className={`hidden sm:block h-4 w-px ${dividerColor}`}></div>
          <div className="flex items-center gap-2 sm:gap-3">
            <EnvelopeIcon className={`w-3 h-3 sm:w-4 sm:h-4 ${textColor}`} />
            <a
              href={`mailto:${contactInfo.email}`}
              className={`text-xs ${textColor} font-poppins break-all sm:break-normal cursor-pointer hover:underline hover:decoration-current/60 underline-offset-4`}
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
