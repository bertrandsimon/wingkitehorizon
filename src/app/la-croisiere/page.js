import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.fr["la-croisiere"],
  path: "/la-croisiere",
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

export default function LaCroisierePage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="La croisière"
            subtitle="Vivez un séjour kite à Paros inoubliable au cœur des Cyclades : navigation, coaching, progression et exploration."
            imageSrc="/images/trip.jpg"
            imageAlt="La croisière Wing Kite Horizon"
          />

          <Section title="Séjour kite à Paros (Cyclades)">
            <p>
              Vivez un séjour kite à Paros inoubliable au cœur des Cyclades.
              Entre vent thermique régulier, eau turquoise et spots variés,
              Paros est l’une des meilleures destinations pour un kite trip en
              Grèce.
            </p>
            <p className="mt-4">
              Avec Wingkite Horizon, profitez d’une expérience unique : un kite
              trip en bateau, alliant navigation, coaching, progression et
              exploration.
            </p>
          </Section>

          <Section title="Pourquoi choisir Paros pour un séjour kite ?">
            <p>Paros est reconnue pour :</p>
            <BulletList
              items={[
                "Son vent thermique fiable (Meltem)",
                "Des conditions idéales pour tous niveaux",
                "Des spots variés : flat, freeride, vagues",
                "Une eau chaude et cristalline",
                "Une ambiance grecque authentique",
              ]}
            />
            <p className="mt-4">
              Parfait pour un stage kite, un trip entre amis ou une semaine de
              progression.
            </p>
          </Section>

          <Section title="Un kite trip en bateau unique">
            <p>Notre concept repose sur la mobilité et le confort :</p>
            <BulletList
              items={[
                "Accès aux meilleurs spots de kite à Paros et alentours",
                "Navigation selon les conditions météo",
                "Zéro contrainte logistique",
                "Expérience immersive en mer",
              ]}
            />
            <p className="mt-4">
              Exploration des plus beaux coins des Cyclades.
            </p>
          </Section>

          <Section title="Coaching & progression en kitesurf">
            <p>Améliorez rapidement votre niveau grâce à :</p>
            <BulletList
              items={[
                "Sessions quotidiennes encadrées",
                "Coaching personnalisé",
                "Analyse vidéo",
                "Conseils techniques adaptés à votre niveau",
              ]}
            />
            <p className="mt-4">Idéal pour progresser en :</p>
            <BulletList
              items={[
                "navigation",
                "transitions",
                "sauts",
                "strapless / vagues",
              ]}
            />
          </Section>

          <Section title="Programme du séjour kite à Paros">
            <h3 className="text-black font-semibold">
              Jour 1 – Arrivée à Paros
            </h3>
            <BulletList
              items={[
                "Check-in à 17h30 à Parikia",
                "Accueil à bord + briefing",
                "Rencontre avec le groupe",
              ]}
            />
            <p className="mt-3">Soirée dans Parikia</p>
            <p className="mt-1">Retour bateau vers 22h</p>

            <h3 className="mt-6 text-black font-semibold">
              Journée type (Jour 2 à Jour 6)
            </h3>
            <div className="mt-3 grid gap-5 sm:grid-cols-3">
              <div className="rounded-[10px] bg-white/70 p-4 border border-black/5">
                <p className="font-semibold text-black">Matin</p>
                <BulletList
                  items={["Spot du jour", "Brunch à bord", "Session de kite"]}
                />
              </div>
              <div className="rounded-[10px] bg-white/70 p-4 border border-black/5">
                <p className="font-semibold text-black">Après-midi</p>
                <BulletList
                  items={[
                    "Deuxième session ou temps libre",
                    "Détente, baignade, chill",
                  ]}
                />
              </div>
              <div className="rounded-[10px] bg-white/70 p-4 border border-black/5">
                <p className="font-semibold text-black">
                  Fin de journée & soirée
                </p>
                <BulletList
                  items={[
                    "Apéro sunset",
                    "Débriefing + coaching vidéo",
                    "Découverte d’une nouvelle ville",
                    "Restaurants locaux (optionnel)",
                  ]}
                />
              </div>
            </div>
            <p className="mt-4">
              Navigation entre différents spots selon les conditions.
            </p>

            <h3 className="mt-6 text-black font-semibold">
              Jour 7 – Dernier ride & soirée
            </h3>
            <BulletList
              items={[
                "Dernières sessions de kite",
                "Bilan de progression",
                "Soirée à Naoussa",
              ]}
            />

            <h3 className="mt-6 text-black font-semibold">Jour 8 – Départ</h3>
            <p className="mt-2">Check-out à 9h à Parikia</p>
          </Section>

          <Section title="Expérience complète : sport, voyage et détente">
            <p>Ce séjour combine :</p>
            <BulletList
              items={[
                "Kite intensif",
                "Moments uniques (sunsets, navigation…)",
                "Découverte de la gastronomie grecque",
                "Exploration de l’île",
              ]}
            />
            <p className="mt-4">
              Bien plus qu’un stage : une expérience kite immersive.
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
