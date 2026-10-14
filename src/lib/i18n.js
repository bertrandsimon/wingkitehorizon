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
  "destination-grece": {
    fr: "/destinations/grece",
    en: "/en/destinations/greece",
    es: "/es/destinations/grecia",
  },
  "destination-martinique": {
    fr: "/destinations/martinique",
    en: "/en/destinations/martinique",
    es: "/es/destinations/martinica",
  },
  "destination-bresil": {
    fr: "/destinations/bresil",
    en: "/en/destinations/brazil",
    es: "/es/destinations/brasil",
  },
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
      { label: "Greece cruise", href: "/en/destinations/greece" },
      { label: "Martinique cruise", href: "/en/destinations/martinique" },
      { label: "Brazil cruise", href: "/en/destinations/brazil" },
      { label: "Kite trips", href: "/en/kite-trips" },
      { label: "Coaching", href: "/en/coaching" },
    ];
  }
  if (locale === "es") {
    return [
      { label: "Concepto", href: "/es/concept" },
      { label: "Crucero Grecia", href: "/es/destinations/grecia" },
      { label: "Crucero Martinica", href: "/es/destinations/martinica" },
      { label: "Crucero Brasil", href: "/es/destinations/brasil" },
      { label: "Kite trips", href: "/es/kite-trips" },
      { label: "Coaching", href: "/es/coaching" },
    ];
  }

  return [
    { label: "Le concept", href: "/le-concept" },
    { label: "Croisière Grèce", href: "/destinations/grece" },
    { label: "Croisière Martinique", href: "/destinations/martinique" },
    { label: "Croisière Brésil", href: "/destinations/bresil" },
    { label: "Kite trips", href: "/kite-trips" },
    { label: "Coaching", href: "/coaching" },
  ];
}

export function getHomeHref(locale) {
  if (locale === "en") return "/en";
  if (locale === "es") return "/es";
  return "/";
}
