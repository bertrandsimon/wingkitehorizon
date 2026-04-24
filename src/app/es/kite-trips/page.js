import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.es["kite-trips"],
  path: "/es/kite-trips",
  locale: "es",
});

export default function KiteTripsEsPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Kite trips"
            subtitle="Viajes pensados para navegar: nos movemos con la meteo, buscamos las mejores sesiones y disfrutamos de las islas."
            imageSrc="/images/kitetrips.jpg"
            imageAlt="Wing Kite Horizon kite trips"
          />

          <InternalSplitSection
            title="Rutas flexibles"
            imageSrc="/images/photonav1.jpg"
            imageAlt="Rutas e islas"
            imageSide="right"
            paragraphs={[
              "El programa se adapta a las condiciones: elegimos la ruta y los fondeos para encontrar viento y el agua más agradable.",
              "Descubres spots accesibles solo por mar, lejos de las playas concurridas.",
            ]}
            bullets={[
              "Organización centrada en navegar",
              "Calas protegidas y fondeos",
              "Exploración diaria",
            ]}
          />

          <InternalSplitSection
            title="Confort y logística a bordo"
            imageSrc="/images/trip.jpg"
            imageAlt="Vida a bordo"
            imageSide="left"
            paragraphs={[
              "Lo simplificamos todo: tú te concentras en navegar, nosotros gestionamos la ruta y la logística.",
              "A bordo tienes espacio para recuperar, preparar las sesiones y disfrutar de los momentos de descanso.",
            ]}
            bullets={[
              "Días equilibrados (navegar / relax / descubrir)",
              "Briefings y consejos de material",
              "Grupo reducido para una mejor experiencia",
            ]}
          />

          <InternalSplitSection
            title="Una experiencia de navegar y viajar"
            imageSrc="/images/restaurant.jpg"
            imageAlt="Experiencia"
            imageSide="right"
            paragraphs={[
              "Es más que un viaje: es una aventura. Sesiones cuando sopla, atardeceres fondeados y la libertad de moverse.",
              "Tanto si vienes a progresar, a disfrutar o a descubrir spots, el formato kite trip es ideal.",
            ]}
            bullets={[
              "Ambiente de viaje, espíritu de equipo",
              "Tiempo en el agua optimizado",
              "Recuerdos inolvidables",
            ]}
          />

          <div className="mt-10 sm:mt-12 flex justify-center">
            <BookNowButton />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
