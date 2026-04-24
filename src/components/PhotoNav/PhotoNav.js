"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Title from "@/components/Title/Title";
import { useTheme } from "@/contexts/ThemeContext";
import { getLocaleFromPathname } from "@/lib/i18n";

export default function PhotoNav({ title, subtitle, description, bodyText }) {
  const { theme } = useTheme();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  // Text on photos should be white in light mode
  const textColor = theme === "light" ? "text-white" : "text-white";
  const paragraphColor = theme === "light" ? "text-black" : "text-white";

  const resolvedTitle =
    title ||
    (locale === "en"
      ? "The most beautiful detour"
      : locale === "es"
        ? "El desvío más bonito"
        : "Le plus beau détour");
  const resolvedSubtitle =
    subtitle ||
    (locale === "en"
      ? "toward escape"
      : locale === "es"
        ? "hacia la desconexión"
        : "vers le dépaysement");

  // Keep Title's description optional (we now include the default intro in the main paragraph).
  const resolvedDescription = description;

  const introSentence =
    locale === "en"
      ? "Sail in Greece, between turquoise waters and wild coves. Kite, wing and tailor-made coaching to progress, explore and enjoy local life."
      : locale === "es"
        ? "Navega en Grecia entre aguas turquesas y calas salvajes. Kite, wing y coaching a medida para progresar, explorar y vivir la vida local."
        : "Naviguez en Grèce, entre eaux turquoise et criques sauvages. Kite, wing et coaching sur-mesure pour progresser, explorer et vivre la vie locale.";
  const resolvedBodyText =
    bodyText ||
    (locale === "en"
      ? `${introSentence} Set course for Greece for a timeless escape: idyllic anchorages, white villages, waterfront tavernas and daily sessions on spots chosen with the wind. Whether you come to learn or refine your skills, we coach you in kite and wing with guidance adapted to your level. Between sailing, discovering landscapes and local immersion, every day is the perfect mix of adventure, riding and Mediterranean ease.`
      : locale === "es"
        ? `${introSentence} Pon rumbo a Grecia para una escapada fuera del tiempo: fondeos idílicos, pueblos blancos, tabernas junto al mar y sesiones diarias en spots elegidos según el viento. Tanto si vienes a aprender como a perfeccionar, te acompañamos en kite y wing con un coaching adaptado a tu nivel. Entre navegación, descubrimiento de paisajes e inmersión local, cada día es la mezcla perfecta de aventura, deporte y la suavidad mediterránea.`
        : `${introSentence} Cap sur la Grèce pour une parenthèse hors du temps : mouillages idylliques, villages blancs, tavernes au bord de l’eau et sessions quotidiennes dans des spots choisis selon le vent. Que vous veniez pour apprendre ou pour vous perfectionner, on vous accompagne en kite et en wing avec un coaching adapté à votre niveau. Entre navigation, découverte des paysages et immersion locale, chaque journée est un mix parfait d’aventure, de glisse et de douceur de vivre.`);

  // Export these 3 images from Figma to /public/images as JPG:
  // - photonav1.jpg (top)
  // - photonav2.jpg (bottom-left)
  // - photonav3.jpg (bottom-right)
  const images = {
    top: "/images/photonav1.jpg",
    bottomLeft: "/images/photonav2.jpg",
    bottomRight: "/images/photonav3.jpg",
  };

  const captions =
    locale === "en"
      ? {
          top: { line1: "Sailing in Greece", line2: "Islands & lagoons" },
          bottomLeft: { line1: "Total escape", line2: "Stunning landscapes" },
          bottomRight: {
            line1: "Kite & Wing",
            line2: "Learn & get coached",
          },
        }
      : locale === "es"
        ? {
            top: { line1: "Navegar en Grecia", line2: "Islas y lagunas" },
            bottomLeft: {
              line1: "Desconexión total",
              line2: "Paisajes increíbles",
            },
            bottomRight: {
              line1: "Kite y Wing",
              line2: "Aprender y entrenar",
            },
          }
        : {
            top: { line1: "Naviguer en Grèce", line2: "Entre îles & lagons" },
            bottomLeft: {
              line1: "Dépaysement total",
              line2: "Paysages magnifiques",
            },
            bottomRight: {
              line1: "Kite & Wing",
              line2: "Apprendre & se faire coacher",
            },
          };

  return (
    <>
      <Title
        title1={resolvedTitle}
        title2={resolvedSubtitle}
        description={resolvedDescription}
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
              {resolvedBodyText}
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
