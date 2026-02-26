"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useContactModal } from "@/contexts/ContactModalContext";
import Navigation from "./Navigation";
import TopToolbar from "./TopToolbar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const forceSticky = pathname !== "/";
  const [isSticky, setIsSticky] = useState(forceSticky);
  const { open: openContact } = useContactModal();
  const navItems = [
    { label: "Le concept", href: "/le-concept" },
    { label: "Kite trips", href: "/kite-trips" },
    { label: "Coaching", href: "/coaching" },
  ];

  useEffect(() => {
    if (forceSticky) {
      setIsSticky(true);
      return;
    }

    const handleScroll = () => {
      const shouldStick = window.scrollY > 20;
      setIsSticky(shouldStick);
      if (!shouldStick) {
        setIsMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceSticky]);

  useEffect(() => {
    if (!pathname) return;
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const containerClass = isSticky
    ? "container max-w-[1260px] px-2 sm:px-4"
    : "container max-w-[1200px] px-2 sm:px-4";

  const renderHeaderContent = () => (
    <div className={`${containerClass} relative`}>
      <div className="grid grid-cols-3 items-center py-2 sm:py-4 md:flex md:items-center md:justify-between">
        <div
          className="h-[77px] w-[202px] relative flex-shrink-0 col-start-2 justify-self-center md:col-auto md:justify-self-auto"
          data-name="Wing Kite Horizon logo"
        >
          <Link
            href="/"
            aria-label="Aller à l’accueil"
            className="absolute inset-0"
            style={{ overflow: "hidden" }}
          >
            <Image
              src={
                isSticky
                  ? "/images/logo-wingkite-horizon-black.png"
                  : "/images/logo-wingkite-horizon.png"
              }
              alt="Wing Kite Horizon Logo"
              className="object-contain"
              width={202}
              height={77}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navigation isSticky={isSticky} />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={openContact}
            className="cursor-pointer bg-black text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-poppins hover:bg-[#55BAC6] transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`md:hidden p-2 rounded-full transition-colors ${
            isSticky
              ? "text-black hover:bg-black/5"
              : "text-black bg-white/90 hover:bg-white"
          }`}
          style={{ justifySelf: "end" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-2 right-2 sm:left-4 sm:right-4 top-full mt-2 rounded-[12px] bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.18)] ring-1 ring-black/5 overflow-hidden">
          <nav className="p-2">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full px-4 py-3 rounded-[10px] font-poppins text-base transition-colors text-center ${
                    pathname === item.href
                      ? "bg-[#55BAC6] text-white"
                      : "text-black hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-black/10">
              <button
                type="button"
                onClick={() => {
                  openContact();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full cursor-pointer bg-black text-white px-4 py-3 rounded-[10px] text-base font-poppins hover:bg-[#55BAC6] transition-colors text-center"
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );

  return (
    <>
      {forceSticky ? (
        <div aria-hidden className="h-[170px] sm:h-[190px]" />
      ) : null}
      {!isSticky && (
        <header className="absolute top-0 left-0 right-0 z-50 pt-2 sm:pt-4 px-2 sm:px-4">
          {renderHeaderContent()}
        </header>
      )}
      {isSticky && (
        <>
          <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1260px] px-2 sm:px-4 pt-[40px] pb-4 sm:pb-6 bg-[#EFEEF1]">
            <TopToolbar isSticky />
          </div>
          <header className="fixed top-[90px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[1260px] px-2 sm:px-4 rounded-t-[12px] bg-white">
            {renderHeaderContent()}
          </header>
        </>
      )}
    </>
  );
}
