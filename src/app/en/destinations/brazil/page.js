import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.en["destination-bresil"],
  path: "/en/destinations/brazil",
  locale: "en",
});

export default function DestinationBrazilPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Brazil Cruises 2027"
            subtitle="Paraty & Ilha Grande — an exclusive Costa Verde cruise."
            imageSrc="/images/slider3.jpg"
            imageAlt="Brazil cruise Paraty Ilha Grande"
          />

          <div className="mt-6 flex justify-center">
            <a
              className="w-full max-w-[220px] whitespace-nowrap inline-flex items-center justify-center rounded-lg bg-[#102F77] px-5 py-3 text-white font-poppins text-sm sm:text-base transition-colors hover:bg-[#ea580c]"
              href="/pdf/Bresil-Brochure%20WingKiteHorizon-2027-English.pdf"
              download
            >
              Brochure (PDF)
            </a>
          </div>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  A secret jewel of Brazil, revealed only by sea
                </h2>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Forget the beaten path and set sail for an exclusive stopover
                  in the heart of Brazil’s Costa Verde, with secluded beaches
                  and wild coves accessible only from the water. Between the
                  historic streets of Paraty and the unspoiled shores of Ilha
                  Grande, every anchorage invites serenity.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { k: "Location", v: "Paraty / Ilha Grande — Brazil" },
                    { k: "Duration", v: "7 days" },
                    { k: "Boat", v: "Catamaran Bali 4.3 (BV 4.3)" },
                    { k: "On board", v: "Max 6 guests + 2 crew" },
                    { k: "Wind", v: "Light–moderate — 5 to 15 knots" },
                    { k: "Temperature", v: "25°C to 30°C" },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="rounded-[12px] bg-white p-4 ring-1 ring-black/5"
                    >
                      <p className="text-[#102F77] font-poppins font-semibold text-sm">
                        {item.k}
                      </p>
                      <p className="mt-1 text-black font-poppins text-sm leading-relaxed">
                        {item.v}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Weather: ~90% sun · ~10% tropical rain (brief passing
                  showers).
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Highlights
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Private luxury cruise with an intimate atmosphere",
                      "Itinerary between Paraty and Ilha Grande",
                      "Stops in unspoiled bays and beaches",
                      "Refined cuisine and onboard service",
                      "Water activities: snorkeling, paddleboarding and swimming",
                      "Fishing and traditional cooking",
                      "Spectacular sunsets",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Dates & schedule
                  </h2>
                  <div className="mt-4 rounded-[12px] bg-[#EFEEF1] p-5 ring-1 ring-black/5">
                    <p className="text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Departure:{" "}
                      <span className="font-semibold">Paraty (Marina)</span>
                    </p>
                    <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                      {[
                        "Trip 1: March 6 – March 13, 2027",
                        "Trip 2: March 20 – March 27, 2027",
                        "Trip 3: April 3 – April 10, 2027",
                      ].map((d) => (
                        <li
                          key={d}
                          className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Boarding (day 1):{" "}
                      <span className="font-semibold">4:30 PM</span>
                      <br />
                      Disembarkation (last day):{" "}
                      <span className="font-semibold">9:00 AM</span>
                    </p>
                    <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      At this time of year, the weather is generally settled and
                      fine. In the tropics we may encounter a few passing
                      showers—they vanish as quickly as they appear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Itinerary (flexible)
                </h2>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Your journey begins in Paraty, a magnificent Portuguese
                  colonial town of timeless charm and the gateway to one of
                  Brazil’s most beautiful coastal regions. Aboard your
                  catamaran, you’ll set sail for Ilha Grande through a
                  succession of exceptional anchorages: islands, secret coves
                  and pristine beaches in remarkably clear waters.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Because every cruise is unique, the itinerary remains
                  deliberately flexible. Your captain adapts it according to
                  sailing conditions, wind and weather to offer a safe and
                  exceptional experience—always favoring the most beautiful
                  anchorages.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Example stops: Saco do Mamanguá, Ilha dos Cocos, Praia dos
                  Meros, Aventureiro… plus wild coves accessible only by sea.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    The catamaran (BV 4.3)
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Sailing catamaran — 13.46 m (year 2012)",
                      "6 guests + 2 crew",
                      "3 double cabins",
                      "2 small crew cabins",
                      "2 bathrooms with shower",
                      "Dinghy",
                      "Water desalinator",
                      "Power inverter and generator",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    On board
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "English-speaking skipper + local staff to share the richness of local flora/fauna and Paraty’s history",
                      "Photos & videos (to relive every exceptional moment)",
                      "Tailor-made culinary experience: breakfast, lunch and dinner served on board with varied local cuisine",
                      "For comfort and safety: alcohol consumption is moderate and responsible",
                      "Optional add-on: e-Foil Duotone Assist 2026 (additional cost)",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Pricing & terms
                </h2>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                    <p className="text-[#102F77] font-poppins font-semibold">
                      1. Cabin
                    </p>
                    <p className="mt-2 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      1 person: €1,700
                      <br />2 people: €2,500
                      <br />
                      Group: max 6 guests
                    </p>
                    <p className="mt-3 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Payment: 50% upon confirmation · 50% before February 15,
                      2027
                    </p>
                  </div>
                  <div className="rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                    <p className="text-[#102F77] font-poppins font-semibold">
                      2. Private trip
                    </p>
                    <p className="mt-2 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Between €6,000 and €7,000 depending on dates and group
                      size
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                  <p className="text-[#102F77] font-poppins font-semibold">
                    Not included / tailor-made services
                  </p>
                  <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Transfer from Rio or São Paulo",
                      "Assistance Plus for accommodation",
                      "Flights and transportation",
                      "Tips",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                  <p className="text-[#102F77] font-poppins font-semibold">
                    Cancellation policy (personal reasons)
                  </p>
                  <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "From deposit paid up to 60 days before departure: refund of 50% of the amount paid",
                      "After 60 days before departure: non-refundable trip",
                      "We strongly recommend cancellation insurance",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-7 rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    How to get there
                  </h2>
                  <div className="mt-4">
                    <p className="text-black font-poppins font-semibold">
                      From Rio de Janeiro
                    </p>
                    <ul className="mt-2 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                      {["Taxi: ~4h, ~120 $", "Bus: ~6h, ~20 $"].map((b) => (
                        <li
                          key={b}
                          className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-black font-poppins font-semibold">
                      From São Paulo
                    </p>
                    <ul className="mt-2 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                      {["Taxi: ~5h, ~170 $", "Bus: ~8h, ~30 $"].map((b) => (
                        <li
                          key={b}
                          className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Participation requirements
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Valid health certificate and yellow fever vaccination",
                      "Personal medical travel insurance covering accidents",
                    ].map((b) => (
                      <li
                        key={b}
                        className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                    <p className="text-[#102F77] font-poppins font-semibold">
                      Captain WhatsApp contact
                    </p>
                    <p className="mt-2 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Mickael GALERNE: +55 19 99 183 6664
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 sm:mt-12 flex justify-center">
                <BookNowButton />
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}
