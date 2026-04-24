"use client";

import Banner from "@/components/Banner/Banner";
import BoatZone from "@/components/BoatZone/BoatZone";
import Editorial from "@/components/Editorial/Editorial";
import Favorites from "@/components/Favorites/Favorites";
import Footer from "@/components/Footer/Footer";
import TopToolbar from "@/components/Header/TopToolbar";
import HeroSection from "@/components/Hero/HeroSection";
import PhotoNav from "@/components/PhotoNav/PhotoNav";
import Presentation from "@/components/Presentation/Presentation";

export default function HomePage() {
  return (
    <div className="pt-2 px-2 sm:px-4 bg-[#EFEEF1]">
      <div className="flex justify-center items-center py-4 sm:py-8" />
      <TopToolbar />
      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <HeroSection />
          <section className="mt-8 sm:mt-10">
            <div className="w-full max-w-[1200px] mx-auto px-4">
              <div className="p-1 sm:p-2">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Une croisière sportive où chaque journée compte
                </h2>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-relaxed">
                  Cette croisière n'est pas une simple balade en mer. C'est une
                  expérience immersive dédiée aux sports de glisse : kitesurf,
                  wingfoil et exploration des plus beaux spots accessibles
                  uniquement en bateau.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-black">
                    Chaque journée est optimisée pour naviguer.
                  </span>{" "}
                  Grâce à la mobilité du catamaran, nous nous déplaçons en
                  permanence vers les zones les plus ventées et les meilleures
                  orientations de vent. L'objectif est simple : maximiser le
                  temps sur l'eau.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-relaxed">
                  Et parce qu'on aime la glisse sous toutes ses formes, un
                  e-foil est également disponible à bord pour découvrir les
                  sensations uniques du vol électrique au-dessus de l'eau, même
                  quand le vent se fait attendre.
                </p>
              </div>
            </div>
          </section>
          <div className="relative z-[10]">
            <Presentation />
          </div>
          <div className="relative z-[0] mt-4 lg:mt-0 lg:-mt-24">
            <BoatZone />
          </div>
          <Banner />
          <PhotoNav />
          <Favorites />
          <Editorial />
        </div>
        <Footer />
      </div>
    </div>
  );
}
