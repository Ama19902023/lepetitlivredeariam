import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imagier dès 12 mois | Mon premier imagier enfant",
  description:
    "Découvrez Mon premier imagier des Cahiers de Ariam, un imagier éducatif dès 12 mois pour enrichir le vocabulaire et reconnaître les objets du quotidien.",
  alternates: {
    canonical: "/produits/mon-premier-imagier",
  },
  openGraph: {
    title: "Mon premier imagier dès 12 mois | Les Cahiers de Ariam",
    description:
      "Un imagier éducatif et visuel pour accompagner les premières découvertes dès 12 mois.",
    url: "https://www.lescahiersdeariam.fr/produits/mon-premier-imagier",
    images: [
      {
        url: "/products/premier-imagier-12-mois.png",
        width: 1200,
        height: 1200,
        alt: "Mon premier imagier dès 12 mois",
      },
    ],
  },
};

export default function PremierImagierPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mon premier imagier dès 12 mois",
    image: [
      "https://www.lescahiersdeariam.fr/products/premier-imagier-12-mois.png",
      "https://www.lescahiersdeariam.fr/products/premier-imagier-interieur.png",
    ],
    description:
      "Imagier éducatif dès 12 mois pour enrichir le vocabulaire et reconnaître les objets du quotidien.",
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
              src="/products/premier-imagier-12-mois.png"
              alt="Mon premier imagier dès 12 mois"
              style={{ width: "100%", display: "block" }}
            />
            <img
              src="/products/premier-imagier-interieur.png"
              alt="Aperçu de l'intérieur de Mon premier imagier"
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
              Dès 12 mois
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
              Mon premier imagier
            </h1>

            <p
              style={{
                marginTop: "24px",
                color: "#756359",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Un imagier simple et visuel pour aider l’enfant à reconnaître les
              objets, enrichir son vocabulaire et développer son langage.
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
              <div>✓ Vocabulaire du quotidien</div>
              <div>✓ Images faciles à reconnaître</div>
              <div>✓ Favorise le langage</div>
              <div>✓ Adapté dès 12 mois</div>
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