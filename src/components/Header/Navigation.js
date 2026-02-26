"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ isSticky = false }) {
  const pathname = usePathname();
  const navItems = [
    { label: "Le concept", href: "/le-concept" },
    { label: "Kite trips", href: "/kite-trips" },
    { label: "Coaching", href: "/coaching" },
  ];

  return (
    <nav>
      {isSticky
        ? <div className="flex items-center gap-3 sm:gap-4 lg:gap-8 flex-wrap justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm sm:text-sm font-poppins transition-colors whitespace-nowrap px-3 py-1 rounded-full hover:bg-[#55BAC6] hover:text-white ${
                  pathname === item.href
                    ? "bg-[#55BAC6] text-white"
                    : "text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        : <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-8 flex-wrap justify-center">
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
          </div>}
    </nav>
  );
}
