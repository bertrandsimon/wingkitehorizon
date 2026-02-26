import Image from "next/image";

export default function InternalHero({ title, subtitle, imageSrc, imageAlt }) {
  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] flex items-end overflow-hidden rounded-[10px]">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-black/5" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container max-w-[1200px] mx-auto px-4 py-10 sm:py-14 lg:py-16">
          <h1 className="text-white font-shrikhand text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {title}
          </h1>
          {subtitle
            ? <p className="mt-3 max-w-2xl text-white/90 font-poppins text-sm sm:text-base leading-relaxed">
                {subtitle}
              </p>
            : null}
        </div>
      </div>
    </section>
  );
}
