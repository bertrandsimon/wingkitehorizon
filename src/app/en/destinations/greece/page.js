import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.en["destination-grece"],
  path: "/en/destinations/greece",
  locale: "en",
});

export default function DestinationGreecePage() {
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
            title="Greece"
            subtitle="Cyclades, varied spots, sailing and sessions chosen with the wind."
            imageSrc="/images/grece/gallery/grece-01.jpg"
            imageAlt="Destination Greece"
            videoSrc="/videos/grece-banner.mp4"
            videoPosterSrc="/images/grece/gallery/grece-01.jpg"
          />

          <InternalSplitSection
            title="Cyclades & mobility"
            imageSrc="/images/slider2.jpg"
            imageAlt="Cyclades"
            imageSide="right"
            paragraphs={[
              "We sail between islands to find the best conditions: wind, water state and safety.",
              "The catamaran is a mobile base to optimize water time and remove logistics.",
            ]}
            bullets={[
              "Sea-access spots",
              "Flexible routes",
              "Optimized sessions",
            ]}
          />

          <InternalSplitSection
            title="Kite, wing & coaching"
            imageSrc="/images/coach.jpg"
            imageAlt="Coaching"
            imageSide="left"
            paragraphs={[
              "From beginner to advanced: briefings, drills and feedback to progress faster.",
              "Goal: ride more, ride better and ride with confidence.",
            ]}
            bullets={[
              "Personalized coaching",
              "Spot reading & safety",
              "Varied conditions to progress",
            ]}
          />

          <section className="mt-10 sm:mt-12">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Gallery
                </h2>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {gallery.map((src, idx) => (
                    <div
                      key={src}
                      className="relative w-full h-[220px] sm:h-[240px] rounded-[12px] overflow-hidden ring-1 ring-black/5 bg-white"
                    >
                      <Image
                        src={src}
                        alt={`Greece ${idx + 1}`}
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
