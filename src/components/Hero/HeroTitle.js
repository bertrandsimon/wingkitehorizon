import Image from "next/image";

export default function HeroTitle({ slide }) {
  return (
    <div className="text-left pl-6 sm:pl-10 lg:pl-[120px]">
      <div className="inline-block">
        <p
          className="text-7xl font-semibold text-white leading-none font-sans text-left animate__animated animate__fadeInLeftSoft"
          style={{
            animationDelay: "0s",
            animationDuration: "1s",
            animationTimingFunction: "ease",
          }}
        >
          {slide.title1}
        </p>
        <p
          className="text-6xl font-semibold text-[#102F77] leading-none font-sans text-right animate__animated animate__fadeInRightSoft"
          style={{
            animationDelay: "0.35s",
            animationDuration: "1s",
            animationTimingFunction: "ease",
          }}
        >
          {slide.title2}
        </p>
        <div className="flex items-center justify-end">
          <p
            className="text-sm sm:text-sm lg:text-xl text-white text-right mb-0 mr-2 sm:mr-4 mt-4 animate__animated animate__fadeInUp"
            style={{
              animationDelay: "0.7s",
              animationDuration: "1s",
              animationTimingFunction: "ease",
            }}
          >
            {slide.taglineLine1}{" "}
            <span className="font-display italic">{slide.taglineEmphasis}</span>
            <br />
            <span className="block text-right">{slide.taglineLine2}</span>
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
