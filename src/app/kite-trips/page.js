import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

export const metadata = {
  title: "Kite trips | Wing Kite Horizon",
  description:
    "Kite trips en Grèce : itinéraires, spots, organisation à bord et expérience ride.",
};

export default function KiteTripsPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Kite trips"
            subtitle="Des itinéraires pensés pour rider : on bouge avec la météo, on vise les meilleurs créneaux, on profite des îles."
            imageSrc="/images/kitetrips.jpg"
            imageAlt="Kite trips Wing Kite Horizon"
          />

          <InternalSplitSection
            title="Itinéraires flexibles"
            imageSrc="/images/photonav1.jpg"
            imageAlt="Itinéraires et îles"
            imageSide="right"
            paragraphs={[
              "Le programme s’adapte aux conditions : on choisit la route et les mouillages pour trouver le vent et l’eau la plus agréable.",
              "Vous découvrez des spots accessibles uniquement par la mer, loin des plages surchargées.",
            ]}
            bullets={[
              "Organisation orientée ride",
              "Mouillages et criques protégées",
              "Exploration quotidienne",
            ]}
          />

          <InternalSplitSection
            title="Confort & logistique à bord"
            imageSrc="/images/trip.jpg"
            imageAlt="Vie à bord"
            imageSide="left"
            paragraphs={[
              "On simplifie tout : vous vous concentrez sur la glisse, on s’occupe de l’itinéraire et de la logistique.",
              "À bord, vous avez de l’espace pour récupérer, préparer les sessions et profiter des moments off.",
            ]}
            bullets={[
              "Journées rythmées (ride / détente / découverte)",
              "Briefings et conseils matériel",
              "Petit groupe pour une meilleure expérience",
            ]}
          />

          <InternalSplitSection
            title="Une expérience ride + voyage"
            imageSrc="/images/restaurant.jpg"
            imageAlt="Expérience ride"
            imageSide="right"
            paragraphs={[
              "C’est plus qu’un séjour : c’est un trip. Des sessions quand ça souffle, des couchers de soleil au mouillage, et la liberté de bouger.",
              "Que vous veniez pour progresser, pour vous faire plaisir, ou pour cocher des spots, le format kite trip est idéal.",
            ]}
            bullets={[
              "Ambiance trip, esprit team",
              "Temps sur l’eau optimisé",
              "Souvenirs garantis",
            ]}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}
