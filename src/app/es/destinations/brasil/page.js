import BookNowButton from "@/components/CTAs/BookNowButton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHero from "@/components/InternalPages/InternalHero";

import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.es["destination-bresil"],
  path: "/es/destinations/brasil",
  locale: "es",
});

export default function DestinationBrasilPage() {
  return (
    <div className="px-2 sm:px-4 bg-[#EFEEF1] pt-2 sm:pt-4">
      <Header />

      <div className="mb-30 rounded-[12px] w-full max-w-[1260px] mx-auto transition-colors duration-300 bg-white">
        <div className="p-3 sm:p-5">
          <InternalHero
            title="Cruceros Brasil 2027"
            subtitle="Paraty e Ilha Grande — un crucero exclusivo por la Costa Verde."
            imageSrc="/images/slider3.jpg"
            imageAlt="Crucero Brasil Paraty Ilha Grande"
          />

          <div className="mt-6 flex justify-center">
            <a
              className="w-full max-w-[220px] whitespace-nowrap inline-flex items-center justify-center rounded-lg bg-[#102F77] px-5 py-3 text-white font-poppins text-sm sm:text-base transition-colors hover:bg-[#ea580c]"
              href="/pdf/Bresil-Brochure%20WingKiteHorizon-2027-English.pdf"
              download
            >
              Folleto (PDF - EN)
            </a>
          </div>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="rounded-[12px] bg-[#EFEEF1] p-5 sm:p-8">
                <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                  Una joya secreta de Brasil, accesible solo por mar
                </h2>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Olvida las rutas típicas y navega hacia una escala exclusiva
                  en el corazón de la Costa Verde, con playas salvajes y calas
                  escondidas que solo se revelan desde el mar. Entre las calles
                  históricas de Paraty y las costas vírgenes de Ilha Grande,
                  cada fondeo invita a la calma.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { k: "Lugar", v: "Paraty / Ilha Grande — Brasil" },
                    { k: "Duración", v: "7 días" },
                    { k: "Barco", v: "Catamarán Bali 4.3 (BV 4.3)" },
                    { k: "A bordo", v: "Máx. 6 huéspedes + 2 tripulación" },
                    { k: "Viento", v: "Ligero–moderado — 5 a 15 nudos" },
                    { k: "Temperatura", v: "25°C a 30°C" },
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
                  Clima: ~90% sol · ~10% lluvia tropical (chubascos breves).
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    Puntos clave
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Crucero privado y ambiente íntimo",
                      "Itinerario entre Paraty e Ilha Grande",
                      "Paradas en bahías y playas preservadas",
                      "Cocina refinada y servicio a bordo",
                      "Actividades acuáticas: snorkel, paddle y baño",
                      "Pesca y cocina tradicional",
                      "Atardeceres espectaculares",
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
                    Fechas y horarios
                  </h2>
                  <div className="mt-4 rounded-[12px] bg-[#EFEEF1] p-5 ring-1 ring-black/5">
                    <p className="text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Salida:{" "}
                      <span className="font-semibold">Paraty (Marina)</span>
                    </p>
                    <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                      {[
                        "Viaje 1: 6 – 13 de marzo de 2027",
                        "Viaje 2: 20 – 27 de marzo de 2027",
                        "Viaje 3: 3 – 10 de abril de 2027",
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
                      Embarque (día 1):{" "}
                      <span className="font-semibold">16:30</span>
                      <br />
                      Desembarque (último día):{" "}
                      <span className="font-semibold">09:00</span>
                    </p>
                    <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      En esta época del año, el tiempo suele ser estable y
                      agradable. En los trópicos puede haber algún chubasco,
                      pero suele durar poco.
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
                  Itinerario (flexible)
                </h2>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  El viaje empieza en Paraty, una magnífica ciudad colonial
                  portuguesa de encanto atemporal y puerta de entrada a una de
                  las regiones costeras más bonitas de Brasil. A bordo del
                  catamarán, rumbo a Ilha Grande entre islas, calas secretas y
                  playas vírgenes con aguas sorprendentemente claras.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Como cada crucero es único, el itinerario se mantiene
                  deliberadamente flexible. El capitán lo ajusta según las
                  condiciones de navegación, el viento y la meteorología para
                  ofrecer una experiencia segura y excepcional, priorizando los
                  mejores fondeos.
                </p>
                <p className="mt-4 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                  Ejemplos de paradas: Saco do Mamanguá, Ilha dos Cocos, Praia
                  dos Meros, Aventureiro… y calas salvajes accesibles solo por
                  mar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-14">
            <div className="container max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-6">
                  <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
                    El catamarán (BV 4.3)
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Catamarán de vela — 13,46 m (año 2012)",
                      "6 huéspedes + 2 tripulación",
                      "3 cabinas dobles",
                      "2 cabinas pequeñas para la tripulación",
                      "2 baños con ducha",
                      "Dinghy",
                      "Desalinizador de agua",
                      "Inversor y generador",
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
                    A bordo
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Skipper de habla inglesa + staff local para descubrir la flora/fauna y la historia de Paraty",
                      "Fotos y vídeos (para revivir cada momento)",
                      "Experiencia culinaria a medida: desayuno, comida y cena a bordo con cocina local variada",
                      "Por comodidad y seguridad: consumo de alcohol moderado y responsable",
                      "Opción: e-Foil Duotone Assist 2026 (con coste adicional)",
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
                  Precios y condiciones
                </h2>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                    <p className="text-[#102F77] font-poppins font-semibold">
                      1. Cabina
                    </p>
                    <p className="mt-2 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      1 persona: 1.700 €
                      <br />2 personas: 2.500 €
                      <br />
                      Grupo: máximo 6 huéspedes
                    </p>
                    <p className="mt-3 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Pago: 50% al confirmar · 50% antes del 15 de febrero de
                      2027
                    </p>
                  </div>
                  <div className="rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                    <p className="text-[#102F77] font-poppins font-semibold">
                      2. Viaje privado
                    </p>
                    <p className="mt-2 text-black font-poppins text-sm sm:text-base leading-[1.92]">
                      Entre 6.000 € y 7.000 € según fechas y número de personas
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[12px] bg-white p-5 ring-1 ring-black/5">
                  <p className="text-[#102F77] font-poppins font-semibold">
                    No incluido / servicios a medida
                  </p>
                  <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Traslado desde Río o São Paulo",
                      "Assistance Plus para alojamiento",
                      "Vuelos y transporte",
                      "Propinas",
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
                    Política de cancelación (motivos personales)
                  </p>
                  <ul className="mt-3 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Entre el depósito y 60 días antes de la salida: reembolso del 50% de lo pagado",
                      "Después de 60 días antes de la salida: viaje no reembolsable",
                      "Recomendamos un seguro de cancelación",
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
                    Cómo llegar
                  </h2>
                  <div className="mt-4">
                    <p className="text-black font-poppins font-semibold">
                      Desde Río de Janeiro
                    </p>
                    <ul className="mt-2 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                      {["Taxi: ~4 h, ~120 $", "Bus: ~6 h, ~20 $"].map((b) => (
                        <li
                          key={b}
                          className="text-black font-poppins text-sm sm:text-base leading-[1.92]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-black font-poppins font-semibold">
                      Desde São Paulo
                    </p>
                    <ul className="mt-2 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                      {["Taxi: ~5 h, ~170 $", "Bus: ~8 h, ~30 $"].map((b) => (
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
                    Requisitos de participación
                  </h2>
                  <ul className="mt-4 grid gap-2 list-disc pl-5 marker:text-[#55BAC6]">
                    {[
                      "Certificado médico válido y vacuna contra la fiebre amarilla",
                      "Seguro médico de viaje personal que cubra accidentes",
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
                      Contacto WhatsApp (Capitán)
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
