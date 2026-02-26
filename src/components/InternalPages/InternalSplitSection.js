import Image from "next/image";

export default function InternalSplitSection({
  title,
  paragraphs = [],
  bullets = [],
  imageSrc,
  imageAlt,
  imageSide = "right",
}) {
  const isImageLeft = imageSide === "left";

  return (
    <section className="mt-10 sm:mt-14">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div
            className={`lg:col-span-6 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="relative w-full aspect-[16/11] rounded-[10px] overflow-hidden bg-black/5">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            className={`lg:col-span-6 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
          >
            <h2 className="text-[#102F77] font-shrikhand text-2xl sm:text-3xl leading-tight">
              {title}
            </h2>

            {paragraphs.map((p) => (
              <p
                key={p}
                className="mt-3 text-black/80 font-poppins text-sm sm:text-base leading-relaxed"
              >
                {p}
              </p>
            ))}

            {bullets?.length
              ? <ul className="mt-4 grid gap-2">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-black/80 font-poppins text-sm sm:text-base"
                    >
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[#55BAC6] flex-shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}
