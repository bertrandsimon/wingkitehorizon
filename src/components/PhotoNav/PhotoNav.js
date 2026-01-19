"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Title from "@/components/Title/Title";

export default function PhotoNav({
  title = "Le plus court chemin",
  subtitle = "vers le bout du monde",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  const { theme } = useTheme();
  // Text on photos should be white in light mode
  const textColor = theme === "light" ? "text-white" : "text-white";

  const photoItems = [
    {
      id: 1,
      image:
        "http://localhost:3845/assets/91687f06eea91ae06600507417a9c26e6b205d82.png",
      width: "598px",
      height: "317px",
      title: "Bromo",
      subtitle: "Indonésie",
    },
    {
      id: 2,
      image:
        "http://localhost:3845/assets/4c7be0da65259486a5753f3f2f543f9b9c54a0f2.png",
      width: "377px",
      height: "317px",
      title: "Bromo",
      subtitle: "Indonésie",
    },
    {
      id: 3,
      image:
        "http://localhost:3845/assets/a34fd127f9df0681e3e1898dfdf3f78b2da33ded.png",
      width: "379px",
      height: "317px",
      title: "Bromo",
      subtitle: "Indonésie",
    },
    {
      id: 4,
      image:
        "http://localhost:3845/assets/babc473d572c2b698dd4456f8256e9b6a305008a.png",
      width: "602px",
      height: "317px",
      title: "Bromo",
      subtitle: "Indonésie",
    },
  ];

  return (
    <>
      <Title title1={title} title2={subtitle} description={description} />
      <div className="w-full pb-8 sm:pb-12 lg:pb-30 flex justify-center">
        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[1200px] px-4">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <div
              className="relative rounded-[12px] overflow-hidden flex-1 h-[200px] sm:h-[250px] lg:h-[317px]"
              style={{
                backgroundImage: photoItems[0].image
                  ? `url(${photoItems[0].image})`
                  : "rgba(0, 0, 0, 0.05)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 flex items-start justify-start">
                <div className="flex flex-col">
                  <p className={`${textColor} text-xs sm:text-sm font-medium`}>
                    {photoItems[0].title}
                  </p>
                  <p className={`${textColor} text-base sm:text-xl font-bold`}>
                    {photoItems[0].subtitle}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative rounded-[12px] overflow-hidden flex-[0.63] sm:flex-[0.63] h-[200px] sm:h-[250px] lg:h-[317px]"
              style={{
                backgroundImage: photoItems[1].image
                  ? `url(${photoItems[1].image})`
                  : "rgba(0, 0, 0, 0.05)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 flex items-start justify-start">
                <div className="flex flex-col">
                  <p className={`${textColor} text-xs sm:text-sm font-medium`}>
                    {photoItems[1].title}
                  </p>
                  <p className={`${textColor} text-base sm:text-xl font-bold`}>
                    {photoItems[1].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <div
              className="relative rounded-[12px] overflow-hidden flex-[0.63] sm:flex-[0.63] h-[200px] sm:h-[250px] lg:h-[317px]"
              style={{
                backgroundImage: photoItems[2].image
                  ? `url(${photoItems[2].image})`
                  : "rgba(0, 0, 0, 0.08)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 flex items-start justify-start">
                <div className="flex flex-col">
                  <p className={`${textColor} text-xs sm:text-sm font-medium`}>
                    {photoItems[2].title}
                  </p>
                  <p className={`${textColor} text-base sm:text-xl font-bold`}>
                    {photoItems[2].subtitle}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative rounded-[12px] overflow-hidden flex-1 h-[200px] sm:h-[250px] lg:h-[317px]"
              style={{
                backgroundImage: photoItems[3].image
                  ? `url(${photoItems[3].image})`
                  : "rgba(0, 0, 0, 0.05)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 flex items-start justify-start">
                <div className="flex flex-col">
                  <p className={`${textColor} text-xs sm:text-sm font-medium`}>
                    {photoItems[3].title}
                  </p>
                  <p className={`${textColor} text-base sm:text-xl font-bold`}>
                    {photoItems[3].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
