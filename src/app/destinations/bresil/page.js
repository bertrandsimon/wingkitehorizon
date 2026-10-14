import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.fr["destination-bresil"],
  path: "/destinations/bresil",
  locale: "fr",
});

export default function DestinationBresilPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Croisières Brésil 2027"
            subtitle="Paraty & Ilha Grande — une croisière exclusive sur la Costa Verde."
            imageSrc="/images/slider3.jpg"
            imageAlt="Croisière Brésil Paraty Ilha Grande"
          />

          <div className="mt-6 flex justify-center">
            <a
              className="w-full max-w-[220px] whitespace-nowrap inline-flex items-center justify-center rounded-lg bg-[#102F77] px-5 py-3 text-white font-poppins text-sm sm:text-base transition-colors hover:bg-[#ea580c]"
              href="/pdf/Bresil-Brochure%20WingKiteHorizon-2027-English.pdf"
              download
            >
              Brochure (PDF - EN)
            </a>
          </div>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Une parenthèse exclusive au cœur du Brésil
                </h2>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Oubliez les sentiers battus et mettez le cap sur la Costa
                  Verde : une région préservée, des plages sauvages et des
                  criques secrètes accessibles uniquement par la mer. Entre les
                  rues historiques de Paraty et les rivages intacts d’Ilha
                  Grande, chaque mouillage est une invitation à la sérénité.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { k: "Lieu", v: "Paraty / Ilha Grande — Brésil" },
                    { k: "Durée", v: "7 jours" },
                    { k: "Bateau", v: "Catamaran Bali 4.3 (BV 4.3)" },
                    { k: "À bord", v: "6 invités max + 2 crew" },
                    { k: "Vent", v: "Faible à modéré — 5 à 15 nœuds" },
                    { k: "Température", v: "25°C à 30°C" },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="rounded-[12px] bg-white p-4 ring-1 ring-black/5"
                    >
                      <p className="text-[#102F77] font-poppins font-semibold text-sm">
                        {item.k}
                      </p>
                      <p className="mt-1 text-black font-poppins text-sm leading-relaxed">
                        {item.v}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Météo : soleil ~90% · averses tropicales ~10% (brèves et
                  passagères).
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Points forts
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Croisière privée & intimiste",
                      "Itinéraire entre Paraty et Ilha Grande",
                      "Arrêts dans des baies et plages préservées",
                      "Cuisine raffinée & service à bord",
                      "Activités nautiques : snorkeling, paddle, baignade",
                      "Pêche & cuisine traditionnelle",
                      "Couchers de soleil spectaculaires",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Dates & horaires
                  </h2>
                  <div className="mt-4 rounded-[12px] bg-[#EFEEF1] p-5 ring-1 ring-black/5">
                    <p className="text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Départ :{" "}
                      <span className="font-semibold">Paraty (Marina)</span>
                    </p>
                    <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                      {[
                        "Trip 1 : 6 → 13 mars 2027",
                        "Trip 2 : 20 → 27 mars 2027",
                        "Trip 3 : 3 → 10 avril 2027",
                      ].map((d) => (
                        <li
                          key={d}
                          className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Embarquement (jour 1) :{" "}
                      <span className="font-semibold">16h30</span>
                      <br />
                      Débarquement (dernier jour) :{" "}
                      <span className="font-semibold">09h00</span>
                    </p>
                    <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      À cette période, le temps est généralement stable et
                      agréable. En zone tropicale, quelques averses sont
                      possibles, mais elles disparaissent vite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Itinéraire (flexible)
                </h2>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Votre aventure commence à Paraty, magnifique ville coloniale
                  portugaise, porte d’entrée vers l’une des plus belles régions
                  côtières du Brésil. Cap vers Ilha Grande, au fil d’une
                  succession de mouillages exceptionnels : îles, lagons
                  émeraude, forêts tropicales et plages accessibles uniquement
                  par la mer.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Parce que chaque croisière est unique, l’itinéraire reste
                  volontairement flexible. Le capitaine l’adapte selon les
                  conditions de navigation, le vent et la météo, pour
                  privilégier les plus beaux mouillages et la sécurité.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Exemples de spots : Saco do Mamanguá, Ilha dos Cocos, Praia
                  dos Meros, Aventureiro… ainsi que des criques sauvages.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Le catamaran (BV 4.3)
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Catamaran de 13,46 m (année 2012)",
                      "6 invités + 2 crew",
                      "3 cabines doubles",
                      "2 petites cabines équipage",
                      "2 salles de bain avec douche",
                      "Dinghy",
                      "Dessalinisateur",
                      "Convertisseur, générateur",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    À bord
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Skipper anglophone + staff local pour vous faire découvrir la flore/faune et l’histoire de Paraty",
                      "Photos & vidéos (pour revivre chaque moment)",
                      "Expérience culinaire sur-mesure : petit-déjeuner, déjeuner et dîner servis à bord, cuisine locale variée",
                      "Consommation d’alcool modérée et responsable (confort & sécurité)",
                      "Option : e-Foil Duotone Assist 2026 (en supplément)",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Tarifs & conditions
                </h2>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                    <p className="text-[#102F77] font-poppins font-semibold">
                      1. Cabine
                    </p>
                    <p className="mt-2 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      1 personne : 1 700 €<br />2 personnes : 2 500 €<br />
                      Groupe : 6 personnes maximum
                    </p>
                    <p className="mt-3 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Paiement : 50% à la confirmation · 50% avant le 15 février
                      2027
                    </p>
                  </div>
                  <div className="rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                    <p className="text-[#102F77] font-poppins font-semibold">
                      2. Privatisation
                    </p>
                    <p className="mt-2 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Entre 6 000 € et 7 000 € selon les dates et le nombre de
                      personnes
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                  <p className="text-[#102F77] font-poppins font-semibold">
                    Non inclus / services sur-mesure
                  </p>
                  <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Transfert depuis Rio ou São Paulo",
                      "Assistance + pour l’hébergement",
                      "Vols et transports",
                      "Pourboires",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                  <p className="text-[#102F77] font-poppins font-semibold">
                    Politique d’annulation (raisons personnelles)
                  </p>
                  <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Entre l’acompte et 60 jours avant le départ : remboursement de 50% du montant payé",
                      "Après J-60 : voyage non remboursable",
                      "Nous recommandons une assurance annulation",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-7 rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Comment s’y rendre
                  </h2>
                  <div className="mt-4">
                    <p className="text-black font-poppins font-semibold">
                      Depuis Rio de Janeiro
                    </p>
                    <ul className="mt-2 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                      {["Taxi : ~4 h, ~120 $", "Bus : ~6 h, ~20 $"].map((b) => (
                        <li
                          key={b}
                          className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-black font-poppins font-semibold">
                      Depuis São Paulo
                    </p>
                    <ul className="mt-2 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                      {["Taxi : ~5 h, ~170 $", "Bus : ~8 h, ~30 $"].map((b) => (
                        <li
                          key={b}
                          className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Conditions de participation
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Certificat médical valide et vaccin fièvre jaune",
                      "Assurance voyage médicale personnelle couvrant les accidents",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                    <p className="text-[#102F77] font-poppins font-semibold">
                      Contact WhatsApp (Capitaine)
                    </p>
                    <p className="mt-2 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Mickael GALERNE : +55 19 99 183 6664
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 sm:mt-12 flex justify-center">
                <BookNowButton />
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}
