import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lescahiersdeariam.fr"),

  title: {
    default: "Les Cahiers de Ariam | Cahiers éducatifs pour enfants",
    template: "%s | Les Cahiers de Ariam",
  },

  description:
    "Découvrez Les Cahiers de Ariam : busy books, imagiers et cahiers d’activités éducatives pour accompagner les enfants dès 12 mois dans leurs apprentissages.",

  keywords: [
    "cahier éducatif enfant",
    "busy book",
    "busy book enfant",
    "imagier enfant",
    "cahier activités maternelle",
    "activité enfant 2 ans",
    "activité enfant 3 ans",
    "livre éducatif enfant",
    "apprentissage enfant",
    "Les Cahiers de Ariam",
  ],

  authors: [
    {
      name: "Les Cahiers de Ariam",
    },
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
      "Busy books, imagiers et cahiers d’activités éducatives pour accompagner les enfants dans leurs premières découvertes.",
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
      "Cahiers éducatifs et ludiques pour accompagner les enfants dans leurs apprentissages.",
    images: ["/products/busy-book-18-mois.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}