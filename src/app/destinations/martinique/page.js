import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.fr["destination-martinique"],
  path: "/destinations/martinique",
  locale: "fr",
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

export default function DestinationMartiniquePage() {
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
            title="Martinique & Grenadines"
            subtitle="De la Martinique aux Grenadines en catamaran — 10 jours / 9 nuits."
            imageSrc="/images/banner/slide-martinique.jpg"
            imageAlt="Destination Martinique et Grenadines"
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
              Du 09 janvier 2027 au 20 janvier 2027
            </p>
          </Section>

          <Section title="Galerie">
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

          <Section title="De la Martinique aux Grenadines (catamaran)">
            <p className="font-semibold">Eau turquoise des Grenadines</p>
            <p className="mt-3">
              Un itinéraire en mer au départ de Fort-de-France, avec navigation,
              mouillages, lagons, villages et exploration des plus beaux spots
              des Caraïbes (Sainte-Lucie, Saint-Vincent et les Grenadines).
            </p>
          </Section>

          <Section title="Programme jour par jour">
            <Day
              title="Jour 1 — Fort-de-France → Le Marin → Sainte-Anne (Martinique)"
              meta="Distance : 3 milles · Durée : 1 h de navigation"
            >
              <p>
                Selon votre horaire de vol, accueil à l'aéroport de
                Fort-de-France avec notre chauffeur. Transfert vers la marina du
                Marin, le plus grand port de plaisance de l’île. À 17 h,
                rencontre entre voyageurs et équipage et installation à bord du
                catamaran. Départ et mouillage dans la baie protégée de
                Sainte-Anne.
              </p>
              <p className="mt-3">
                Première expérience de vie à bord, première baignade possible.
                Dîner et nuit à bord.
              </p>
            </Day>

            <Day
              title="Jour 2 — Sainte-Anne → Soufrière (Sainte-Lucie)"
              meta="Distance : 40 milles · Durée : 6 h 30 de navigation"
            >
              <p>
                Petit-déjeuner. Traversée du canal de Sainte-Lucie à la voile.
                Possibilité d’observer des dauphins et parfois des baleines.
                Déjeuner en cours de navigation, lorsque nous sommes abrités par
                la côte de Sainte-Lucie.
              </p>
              <p className="mt-3">
                Arrivée dans la baie de Soufrière : mouillage au pied des deux
                pitons volcaniques. Possibilité de snorkeling
                (palmes/masque/tuba). Dîner et nuit à bord.
              </p>
            </Day>

            <Day
              title="Jour 3 — Soufrière → Béquia (Grenadines)"
              meta="Distance : 50 milles · Durée : 8 h de navigation"
            >
              <p>
                Petit-déjeuner. Cap sur Béquia (prononcé « Békoué »), la plus au
                nord des Grenadines. Traversée du canal de Saint-Vincent, eaux
                poissonneuses : pêche à la traîne possible. Déjeuner sous le
                vent de Saint-Vincent.
              </p>
              <p className="mt-3">
                Arrivée à Béquia, promenade à Port Elizabeth. Souper libre.
                Retour et nuit à bord.
              </p>
            </Day>

            <Day
              title="Jour 4 — Béquia → Mayreau"
              meta="Distance : 24 milles · Durée : 3 h 30 de navigation"
            >
              <p>
                Petit-déjeuner. Navigation vers Mayreau et la baie de Salt
                Whistle. Déjeuner au mouillage à bord, après-midi libre.
              </p>
              <p className="mt-3">
                Débarquement puis marche jusqu’au village d’Old Wall, vue
                superbe sur les Tobago Cays. Retour, souper et nuit à bord.
              </p>
            </Day>

            <Day
              title="Jour 5 — Mayreau → Tobago Cays"
              meta="Distance : 3 milles · Durée : 1 h 00 de navigation"
            >
              <p>
                Petit-déjeuner. Mouillage dans la réserve naturelle des Tobago
                Cays. Snorkeling sur la barrière de corail, dîner à bord.
                Balade, observation des tortues et iguanes, plage peu
                fréquentée.
              </p>
              <p className="mt-3">
                En fin de journée : BBQ traditionnel sur la plage. Langouste au
                menu. Souper festif puis nuit à bord.
              </p>
            </Day>

            <Day
              title="Jour 6 — Tobago Cays → Îlot Morpion → Chatham Bay (Union)"
              meta="Distance : 6 + 6 milles · Durée : 1 h + 1 h de navigation"
            >
              <p>
                Petit-déjeuner. Cap sur Morpion : îlot de sable désert, moment
                unique. Déjeuner à l’ancre puis navigation vers Chatham Bay
                (Union).
              </p>
              <p className="mt-3">
                Chatham Bay : plage de sable blanc, collines verdoyantes,
                snorkeling. Souper libre et nuit à bord.
              </p>
            </Day>

            <Day
              title="Jour 7 — Chatham Bay → Wallilabou Bay (Saint-Vincent)"
              meta="Distance : 41 milles · Durée : 6 h 30 de navigation"
            >
              <p>
                Petit-déjeuner. Navigation vers Saint-Vincent. Déjeuner en cours
                de navigation, abrités par la côte. Arrivée à Wallilabou Bay,
                lieu de tournage de Pirates des Caraïbes.
              </p>
              <p className="mt-3">
                Possibilité de balade dans l’arrière-pays (Wallilabou Heritage
                Park) et baignade dans une piscine naturelle formée par une
                cascade. Dîner et nuit à bord.
              </p>
            </Day>

            <Day
              title="Jour 8 — Wallilabou Bay → Anse Cochon (Sainte-Lucie)"
              meta="Distance : 44 milles · Durée : 7 h 00 de navigation"
            >
              <p>
                Petit-déjeuner. Cap sur Sainte-Lucie et Anse Cochon. Déjeuner en
                navigation le long de la côte sous le vent. Passage devant les
                Pitons.
              </p>
              <p className="mt-3">
                Mouillage l’après-midi : temps libre baignade, snorkeling,
                détente. Souper et nuit à bord.
              </p>
            </Day>

            <Day
              title="Jour 9 — Anse Cochon → Les Salines (Martinique)"
              meta="Distance : 31 milles · Durée : 5 h 00 de navigation"
            >
              <p>
                Petit-déjeuner. Navigation vers Les Salines, mouillage devant la
                grande plage. Déjeuner puis temps libre : baignade, promenade,
                Savane des Pétrifications (option).
              </p>
              <p className="mt-3">Souper festif d’au revoir et nuit à bord.</p>
            </Day>

            <Day
              title="Jour 10 — Les Salines → Le Marin → Fort-de-France"
              meta="Distance : 3 milles · Durée : 1 h 00 de navigation"
            >
              <p>
                Petit-déjeuner. Dernière navigation vers la marina du Marin.
                Débarquement et dernier au revoir avec l’équipage. En fin de
                matinée, transfert à l'aéroport de Fort-de-France.
              </p>
            </Day>
          </Section>

          <Section title="Réservez votre cabine">
            <BulletList
              items={[
                "Seul(e) ou à deux : profitez des espaces communs du catamaran avec d’autres voyageurs et l’équipage.",
                "Tout confort : présence du capitaine-skipper et de l’hôte(sse)-second(e).",
                "Repas et boissons inclus.",
                "Supplément cabine en occupation simple : 1 195 €.",
                "Sur demande : tentative de jumelage sans supplément.",
              ]}
            />
            <p className="mt-4 font-semibold">Constituez votre groupe</p>
            <BulletList
              items={[
                "De 2 à 8 voyageurs",
                "Constituez votre groupe",
                "Choisissez votre date de départ",
                "Sélectionnez votre formule",
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
