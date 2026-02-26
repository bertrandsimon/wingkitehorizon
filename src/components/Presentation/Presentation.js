import Image from "next/image";

export default function Presentation() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-[16px] overflow-hidden">
          <Image
            src="/images/presentation/presentation.jpg"
            alt="Coaching en action"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center rounded-[1000px] bg-[#55BAC6] w-[135px] h-[26px]">
              <span className="text-white font-poppins text-sm font-semibold leading-[103%] uppercase">
                Coaching
              </span>
            </div>
            <p className="mt-4 font-poppins text-2xl sm:text-4xl font-bold leading-[1.1]">
              <span className="text-[#102F77]">Croisière </span>
              <span className="text-[#55BAC6]">Kitesurf et Wingfoil.</span>
            </p>
            <p className="mt-2 font-poppins text-xl sm:text-2xl font-bold leading-[1.1]">
              <span className="text-[#55BAC6]">Progresser</span>{" "}
              <span className="text-[#102F77]">Apprendre</span>{" "}
              <span className="text-[#55BAC6]">Voyager</span>
            </p>
            <p className="mt-3 text-gray-600 font-poppins text-sm font-normal leading-[192%]">
              <span className="block">
                Progressez rapidement, quel que soit
              </span>
              <span className="block">
                votre niveau, avec un suivi personnalisé
              </span>
              <span className="block">et des sessions sur mesure.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-[16px] bg-white p-5 shadow-[0px_12px_30px_rgba(16,47,119,0.12)]">
              <p className="text-[#102F77] font-poppins text-sm font-bold leading-[192%]">
                Coaching Kitesurf
              </p>
              <p className="text-sm text-[#5f5f5f] font-poppins">
                Accompagnement individuel et objectif ciblé.
              </p>
            </div>
            <div className="rounded-[16px] bg-white p-5 shadow-[0px_12px_30px_rgba(16,47,119,0.12)]">
              <p className="text-[#102F77] font-poppins text-sm font-bold leading-[192%]">
                Coaching Wingfoil
              </p>
              <p className="text-sm text-[#5f5f5f] font-poppins">
                Sessions dynamiques pour progresser ensemble.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#55BAC6] px-6 py-3 text-sm sm:text-sm font-poppins text-white transition-colors hover:bg-[#49a9b3] cursor-pointer"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
