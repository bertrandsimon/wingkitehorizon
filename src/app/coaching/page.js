import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

export const metadata = {
  title: "Coaching | Wing Kite Horizon",
  description:
    "Coaching kitesurf & wingfoil : progression, sécurité, conseils matériel et accompagnement sur-mesure.",
};

export default function CoachingPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Coaching"
            subtitle="Du débutant au confirmé : des objectifs clairs, des consignes simples, et un accompagnement précis sur l’eau."
            imageSrc="/images/coaching.jpg"
            imageAlt="Coaching kitesurf et wingfoil"
          />

          <InternalSplitSection
            title="Coaching sur-mesure"
            imageSrc="/images/coach.jpg"
            imageAlt="Coaching sur l’eau"
            imageSide="right"
            paragraphs={[
              "On part de votre niveau réel et de vos objectifs : décollage, jibes, transitions, upwind, sauts…",
              "Chaque session est structurée : brief, exercices, retours, et ajustements rapides pour débloquer les points clés.",
            ]}
            bullets={[
              "Objectifs clairs et progression mesurable",
              "Réglages matériel adaptés",
              "Conseils techniques immédiatement applicables",
            ]}
          />

          <InternalSplitSection
            title="Lecture du spot & sécurité"
            imageSrc="/images/spot.jpg"
            imageAlt="Sécurité et conditions"
            imageSide="left"
            paragraphs={[
              "La progression passe aussi par la compréhension : météo, plan d’eau, zones à risque, trajectoires et priorités.",
              "Vous gagnez en autonomie et en sérénité, pour rider mieux et plus longtemps.",
            ]}
            bullets={[
              "Choix du spot selon orientation et intensité",
              "Placement, timing, gestion des distances",
              "Bonnes pratiques et réflexes de sécurité",
            ]}
          />

          <InternalSplitSection
            title="Format idéal en croisière"
            imageSrc="/images/cata.jpg"
            imageAlt="Coaching en croisière"
            imageSide="right"
            paragraphs={[
              "En croisière, on optimise tout : moins de trajets, plus de flexibilité, et des spots variés pour progresser plus vite.",
              "C’est le meilleur contexte pour enchaîner les bonnes sessions, récupérer, et repartir au bon moment.",
            ]}
            bullets={[
              "Plus de temps sur l’eau",
              "Conditions variées, apprentissage accéléré",
              "Ambiance motivante",
            ]}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}
