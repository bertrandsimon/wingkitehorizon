import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner/banner-boat.png"
          alt="Catamaran sailing"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Grid - Right Side */}
      <div className="relative h-full max-w-[1260px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
          {/* Left column - empty for image focus */}
          <div className="hidden lg:block" />

          {/* Right column - Content */}
          <div className="flex flex-col items-start lg:items-end gap-6 py-8 lg:py-16">
            <div className="w-full max-w-[593px]">
              {/* Title (aligned with glass block left edge) */}
              <div className="text-left">
                <p className="text-3xl sm:text-5xl font-semibold text-white leading-tight font-poppins">
                  Un nouveau spot
                </p>
                <p className="text-4xl sm:text-6xl font-semibold text-[#102F77] leading-tight font-poppins">
                  chaque jour ?
                </p>
              </div>

              {/* Glass (match flipcards style) */}
              <div className="mt-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border-t border-white/20">
                <p className="text-white text-sm leading-relaxed font-poppins font-light">
                  Les navigations quotidiennes sont organisées en fonction du
                  vent et du niveau du groupe, avec la possibilité de choisir
                  entre apprentissage, freeride ou simple exploration des baies.
                  Les repas se prennent à bord ou dans de petites tavernes
                  locales lorsque l’itinéraire s’y prête. Le reste du temps est
                  libre : repos sur le pont, baignade, visite d’îles ou révision
                  technique avec le coach pour optimiser la session suivante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
