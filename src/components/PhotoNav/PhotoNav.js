"use client";

import Image from "next/image";
import Title from "@/components/Title/Title";
import { useTheme } from "@/contexts/ThemeContext";

export default function PhotoNav({
  title = "Le plus beau détour",
  subtitle = "vers le dépaysement",
  description = "Naviguez en Grèce, entre eaux turquoise et criques sauvages. Kite, wing et coaching sur-mesure pour progresser, explorer et vivre la vie locale.",
  bodyText = "Cap sur la Grèce pour une parenthèse hors du temps : mouillages idylliques, villages blancs, tavernes au bord de l’eau et sessions quotidiennes dans des spots choisis selon le vent. Que vous veniez pour apprendre ou pour vous perfectionner, on vous accompagne en kite et en wing avec un coaching adapté à votre niveau. Entre navigation, découverte des paysages et immersion locale, chaque journée est un mix parfait d’aventure, de glisse et de douceur de vivre.",
}) {
  const { theme } = useTheme();
  // Text on photos should be white in light mode
  const textColor = theme === "light" ? "text-white" : "text-white";
  const paragraphColor = theme === "light" ? "text-gray-600" : "text-white/70";

  // Export these 3 images from Figma to /public/images as JPG:
  // - photonav1.jpg (top)
  // - photonav2.jpg (bottom-left)
  // - photonav3.jpg (bottom-right)
  const images = {
    top: "/images/photonav1.jpg",
    bottomLeft: "/images/photonav2.jpg",
    bottomRight: "/images/photonav3.jpg",
  };

  const captions = {
    top: { line1: "Naviguer en Grèce", line2: "Entre îles & lagons" },
    bottomLeft: { line1: "Dépaysement total", line2: "Paysages magnifiques" },
    bottomRight: {
      line1: "Kite & Wing",
      line2: "Apprendre & se faire coacher",
    },
  };

  return (
    <>
      <Title
        title1={title}
        title2={subtitle}
        description={description}
        title2ClassName="font-poppins text-[#55BAC6] text-xl sm:text-2xl lg:text-3xl"
      />
      <div className="w-full pb-8 sm:pb-12 lg:pb-30 flex justify-center">
        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[1200px] px-4">
          {/* Top row (image + paragraph) */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 w-full items-start">
            <div className="relative w-full lg:w-[598px] h-[220px] sm:h-[280px] lg:h-[317px] rounded-[12px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <Image
                src={images.top}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 598px"
                className="object-cover"
                priority={false}
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10">
                <p
                  className={`${textColor} font-poppins font-light text-sm sm:text-lg leading-tight`}
                >
                  {captions.top.line1}
                </p>
                <p
                  className={`${textColor} font-poppins font-semibold text-lg sm:text-xl leading-tight`}
                >
                  {captions.top.line2}
                </p>
              </div>
            </div>

            <p
              className={`${paragraphColor} font-poppins text-sm leading-[1.92] w-full lg:w-[519px]`}
            >
              {bodyText}
            </p>
          </div>

          {/* Bottom row (2 images) */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-[13px] w-full items-center">
            <div className="relative w-full sm:w-[379px] h-[220px] sm:h-[317px] rounded-[12px] overflow-hidden">
              <Image
                src={images.bottomLeft}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 379px"
                className="object-cover"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8">
                <p
                  className={`${textColor} font-poppins font-light text-sm sm:text-lg leading-tight`}
                >
                  {captions.bottomLeft.line1}
                </p>
                <p
                  className={`${textColor} font-poppins font-semibold text-lg sm:text-xl leading-tight`}
                >
                  {captions.bottomLeft.line2}
                </p>
              </div>
            </div>

            <div className="relative w-full sm:flex-1 sm:min-w-0 h-[220px] sm:h-[317px] rounded-[12px] overflow-hidden">
              <Image
                src={images.bottomRight}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 798px"
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8">
                <p
                  className={`${textColor} font-poppins font-light text-sm sm:text-lg leading-tight`}
                >
                  {captions.bottomRight.line1}
                </p>
                <p
                  className={`${textColor} font-poppins font-semibold text-lg sm:text-xl leading-tight`}
                >
                  {captions.bottomRight.line2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
