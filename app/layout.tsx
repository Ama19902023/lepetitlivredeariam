import type { Metadata } from "next";
import "./globals.css";
import CartProvider from "./components/CartProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lescahiersdeariam.fr"),

  title: {
    default: "Les cahiers d'Ariam | Cahiers éducatifs pour enfants",
    template: "%s | Les cahiers d'Ariam",
  },

  description:
    "Découvrez Les cahiers d'Ariam : cahiers éducatifs, imagiers et supports d’apprentissage pour accompagner les enfants dans leurs découvertes, leur autonomie et leurs premiers apprentissages.",

  keywords: [
    "cahier éducatif enfant",
    "busy book enfant",
    "livret activité enfant",
    "imagier enfant",
    "activité éducative",
    "motricité fine",
    "apprentissage enfant",
    "cahier maternelle",
    "Les Cahiers d'Ariam",
  ],

  creator: "Les cahiers d'Ariam",
  publisher: "Les cahiers d'Ariam",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.lescahiersdeariam.fr",
    siteName: "Les cahiers d'Ariam",
    title: "Les cahiers d'Ariam | Cahiers éducatifs pour enfants",
    description:
      "Des cahiers éducatifs et ludiques pensés pour accompagner les enfants dans leurs découvertes et leurs premiers apprentissages.",
    images: [
      {
        url: "/products/busy-book-18-mois.png",
        width: 1200,
        height: 1200,
        alt: "Les cahiers d'Ariam - Mon Busy Book",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Les cahiers d'Ariam",
    description:
      "Cahiers éducatifs et supports d’apprentissage pour enfants.",
    images: ["/products/busy-book-18-mois.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}