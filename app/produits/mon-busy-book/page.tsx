import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Busy Book dès 18 mois | Cahier éducatif enfant",
  description:
    "Découvrez Mon Busy Book des Cahiers de Ariam, un cahier éducatif et ludique dès 18 mois pour apprendre en manipulant et développer la motricité fine.",
  alternates: {
    canonical: "/produits/mon-busy-book",
  },
  openGraph: {
    title: "Mon Busy Book dès 18 mois | Les Cahiers de Ariam",
    description:
      "Un cahier éducatif et ludique pour accompagner les premières découvertes dès 18 mois.",
    url: "https://www.lescahiersdeariam.fr/produits/mon-busy-book",
    images: [
      {
        url: "/products/busy-book-18-mois.png",
        width: 1200,
        height: 1200,
        alt: "Mon Busy Book dès 18 mois",
      },
    ],
  },
};

export default function BusyBookPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mon Busy Book dès 18 mois",
    image: [
      "https://www.lescahiersdeariam.fr/products/busy-book-18-mois.png",
    ],
    description:
      "Cahier éducatif et ludique dès 18 mois pour apprendre en manipulant et accompagner les premières découvertes de l'enfant.",
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

      <section
        style={{
          padding: "70px 0 90px",
          background: "#fff",
        }}
      >
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
          <div>
            <img
              src="/products/busy-book-18-mois.png"
              alt="Mon Busy Book à partir de 18 mois"
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
              }}
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
              Dès 18 mois
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
              Mon Busy Book
            </h1>

            <p
              style={{
                marginTop: "24px",
                color: "#756359",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Un cahier éducatif et ludique pensé pour accompagner les
              premières découvertes de l’enfant à partir de 18 mois.
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
              <div>✓ Développe la motricité fine</div>
              <div>✓ Favorise l’autonomie</div>
              <div>✓ Encourage l’observation et l’association</div>
              <div>✓ Activités adaptées aux tout-petits</div>
            </div>

            <div
              style={{
                marginTop: "34px",
                padding: "24px",
                border: "1px solid #eee7df",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "15px",
                }}
              >
                Bientôt disponible à la commande
              </strong>

              <p
                style={{
                  margin: 0,
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

      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid #eee7df",
          background: "#fff",
        }}
      >
        <div
          style={{
            width: "min(1100px, calc(100% - 40px))",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              display: "block",
              marginBottom: "12px",
              color: "#bd7c67",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Apprendre en jouant
          </span>

          <h2
            style={{
              margin: 0,
              fontFamily: "Georgia, serif",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 400,
              color: "#403228",
            }}
          >
            Un support pensé pour les premières découvertes
          </h2>

          <p
            style={{
              marginTop: "22px",
              color: "#756359",
              fontSize: "17px",
              lineHeight: 1.9,
            }}
          >
            Mon Busy Book propose des activités simples et visuelles pour
            permettre à l’enfant de manipuler, observer, reconnaître et
            associer différents éléments. Il accompagne les premiers
            apprentissages de manière progressive et ludique.
          </p>
        </div>
      </section>
    </main>
  );
}