"use client";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/contexts/ThemeContext";
import { contactInfo } from "@/lib/constants";

export default function TopToolbar({ isSticky = false }) {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
  const dividerColor = theme === "light" ? "bg-black/30" : "bg-white/30";
  const spacingClass = isSticky ? "mb-2 sm:mb-4" : "";

  return (
    <div className="w-full bg-transparent py-2 sm:py-4">
      <div className="w-full max-w-[1260px] mx-auto px-2 sm:px-4">
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-end gap-2 sm:gap-4 ${spacingClass}`}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <PhoneIcon className={`w-3 h-3 sm:w-4 sm:h-4 ${textColor}`} />
            <span className={`text-xs ${textColor} font-poppins`}>
              {contactInfo.phone}
            </span>
          </div>
          <div className={`hidden sm:block h-4 w-px ${dividerColor}`}></div>
          <div className="flex items-center gap-2 sm:gap-3">
            <EnvelopeIcon className={`w-3 h-3 sm:w-4 sm:h-4 ${textColor}`} />
            <span
              className={`text-xs ${textColor} font-poppins break-all sm:break-normal`}
            >
              {contactInfo.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
