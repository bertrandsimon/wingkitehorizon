import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.en.cruise,
  path: "/en/cruise",
  locale: "en",
});

function Section({ title, children }) {
  return (
    <section className="mt-8 sm:mt-10">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
          <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
            {title}
          </h2>
          <div className="mt-4 text-black/80 font-poppins text-sm sm:text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
      {items.map((item) => (
        <li
          key={item}
          className="text-black/80 font-poppins text-sm sm:text-base leading-relaxed"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CruisePage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="The cruise"
            subtitle="An unforgettable kite stay in Paros (Cyclades): sailing, coaching, progression and exploration."
            imageSrc="/images/trip.jpg"
            imageAlt="Wing Kite Horizon cruise"
          />

          <Section title="Kite stay in Paros (Cyclades)">
            <p>
              Live an unforgettable kite stay in Paros, right in the heart of
              the Cyclades. With regular thermal wind, turquoise water and
              varied spots, Paros is one of the best kite trip destinations in
              Greece.
            </p>
            <p className="mt-4">
              With Wing Kite Horizon, enjoy a unique experience: a boat-based
              kite trip combining sailing, coaching, progression and
              exploration.
            </p>
          </Section>

          <Section title="Why choose Paros for a kite stay?">
            <p>Paros is known for:</p>
            <BulletList
              items={[
                "Reliable thermal wind (Meltemi)",
                "Great conditions for all levels",
                "Varied spots: flat water, freeride, waves",
                "Warm, crystal-clear water",
                "An authentic Greek vibe",
              ]}
            />
            <p className="mt-4">
              Perfect for a training week, a trip with friends, or a progression
              week.
            </p>
          </Section>

          <Section title="A unique boat-based kite trip">
            <p>Our concept is built around mobility and comfort:</p>
            <BulletList
              items={[
                "Access to the best kite spots in Paros and nearby",
                "Sailing based on the weather and wind",
                "Zero logistics constraints",
                "An immersive sea experience",
              ]}
            />
            <p className="mt-4">
              Explore some of the most beautiful corners of the Cyclades.
            </p>
          </Section>

          <Section title="Coaching & progression">
            <p>Improve fast thanks to:</p>
            <BulletList
              items={[
                "Daily guided sessions",
                "Personalized coaching",
                "Video analysis",
                "Technical tips adapted to your level",
              ]}
            />
            <p className="mt-4">Ideal to progress in:</p>
            <BulletList
              items={["riding", "transitions", "jumps", "strapless / waves"]}
            />
          </Section>

          <Section title="Program (example week in Paros)">
            <h3 className="text-black font-semibold">
              Day 1 – Arrival in Paros
            </h3>
            <BulletList
              items={[
                "Check-in at 5:30 pm in Parikia",
                "Welcome on board + briefing",
                "Meet the group",
              ]}
            />
            <p className="mt-3">Evening in Parikia</p>
            <p className="mt-1">Back to the boat around 10 pm</p>

            <h3 className="mt-6 text-black font-semibold">
              Typical day (Day 2 to Day 6)
            </h3>
            <div className="mt-3 grid gap-5 sm:grid-cols-3">
              <div className="rounded-[10px] bg-white/70 p-4 border border-black/5">
                <p className="font-semibold text-black">Morning</p>
                <BulletList
                  items={["Spot of the day", "Brunch on board", "Kite session"]}
                />
              </div>
              <div className="rounded-[10px] bg-white/70 p-4 border border-black/5">
                <p className="font-semibold text-black">Afternoon</p>
                <BulletList
                  items={["Second session or free time", "Relax, swim, chill"]}
                />
              </div>
              <div className="rounded-[10px] bg-white/70 p-4 border border-black/5">
                <p className="font-semibold text-black">End of day & evening</p>
                <BulletList
                  items={[
                    "Sunset aperitif",
                    "Debrief + video coaching",
                    "Discover a new town",
                    "Local restaurants (optional)",
                  ]}
                />
              </div>
            </div>
            <p className="mt-4">
              We sail between different spots depending on conditions.
            </p>

            <h3 className="mt-6 text-black font-semibold">
              Day 7 – Final ride & evening
            </h3>
            <BulletList
              items={[
                "Final kite sessions",
                "Progress recap",
                "Evening in Naoussa",
              ]}
            />

            <h3 className="mt-6 text-black font-semibold">Day 8 – Departure</h3>
            <p className="mt-2">Check-out at 9 am in Parikia</p>
          </Section>

          <Section title="A complete experience: sport, travel and relaxation">
            <p>This stay combines:</p>
            <BulletList
              items={[
                "Intensive kitesurfing",
                "Unique moments (sunsets, sailing…)",
                "Greek food discovery",
                "Island exploration",
              ]}
            />
            <p className="mt-4">
              More than a camp: a truly immersive kite experience.
            </p>
          </Section>

          <div className="mt-10 sm:mt-12 flex justify-center">
            <BookNowButton />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
