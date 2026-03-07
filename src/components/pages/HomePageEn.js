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

export default function HomePageEn() {
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
                  A sport cruise where every day counts
                </h2>
                <p className="mt-4 text-black/80 font-poppins text-sm font-normal leading-[192%]">
                  This cruise isn't just a boat trip. It's an immersive
                  experience dedicated to board sports: kitesurfing, wingfoiling
                  and exploring the most beautiful spots only reachable by boat.
                </p>
                <p className="mt-4 text-black/80 font-poppins text-sm font-normal leading-[192%]">
                  <span className="font-semibold text-black">
                    Every day is designed for riding.
                  </span>{" "}
                  Thanks to the catamaran's mobility, we constantly move toward
                  the windiest areas and the best wind angles. The goal is
                  simple: maximize time on the water.
                </p>
                <p className="mt-4 text-black/80 font-poppins text-sm font-normal leading-[192%]">
                  And because we love board sports in every form, an e-foil is
                  also available on board to discover the unique feeling of
                  electric flight above the water, even when the wind takes a
                  break.
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
