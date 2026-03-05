"use client";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { getLocaleFromPathname } from "@/lib/i18n";

function FavoriteFlipCard({ item }) {
  return (
    <div className="w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] perspective-1000 group">
      <div className="relative w-full h-full cursor-pointer preserve-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[250px] bg-white/10 backdrop-blur-md border-t border-white/20 rounded-xl flex items-start justify-start px-3 py-2">
            <div className="flex flex-col">
              <p className="text-white text-xs font-medium">{item.kicker}</p>
              <p className="text-white text-sm font-bold">{item.frontTitle}</p>
            </div>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-[#55BAC6] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center px-6 gap-1">
            {item.backLine1 ? (
              <>
                <p className="text-white text-sm font-medium leading-snug">{item.backLine1}</p>
                <p className="text-white text-sm font-medium leading-snug">{item.backLine2}</p>
              </>
            ) : (
              <>
                <p className="text-white text-sm font-medium">{item.backKicker}</p>
                <p className="text-white text-xl font-bold">{item.backTitle}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Favorites() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const arrowColor = theme === "light" ? "text-black" : "text-white";
  const trackRef = useRef(null);

  const items =
    locale === "en"
      ? [
          {
            id: 1,
            image: "/images/card-1.jpg",
            kicker: "Feel like",
            frontTitle: "Kitesurf coaching?",
            backLine1: "Progress with your dedicated coach.",
            backLine2: "Sessions tailored to your level.",
          },
          {
            id: 2,
            image: "/images/card-2.jpg",
            kicker: "Feel like",
            frontTitle: "Wing coaching?",
            backLine1: "Learn or perfect your wingfoiling.",
            backLine2: "An experienced coach by your side.",
          },
          {
            id: 3,
            image: "/images/card-3.jpg",
            kicker: "Feel like",
            frontTitle: "Traveling as a couple?",
            backLine1: "A cruise for two.",
            backLine2: "Intimate moments on the water.",
          },
          {
            id: 4,
            image: "/images/card-4.jpg",
            kicker: "Feel like",
            frontTitle: "Riding in Greece?",
            backLine1: "Head to the Cyclades.",
            backLine2: "Wind, islands and breathtaking views.",
          },
          {
            id: 5,
            image: "/images/card-5.jpg",
            kicker: "Feel like",
            frontTitle: "Secret spots?",
            backLine1: "Find the right spot.",
            backLine2: "Hidden coves and ideal winds.",
          },
          {
            id: 6,
            image: "/images/card-6.jpg",
            kicker: "Feel like",
            frontTitle: "Local life?",
            backLine1: "Taste the real Greece.",
            backLine2: "Tavernas, villages and authentic encounters.",
          },
        ]
      : [
          {
            id: 1,
            image: "/images/card-1.jpg",
            kicker: "Envie de",
            frontTitle: "Coaching Kite ?",
            backLine1: "Progressez avec votre coach dédié.",
            backLine2: "Des sessions adaptées à votre niveau.",
          },
          {
            id: 2,
            image: "/images/card-2.jpg",
            kicker: "Envie de",
            frontTitle: "Coaching Wing ?",
            backLine1: "Initiez-vous ou perfectionnez le wingfoil.",
            backLine2: "Un coach expérimenté à vos côtés.",
          },
          {
            id: 3,
            image: "/images/card-3.jpg",
            kicker: "Envie de",
            frontTitle: "Partir en couple ?",
            backLine1: "Une croisière pour deux.",
            backLine2: "Des moments intimes sur l'eau.",
          },
          {
            id: 4,
            image: "/images/card-4.jpg",
            kicker: "Envie de",
            frontTitle: "Naviguer en Grèce ?",
            backLine1: "Cap sur les Cyclades.",
            backLine2: "Vent, îles et paysages à couper le souffle.",
          },
          {
            id: 5,
            image: "/images/card-5.jpg",
            kicker: "Envie de",
            frontTitle: "Spots secrets ?",
            backLine1: "Trouvez le bon spot.",
            backLine2: "Criques cachées et vents idéaux.",
          },
          {
            id: 6,
            image: "/images/card-6.jpg",
            kicker: "Envie de",
            frontTitle: "Vie locale ?",
            backLine1: "Goûtez à la Grèce vraie.",
            backLine2: "Tavernes, villages et rencontres authentiques.",
          },
        ];

  const scrollByOneCard = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("[data-fav-card]");
    const gapPx = 16; // matches gap-4
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 290;
    const delta = cardWidth + gapPx;

    const maxLeft = track.scrollWidth - track.clientWidth;
    if (direction === "right" && track.scrollLeft >= maxLeft - 4) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction === "left" && track.scrollLeft <= 4) {
      track.scrollTo({ left: maxLeft, behavior: "smooth" });
      return;
    }

    track.scrollBy({
      left: direction === "left" ? -delta : delta,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="-mt-4 sm:-mt-6 lg:-mt-8">
      {/* <Title
        title1={title}
        title2={subtitle}
        description={description}
        title2ClassName="font-poppins text-[#55BAC6] text-xl sm:text-2xl lg:text-3xl"
        containerPaddingClassName="pt-0 pb-4 px-4 sm:pt-0 sm:pb-5 sm:px-6 lg:pt-0 lg:pb-6 lg:px-10"
      /> */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1200px] px-4">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={() => scrollByOneCard("left")}
              className={`flex cursor-pointer z-20 p-2 ${arrowColor} hover:text-[#55BAC6] transition-colors items-center h-full mr-2 sm:mr-4`}
              aria-label="Previous"
            >
              <ArrowLongLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="relative w-full overflow-hidden">
              <div
                ref={trackRef}
                className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-2"
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    data-fav-card
                    className="flex-shrink-0 snap-start"
                  >
                    <FavoriteFlipCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollByOneCard("right")}
              className={`flex cursor-pointer z-20 p-2 ${arrowColor} hover:text-[#55BAC6] transition-colors items-center h-full ml-2 sm:ml-4`}
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
