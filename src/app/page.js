"use client";

import Banner from "@/components/Banner/Banner";
import BoatZone from "@/components/BoatZone/BoatZone";
import Editorial from "@/components/Editorial/Editorial";
import Favorites from "@/components/Favorites/Favorites";
import Footer from "@/components/Footer/Footer";
import TopToolbar from "@/components/Header/TopToolbar";
import HeroSection from "@/components/Hero/HeroSection";
// import AnimatedNav from "@/components/Navigation/AnimatedNav";
import PhotoNav from "@/components/PhotoNav/PhotoNav";
import Presentation from "@/components/Presentation/Presentation";
import TestimonialCarousel from "@/components/Testimonials/TestimonialCarousel";
import ThematicSection from "@/components/Thematics/ThematicSection";
export default function Home() {
  return (
    <div className="pt-2 px-2 sm:px-4 bg-[#EFEEF1]">
      <div className="flex justify-center items-center py-4 sm:py-8">
        {/* <AnimatedNav /> */}
      </div>
      <TopToolbar />
      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <HeroSection />
          {/* <div className="-mt-20 sm:-mt-40">
            <ThematicSection />
          </div> */}

          <div className="relative z-[10]">
            <Presentation />
          </div>
          <div className="relative z-[0] -mt-24">
            <BoatZone />
          </div>
          <PhotoNav />

          <Favorites />
          <Editorial />
          <Banner />
        </div>
        <Footer />
      </div>
    </div>
  );
}
