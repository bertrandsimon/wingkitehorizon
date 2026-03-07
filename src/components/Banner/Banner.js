"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n";

export default function Banner() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const [mapOpen, setMapOpen] = useState(false);

  const portalTarget = useMemo(() => {
    if (typeof document === "undefined") return null;
    return document.body;
  }, []);

  useEffect(() => {
    if (!mapOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMapOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mapOpen]);

  const textFR =
    "Les navigations quotidiennes sont organisées selon le vent, la météo et le niveau du groupe, avec choix entre apprentissage, freeride ou exploration des baies. Îles possibles : Antiparos, Naxos, Ios, Koufonisi, Schinousa (itinéraire variable). Repas à bord ou en tavernes locales. Temps libre : repos, baignade, visites ou révision technique avec le coach.";

  const textEN =
    "Daily sails are planned according to the wind, weather conditions and the group's level, with options ranging from learning and coaching to freeride or simply exploring bays. Possible islands around Paros: Antiparos, Naxos, Ios, Koufonisi, Schinousa (the exact route varies with the wind). Meals are enjoyed on board or in small local tavernas when the route allows. The rest of the time is yours: relaxing on deck, swimming, visiting islands, or debriefing with the coach to optimize the next session.";

  return (
    <>
    <section className="relative w-full min-h-[650px] sm:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner/banner-boat.png"
          alt="Catamaran sailing"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Grid - Right Side */}
      <div className="relative h-full min-h-[650px] sm:min-h-0 max-w-[1260px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-0 lg:h-full items-start lg:items-center">
          {/* Left column - empty for image focus */}
          <div className="hidden lg:block" />

          {/* Right column - Content */}
          <div className="flex flex-col items-start lg:items-end gap-6 py-8 pb-10 sm:pb-8 lg:py-16">
            <div className="w-full max-w-[593px]">
              {/* Title (aligned with glass block left edge) */}
              <div className="text-left">
                <p className="text-3xl sm:text-5xl font-semibold text-white leading-tight font-poppins">
                  {locale === "en" ? "A new spot" : "Un nouveau spot"}
                </p>
                <p className="text-4xl sm:text-6xl font-semibold text-[#102F77] leading-tight font-poppins">
                  {locale === "en" ? "every day?" : "chaque jour ?"}
                </p>
              </div>

              {/* Glass (match flipcards style) */}
              <div className="mt-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border-t border-white/20">
                <p className="text-black text-sm leading-relaxed font-poppins font-light">
                  {locale === "en" ? textEN : textFR}
                </p>
                <button
                  type="button"
                  onClick={() => setMapOpen(true)}
                  className="mt-4 inline-flex items-center gap-3 rounded-lg bg-[#ea580c] hover:bg-[#c2410b] px-4 py-2 text-white font-poppins font-medium text-sm shadow-sm transition-colors cursor-pointer"
                >
                  <span className="relative w-10 h-10 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src="/images/cruise.jpg"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </span>
                  {locale === "en" ? "View map" : "Voir la carte"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {mapOpen &&
        portalTarget &&
        createPortal(
          <div className="fixed inset-0 z-[999]">
            <button
              type="button"
              aria-label={locale === "en" ? "Close map" : "Fermer la carte"}
              className="absolute inset-0 bg-black/60"
              onClick={() => setMapOpen(false)}
            />
            <div className="absolute inset-4 sm:inset-8 lg:inset-16 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-w-4xl max-h-[80vh] rounded-xl overflow-hidden bg-white shadow-2xl">
                <button
                  type="button"
                  onClick={() => setMapOpen(false)}
                  className="absolute top-3 right-3 z-10 rounded-full w-10 h-10 flex items-center justify-center bg-white/90 text-gray-700 hover:bg-white shadow-lg"
                  aria-label={locale === "en" ? "Close" : "Fermer"}
                >
                  <span className="text-xl leading-none">×</span>
                </button>
                <div className="absolute top-3 left-3 z-10 bg-white/90 rounded-lg px-3 py-2 font-poppins text-sm text-gray-700 shadow">
                  {locale === "en"
                    ? "Paros & nearby islands (Antiparos, Naxos, Ios, Koufonisi, Schinousa)"
                    : "Paros et îles proches (Antiparos, Naxos, Ios, Koufonisi, Schinousa)"}
                </div>
                <Image
                  src="/images/cruise.jpg"
                  alt={locale === "en" ? "Cyclades cruise map" : "Carte croisière Cyclades"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>
            </div>
          </div>,
          portalTarget,
        )}
    </>
  );
}
