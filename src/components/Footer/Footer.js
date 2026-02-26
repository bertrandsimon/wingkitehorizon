"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navItems = [
    { label: "Le concept", href: "/le-concept" },
    { label: "Kite trips", href: "/kite-trips" },
    { label: "Coaching", href: "/coaching" },
  ];

  return (
    <footer className="mt-10 w-full bg-[#102F77] rounded-b-[12px] py-8 sm:py-12 lg:py-16">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-6 sm:gap-8">
          {/* Footer Navigation */}
          <nav className="w-full lg:w-auto">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm sm:text-sm text-white font-poppins transition-colors whitespace-nowrap px-3 py-1 rounded-full hover:bg-[#55BAC6] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/"
                aria-label="Retour à l’accueil"
                className="inline-flex"
              >
                <Image
                  src="/images/logo-wingkite-horizon.png"
                  alt="Wing Kite Horizon"
                  width={202}
                  height={77}
                  className="object-contain w-[160px] sm:w-[190px]"
                />
              </Link>
            </div>
          </nav>

          {/* On vous rappelle Section */}
          <div className="flex flex-col w-full lg:w-auto lg:max-w-[379px]">
            <h3 className="text-white text-sm sm:text-sm font-poppins mb-2">
              On vous rappelle
            </h3>
            <p className="text-[#c2c2c2] text-xs sm:text-sm font-poppins font-light mb-4">
              Un membre de l’équipe vous contacte pour répondre à vos questions,
              vérifier votre niveau en kitesurf et vous présenter les prochaines
              dates disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <input
                type="tel"
                placeholder="Téléphone"
                className="bg-white/10 border border-white/20 rounded-[6px] h-[34px] px-3 text-white placeholder-white/60 text-sm sm:text-sm font-poppins focus:outline-none focus:border-[#55BAC6] transition-colors w-full sm:w-[200px] lg:w-[270px]"
              />
              <button
                type="button"
                className="bg-[#55BAC6] rounded-[8px] h-[34px] px-4 text-white text-xs sm:text-sm font-poppins uppercase hover:bg-[#DF986C] transition-colors whitespace-nowrap"
              >
                ok
              </button>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4 items-center">
              <a
                href="/"
                className="flex items-center justify-center w-[28px] h-[32px] text-white/90 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-2xl" />
              </a>
              <a
                href="/"
                className="flex items-center justify-center w-[29px] h-[29px] text-white/90 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#4e4e4e]">
          <p className="text-white text-xs sm:text-sm lg:text-sm font-poppins text-center">
            2026 Wing Kite Horizon. Droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
