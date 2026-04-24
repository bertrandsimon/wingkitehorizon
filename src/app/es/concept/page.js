import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.es.concept,
  path: "/es/concept",
  locale: "es",
});

export default function ConceptEsPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="El concepto"
            subtitle="Un crucero con coaching de kitesurf y wingfoil en Grecia: viento, islas y progresión a tu ritmo."
            imageSrc="/images/concept.jpg"
            imageAlt="Concepto Wing Kite Horizon"
          />

          <section className="mt-8 sm:mt-10">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Un crucero deportivo donde cada día cuenta
                </h2>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Este crucero no es solo un paseo en barco. Es una experiencia
                  inmersiva dedicada a los deportes de tabla: kitesurf, wingfoil
                  y exploración de los spots más bonitos accesibles únicamente
                  por mar.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-black">
                    Cada día está pensado para navegar.
                  </span>{" "}
                  Gracias a la movilidad del catamarán, nos desplazamos
                  constantemente hacia las zonas con más viento y las mejores
                  orientaciones. El objetivo es simple: maximizar el tiempo en
                  el agua.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Los días se organizan en torno a:
                </p>

                <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                  {[
                    "Navegación hacia nuevos spots",
                    "Sesiones de kitesurf o wingfoil con coaching",
                    "Consejos personalizados",
                    "Tiempo de recuperación en fondeos paradisíacos",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Y como nos encanta la tabla en todas sus formas, también hay
                  un e-foil a bordo para descubrir la sensación única de volar
                  sobre el agua incluso cuando el viento se toma un descanso.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Con poco o con mucho viento, siempre habrá algo que hacer en
                  el agua.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Y por supuesto, quienes no practican también son bienvenidos a
                  bordo. El crucero es una oportunidad para relajarse en el
                  catamarán, bañarse en aguas cristalinas, explorar calas
                  salvajes o simplemente disfrutar de paisajes increíbles
                  accesibles solo por mar.
                </p>

                <div className="mt-5 rounded-[10px] bg-white/70 p-4 border border-black/5">
                  <p className="text-black/90 font-poppins text-sm sm:text-base leading-relaxed">
                    <span className="font-semibold">La idea es simple:</span>{" "}
                    vivir, navegar y progresar cada día en un entorno
                    excepcional… o simplemente saborear la aventura y la magia
                    de los lugares.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                <div className="lg:col-span-6 lg:order-2">
                  <div className="rounded-[10px] overflow-hidden bg-black/5">
                    <Image
                      src="/images/boat.jpg"
                      alt="Barco Wing Kite Horizon"
                      width={676}
                      height={721}
                      className="w-full h-auto object-contain"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Vida a bordo
                  </h2>
                  <p className="mt-3 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                    Vives una semana (o más) en un catamarán cómodo, muy cerca
                    de los spots y de las calas más bonitas.
                  </p>
                  <p className="mt-3 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                    Cada día está diseñado para aprovechar el viento, explorar y
                    navegar en las mejores condiciones posibles.
                  </p>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    <li className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Vida a bordo agradable, grupos pequeños
                    </li>
                    <li className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Navegación entre islas y fondeos
                    </li>
                    <li className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Ritmo adaptado al tiempo y a tu nivel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <InternalSplitSection
            title="Spots, viento y elección de sesiones"
            imageSrc="/images/slider2.jpg"
            imageAlt="Navegación en Grecia"
            imageSide="left"
            paragraphs={[
              "Elegimos el spot del día según las condiciones: dirección, intensidad del viento, seguridad y afluencia.",
              "El objetivo es simple: maximizar tu tiempo en el agua y ofrecer sesiones de calidad, seas principiante o avanzado.",
            ]}
            bullets={[
              "Briefing antes de cada sesión",
              "Seguridad y posicionamiento en el agua",
              "Consejos de material personalizados",
            ]}
          />

          <InternalSplitSection
            title="El espíritu Wing Kite Horizon"
            imageSrc="/images/esprit.jpg"
            imageAlt="Espíritu Wing Kite Horizon"
            imageSide="right"
            paragraphs={[
              "Una mezcla de viaje y coaching: progresas, exploras y disfrutas de una verdadera escapada en el mar.",
              "Con un enfoque simple: diversión, progreso y buen ambiente.",
            ]}
            bullets={[
              "Coaching accesible y eficaz",
              "Ambiente relajado, espíritu de equipo",
              "Experiencia premium sin complicaciones",
            ]}
          />

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  <div className="lg:col-span-4">
                    <div className="relative w-full aspect-[4/5] rounded-[12px] overflow-hidden bg-black/5">
                      <Image
                        src="/images/taverne.jpg"
                        alt="Tabernas griegas"
                        fill
                        sizes="(max-width: 1024px) 100vw, 360px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                      Brunch y tabernas griegas
                    </h2>

                    <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Porque un gran día en el mar también empieza alrededor de
                      la mesa, el brunch está incluido a bordo durante todo el
                      crucero. Cada mañana (o después de la primera sesión), se
                      comparte un brunch generoso frente al mar: fruta fresca,
                      especialidades locales, café, zumos… el combustible
                      perfecto antes de volver al agua.
                    </p>

                    <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Y para descubrir el alma de las islas griegas, también se
                      propone una salida diaria a una taberna. Estos
                      restaurantes tradicionales, a menudo situados en pequeños
                      puertos o pueblos auténticos, son la ocasión de probar la
                      cocina local: pescado a la parrilla, mezze, ensaladas
                      griegas, platos típicos y un ambiente cálido.
                    </p>

                    <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Entre sesiones, paisajes increíbles y el placer de la
                      mesa, cada día combina deporte, descubrimiento y estilo de
                      vida mediterráneo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 sm:mt-12 flex justify-center">
            <BookNowButton />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
