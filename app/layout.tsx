import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le petit livre de Ariam",
  description:
    "Livres jeunesse illustrés et activités éducatives pour les enfants de 12 mois à 8 ans.",
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