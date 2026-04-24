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

export default function HomePageEs() {
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
                  Un crucero deportivo donde cada día cuenta
                </h2>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-relaxed">
                  Este crucero no es solo un paseo en barco. Es una experiencia
                  inmersiva dedicada a los deportes de tabla: kitesurf, wingfoil
                  y exploración de los spots más bonitos accesibles únicamente
                  por mar.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-black">
                    Cada día está pensado para navegar.
                  </span>{" "}
                  Gracias a la movilidad del catamarán, nos desplazamos
                  constantemente hacia las zonas con más viento y las mejores
                  orientaciones. El objetivo es simple: maximizar el tiempo en
                  el agua.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-relaxed">
                  Y como nos encanta la tabla en todas sus formas, también hay
                  un e-foil a bordo para descubrir la sensación única de volar
                  sobre el agua incluso cuando el viento se toma un descanso.
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
