import Title from "@/components/Title/Title";

export default function Favorites({
  title = "nos destinations",
  subtitle = "coups de coeur",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  return (
    <>
      <Title title1={title} title2={subtitle} description={description} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="col-span-1 h-[300px] sm:h-[380px] lg:h-[440px] perspective-1000 group">
          <div className="relative w-full h-full cursor-pointer preserve-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
            {/* Front */}
            <div className="absolute inset-0 backface-hidden rounded-xl bg-[url('/images/favorite-1.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-[380px] h-auto sm:h-[70px] bg-white/10 backdrop-blur-md border-t border-white/20 rounded-xl flex items-start justify-start pl-3 sm:pl-4 pt-2 sm:pt-3 pb-2 sm:pb-0">
                <div className="flex flex-col">
                  <p className="text-white text-xs sm:text-sm font-medium">Cap soleil</p>
                  <p className="text-white text-base sm:text-xl font-bold">Indonésie</p>
                </div>
              </div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-[#DF986C] flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-sm font-medium">Découvrez</p>
                <p className="text-black text-xl font-bold">L'Indonésie</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-span-1 h-[300px] sm:h-[380px] lg:h-[440px] perspective-1000 group">
          <div className="relative w-full h-full cursor-pointer preserve-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
            {/* Front */}
            <div className="absolute inset-0 backface-hidden rounded-xl bg-[url('/images/favorite-2.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-[380px] h-auto sm:h-[70px] bg-white/10 backdrop-blur-md border-t border-white/20 rounded-xl flex items-start justify-start pl-3 sm:pl-4 pt-2 sm:pt-3 pb-2 sm:pb-0">
                <div className="flex flex-col">
                  <p className="text-white text-xs sm:text-sm font-medium">Cap soleil</p>
                  <p className="text-white text-base sm:text-xl font-bold">Indonésie</p>
                </div>
              </div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-[#DF986C] flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-sm font-medium">Explorez</p>
                <p className="text-black text-xl font-bold">Les Tropiques</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-span-1 h-[300px] sm:h-[380px] lg:h-[440px] perspective-1000 group">
          <div className="relative w-full h-full cursor-pointer preserve-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
            {/* Front */}
            <div className="absolute inset-0 backface-hidden rounded-xl bg-[url('/images/favorite-3.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-[380px] h-auto sm:h-[70px] bg-white/10 backdrop-blur-md border-t border-white/20 rounded-xl flex items-start justify-start pl-3 sm:pl-4 pt-2 sm:pt-3 pb-2 sm:pb-0">
                <div className="flex flex-col">
                  <p className="text-white text-xs sm:text-sm font-medium">Cap soleil</p>
                  <p className="text-white text-base sm:text-xl font-bold">Indonésie</p>
                </div>
              </div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-[#DF986C] flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-sm font-medium">Vivez</p>
                <p className="text-black text-xl font-bold">L'Aventure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
