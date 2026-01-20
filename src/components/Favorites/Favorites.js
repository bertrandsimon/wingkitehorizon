"use client";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useRef } from "react";
import Title from "@/components/Title/Title";
import { useTheme } from "@/contexts/ThemeContext";

function FavoriteFlipCard({ item }) {
  return (
    <div className="w-[290px] h-[290px] perspective-1000 group">
      <div className="relative w-full h-full cursor-pointer preserve-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[250px] bg-white/10 backdrop-blur-md border-t border-white/20 rounded-xl flex items-start justify-start px-3 py-2">
            <div className="flex flex-col">
              <p className="text-white text-xs font-medium">Envie de</p>
              <p className="text-white text-base font-bold">
                {item.frontTitle}
              </p>
            </div>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-[#55BAC6] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center px-6">
            <p className="text-white text-sm font-medium">{item.backKicker}</p>
            <p className="text-white text-xl font-bold">{item.backTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Favorites({
  title = "nos destinations",
  subtitle = "coups de coeur",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  const { theme } = useTheme();
  const arrowColor = theme === "light" ? "text-black" : "text-white";
  const trackRef = useRef(null);

  const items = [
    {
      id: 1,
      image: "/images/favorite-1.jpg",
      frontTitle: "Coaching Kite ?",
      backKicker: "Découvrez",
      backTitle: "Coaching Kite",
    },
    {
      id: 2,
      image: "/images/favorite-2.jpg",
      frontTitle: "Coaching Wing ?",
      backKicker: "Explorez",
      backTitle: "Coaching Wing",
    },
    {
      id: 3,
      image: "/images/favorite-3.jpg",
      frontTitle: "Partir en couple ?",
      backKicker: "Vivez",
      backTitle: "Partir en couple",
    },
    {
      id: 4,
      image: "/images/catamaran.jpg",
      frontTitle: "Naviguer en Grèce ?",
      backKicker: "Cap sur",
      backTitle: "Les Cyclades",
    },
    {
      id: 5,
      image: "/images/thematic-2.jpg",
      frontTitle: "Spots secrets ?",
      backKicker: "Trouvez",
      backTitle: "Le bon spot",
    },
    {
      id: 6,
      image: "/images/thematic-4.jpg",
      frontTitle: "Vie locale ?",
      backKicker: "Goûtez",
      backTitle: "La Grèce vraie",
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
    <>
      <Title
        title1={title}
        title2={subtitle}
        description={description}
        title2ClassName="font-poppins text-[#55BAC6] text-xl sm:text-2xl lg:text-3xl"
      />
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1200px] px-4">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={() => scrollByOneCard("left")}
              className={`flex cursor-pointer z-20 p-2 ${arrowColor} hover:text-[#df986c] transition-colors items-center h-full mr-2 sm:mr-4`}
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
              className={`flex cursor-pointer z-20 p-2 ${arrowColor} hover:text-[#df986c] transition-colors items-center h-full ml-2 sm:ml-4`}
              aria-label="Next"
            >
              <ArrowLongRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
