import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.es.coaching,
  path: "/es/coaching",
  locale: "es",
});

export default function CoachingEsPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Coaching"
            subtitle="Del nivel principiante al avanzado: objetivos claros, indicaciones simples y acompañamiento preciso en el agua."
            imageSrc="/images/coaching.jpg"
            imageAlt="Coaching de kitesurf y wingfoil"
          />

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                Coaching en acción
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "/images/coaching-action-1.jpg",
                  "/images/coaching-action-2.jpg",
                  "/images/coaching-action-3.jpg",
                  "/images/coaching-action-4.jpg",
                  "/images/coaching-action-5.jpg",
                  "/images/coaching-action-6.jpg",
                ].map((src, index) => (
                  <div
                    key={src}
                    className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-black/5"
                  >
                    <Image
                      src={src}
                      alt={`Coaching de kitesurf - foto ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <InternalSplitSection
            title="Coaching a medida"
            imageSrc="/images/coach.jpg"
            imageAlt="Coaching en el agua"
            imageSide="right"
            paragraphs={[
              "Partimos de tu nivel real y de tus objetivos: waterstart, jibes, transiciones, ceñida, saltos…",
              "Cada sesión está estructurada: briefing, ejercicios, feedback y ajustes rápidos para desbloquear los puntos clave.",
            ]}
            bullets={[
              "Objetivos claros y progreso medible",
              "Ajustes de material adaptados a ti",
              "Consejos aplicables de inmediato",
            ]}
          />

          <InternalSplitSection
            title="Lectura del spot y seguridad"
            imageSrc="/images/spot.jpg"
            imageAlt="Seguridad y condiciones"
            imageSide="left"
            paragraphs={[
              "La progresión también pasa por entender: meteorología, estado del agua, zonas de riesgo, trayectorias y prioridades.",
              "Ganas autonomía y confianza para navegar mejor y durante más tiempo.",
            ]}
            bullets={[
              "Elección del spot según dirección e intensidad",
              "Posicionamiento, timing y gestión de distancias",
              "Buenos hábitos y reflejos de seguridad",
            ]}
          />

          <InternalSplitSection
            title="El formato ideal en crucero"
            imageSrc="/images/cata.jpg"
            imageAlt="Coaching en crucero"
            imageSide="right"
            paragraphs={[
              "En un crucero se optimiza todo: menos traslados, más flexibilidad y spots variados para progresar más rápido.",
              "Es el mejor contexto para encadenar buenas sesiones, recuperar y volver al agua en el momento adecuado.",
            ]}
            bullets={[
              "Más tiempo en el agua",
              "Condiciones variadas, aprendizaje más rápido",
              "Un ambiente motivador",
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
