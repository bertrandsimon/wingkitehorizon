/** biome-ignore-all lint/a11y/useButtonType: buttons are used for navigation, not form submission */
"use client";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import HeroTitle from "./HeroTitle";
import SearchForm from "./SearchForm";
export default function HeroSection() {
  const slides = [
    {
      image: "/images/slider1.jpg",
      title1: "Croisière coaching",
      title2: "kitesurf & wingsurf",
      taglineLine1: "Votre aventure",
      taglineEmphasis: "inoubliable",
      taglineLine2: "commence ici",
    },
    {
      image: "/images/slider2.jpg",
      title1: "Naviguer en Grèce",
      title2: "îles, criques & vent",
      taglineLine1: "Dépaysement",
      taglineEmphasis: "garanti",
      taglineLine2: "chaque jour",
    },
    {
      image: "/images/slider3.jpg",
      title1: "Kite & Wing",
      title2: "apprendre & progresser",
      taglineLine1: "Coaching",
      taglineEmphasis: "sur-mesure",
      taglineLine2: "à votre rythme",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 rounded-[10px] overflow-hidden">
        <div className="relative w-full h-full overflow-hidden pointer-events-none rounded-[10px]">
          <Image
            key={slides[currentIndex].image}
            src={slides[currentIndex].image}
            alt="Hero background"
            fill
            className="object-cover transition-opacity duration-500"
            style={{ objectPosition: "center top" }}
          />
        </div>
      </div>

      {/* Kiter overlay */}
      {currentIndex === 0 ? (
        <div className="absolute top-0 left-0 sm:left-2 lg:left-4 z-5 pointer-events-none">
          <Image
            src="/images/kiter.png"
            alt="Kiter"
            width={420}
            height={420}
            className="w-[200px] sm:w-[260px] lg:w-[340px] h-auto"
          />
        </div>
      ) : null}

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-2 sm:left-4 lg:left-8 z-20 p-2 text-white hover:text-[#df986c] transition-colors cursor-pointer items-center h-full"
        aria-label="Previous slide"
      >
        <ArrowLongLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Content */}
      <div className="relative z-20 container max-w-[1200px] px-4 py-16 sm:py-24 lg:py-32 flex items-center justify-start">
        <div className="max-w-5xl text-left w-full px-2">
          <HeroTitle key={currentIndex} slide={slides[currentIndex]} />

          <SearchForm />
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-2 sm:right-4 lg:right-8 z-20 p-2 text-white hover:text-[#df986c] transition-colors cursor-pointer items-center h-full"
        aria-label="Next slide"
      >
        <ArrowLongRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </section>
  );
}
