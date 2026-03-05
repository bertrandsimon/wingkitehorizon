import { Poppins, Roboto, Shrikhand } from "next/font/google";
import Providers from "./Providers";
import "animate.css";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const shrikhand = Shrikhand({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-shrikhand",
});

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

import { headers } from "next/headers";
import { SITE_URL } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wing Kite Horizon | Croisière Kitesurf & Wingfoil en Grèce",
  },
  description:
    "Croisière sportive kitesurf et wingfoil dans les Cyclades. Coaching personnalisé, spots secrets, vie à bord. Réservez votre aventure en mer.",
  keywords: ["kitesurf Grèce", "wingfoil Cyclades", "croisière kitesurf", "coaching wingfoil", "Paros", "Naxos"],
  authors: [{ name: "Wing Kite Horizon", url: SITE_URL }],
  creator: "Wing Kite Horizon",
  openGraph: {
    type: "website",
    siteName: "Wing Kite Horizon",
    images: [{ url: "/images/concept.jpg", width: 1200, height: 630, alt: "Wing Kite Horizon" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") || "fr";
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${roboto.variable} ${shrikhand.variable} ${poppins.variable} antialiased min-h-screen overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
