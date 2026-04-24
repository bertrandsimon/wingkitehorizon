import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.fr.concept,
  path: "/le-concept",
  locale: "fr",
});

export default function LeConceptPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Le Concept"
            subtitle="Une croisière coaching kitesurf & wingfoil en Grèce : du vent, des îles, et une progression à votre rythme."
            imageSrc="/images/concept.jpg"
            imageAlt="Le concept Wing Kite Horizon"
          />

          <section className="mt-8 sm:mt-10">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Une croisière sportive où chaque journée compte
                </h2>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Cette croisière n’est pas une simple balade en mer. C’est une
                  expérience immersive dédiée aux sports de glisse : kitesurf,
                  wingfoil et exploration des plus beaux spots accessibles
                  uniquement en bateau.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-black">
                    Chaque journée est optimisée pour naviguer.
                  </span>{" "}
                  Grâce à la mobilité du catamaran, nous nous déplaçons en
                  permanence vers les zones les plus ventées et les meilleures
                  orientations de vent. L’objectif est simple : maximiser le
                  temps sur l’eau.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Les journées sont rythmées par :
                </p>

                <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                  {[
                    "Navigation vers de nouveaux spots",
                    "Sessions encadrées de kitesurf ou wingfoil",
                    "Conseils personnalisés et coaching",
                    "Moments de récupération dans des mouillages paradisiaques",
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
                  Et parce qu’on aime la glisse sous toutes ses formes, un
                  e-foil est également disponible à bord pour découvrir les
                  sensations uniques du vol électrique au-dessus de l’eau, même
                  quand le vent se fait attendre.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Que le vent soit léger ou soutenu, il y aura toujours quelque
                  chose à faire sur l’eau.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Et bien sûr, les non-pratiquants sont les bienvenus à bord. La
                  croisière est aussi l’occasion de chiller sur le catamaran, se
                  baigner dans des eaux cristallines, explorer des criques
                  sauvages ou simplement profiter de paysages incroyables
                  accessibles uniquement par la mer.
                </p>

                <div className="mt-5 rounded-[10px] bg-white/70 p-4 border border-black/5">
                  <p className="text-black/90 font-poppins text-sm sm:text-base leading-relaxed">
                    <span className="font-semibold">
                      Le principe est simple :
                    </span>{" "}
                    vivre, naviguer et progresser tous les jours dans un cadre
                    exceptionnel… ou simplement savourer l’aventure et la magie
                    des lieux.
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
                      alt="Bateau Wing Kite Horizon"
                      width={676}
                      height={721}
                      className="w-full h-auto object-contain"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Une aventure à bord
                  </h2>
                  <p className="mt-3 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                    Vous vivez une semaine (ou plus) sur un catamaran
                    confortable, au plus près des spots et des plus belles
                    criques.
                  </p>
                  <p className="mt-3 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                    Chaque journée est pensée pour profiter du vent, explorer,
                    et naviguer dans les meilleures conditions possibles.
                  </p>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    <li className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Vie à bord conviviale, petits groupes
                    </li>
                    <li className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Navigation entre îles et mouillages
                    </li>
                    <li className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Rythme adaptable selon la météo et votre niveau
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <InternalSplitSection
            title="Spots, vent et choix des sessions"
            imageSrc="/images/slider2.jpg"
            imageAlt="Navigation en Grèce"
            imageSide="left"
            paragraphs={[
              "On choisit le spot du jour en fonction des conditions : orientation, force du vent, sécurité et affluence.",
              "L’objectif : maximiser votre temps sur l’eau et vous offrir des sessions qualitatives, que vous soyez débutant ou confirmé.",
            ]}
            bullets={[
              "Briefings avant session",
              "Sécurité et placement sur le plan d’eau",
              "Conseils personnalisés sur le matériel",
            ]}
          />

          <InternalSplitSection
            title="L’esprit Wing Kite Horizon"
            imageSrc="/images/esprit.jpg"
            imageAlt="Expérience Wing Kite Horizon"
            imageSide="right"
            paragraphs={[
              "Un mix entre voyage et coaching : vous progressez, vous explorez, et vous profitez d’une vraie parenthèse en mer.",
              "Le tout avec une approche simple : du fun, du niveau, et de la bienveillance.",
            ]}
            bullets={[
              "Coaching accessible et efficace",
              "Ambiance détendue, esprit d’équipe",
              "Expérience premium sans prise de tête",
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
                        alt="Brunchs et tavernes grecques"
                        fill
                        sizes="(max-width: 1024px) 100vw, 360px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                      Brunchs & Tavernes Grecques
                    </h2>

                    <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Parce qu’une belle journée en mer commence aussi par un
                      bon moment autour de la table, les brunchs sont inclus à
                      bord tout au long de la croisière. Chaque matin (ou après
                      la première session de ride&nbsp;!), nous partageons un
                      brunch généreux et convivial sur le catamaran, face à la
                      mer : fruits frais, spécialités locales, café, jus… de
                      quoi reprendre des forces avant de retourner sur l’eau.
                    </p>

                    <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Et pour découvrir l’âme des îles grecques, une sortie
                      quotidienne dans une taverne est également prévue. Ces
                      restaurants grecs traditionnels, souvent situés dans de
                      petits ports ou villages authentiques, sont l’occasion de
                      goûter à la cuisine locale : poissons grillés, mezze,
                      salades grecques, plats typiques et ambiance chaleureuse.
                    </p>

                    <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Entre sessions de glisse, paysages incroyables et plaisirs
                      de la table, chaque journée mêle sport, découverte et art
                      de vivre méditerranéen.
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
