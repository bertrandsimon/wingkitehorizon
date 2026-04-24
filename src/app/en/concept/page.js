import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.en.concept,
  path: "/en/concept",
  locale: "en",
});

export default function ConceptEnPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="The Concept"
            subtitle="A kitesurf & wingfoil coaching cruise in Greece: wind, islands, and progression at your pace."
            imageSrc="/images/concept.jpg"
            imageAlt="Wing Kite Horizon concept"
          />

          <section className="mt-8 sm:mt-10">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  A sport cruise where every day counts
                </h2>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  This cruise isn’t just a boat trip. It’s an immersive
                  experience dedicated to board sports: kitesurfing, wingfoiling
                  and exploring the most beautiful spots only reachable by boat.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-black">
                    Every day is designed for riding.
                  </span>{" "}
                  Thanks to the catamaran’s mobility, we constantly move toward
                  the windiest areas and the best wind angles. The goal is
                  simple: maximize time on the water.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Days are paced by:
                </p>

                <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                  {[
                    "Sailing to new spots",
                    "Coached kitesurf or wingfoil sessions",
                    "Personalized tips and coaching",
                    "Recovery time in paradise anchorages",
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
                  And because we love board sports in every form, an e-foil is
                  also available on board to discover the unique feeling of
                  electric flight above the water, even when the wind takes a
                  break.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  Light wind or strong wind—there will always be something to do
                  on the water.
                </p>

                <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                  And of course, non-riders are welcome on board. The cruise is
                  also an opportunity to chill on the catamaran, swim in crystal
                  clear water, explore wild coves, or simply enjoy breathtaking
                  landscapes accessible only by sea.
                </p>

                <div className="mt-5 rounded-[10px] bg-white/70 p-4 border border-black/5">
                  <p className="text-black/90 font-poppins text-sm sm:text-base leading-relaxed">
                    <span className="font-semibold">The idea is simple:</span>{" "}
                    live, sail and progress every day in an exceptional setting…
                    or simply savor the adventure and the magic of the places.
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
                      alt="Wing Kite Horizon boat"
                      width={676}
                      height={721}
                      className="w-full h-auto object-contain"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Life on board
                  </h2>
                  <p className="mt-3 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                    You live a week (or more) on a comfortable catamaran, right
                    next to the spots and the most beautiful coves.
                  </p>
                  <p className="mt-3 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                    Each day is designed to make the most of the wind, explore,
                    and ride in the best possible conditions.
                  </p>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    <li className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Friendly on-board life, small groups
                    </li>
                    <li className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Sailing between islands and anchorages
                    </li>
                    <li className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      A pace adapted to the weather and your level
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <InternalSplitSection
            title="Spots, wind and session choices"
            imageSrc="/images/slider2.jpg"
            imageAlt="Sailing in Greece"
            imageSide="left"
            paragraphs={[
              "We choose the spot of the day based on conditions: direction, wind strength, safety and crowd level.",
              "The goal is simple: maximize your time on the water and deliver high-quality sessions, whether you’re a beginner or advanced.",
            ]}
            bullets={[
              "Briefings before each session",
              "Safety and positioning on the water",
              "Personalized gear advice",
            ]}
          />

          <InternalSplitSection
            title="The Wing Kite Horizon spirit"
            imageSrc="/images/esprit.jpg"
            imageAlt="Wing Kite Horizon spirit"
            imageSide="right"
            paragraphs={[
              "A mix of travel and coaching: you progress, you explore, and you enjoy a true break at sea.",
              "With one simple approach: fun, progress and good vibes.",
            ]}
            bullets={[
              "Accessible and effective coaching",
              "Relaxed atmosphere, team spirit",
              "Premium experience, no hassle",
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
                        alt="Greek tavernas"
                        fill
                        sizes="(max-width: 1024px) 100vw, 360px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                      Brunch & Greek tavernas
                    </h2>

                    <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Because a great day at sea also starts around the table,
                      brunch is included on board throughout the cruise. Each
                      morning (or after the first ride session!), we share a
                      generous and friendly brunch on the catamaran facing the
                      sea: fresh fruit, local specialties, coffee, juices… the
                      perfect fuel before getting back on the water.
                    </p>

                    <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      And to discover the soul of the Greek islands, a daily
                      outing to a taverna is also planned. These traditional
                      Greek restaurants, often located in small ports or
                      authentic villages, are a chance to taste local cuisine:
                      grilled fish, mezze, Greek salads, typical dishes and a
                      warm atmosphere.
                    </p>

                    <p className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
                      Between riding sessions, incredible landscapes and the
                      pleasures of the table, each day blends sport, discovery
                      and Mediterranean art of living.
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
