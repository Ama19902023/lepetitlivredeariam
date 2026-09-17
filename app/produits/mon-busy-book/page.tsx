import type { Metadata } from "next";
import Link from "next/link";
import ProductGallery from "@/app/components/ProductGallery";
import { AddToCartButton } from "@/app/components/AddToCartButton";
import {
  formatPrice,
  getShopifyProductByHandle,
} from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Mon Busy Book dès 18 mois",
  description:
    "Découvrez Mon Busy Book des Cahiers de Ariam, un cahier éducatif et ludique dès 18 mois pour apprendre en manipulant, développer la motricité fine et favoriser l'autonomie.",
  alternates: {
    canonical: "/produits/mon-busy-book",
  },
};

export default async function BusyBookPage() {
  const shopifyProduct =
    await getShopifyProductByHandle("mon-busy-book");

  const price = formatPrice(
    shopifyProduct?.price ?? null
  );

  const numericPrice = Number(
    shopifyProduct?.price ?? 0
  );

  const stock =
    shopifyProduct?.inventoryQuantity ?? 0;

  return (
    <main>
      {/* RETOUR */}
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

      {/* PRODUIT */}
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
          {/* GALERIE */}
          <div>
            <ProductGallery
              images={[
                {
                  src: "/products/busy-book-18-mois.png",
                  alt: "Mon Busy Book - couverture",
                },
                {
                  src: "/products/busy-book-activites.jpg",
                  alt: "Mon Busy Book - aperçu des 28 activités",
                },
                {
                  src: "/products/busy-book-vehicules.png",
                  alt: "Mon Busy Book - activité interactive sur les véhicules",
                },
              ]}
            />
          </div>

          {/* INFOS PRODUIT */}
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
              Un cahier éducatif et ludique pensé pour accompagner
              les premières découvertes de l’enfant à partir de
              18 mois.
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

            {/* PRIX + STOCK */}
            <div style={{ marginTop: "30px" }}>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "34px",
                  color: "#403228",
                  marginBottom: "10px",
                }}
              >
                {price || "Prix indisponible"}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color:
                    stock > 0
                      ? "#4f7358"
                      : "#b64c4c",
                }}
              >
                {stock > 0
                  ? `En stock — ${stock} disponible${
                      stock > 1 ? "s" : ""
                    }`
                  : "Rupture de stock"}
              </div>
            </div>

            {/* PANIER */}
            <AddToCartButton
              variantId={
                shopifyProduct?.variantId ?? null
              }
              handle="mon-busy-book"
              title="Mon Busy Book"
              price={numericPrice}
              image="/products/busy-book-18-mois.png"
              stock={stock}
            />

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                color: "#756359",
                fontSize: "13px",
              }}
            >
              <span>✓ Paiement sécurisé</span>
              <span>✓ Livraison offerte dès 49 €</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DESCRIPTION */}
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
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
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
              Apprendre en manipulant
            </span>

            <h2
              style={{
                margin: 0,
                fontFamily: "Georgia, serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "#403228",
              }}
            >
              28 activités pour découvrir et apprendre
            </h2>

            <p
              style={{
                marginTop: "22px",
                color: "#756359",
                fontSize: "17px",
                lineHeight: 1.9,
              }}
            >
              Mon Busy Book propose des activités variées pour
              travailler l’observation, l’association, les formes,
              les couleurs, les animaux, les objets du quotidien
              et les premières notions.
            </p>

            <p
              style={{
                marginTop: "18px",
                color: "#756359",
                fontSize: "17px",
                lineHeight: 1.9,
              }}
            >
              Les éléments à manipuler rendent l’apprentissage plus
              concret et permettent à l’enfant de participer
              activement à chaque activité.
            </p>
          </div>

          <img
            src="/products/busy-book-activites.jpg"
            alt="Aperçu des activités du Busy Book"
            style={{
              width: "100%",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>
      </section>

      {/* SECTION MANIPULATION */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid #eee7df",
          background: "#faf8f5",
        }}
      >
        <div
          style={{
            width: "min(1100px, calc(100% - 40px))",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <img
            src="/products/busy-book-vehicules.png"
            alt="Enfant manipulant une activité du Busy Book"
            style={{
              width: "100%",
              display: "block",
              objectFit: "contain",
            }}
          />

          <div>
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
              Manipuler et comprendre
            </span>

            <h2
              style={{
                margin: 0,
                fontFamily: "Georgia, serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "#403228",
              }}
            >
              Une approche ludique et interactive
            </h2>

            <p
              style={{
                marginTop: "22px",
                color: "#756359",
                fontSize: "17px",
                lineHeight: 1.9,
              }}
            >
              L’enfant observe, choisit puis place les éléments sur
              la bonne zone. Cette manipulation favorise la
              concentration, la coordination œil-main et la
              motricité fine.
            </p>

            <div
              style={{
                marginTop: "28px",
                display: "grid",
                gap: "12px",
                color: "#5f4f44",
                fontSize: "15px",
              }}
            >
              <div>✓ Observer et reconnaître</div>
              <div>✓ Associer les éléments</div>
              <div>✓ Manipuler avec précision</div>
              <div>✓ Apprendre à son rythme</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}