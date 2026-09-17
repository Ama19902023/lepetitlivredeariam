import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartButton } from "@/app/components/AddToCartButton";
import {
  formatPrice,
  getShopifyProductByHandle,
} from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Mon cahier d'activités Petite Section 3-4 ans",
  description:
    "Découvrez Mon cahier d'activités Petite Section des Cahiers de Ariam, un cahier éducatif pour accompagner les premiers apprentissages de maternelle.",
  alternates: {
    canonical:
      "/produits/mon-cahier-d-activites-petite-section",
  },
};

export default async function PetiteSectionPage() {
  const shopifyProduct =
    await getShopifyProductByHandle(
      "mon-cahier-d-activites-petite-section"
    );

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
              src="/products/petite-section-3-4-ans.png"
              alt="Mon cahier d'activités Petite Section 3 à 4 ans"
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
              3 - 4 ans
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
              Un cahier pensé pour accompagner les premiers
              apprentissages de maternelle à travers des
              activités simples, progressives et ludiques.
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
              <div>✓ Activités adaptées aux 3–4 ans</div>
              <div>✓ Développe l’observation</div>
              <div>✓ Travaille la motricité fine</div>
              <div>✓ Premiers apprentissages de maternelle</div>
            </div>

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

            <AddToCartButton
              variantId={
                shopifyProduct?.variantId ?? null
              }
              handle="mon-cahier-d-activites-petite-section"
              title="Mon cahier d'activités Petite Section"
              price={numericPrice}
              image="/products/petite-section-3-4-ans.png"
              stock={stock}
            />
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
              Premiers apprentissages
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
              Apprendre progressivement en s’amusant
            </h2>

            <p
              style={{
                marginTop: "22px",
                color: "#756359",
                fontSize: "17px",
                lineHeight: 1.9,
              }}
            >
              Le cahier propose des activités variées pour
              travailler l’observation, l’association, le
              graphisme, les lettres et les premières notions
              de maternelle.
            </p>
          </div>

          <img
            src="/products/petite-section-interieur.jpg"
            alt="Aperçu des activités Petite Section"
            style={{
              width: "100%",
              display: "block",
            }}
          />
        </div>
      </section>
    </main>
  );
}