import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.en["destination-martinique"],
  path: "/en/destinations/martinique",
  locale: "en",
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

export default function DestinationMartiniqueEnPage() {
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
            title="Martinique & the Grenadines"
            subtitle="From Martinique to the Grenadines by catamaran — 10 days / 9 nights."
            imageSrc="/images/banner/slide-martinique.jpg"
            imageAlt="Destination Martinique and the Grenadines"
          />

          <div className="mt-6 flex justify-center">
            <a
              className="w-full max-w-[220px] whitespace-nowrap inline-flex items-center justify-center rounded-lg bg-[#102F77] px-5 py-3 text-white font-poppins text-sm sm:text-base transition-colors hover:bg-[#ea580c]"
              href="/pdf/MARTINIQUE-Brochure-WingKiteHorizon.pdf"
              download
            >
              Brochure (PDF)
            </a>
          </div>

          <Section title="Dates">
            <p className="font-semibold">
              January 09, 2027 to January 20, 2027
            </p>
          </Section>

          <Section title="Gallery">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {gallery.map((src, idx) => (
                <div
                  key={src}
                  className="relative w-full h-[220px] sm:h-[240px] rounded-[12px] overflow-hidden ring-1 ring-black/5 bg-white"
                >
                  <Image
                    src={src}
                    alt={`Martinique ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section title="From Martinique to the Grenadines (catamaran)">
            <p className="font-semibold">Turquoise water in the Grenadines</p>
            <p className="mt-3">
              A sea itinerary departing from Fort-de-France with sailing,
              anchorages, lagoons, villages and exploration of the most
              beautiful Caribbean spots (Saint Lucia, Saint Vincent and the
              Grenadines).
            </p>
          </Section>

          <Section title="Day-by-day itinerary">
            <Day
              title="Day 1 — Fort-de-France → Le Marin → Sainte-Anne (Martinique)"
              meta="Distance: 3 nm · Sailing time: 1h"
            >
              <p>
                Depending on your flight schedule, welcome at Fort-de-France
                airport with our driver. Transfer to Le Marin marina, the
                island’s largest yachting harbor. At 5 pm, meet the group and
                crew and settle on board the catamaran. Depart and anchor in the
                protected bay of Sainte-Anne.
              </p>
              <p className="mt-3">
                First on-board evening, first swim possible. Dinner and night on
                board.
              </p>
            </Day>

            <Day
              title="Day 2 — Sainte-Anne → Soufrière (Saint Lucia)"
              meta="Distance: 40 nm · Sailing time: 6h30"
            >
              <p>
                Breakfast. Sail across the Saint Lucia channel. Possible dolphin
                sightings and sometimes whales. Lunch while sailing, sheltered
                along Saint Lucia’s coast.
              </p>
              <p className="mt-3">
                Arrival in Soufrière bay: mooring near the two volcanic Pitons.
                Optional snorkeling. Dinner and night on board.
              </p>
            </Day>

            <Day
              title="Day 3 — Soufrière → Bequia (Grenadines)"
              meta="Distance: 50 nm · Sailing time: 8h"
            >
              <p>
                Breakfast. Head to Bequia, the northernmost island of the
                Grenadines. Sail the Saint Vincent channel, known for rich
                fishing grounds (trolling possible). Lunch under the lee of
                Saint Vincent.
              </p>
              <p className="mt-3">
                Arrival in Bequia, walk in Port Elizabeth. Dinner on your own.
                Night on board.
              </p>
            </Day>

            <Day
              title="Day 4 — Bequia → Mayreau"
              meta="Distance: 24 nm · Sailing time: 3h30"
            >
              <p>
                Breakfast. Sail to Mayreau and Salt Whistle Bay. Lunch at anchor
                on board, free afternoon.
              </p>
              <p className="mt-3">
                Land and walk to Old Wall village for a stunning view over
                Tobago Cays. Back on board, dinner and night.
              </p>
            </Day>

            <Day
              title="Day 5 — Mayreau → Tobago Cays"
              meta="Distance: 3 nm · Sailing time: 1h"
            >
              <p>
                Breakfast. Anchor inside the Tobago Cays natural reserve.
                Snorkel on the reef, lunch on board. Walks, turtles and iguanas,
                quiet beaches.
              </p>
              <p className="mt-3">
                Evening: traditional beach BBQ. Lobster on the menu. Festive
                dinner, night on board.
              </p>
            </Day>

            <Day
              title="Day 6 — Tobago Cays → Morpion Islet → Chatham Bay (Union)"
              meta="Distance: 6 + 6 nm · Sailing time: 1h + 1h"
            >
              <p>
                Breakfast. Sail to Morpion, a tiny sand islet. Lunch at anchor
                then sail to Chatham Bay (Union).
              </p>
              <p className="mt-3">
                Chatham Bay: white-sand beach, green hills, snorkeling. Dinner
                on your own, night on board.
              </p>
            </Day>

            <Day
              title="Day 7 — Chatham Bay → Wallilabou Bay (Saint Vincent)"
              meta="Distance: 41 nm · Sailing time: 6h30"
            >
              <p>
                Breakfast. Sail to Saint Vincent. Lunch while sailing, sheltered
                along the coast. Arrive at Wallilabou Bay, a Pirates of the
                Caribbean filming location.
              </p>
              <p className="mt-3">
                Optional inland walk (Wallilabou Heritage Park) and swim in a
                natural pool by a waterfall. Dinner and night on board.
              </p>
            </Day>

            <Day
              title="Day 8 — Wallilabou Bay → Anse Cochon (Saint Lucia)"
              meta="Distance: 44 nm · Sailing time: 7h"
            >
              <p>
                Breakfast. Head back to Saint Lucia and Anse Cochon. Lunch while
                sailing along the leeward coast. Pass by the Pitons.
              </p>
              <p className="mt-3">
                Afternoon anchorage: free time for swimming, snorkeling or
                relaxing. Dinner and night on board.
              </p>
            </Day>

            <Day
              title="Day 9 — Anse Cochon → Les Salines (Martinique)"
              meta="Distance: 31 nm · Sailing time: 5h"
            >
              <p>
                Breakfast. Sail to Les Salines and anchor off the main beach.
                Lunch then free time: swimming, beach walk, Savane des
                Pétrifications (optional walk).
              </p>
              <p className="mt-3">
                Farewell festive dinner and night on board.
              </p>
            </Day>

            <Day
              title="Day 10 — Les Salines → Le Marin → Fort-de-France"
              meta="Distance: 3 nm · Sailing time: 1h"
            >
              <p>
                Breakfast. Final sail to Le Marin marina. Disembark and say
                goodbye to the crew. Late morning transfer to Fort-de-France
                airport.
              </p>
            </Day>
          </Section>

          <Section title="Reserve your cabin">
            <BulletList
              items={[
                "Solo or as a couple: enjoy the catamaran’s shared spaces with other travelers and the crew.",
                "Comfort on board: skipper/captain and host/first mate on board.",
                "Meals and drinks included.",
                "Single-occupancy cabin supplement: €1,195.",
                "On request: we can try to match you with another traveler at no extra cost.",
              ]}
            />
            <p className="mt-4 font-semibold">Build your group</p>
            <BulletList
              items={[
                "From 2 to 8 travelers",
                "Form your group",
                "Choose your departure date",
                "Select your package",
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
