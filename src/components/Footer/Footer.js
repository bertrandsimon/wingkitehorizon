"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getHomeHref, getLocaleFromPathname, getNavItems } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const navItems = getNavItems(locale);

  return (
    <footer className="mt-6 sm:mt-8 w-full bg-black rounded-b-[12px] py-5 sm:py-6">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-4 sm:gap-6 items-start">
          {/* Footer Navigation */}
          <nav className="w-full lg:w-auto">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-5">
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

            <div className="mt-4">
              <Link
                href={getHomeHref(locale)}
                aria-label={locale === "en" ? "Back to home" : "Retour à l’accueil"}
                className="inline-flex"
              >
                <Image
                  src="/images/logo-wingkite-horizon.png"
                  alt="Wing Kite Horizon"
                  width={202}
                  height={77}
                  className="object-contain w-[140px] sm:w-[160px]"
                />
              </Link>
            </div>
          </nav>

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

        {/* Copyright */}
        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/15">
          <p className="text-white/80 text-xs sm:text-sm font-poppins text-center">
            {locale === "en"
              ? "2026 Wing Kite Horizon. All rights reserved"
              : "2026 Wing Kite Horizon. Droits réservés"}
          </p>
        </div>
      </div>
    </footer>
  );
}
