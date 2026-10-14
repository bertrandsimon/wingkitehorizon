import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.es["destination-martinique"],
  path: "/es/destinations/martinica",
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
          <div className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
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
          className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Day({ title, children, meta }) {
  return (
    <div className="mt-5 rounded-[12px] bg-white/70 border border-black/5 p-4 sm:p-5">
      <h3 className="text-[#102F77] font-semibold font-poppins">{title}</h3>
      {meta
        ? <p className="mt-1 text-black/70 font-poppins text-xs sm:text-sm leading-relaxed">
            {meta}
          </p>
        : null}
      <div className="mt-3 text-black font-poppins text-sm sm:text-base leading-[1.92]">
        {children}
      </div>
    </div>
  );
}

export default function DestinationMartinicaPage() {
  const gallery = Array.from({ length: 12 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/images/martinique/gallery/martinique-${n}.jpg`;
  });

  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Martinica y las Granadinas"
            subtitle="De Martinica a las Granadinas en catamarán — 10 días / 9 noches."
            imageSrc="/images/banner/slide-martinique.jpg"
            imageAlt="Destino Martinica y Granadinas"
          />

          <div className="mt-6 flex justify-center">
            <a
              className="w-full max-w-[220px] whitespace-nowrap inline-flex items-center justify-center rounded-lg bg-[#102F77] px-5 py-3 text-white font-poppins text-sm sm:text-base transition-colors hover:bg-[#ea580c]"
              href="/pdf/MARTINIQUE-Brochure-WingKiteHorizon.pdf"
              download
            >
              Folleto (PDF)
            </a>
          </div>

          <Section title="Fechas">
            <p className="font-semibold">
              Del 09 de enero de 2027 al 20 de enero de 2027
            </p>
          </Section>

          <Section title="Galería">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {gallery.map((src, idx) => (
                <div
                  key={src}
                  className="relative w-full h-[220px] sm:h-[240px] rounded-[12px] overflow-hidden ring-1 ring-black/5 bg-white"
                >
                  <Image
                    src={src}
                    alt={`Martinica ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section title="De Martinica a las Granadinas (catamarán)">
            <p className="font-semibold">Aguas turquesas en las Granadinas</p>
            <p className="mt-3">
              Un itinerario por mar con salida desde Fort-de-France, combinando
              navegación, fondeos, lagunas, pueblos y exploración de algunos de
              los lugares más bonitos del Caribe (Santa Lucía, San Vicente y las
              Granadinas).
            </p>
          </Section>

          <Section title="Itinerario día a día">
            <Day
              title="Día 1 — Fort-de-France → Le Marin → Sainte-Anne (Martinica)"
              meta="Distancia: 3 millas · Navegación: 1 h"
            >
              <p>
                Según tu horario de vuelo, bienvenida en el aeropuerto de
                Fort-de-France con nuestro conductor. Traslado a la marina de Le
                Marin, el mayor puerto deportivo de la isla. A las 17:00,
                encuentro con el grupo y la tripulación e instalación a bordo
                del catamarán. Salida y fondeo en la bahía protegida de
                Sainte-Anne.
              </p>
              <p className="mt-3">Cena y noche a bordo. Primer baño posible.</p>
            </Day>

            <Day
              title="Día 2 — Sainte-Anne → Soufrière (Santa Lucía)"
              meta="Distancia: 40 millas · Navegación: 6 h 30"
            >
              <p>
                Desayuno. Travesía a vela del canal de Santa Lucía. Posibilidad
                de ver delfines y a veces ballenas. Almuerzo durante la
                navegación, resguardados por la costa.
              </p>
              <p className="mt-3">
                Llegada a la bahía de Soufrière: fondeo al pie de los dos Pitons
                volcánicos. Snorkel opcional. Cena y noche a bordo.
              </p>
            </Day>

            <Day
              title="Día 3 — Soufrière → Bequia (Granadinas)"
              meta="Distancia: 50 millas · Navegación: 8 h"
            >
              <p>
                Desayuno. Rumbo a Bequia, la isla más al norte de las
                Granadinas. Navegación por el canal de San Vicente, zona muy
                rica en pesca (posible pesca al curricán). Almuerzo a sotavento
                de San Vicente.
              </p>
              <p className="mt-3">
                Llegada a Bequia, paseo por Port Elizabeth. Cena libre. Noche a
                bordo.
              </p>
            </Day>

            <Day
              title="Día 4 — Bequia → Mayreau"
              meta="Distancia: 24 millas · Navegación: 3 h 30"
            >
              <p>
                Desayuno. Navegación hacia Mayreau y la bahía de Salt Whistle.
                Almuerzo fondeados a bordo. Tarde libre.
              </p>
              <p className="mt-3">
                Desembarco y caminata hasta Old Wall con vistas a Tobago Cays.
                Regreso, cena y noche a bordo.
              </p>
            </Day>

            <Day
              title="Día 5 — Mayreau → Tobago Cays"
              meta="Distancia: 3 millas · Navegación: 1 h"
            >
              <p>
                Desayuno. Fondeo en la reserva natural de Tobago Cays. Snorkel
                en el arrecife, almuerzo a bordo. Paseos, tortugas e iguanas,
                playas tranquilas.
              </p>
              <p className="mt-3">
                Por la tarde: BBQ tradicional en la playa. Langosta en el menú.
                Cena festiva y noche a bordo.
              </p>
            </Day>

            <Day
              title="Día 6 — Tobago Cays → Islote Morpion → Chatham Bay (Union)"
              meta="Distancia: 6 + 6 millas · Navegación: 1 h + 1 h"
            >
              <p>
                Desayuno. Rumbo a Morpion, un pequeño islote de arena. Almuerzo
                al ancla y después navegación hacia Chatham Bay (Union).
              </p>
              <p className="mt-3">
                Chatham Bay: playa de arena blanca, colinas verdes, snorkel.
                Cena libre y noche a bordo.
              </p>
            </Day>

            <Day
              title="Día 7 — Chatham Bay → Wallilabou Bay (San Vicente)"
              meta="Distancia: 41 millas · Navegación: 6 h 30"
            >
              <p>
                Desayuno. Salida hacia San Vicente. Almuerzo durante la
                navegación, protegidos por la costa. Llegada a Wallilabou Bay,
                conocida por el rodaje de Piratas del Caribe.
              </p>
              <p className="mt-3">
                Posible paseo por el interior (Wallilabou Heritage Park) y baño
                en una piscina natural junto a una cascada. Cena y noche a
                bordo.
              </p>
            </Day>

            <Day
              title="Día 8 — Wallilabou Bay → Anse Cochon (Santa Lucía)"
              meta="Distancia: 44 millas · Navegación: 7 h"
            >
              <p>
                Desayuno. Rumbo a Santa Lucía y Anse Cochon. Almuerzo en
                navegación por la costa a sotavento. Paso frente a los Pitons.
              </p>
              <p className="mt-3">
                Fondeo por la tarde: tiempo libre para bañarse, hacer snorkel o
                relajarse. Cena y noche a bordo.
              </p>
            </Day>

            <Day
              title="Día 9 — Anse Cochon → Les Salines (Martinica)"
              meta="Distancia: 31 millas · Navegación: 5 h"
            >
              <p>
                Desayuno. Navegación hacia Les Salines y fondeo frente a la gran
                playa. Almuerzo y tiempo libre: baño, paseo por la playa, Savane
                des Pétrifications (opcional).
              </p>
              <p className="mt-3">Cena de despedida y noche a bordo.</p>
            </Day>

            <Day
              title="Día 10 — Les Salines → Le Marin → Fort-de-France"
              meta="Distancia: 3 millas · Navegación: 1 h"
            >
              <p>
                Desayuno. Última navegación hasta la marina de Le Marin.
                Desembarco y despedida de la tripulación. Traslado al aeropuerto
                de Fort-de-France a última hora de la mañana.
              </p>
            </Day>
          </Section>

          <Section title="Reserva tu camarote">
            <BulletList
              items={[
                "Solo o en pareja: disfruta de las zonas comunes del catamarán con otros viajeros y la tripulación.",
                "Todo confort: capitán-skipper y anfitrión/a-segundo/a a bordo.",
                "Comidas y bebidas incluidas.",
                "Suplemento camarote en ocupación individual: 1.195 €.",
                "Bajo petición: intentamos emparejarte sin suplemento.",
              ]}
            />
            <p className="mt-4 font-semibold">Forma tu grupo</p>
            <BulletList
              items={[
                "De 2 a 8 viajeros",
                "Forma tu grupo",
                "Elige tu fecha de salida",
                "Selecciona tu fórmula",
              ]}
            />
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
