import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.fr["destination-grece"],
  path: "/destinations/grece",
  locale: "fr",
});

export default function DestinationGrecePage() {
  const gallery = Array.from({ length: 12 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/images/grece/gallery/grece-${n}.jpg`;
  });

  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Grèce"
            subtitle="Cyclades, spots variés, navigation et sessions choisies selon le vent."
            imageSrc="/images/grece/gallery/grece-01.jpg"
            imageAlt="Destination Grèce"
            videoSrc="/videos/grece-banner.mp4"
            videoPosterSrc="/images/grece/gallery/grece-01.jpg"
          />

          <InternalSplitSection
            title="Cyclades & mobilité"
            imageSrc="/images/slider2.jpg"
            imageAlt="Cyclades"
            imageSide="right"
            paragraphs={[
              "On navigue entre les îles pour trouver les meilleures conditions : vent, plan d’eau et sécurité.",
              "Le catamaran sert de base mobile pour optimiser le temps sur l’eau et éviter la logistique.",
            ]}
            bullets={[
              "Spots accessibles par la mer",
              "Itinéraires adaptables",
              "Sessions optimisées",
            ]}
          />

          <InternalSplitSection
            title="Kite, wing & coaching"
            imageSrc="/images/coach.jpg"
            imageAlt="Coaching"
            imageSide="left"
            paragraphs={[
              "Du débutant au confirmé : briefings, exercices, retours et ajustements pour progresser plus vite.",
              "Objectif : vous faire naviguer plus, mieux, et en confiance.",
            ]}
            bullets={[
              "Coaching personnalisé",
              "Lecture du spot & sécurité",
              "Conditions variées pour progresser",
            ]}
          />

          <section className="mt-10 sm:mt-12">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Galerie
                </h2>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {gallery.map((src, idx) => (
                    <div
                      key={src}
                      className="relative w-full h-[220px] sm:h-[240px] rounded-[12px] overflow-hidden ring-1 ring-black/5 bg-white"
                    >
                      <Image
                        src={src}
                        alt={`Grèce ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))}
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
