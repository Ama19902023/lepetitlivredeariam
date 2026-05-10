import type { Metadata } from "next";
import { Fraunces, Caveat, Nunito } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le petit livre de Ariam — Histoires pour les petits rêveurs",
  description:
    "Une collection tendre de livres illustrés pour accompagner les enfants de 1 à 8 ans dans leurs émotions, leurs apprentissages et leurs grands rêves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${caveat.variable} ${nunito.variable}`}
      >
        {children}
      </body>
    </html>
  );
}