"use client";

import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeCard({ theme }) {
  const { theme: currentTheme } = useTheme();
  const borderColor =
    currentTheme === "light" ? "border-gray-300" : "border-white";

  return (
    <div className="relative group cursor-pointer flex flex-col items-center">
      <div
        className={`relative w-[290px] h-[290px] rounded-[24px] overflow-hidden border-2 ${borderColor} shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]`}
      >
        <Image
          src={theme.image}
          alt={theme.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-white font-poppins font-light text-base sm:text-lg leading-tight">
            {theme.subtitle}
          </p>
          <p className="text-white font-poppins font-semibold text-lg sm:text-2xl leading-tight">
            {theme.title}
          </p>
          {theme.description ? (
            <p className="mt-2 hidden sm:block text-white/90 font-poppins font-light text-sm leading-relaxed">
              {theme.description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
