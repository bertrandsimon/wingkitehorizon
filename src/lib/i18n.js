export const LOCALES = ["fr", "en"];

export function getLocaleFromPathname(pathname) {
  if (!pathname) return "fr";
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

export function isHomePath(pathname) {
  return pathname === "/" || pathname === "/en";
}

const frToEn = {
  "/": "/en",
  "/le-concept": "/en/concept",
  "/kite-trips": "/en/kite-trips",
  "/coaching": "/en/coaching",
};

const enToFr = {
  "/en": "/",
  "/en/concept": "/le-concept",
  "/en/kite-trips": "/kite-trips",
  "/en/coaching": "/coaching",
};

export function getLocaleSwitchHref(pathname, targetLocale) {
  const normalized = pathname || "/";
  if (targetLocale === "en") {
    return frToEn[normalized] || `/en${normalized === "/" ? "" : normalized}`;
  }
  return enToFr[normalized] || normalized.replace(/^\/en(\/|$)/, "/");
}

export function getNavItems(locale) {
  if (locale === "en") {
    return [
      { label: "Concept", href: "/en/concept" },
      { label: "Kite trips", href: "/en/kite-trips" },
      { label: "Coaching", href: "/en/coaching" },
    ];
  }

  return [
    { label: "Le concept", href: "/le-concept" },
    { label: "Kite trips", href: "/kite-trips" },
    { label: "Coaching", href: "/coaching" },
  ];
}

export function getHomeHref(locale) {
  return locale === "en" ? "/en" : "/";
}

