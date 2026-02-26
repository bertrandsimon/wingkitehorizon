import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

export const metadata = {
  title: "Le concept | Wing Kite Horizon",
  description:
    "Découvrez le concept Wing Kite Horizon : croisière coaching, navigation, spots et vie à bord.",
};

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
                  <ul className="mt-4 grid gap-2">
                    <li className="flex gap-2 text-black/80 font-poppins text-sm sm:text-base">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[#55BAC6] flex-shrink-0" />
                      <span className="leading-relaxed">
                        Vie à bord conviviale, petits groupes
                      </span>
                    </li>
                    <li className="flex gap-2 text-black/80 font-poppins text-sm sm:text-base">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[#55BAC6] flex-shrink-0" />
                      <span className="leading-relaxed">
                        Navigation entre îles et mouillages
                      </span>
                    </li>
                    <li className="flex gap-2 text-black/80 font-poppins text-sm sm:text-base">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[#55BAC6] flex-shrink-0" />
                      <span className="leading-relaxed">
                        Rythme adaptable selon la météo et votre niveau
                      </span>
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
        </div>

        <Footer />
      </div>
    </div>
  );
}
