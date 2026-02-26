import Image from "next/image";

export default function HeroTitle({ slide }) {
  return (
    <div className="text-center sm:text-left px-4 sm:px-0 sm:pl-10 lg:pl-[120px]">
      <div className="inline-block">
        <p
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white leading-none font-sans text-center sm:text-left animate__animated animate__fadeInLeftSoft"
          style={{
            animationDelay: "0s",
            animationDuration: "1s",
            animationTimingFunction: "ease",
          }}
        >
          {slide.title1}
        </p>
        <p
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#102F77] leading-none font-sans text-center sm:text-right animate__animated animate__fadeInRightSoft"
          style={{
            animationDelay: "0.35s",
            animationDuration: "1s",
            animationTimingFunction: "ease",
          }}
        >
          {slide.title2}
        </p>
        <div className="flex items-center justify-center sm:justify-end">
          <p
            className="text-xs sm:text-sm lg:text-xl text-white text-center sm:text-right mb-0 mr-2 sm:mr-4 mt-4 animate__animated animate__fadeInUp"
            style={{
              animationDelay: "0.7s",
              animationDuration: "1s",
              animationTimingFunction: "ease",
            }}
          >
            {slide.taglineLine1}{" "}
            <span className="font-display italic">{slide.taglineEmphasis}</span>
            <br />
            <span className="block text-center sm:text-right">
              {slide.taglineLine2}
            </span>
          </p>
          <div className="ml-[8px]">
            <Image
              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              src="/images/arrow-right.png"
              alt="arrow-right"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
