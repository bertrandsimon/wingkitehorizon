/**
 * SEO metadata for Wing Kite Horizon - FR, EN & ES
 * Update SITE_URL when deploying (e.g. https://wingkitehorizon.com)
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wingkitehorizon.com";

export const SEO = {
  fr: {
    home: {
      title: "Wing Kite Horizon | Croisière Kitesurf & Wingfoil en Grèce",
      description:
        "Croisière sportive kitesurf et wingfoil dans les Cyclades. Coaching personnalisé, spots secrets, vie à bord. Réservez votre aventure en mer.",
      keywords:
        "kitesurf Grèce, wingfoil Cyclades, croisière kitesurf, coaching wingfoil, Paros, Naxos, Antiparos",
    },
    concept: {
      title: "Le Concept | Wing Kite Horizon",
      description:
        "Découvrez le concept Wing Kite Horizon : croisière coaching kitesurf & wingfoil en Grèce, navigation entre îles, spots et vie à bord.",
      keywords:
        "concept croisière kitesurf, wingfoil Grèce, coaching catamaran, Cyclades",
    },
    "kite-trips": {
      title: "Kite Trips | Wing Kite Horizon",
      description:
        "Kite trips en Grèce : itinéraires flexibles, spots (Paros, Naxos, Ios, Koufonisi), organisation à bord et expérience ride.",
      keywords:
        "kite trip Grèce, itinéraire Cyclades, spots kitesurf, croisière wingfoil",
    },
    coaching: {
      title: "Coaching | Wing Kite Horizon",
      description:
        "Coaching kitesurf & wingfoil : progression, sécurité, conseils matériel, vidéos et accompagnement sur-mesure en croisière.",
      keywords:
        "coaching kitesurf, coaching wingfoil, progression, Grèce, croisière",
    },
    "la-croisiere": {
      title: "La Croisière | Wing Kite Horizon",
      description:
        "Vivez un séjour kite à Paros inoubliable : kite trip en bateau, navigation selon les conditions, coaching personnalisé et exploration des Cyclades.",
      keywords:
        "séjour kite Paros, kite trip bateau, croisière kitesurf, Cyclades, coaching kitesurf, Meltem",
    },
  },
  en: {
    home: {
      title: "Wing Kite Horizon | Kitesurf & Wingfoil Cruise in Greece",
      description:
        "Kitesurf and wingfoil sport cruise in the Cyclades. Personalized coaching, secret spots, life on board. Book your sea adventure.",
      keywords:
        "kitesurf Greece, wingfoil Cyclades, kitesurf cruise, wingfoil coaching, Paros, Naxos, Antiparos",
    },
    concept: {
      title: "The Concept | Wing Kite Horizon",
      description:
        "Discover the Wing Kite Horizon concept: kitesurf & wingfoil coaching cruise in Greece, sailing between islands, spots and life on board.",
      keywords:
        "kitesurf cruise concept, wingfoil Greece, catamaran coaching, Cyclades",
    },
    "kite-trips": {
      title: "Kite Trips | Wing Kite Horizon",
      description:
        "Kite trips in Greece: flexible routes, spots (Paros, Naxos, Ios, Koufonisi), on-board organization and ride experience.",
      keywords:
        "kite trip Greece, Cyclades route, kitesurf spots, wingfoil cruise",
    },
    coaching: {
      title: "Coaching | Wing Kite Horizon",
      description:
        "Kitesurf & wingfoil coaching: progression, safety, gear tips, videos and tailor-made guidance on a cruise.",
      keywords:
        "kitesurf coaching, wingfoil coaching, progression, Greece, cruise",
    },
    cruise: {
      title: "The Cruise | Wing Kite Horizon",
      description:
        "An unforgettable kite stay in Paros: a unique boat-based kite trip combining sailing, coaching, progression and Cyclades exploration.",
      keywords:
        "Paros kitesurf trip, boat kite trip, kitesurf cruise, Cyclades, coaching, Meltem",
    },
  },
  es: {
    home: {
      title: "Wing Kite Horizon | Crucero de Kitesurf y Wingfoil en Grecia",
      description:
        "Crucero deportivo de kitesurf y wingfoil en las Cícladas. Coaching personalizado, spots secretos y vida a bordo. Reserva tu aventura en el mar.",
      keywords:
        "kitesurf Grecia, wingfoil Cícladas, crucero kitesurf, coaching wingfoil, Paros, Naxos, Antíparos",
    },
    concept: {
      title: "El Concepto | Wing Kite Horizon",
      description:
        "Descubre el concepto Wing Kite Horizon: crucero con coaching de kitesurf y wingfoil en Grecia, navegando entre islas, spots y vida a bordo.",
      keywords:
        "concepto crucero kitesurf, wingfoil Grecia, coaching catamarán, Cícladas",
    },
    "kite-trips": {
      title: "Kite Trips | Wing Kite Horizon",
      description:
        "Kite trips en Grecia: rutas flexibles, spots (Paros, Naxos, Ios, Koufonisi), organización a bordo y experiencia de navegación.",
      keywords:
        "kite trip Grecia, ruta Cícladas, spots kitesurf, crucero wingfoil",
    },
    coaching: {
      title: "Coaching | Wing Kite Horizon",
      description:
        "Coaching de kitesurf y wingfoil: progresión, seguridad, consejos de material, vídeo y acompañamiento a medida en un crucero.",
      keywords:
        "coaching kitesurf, coaching wingfoil, progresión, Grecia, crucero",
    },
    cruise: {
      title: "El Crucero | Wing Kite Horizon",
      description:
        "Una estancia de kite inolvidable en Paros: un kite trip en barco que combina navegación, coaching, progresión y exploración de las Cícladas.",
      keywords:
        "viaje kitesurf Paros, kite trip barco, crucero kitesurf, Cícladas, coaching, Meltemi",
    },
  },
};

const DEFAULT_OG_IMAGE = "/images/concept.jpg";

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

function toLocalePath(path, targetLocale) {
  const normalized = path || "/";

  const routeKey = Object.keys(ROUTES).find((key) => {
    const paths = ROUTES[key];
    return (
      paths.fr === normalized ||
      paths.en === normalized ||
      paths.es === normalized
    );
  });

  if (routeKey && ROUTES[routeKey]?.[targetLocale]) {
    return ROUTES[routeKey][targetLocale];
  }

  // Best-effort fallback for unknown routes: keep remainder and swap prefix.
  let base = normalized;
  if (base === "/en" || base.startsWith("/en/"))
    base = base.replace(/^\/en/, "") || "/";
  if (base === "/es" || base.startsWith("/es/"))
    base = base.replace(/^\/es/, "") || "/";

  if (targetLocale === "fr") return base;
  const prefix = targetLocale === "en" ? "/en" : "/es";
  return base === "/" ? prefix : `${prefix}${base}`;
}

export function buildMetadata({ title, description, keywords, path, locale }) {
  const url = `${SITE_URL}${path}`;
  const ogImage = `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  const frUrl = `${SITE_URL}${toLocalePath(path, "fr")}`;
  const enUrl = `${SITE_URL}${toLocalePath(path, "en")}`;
  const esUrl = `${SITE_URL}${toLocalePath(path, "es")}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Wing Kite Horizon", url: SITE_URL }],
    creator: "Wing Kite Horizon",
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : locale === "es" ? "es_ES" : "en_GB",
      url,
      siteName: "Wing Kite Horizon",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": frUrl,
        "en-GB": enUrl,
        "es-ES": esUrl,
        "x-default": frUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    verification: {
      // Add when you have them: google: '...', yandex: '...'
    },
  };
}
