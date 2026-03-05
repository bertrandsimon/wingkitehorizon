"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { getLocaleFromPathname } from "@/lib/i18n";

export default function Editorial() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-10 py-10 sm:py-12 lg:py-16 font-poppins">
      <div>
        <p className={`${textColor} text-sm`}>
          {locale === "en"
            ? "\"Wing Kite Horizon is a sport cruise dedicated to kitesurfing and wingfoiling, designed to learn or progress with private coaching while sailing through Greek waters. On board a catamaran, each day alternates guided sessions, sailing between spots and free time. The format delivers real progression, varied conditions, and an easy way to combine technique, travel and pleasure.\""
            : "\"Wing Kite Horizon c'est croisière sportive dédiée au kitesurf et au wingfoil, conçue pour apprendre ou progresser avec un coach privé tout en naviguant dans les eaux grecques. À bord d’un catamaran, chaque journée alterne sessions encadrées, navigation entre les spots et temps libre. Le format offre une progression réelle, des conditions variées et une façon simple d’allier technique, voyage et plaisir.\""}
        </p>
      </div>
      <div>
        <p className={`${textColor} text-sm`}>
          {locale === "en"
            ? "\"Teaching tools, briefings and video feedback help you adjust your technique quickly and progress safely. The catamaran acts as a mobile base, avoiding unnecessary transfers and giving access to multiple water states with different characteristics. The goal is simple: learn faster, ride more often, and come back with a truly higher level.\""
            : "\"Le matériel pédagogique, les briefings et les retours vidéo permettent d’ajuster rapidement la technique et de sécuriser la progression. Le catamaran sert de base mobile, ce qui évite les déplacements inutiles et donne accès à plusieurs plans d’eau aux caractéristiques différentes. L’objectif est simple : apprendre plus vite, naviguer plus souvent, et rentrer avec un niveau réellement supérieur.\""}
        </p>
      </div>
    </div>
  );
}
