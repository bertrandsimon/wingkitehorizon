"use client";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { themes } from "@/lib/themes";
import ThemeCard from "./ThemeCard";

export default function ThematicSection() {
  const trackRef = useRef(null);

  const { theme } = useTheme();
  // Keep "une thematique inspirante" white in light mode (over imagery)
  const textColor = "text-white";
  const arrowColor = theme === "light" ? "text-black" : "text-white";

  const scrollByOneCard = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("[data-theme-card]");
    const gapPx = 16; // matches gap-4 on the flex container
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 0;
    const delta = (cardWidth || 0) + gapPx;

    const nextLeft = direction === "left" ? -delta : delta;
    const maxLeft = track.scrollWidth - track.clientWidth;

    if (direction === "right" && track.scrollLeft >= maxLeft - 4) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction === "left" && track.scrollLeft <= 4) {
      track.scrollTo({ left: maxLeft, behavior: "smooth" });
      return;
    }

    track.scrollBy({ left: nextLeft, behavior: "smooth" });
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => scrollByOneCard("right"), 5000);
    return () => clearInterval(interval);
  }, [scrollByOneCard]);

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 relative z-20">
      <div className="container max-w-[1200px] px-4">
        <div className="w-full">
          <div className="flex items-center justify-end mb-4 sm:mb-6 relative z-20 pr-0 sm:pr-10 lg:pr-40">
            <div className={`${textColor} text-sm sm:text-sm lg:text-lg relative z-20 font-poppins`}>
              une <span>thématique</span>{" "}
              <span className="font-display ">inspirante</span> ?
            </div>
            <div className="pt-2 pl-2 sm:pl-4">
              <Image
                src="/images/arrow-right.png"
                alt="arrow-right"
                width={20}
                height={24}
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-6"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={() => scrollByOneCard("left")}
              className={`flex cursor-pointer z-20 p-2 ${arrowColor} hover:text-[#df986c] transition-colors items-center h-full mr-2 sm:mr-4`}
              aria-label="Previous"
            >
              <ArrowLongLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden">
              {/* Side gradients */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-white/90 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-white/90 to-transparent z-10" />

              <section
                ref={trackRef}
                className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-2"
                aria-label="Thématiques"
              >
                {themes.map((t) => (
                  <div
                    key={t.id}
                    data-theme-card
                    className="flex-shrink-0 snap-start"
                  >
                    <ThemeCard theme={t} />
                  </div>
                ))}
              </section>
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={() => scrollByOneCard("right")}
              className={`flex cursor-pointer z-20 p-2 ${arrowColor} hover:text-[#df986c] transition-colors items-center h-full ml-2 sm:ml-4`}
              aria-label="Next"
            >
              <ArrowLongRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
