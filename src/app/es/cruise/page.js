import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.es.cruise,
  path: "/es/cruise",
  locale: "es",
});

function Section({ title, children }) {
  return (
    <section className="mt-8 sm:mt-10">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
          <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
            {title}
          </h2>
          <div className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
      {items.map((item) => (
        <li
          key={item}
          className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CruiseEsPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="El crucero"
            subtitle="Una estancia de kite inolvidable en Paros (Cícladas): navegación, coaching, progresión y exploración."
            imageSrc="/images/trip.jpg"
            imageAlt="Crucero Wing Kite Horizon"
          />

          <Section title="Estancia de kite en Paros (Cícladas)">
            <p>
              Vive una estancia de kite inolvidable en Paros, en el corazón de
              las Cícladas. Con viento térmico regular, agua turquesa y spots
              variados, Paros es uno de los mejores destinos para un kite trip
              en Grecia.
            </p>
            <p className="mt-4">
              Con Wing Kite Horizon, disfruta de una experiencia única: un kite
              trip en barco que combina navegación, coaching, progresión y
              exploración.
            </p>
          </Section>

          <Section title="Por qué elegir Paros para una estancia de kite">
            <p>Paros es conocida por:</p>
            <BulletList
              items={[
                "Viento térmico fiable (Meltemi)",
                "Condiciones ideales para todos los niveles",
                "Spots variados: agua plana, freeride, olas",
                "Agua cálida y cristalina",
                "Ambiente griego auténtico",
              ]}
            />
            <p className="mt-4">
              Perfecto para un stage, un viaje entre amigos o una semana de
              progresión.
            </p>
          </Section>

          <Section title="Un kite trip en barco único">
            <p>Nuestro concepto se basa en movilidad y confort:</p>
            <BulletList
              items={[
                "Acceso a los mejores spots de kite en Paros y alrededores",
                "Navegación según las condiciones meteorológicas",
                "Cero complicaciones logísticas",
                "Una experiencia inmersiva en el mar",
              ]}
            />
            <p className="mt-4">
              Exploración de los rincones más bonitos de las Cícladas.
            </p>
          </Section>

          <Section title="Coaching y progresión en kitesurf">
            <p>Mejora rápidamente tu nivel gracias a:</p>
            <BulletList
              items={[
                "Sesiones diarias guiadas",
                "Coaching personalizado",
                "Análisis de vídeo",
                "Consejos técnicos adaptados a tu nivel",
              ]}
            />
            <p className="mt-4">Ideal para progresar en:</p>
            <BulletList
              items={[
                "navegación",
                "transiciones",
                "saltos",
                "strapless / olas",
              ]}
            />
          </Section>

          <Section title="Programa (semana tipo en Paros)">
            <h3 className="text-black font-semibold">
              Día 1 – Llegada a Paros
            </h3>
            <BulletList
              items={[
                "Check-in a las 17:30 en Parikia",
                "Bienvenida a bordo + briefing",
                "Encuentro con el grupo",
              ]}
            />
            <p className="mt-3">Noche en Parikia</p>
            <p className="mt-1">Regreso al barco hacia las 22:00</p>

            <h3 className="mt-6 text-black font-semibold">
              Día tipo (Día 2 a Día 6)
            </h3>
            <div className="mt-3 grid gap-5 sm:grid-cols-3">
              <div className="rounded-[10px] bg-white/70 p-4 border border-black/5">
                <p className="font-semibold text-black">Mañana</p>
                <BulletList
                  items={["Spot del día", "Brunch a bordo", "Sesión de kite"]}
                />
              </div>
              <div className="rounded-[10px] bg-white/70 p-4 border border-black/5">
                <p className="font-semibold text-black">Tarde</p>
                <BulletList
                  items={[
                    "Segunda sesión o tiempo libre",
                    "Relax, baño, chill",
                  ]}
                />
              </div>
              <div className="rounded-[10px] bg-white/70 p-4 border border-black/5">
                <p className="font-semibold text-black">
                  Final del día y noche
                </p>
                <BulletList
                  items={[
                    "Aperitivo al atardecer",
                    "Debrief + coaching en vídeo",
                    "Descubrir un nuevo pueblo",
                    "Restaurantes locales (opcional)",
                  ]}
                />
              </div>
            </div>
            <p className="mt-4">
              Navegamos entre diferentes spots según las condiciones.
            </p>

            <h3 className="mt-6 text-black font-semibold">
              Día 7 – Último ride y noche
            </h3>
            <BulletList
              items={[
                "Últimas sesiones de kite",
                "Balance de progresión",
                "Noche en Naoussa",
              ]}
            />

            <h3 className="mt-6 text-black font-semibold">Día 8 – Salida</h3>
            <p className="mt-2">Check-out a las 09:00 en Parikia</p>
          </Section>

          <Section title="Una experiencia completa: deporte, viaje y relax">
            <p>Esta estancia combina:</p>
            <BulletList
              items={[
                "Kite intensivo",
                "Momentos únicos (atardeceres, navegación…)",
                "Descubrimiento de la gastronomía griega",
                "Exploración de la isla",
              ]}
            />
            <p className="mt-4">
              Más que un stage: una experiencia de kite inmersiva.
            </p>
          </Section>

          <div className="mt-10 sm:mt-12 flex justify-center">
            <BookNowButton />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
