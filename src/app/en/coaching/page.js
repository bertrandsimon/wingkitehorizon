import Image from "next/image";
import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.en.coaching,
  path: "/en/coaching",
  locale: "en",
});

export default function CoachingEnPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Coaching"
            subtitle="From beginner to advanced: clear goals, simple cues, and precise guidance on the water."
            imageSrc="/images/coaching.jpg"
            imageAlt="Kitesurf and wingfoil coaching"
          />

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                Coaching in action
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "/images/coaching-action-1.jpg",
                  "/images/coaching-action-2.jpg",
                  "/images/coaching-action-3.jpg",
                  "/images/coaching-action-4.jpg",
                  "/images/coaching-action-5.jpg",
                  "/images/coaching-action-6.jpg",
                ].map((src, index) => (
                  <div
                    key={src}
                    className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-black/5"
                  >
                    <Image
                      src={src}
                      alt={`Kitesurf coaching - photo ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <InternalSplitSection
            title="Tailor-made coaching"
            imageSrc="/images/coach.jpg"
            imageAlt="Coaching on the water"
            imageSide="right"
            paragraphs={[
              "We start from your real level and your objectives: waterstart, jibes, transitions, upwind, jumps…",
              "Each session is structured: briefing, drills, feedback, and quick adjustments to unlock key points.",
            ]}
            bullets={[
              "Clear goals and measurable progress",
              "Gear tuning that fits you",
              "Tips you can apply immediately",
            ]}
          />

          <InternalSplitSection
            title="Spot reading & safety"
            imageSrc="/images/spot.jpg"
            imageAlt="Safety and conditions"
            imageSide="left"
            paragraphs={[
              "Progress also comes from understanding: weather, water state, risk areas, lines and priorities.",
              "You gain autonomy and confidence, to ride better and longer.",
            ]}
            bullets={[
              "Spot choice based on direction and strength",
              "Positioning, timing and distance management",
              "Good habits and safety reflexes",
            ]}
          />

          <InternalSplitSection
            title="The ideal format on a cruise"
            imageSrc="/images/cata.jpg"
            imageAlt="Coaching on a cruise"
            imageSide="right"
            paragraphs={[
              "On a cruise, everything is optimized: fewer transfers, more flexibility, and varied spots to progress faster.",
              "It’s the best context to stack great sessions, recover, and go again at the right time.",
            ]}
            bullets={[
              "More time on the water",
              "Varied conditions, faster learning",
              "A motivating atmosphere",
            ]}
          />

          <div className="mt-10 sm:mt-12 flex justify-center">
            <BookNowButton />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
