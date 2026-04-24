"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TestimonialCarousel from "@/components/Testimonials/TestimonialCarousel";
import { getLocaleFromPathname } from "@/lib/i18n";

export default function Presentation() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <div className="mb-6 lg:hidden">
        <TestimonialCarousel />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-[16px] overflow-hidden">
          <Image
            src="/images/presentation/presentation.jpg"
            alt="Coaching en action"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <p className="mt-4 font-poppins text-2xl sm:text-4xl font-bold leading-[1.1]">
              <span className="text-[#102F77]">
                {locale === "en"
                  ? "Cruise "
                  : locale === "es"
                    ? "Crucero "
                    : "Croisière "}
              </span>
              <span className="text-[#55BAC6]">
                {locale === "en"
                  ? "Kitesurf & Wingfoil."
                  : locale === "es"
                    ? "Kitesurf y Wingfoil."
                    : "Kitesurf et Wingfoil."}
              </span>
            </p>
            <p className="mt-2 font-poppins text-xl sm:text-2xl font-bold leading-[1.1]">
              <span className="text-[#55BAC6]">
                {locale === "en"
                  ? "Progress"
                  : locale === "es"
                    ? "Progresar"
                    : "Progresser"}
              </span>{" "}
              <span className="text-[#102F77]">
                {locale === "en"
                  ? "Learn"
                  : locale === "es"
                    ? "Aprender"
                    : "Apprendre"}
              </span>{" "}
              <span className="text-[#55BAC6]">
                {locale === "en"
                  ? "Travel"
                  : locale === "es"
                    ? "Viajar"
                    : "Voyager"}
              </span>
            </p>
            <p className="mt-3 text-black font-poppins text-sm font-normal leading-[192%]">
              {locale === "en"
                ? <>
                    <span className="block">
                      Improve fast, whatever your level,
                    </span>
                    <span className="block">with personalized coaching</span>
                    <span className="block">and tailored sessions.</span>
                  </>
                : locale === "es"
                  ? <>
                      <span className="block">
                        Progresa rápido, sea cual sea tu nivel,
                      </span>
                      <span className="block">con coaching personalizado</span>
                      <span className="block">y sesiones a medida.</span>
                    </>
                  : <>
                      <span className="block">
                        Progressez rapidement, quel que soit
                      </span>
                      <span className="block">
                        votre niveau, avec un suivi personnalisé
                      </span>
                      <span className="block">et des sessions sur mesure.</span>
                    </>}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-[16px] bg-white p-5 shadow-[0px_12px_30px_rgba(16,47,119,0.12)]">
              <p className="text-[#102F77] font-poppins text-sm font-bold leading-[192%]">
                {locale === "en"
                  ? "Kitesurf coaching"
                  : locale === "es"
                    ? "Coaching de kitesurf"
                    : "Coaching Kitesurf"}
              </p>
              <p className="text-sm text-[#5f5f5f] font-poppins">
                {locale === "en"
                  ? "Individual guidance with focused goals."
                  : locale === "es"
                    ? "Acompañamiento individual con objetivos claros."
                    : "Accompagnement individuel et objectif ciblé."}
              </p>
            </div>
            <div className="rounded-[16px] bg-white p-5 shadow-[0px_12px_30px_rgba(16,47,119,0.12)]">
              <p className="text-[#102F77] font-poppins text-sm font-bold leading-[192%]">
                {locale === "en"
                  ? "Wingfoil coaching"
                  : locale === "es"
                    ? "Coaching de wingfoil"
                    : "Coaching Wingfoil"}
              </p>
              <p className="text-sm text-[#5f5f5f] font-poppins">
                {locale === "en"
                  ? "Dynamic sessions to progress together."
                  : locale === "es"
                    ? "Sesiones dinámicas para progresar juntos."
                    : "Sessions dynamiques pour progresser ensemble."}
              </p>
            </div>
          </div>

          <Link
            href={
              locale === "en"
                ? "/en/concept"
                : locale === "es"
                  ? "/es/concept"
                  : "/le-concept"
            }
            className="mt-6 inline-flex w-full max-w-[220px] items-center justify-center rounded-lg bg-[#ea580c] px-6 py-3 text-sm font-poppins font-medium text-white shadow-sm transition-colors hover:bg-[#ea580c] cursor-pointer"
          >
            {locale === "en"
              ? "Learn more"
              : locale === "es"
                ? "Saber más"
                : "En savoir plus"}
          </Link>
        </div>
      </div>
    </section>
  );
}
