import type { Metadata } from "next";
import "./globals.css";
import CartProvider from "./components/CartProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lescahiersdeariam.fr"),

  title: {
    default: "Les Cahiers de Ariam | Cahiers éducatifs pour enfants",
    template: "%s | Les Cahiers de Ariam",
  },

  description:
    "Découvrez Les Cahiers de Ariam : cahiers éducatifs, imagiers et supports d’apprentissage pour accompagner les enfants dans leurs découvertes, leur autonomie et leurs premiers apprentissages.",

  keywords: [
    "cahier éducatif enfant",
    "busy book enfant",
    "livret activité enfant",
    "imagier enfant",
    "activité éducative",
    "motricité fine",
    "apprentissage enfant",
    "cahier maternelle",
    "Les Cahiers de Ariam",
  ],

  creator: "Les Cahiers de Ariam",
  publisher: "Les Cahiers de Ariam",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.lescahiersdeariam.fr",
    siteName: "Les Cahiers de Ariam",
    title: "Les Cahiers de Ariam | Cahiers éducatifs pour enfants",
    description:
      "Des cahiers éducatifs et ludiques pensés pour accompagner les enfants dans leurs découvertes et leurs premiers apprentissages.",
    images: [
      {
        url: "/products/busy-book-18-mois.png",
        width: 1200,
        height: 1200,
        alt: "Les Cahiers de Ariam - Mon Busy Book",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Les Cahiers de Ariam",
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