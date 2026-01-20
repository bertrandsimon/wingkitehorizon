import Image from "next/image";
import TestimonialCarousel from "@/components/Testimonials/TestimonialCarousel";

export default function BoatZone() {
  const boatCards = [
    {
      title: "Cabines",
      description: "4 cabines confortables pour l’équipage et les riders.",
    },
    {
      title: "Salles de bain",
      description: "2 salles de bain pour plus de confort à bord.",
    },
    {
      title: "Capacité",
      description: "Jusqu’à 8 personnes + coach / skipper selon le programme.",
    },
    {
      title: "Vie à bord",
      description: "Espaces communs, rangements matériel, sécurité et confort.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <div className="w-full">
          <TestimonialCarousel />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {boatCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[16px] bg-white p-5 shadow-[0px_12px_30px_rgba(16,47,119,0.12)]"
              >
                <p className="text-sm font-bold text-[#102F77] leading-[192%] font-poppins">
                  {card.title}
                </p>
                <p className="text-sm text-[#5f5f5f] font-poppins">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}

        <Image
          src="/images/catamaran.jpg"
          alt="Catamaran"
          className="object-cover"
          width={530}
          height={565}
        />
      </div>
    </section>
  );
}
