/**
 * SEO metadata for Wing Kite Horizon - FR & EN
 * Update SITE_URL when deploying (e.g. https://wingkitehorizon.com)
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wingkitehorizon.com";

export const SEO = {
  fr: {
    home: {
      title: "Wing Kite Horizon | Croisière Kitesurf & Wingfoil en Grèce",
      description:
        "Croisière sportive kitesurf et wingfoil dans les Cyclades. Coaching personnalisé, spots secrets, vie à bord. Réservez votre aventure en mer.",
      keywords: "kitesurf Grèce, wingfoil Cyclades, croisière kitesurf, coaching wingfoil, Paros, Naxos, Antiparos",
    },
    concept: {
      title: "Le Concept | Wing Kite Horizon",
      description:
        "Découvrez le concept Wing Kite Horizon : croisière coaching kitesurf & wingfoil en Grèce, navigation entre îles, spots et vie à bord.",
      keywords: "concept croisière kitesurf, wingfoil Grèce, coaching catamaran, Cyclades",
    },
    "kite-trips": {
      title: "Kite Trips | Wing Kite Horizon",
      description:
        "Kite trips en Grèce : itinéraires flexibles, spots (Paros, Naxos, Ios, Koufonisi), organisation à bord et expérience ride.",
      keywords: "kite trip Grèce, itinéraire Cyclades, spots kitesurf, croisière wingfoil",
    },
    coaching: {
      title: "Coaching | Wing Kite Horizon",
      description:
        "Coaching kitesurf & wingfoil : progression, sécurité, conseils matériel, vidéos et accompagnement sur-mesure en croisière.",
      keywords: "coaching kitesurf, coaching wingfoil, progression, Grèce, croisière",
    },
  },
  en: {
    home: {
      title: "Wing Kite Horizon | Kitesurf & Wingfoil Cruise in Greece",
      description:
        "Kitesurf and wingfoil sport cruise in the Cyclades. Personalized coaching, secret spots, life on board. Book your sea adventure.",
      keywords: "kitesurf Greece, wingfoil Cyclades, kitesurf cruise, wingfoil coaching, Paros, Naxos, Antiparos",
    },
    concept: {
      title: "The Concept | Wing Kite Horizon",
      description:
        "Discover the Wing Kite Horizon concept: kitesurf & wingfoil coaching cruise in Greece, sailing between islands, spots and life on board.",
      keywords: "kitesurf cruise concept, wingfoil Greece, catamaran coaching, Cyclades",
    },
    "kite-trips": {
      title: "Kite Trips | Wing Kite Horizon",
      description:
        "Kite trips in Greece: flexible routes, spots (Paros, Naxos, Ios, Koufonisi), on-board organization and ride experience.",
      keywords: "kite trip Greece, Cyclades route, kitesurf spots, wingfoil cruise",
    },
    coaching: {
      title: "Coaching | Wing Kite Horizon",
      description:
        "Kitesurf & wingfoil coaching: progression, safety, gear tips, videos and tailor-made guidance on a cruise.",
      keywords: "kitesurf coaching, wingfoil coaching, progression, Greece, cruise",
    },
  },
};

const DEFAULT_OG_IMAGE = "/images/concept.jpg";

export function buildMetadata({ title, description, keywords, path, locale }) {
  const url = `${SITE_URL}${path}`;
  const ogImage = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Wing Kite Horizon", url: SITE_URL }],
    creator: "Wing Kite Horizon",
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
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
        "fr-FR": path.startsWith("/en")
          ? `${SITE_URL}${path.replace("/en", "").replace("/concept", "/le-concept") || "/"}`
          : url,
        "en-GB": path.startsWith("/en")
          ? url
          : `${SITE_URL}/en${path === "/" ? "" : path.replace("/le-concept", "/concept")}`,
        "x-default": path.startsWith("/en") ? `${SITE_URL}${path}` : `${SITE_URL}${path}`,
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
