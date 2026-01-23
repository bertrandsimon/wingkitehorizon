"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useContactModal } from "@/contexts/ContactModalContext";
import Navigation from "./Navigation";
import TopToolbar from "./TopToolbar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { open: openContact } = useContactModal();

  useEffect(() => {
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
  }, []);

  const containerClass = isSticky
    ? "container max-w-[1260px] px-2 sm:px-4"
    : "container max-w-[1200px] px-2 sm:px-4";

  const renderHeaderContent = () => (
    <div className={containerClass}>
      <div className="flex items-center justify-between py-2 sm:py-4">
        <div
          className="h-[50px] w-[110px] sm:h-[69px] sm:w-[148px] relative flex-shrink-0"
          data-name="Wing Kite Horizon logo"
        >
          <div
            className="absolute inset-0 pointer-events-none"
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
              width={148}
              height={69}
            />
          </div>
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
          className={`md:hidden p-2 ${isSticky ? "text-black" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
        <div
          className={`md:hidden mt-4 pb-4 border-t ${
            isSticky ? "border-black/20" : "border-white/20"
          }`}
        >
          <div className="pt-4 space-y-4">
            <Navigation isSticky={isSticky} />
            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => {
                  openContact();
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer bg-black text-white px-4 py-2 rounded-full text-sm font-poppins hover:bg-[#55BAC6] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {!isSticky && (
        <header className="absolute top-0 left-0 right-0 z-50 pt-2 sm:pt-4 px-2 sm:px-4">
          {renderHeaderContent()}
        </header>
      )}
      {isSticky && (
        <>
          <div
            className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1260px] px-2 sm:px-4 pt-[40px] pb-4 sm:pb-6 bg-[#EFEEF1]"
          >
            <TopToolbar isSticky />
          </div>
          <header
            className="fixed top-[90px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[1260px] px-2 sm:px-4 rounded-t-[12px] bg-white"
          >
            {renderHeaderContent()}
          </header>
        </>
      )}
    </>
  );
}
