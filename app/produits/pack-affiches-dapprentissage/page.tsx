import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartButton } from "@/app/components/AddToCartButton";
import {
  formatPrice,
  getShopifyProductByHandle,
} from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Pack affiches d’apprentissage",
  description:
    "Découvrez le Pack affiches d’apprentissage des Cahiers de Ariam pour accompagner les premiers apprentissages des enfants.",
  alternates: {
    canonical: "/produits/pack-affiches-dapprentissage",
  },
};

export default async function PackAffichesPage() {
  const shopifyProduct =
    await getShopifyProductByHandle(
      "pack-affiches-dapprentissage"
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
              src="/products/supports-apprentissage.png"
              alt="Pack affiches d’apprentissage"
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
              Apprendre au quotidien
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
              Pack affiches d’apprentissage
            </h1>

            <p
              style={{
                marginTop: "24px",
                color: "#756359",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Un ensemble de supports visuels pour accompagner
              les premiers apprentissages de manière simple,
              ludique et progressive.
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
              <div>✓ Couleurs</div>
              <div>✓ Formes</div>
              <div>✓ Alphabet</div>
              <div>✓ Chiffres et premières notions</div>
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
              handle="pack-affiches-dapprentissage"
              title="Pack affiches d’apprentissage"
              price={numericPrice}
              image="/products/supports-apprentissage.png"
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
    </main>
  );
}