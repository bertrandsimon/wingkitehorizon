"use client";

import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";
import { usePathname } from "next/navigation";
import TestimonialCarousel from "@/components/Testimonials/TestimonialCarousel";
import BookNowButton from "@/components/CTAs/BookNowButton";
import { getLocaleFromPathname } from "@/lib/i18n";

export default function BoatZone() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  const boatCards =
    locale === "en"
      ? [
          {
            title: "Cabins",
            description: "4 comfortable cabins for crew and riders.",
          },
          {
            title: "Bathrooms",
            description: "4 bathrooms for extra comfort on board.",
          },
          {
            title: "Capacity",
            description: "Up to 8 guests + coach / skipper depending on the trip.",
          },
          {
            title: "Life on board",
            description: "Shared spaces, gear storage, safety and comfort.",
          },
          {
            title: "Coaching videos",
            description: "2 coaching videos per day.",
          },
          {
            title: "E-foil",
            description: "15 min E-foil session per day.",
          },
        ]
      : [
          {
            title: "Cabines",
            description: "4 cabines confortables pour l’équipage et les riders.",
          },
          {
            title: "Salles de bain",
            description: "4 salles de bain pour plus de confort à bord.",
          },
          {
            title: "Capacité",
            description:
              "Jusqu’à 8 personnes + coach / skipper selon le programme.",
          },
          {
            title: "Vie à bord",
            description: "Espaces communs, rangements matériel, sécurité et confort.",
          },
          {
            title: "Vidéos coaching",
            description: "2 vidéos coaching par jour.",
          },
          {
            title: "E-foil",
            description: "15 min de session E-foil par jour.",
          },
        ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <div className="w-full">
          <TestimonialCarousel />

          <div className="flex items-center gap-2 mt-4 mb-2">
            <UtensilsCrossed className="w-5 h-5 text-[#102F77]" aria-hidden />
            <span className="text-sm font-bold text-[#102F77] font-poppins">
              {locale === "en" ? "Brunch and snack on board" : "Brunch et petit snack à bord"}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {boatCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[16px] bg-white p-5 shadow-[0px_12px_30px_rgba(16,47,119,0.12)]"
                >
                  <p className="text-sm font-bold text-[#102F77] leading-[192%] font-poppins">
                    {card.title}
                  </p>
                  <p className="text-sm text-[#5f5f5f] font-poppins">
                    {card.description}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative w-full aspect-[530/565] rounded-[16px] overflow-hidden bg-black/5">
          <Image
            src="/images/catamaran.jpg"
            alt="Catamaran"
            fill
            sizes="(max-width: 1024px) 100vw, 530px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <BookNowButton />
      </div>
    </section>
  );
}
