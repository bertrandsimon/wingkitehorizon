"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookNowButton from "@/components/CTAs/BookNowButton";
import { nextDeparture } from "@/lib/constants";
import { getLocaleFromPathname } from "@/lib/i18n";

export default function HeroTitle({ slide }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const [dateIndex, setDateIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDateIndex((i) => (i + 1) % nextDeparture.dates.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="text-center sm:text-left px-4 sm:px-0 sm:pl-10 lg:pl-[120px]">
      <div className="inline-block">
        <p
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white leading-none font-sans text-center sm:text-left animate__animated animate__fadeInLeftSoft"
          style={{
            animationDelay: "0s",
            animationDuration: "1s",
            animationTimingFunction: "ease",
          }}
        >
          {slide.title1}
        </p>
        <p
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#102F77] leading-none font-sans text-center sm:text-right animate__animated animate__fadeInRightSoft"
          style={{
            animationDelay: "0.35s",
            animationDuration: "1s",
            animationTimingFunction: "ease",
          }}
        >
          {slide.title2}
        </p>
        <div className="mt-4 flex flex-col items-center sm:items-end">
          <div className="flex items-center justify-center sm:justify-end">
            <p
              className="text-xs sm:text-sm lg:text-xl text-white text-center sm:text-right mb-0 mr-2 sm:mr-4 animate__animated animate__fadeInUp"
              style={{
                animationDelay: "0.7s",
                animationDuration: "1s",
                animationTimingFunction: "ease",
              }}
            >
              {slide.taglineLine1}{" "}
              <span className="font-display italic">
                {slide.taglineEmphasis}
              </span>
              <br />
              <span className="block text-center sm:text-right">
                {slide.taglineLine2}
              </span>
            </p>
            <div className="ml-[8px]">
              <Image
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                src="/images/arrow-right.png"
                alt="arrow-right"
                width={24}
                height={24}
              />
            </div>
          </div>

          <div className="mt-4 inline-flex flex-col items-stretch gap-3">
            <div
              className="animate__animated animate__fadeInUp"
              style={{
                animationDelay: "1.05s",
                animationDuration: "1s",
                animationTimingFunction: "ease",
              }}
            >
              <BookNowButton variant="slide" className="w-full px-7 py-3 text-sm sm:text-base" />
            </div>
            <div
              className="animate__animated animate__fadeInUp"
              style={{
                animationDelay: "1.5s",
                animationDuration: "1s",
                animationTimingFunction: "ease",
              }}
            >
              <span className="inline-flex w-full items-center justify-center rounded-lg bg-[#ea580c] px-3 py-1.5 text-xs font-medium text-white shadow-sm sm:text-sm font-poppins">
                {locale === "en" ? "Next departures: " : "Prochains départs : "}
                {nextDeparture.dates[dateIndex][locale === "en" ? "en" : "fr"]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
