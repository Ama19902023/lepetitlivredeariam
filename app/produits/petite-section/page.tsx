import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cahier Petite Section 3-4 ans | Activités maternelle",
  description:
    "Découvrez le cahier d’activités Petite Section 3-4 ans des Cahiers de Ariam : graphisme, émotions, saisons, lettres et premiers apprentissages de maternelle.",
  alternates: {
    canonical: "/produits/petite-section",
  },
  openGraph: {
    title: "Cahier Petite Section 3-4 ans | Les Cahiers de Ariam",
    description:
      "Des activités éducatives adaptées aux enfants de 3 à 4 ans pour accompagner les premiers apprentissages de maternelle.",
    url: "https://www.lescahiersdeariam.fr/produits/petite-section",
    images: [
      {
        url: "/products/petite-section-3-4-ans.png",
        width: 1200,
        height: 1200,
        alt: "Cahier d'activités Petite Section 3-4 ans",
      },
    ],
  },
};

export default function PetiteSectionPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mon cahier d'activités Petite Section 3-4 ans",
    image: [
      "https://www.lescahiersdeariam.fr/products/petite-section-3-4-ans.png",
      "https://www.lescahiersdeariam.fr/products/petite-section-interieur.jpg",
    ],
    description:
      "Cahier d'activités éducatives pour les enfants de 3 à 4 ans avec graphisme, émotions, saisons, observation et premiers apprentissages de maternelle.",
    brand: {
      "@type": "Brand",
      name: "Les Cahiers de Ariam",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

      <section
        style={{
          padding: "30px 0",
          borderBottom: "1px solid #eee7df",
          background: "#fff",
        }}
      >
        <div
          style={{
            width: "min(1320px, calc(100% - 40px))",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "14px",
              color: "#756359",
              textDecoration: "none",
            }}
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </section>

      <section style={{ padding: "70px 0 90px", background: "#fff" }}>
        <div
          style={{
            width: "min(1320px, calc(100% - 40px))",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "70px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.55fr",
              gap: "18px",
              alignItems: "end",
            }}
          >
            <img
              src="/products/petite-section-3-4-ans.png"
              alt="Mon cahier d'activités Petite Section 3-4 ans"
              style={{ width: "100%", display: "block" }}
            />
            <img
              src="/products/petite-section-interieur.jpg"
              alt="Aperçu des activités Petite Section"
              style={{ width: "100%", display: "block" }}
            />
          </div>

          <div>
            <span
              style={{
                display: "block",
                marginBottom: "14px",
                color: "#bd7c67",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Maternelle · 3 à 4 ans
            </span>

            <h1
              style={{
                margin: 0,
                fontFamily: "Georgia, serif",
                fontSize: "clamp(42px, 5vw, 68px)",
                lineHeight: 1.05,
                fontWeight: 400,
                color: "#403228",
              }}
            >
              Mon cahier d’activités Petite Section
            </h1>

            <p
              style={{
                marginTop: "24px",
                color: "#756359",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Des activités variées pour accompagner les premiers apprentissages
              de maternelle de manière ludique.
            </p>

            <div
              style={{
                marginTop: "30px",
                display: "grid",
                gap: "12px",
                color: "#5f4f44",
                fontSize: "15px",
              }}
            >
              <div>✓ Graphisme et motricité fine</div>
              <div>✓ Émotions et saisons</div>
              <div>✓ Observation et association</div>
              <div>✓ Premières lettres et premiers mots</div>
            </div>

            <div
              style={{
                marginTop: "34px",
                padding: "24px",
                border: "1px solid #eee7df",
              }}
            >
              <strong>Bientôt disponible à la commande</strong>
              <p
                style={{
                  margin: "8px 0 0",
                  color: "#756359",
                  lineHeight: 1.6,
                  fontSize: "14px",
                }}
              >
                Le paiement sera bientôt relié à notre boutique en ligne.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}