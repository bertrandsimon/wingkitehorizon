import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BookNowButton from "@/components/CTAs/BookNowButton";
import InternalHero from "@/components/InternalPages/InternalHero";
import InternalSplitSection from "@/components/InternalPages/InternalSplitSection";

import { SEO, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.en["kite-trips"],
  path: "/en/kite-trips",
  locale: "en",
});

export default function KiteTripsEnPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Kite trips"
            subtitle="Trips designed to ride: we move with the weather, chase the best sessions, and enjoy the islands."
            imageSrc="/images/kitetrips.jpg"
            imageAlt="Wing Kite Horizon kite trips"
          />

          <InternalSplitSection
            title="Flexible routes"
            imageSrc="/images/photonav1.jpg"
            imageAlt="Routes and islands"
            imageSide="right"
            paragraphs={[
              "The plan adapts to conditions: we choose the route and anchorages to find wind and the nicest water.",
              "You discover spots accessible only by sea, far from crowded beaches.",
            ]}
            bullets={[
              "Ride-first organization",
              "Protected coves and anchorages",
              "Daily exploration",
            ]}
          />

          <InternalSplitSection
            title="Comfort & logistics on board"
            imageSrc="/images/trip.jpg"
            imageAlt="Life on board"
            imageSide="left"
            paragraphs={[
              "We keep it simple: you focus on riding, we handle the route and logistics.",
              "On board, you have space to recover, prep sessions and enjoy downtime.",
            ]}
            bullets={[
              "Balanced days (ride / relax / explore)",
              "Briefings and gear tips",
              "Small group for a better experience",
            ]}
          />

          <InternalSplitSection
            title="A ride + travel experience"
            imageSrc="/images/restaurant.jpg"
            imageAlt="Ride experience"
            imageSide="right"
            paragraphs={[
              "It’s more than a trip: it’s a real adventure. Sessions when it’s windy, sunsets at anchor, and the freedom to move.",
              "Whether you come to progress, to have fun, or to tick off spots, the kite trip format is ideal.",
            ]}
            bullets={["Trip atmosphere, team spirit", "Optimized water time", "Unforgettable memories"]}
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

