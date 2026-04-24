export const LOCALES = ["fr", "en", "es"];

export function getLocaleFromPathname(pathname) {
  if (!pathname) return "fr";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "fr";
}

export function isHomePath(pathname) {
  return pathname === "/" || pathname === "/en" || pathname === "/es";
}

const ROUTES = {
  home: { fr: "/", en: "/en", es: "/es" },
  concept: { fr: "/le-concept", en: "/en/concept", es: "/es/concept" },
  cruise: { fr: "/la-croisiere", en: "/en/cruise", es: "/es/cruise" },
  "kite-trips": {
    fr: "/kite-trips",
    en: "/en/kite-trips",
    es: "/es/kite-trips",
  },
  coaching: { fr: "/coaching", en: "/en/coaching", es: "/es/coaching" },
};

const PATH_TO_ROUTE_KEY = Object.entries(ROUTES).reduce(
  (acc, [key, paths]) => {
    Object.entries(paths).forEach(([locale, path]) => {
      acc[locale][path] = key;
    });
    return acc;
  },
  { fr: {}, en: {}, es: {} },
);

function stripLocalePrefix(pathname) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.replace(/^\/en/, "");
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.replace(/^\/es/, "");
  return pathname;
}

function applyLocalePrefix(pathname, targetLocale) {
  if (targetLocale === "fr") return pathname === "/" ? "/" : pathname;
  const prefix = targetLocale === "en" ? "/en" : "/es";
  return pathname === "/" ? prefix : `${prefix}${pathname}`;
}

export function getLocaleSwitchHref(pathname, targetLocale) {
  const normalized = pathname || "/";
  const currentLocale = getLocaleFromPathname(normalized);

  const routeKey = PATH_TO_ROUTE_KEY[currentLocale]?.[normalized];
  if (routeKey && ROUTES[routeKey]?.[targetLocale]) {
    return ROUTES[routeKey][targetLocale];
  }

  // Fallback: keep same path, switch locale prefix (best effort for unknown routes).
  const base = stripLocalePrefix(normalized);
  return applyLocalePrefix(base, targetLocale);
}

export function getNavItems(locale) {
  if (locale === "en") {
    return [
      { label: "Concept", href: "/en/concept" },
      { label: "Cruise", href: "/en/cruise" },
      { label: "Kite trips", href: "/en/kite-trips" },
      { label: "Coaching", href: "/en/coaching" },
    ];
  }
  if (locale === "es") {
    return [
      { label: "Concepto", href: "/es/concept" },
      { label: "Crucero", href: "/es/cruise" },
      { label: "Kite trips", href: "/es/kite-trips" },
      { label: "Coaching", href: "/es/coaching" },
    ];
  }

  return [
    { label: "Le concept", href: "/le-concept" },
    { label: "La croisière", href: "/la-croisiere" },
    { label: "Kite trips", href: "/kite-trips" },
    { label: "Coaching", href: "/coaching" },
  ];
}

export function getHomeHref(locale) {
  if (locale === "en") return "/en";
  if (locale === "es") return "/es";
  return "/";
}
