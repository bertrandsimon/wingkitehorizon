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

export const metadata = {
  title: "Wing Kite Horizon",
  description:
    "Wing Kite Horizon - école et expériences de wingfoil et kitesurf.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${roboto.variable} ${shrikhand.variable} ${poppins.variable} antialiased min-h-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
