import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartButton } from "@/app/components/AddToCartButton";
import {
  formatPrice,
  getShopifyProductByHandle,
} from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Mon premier imagier – Fruits & légumes",
  description:
    "Un imagier dès 12 mois pour découvrir les fruits et légumes, enrichir le vocabulaire et accompagner les premières découvertes.",
  alternates: {
    canonical:
      "/produits/mon-premier-imagier-fruits-legumes",
  },
};

export default async function FruitsLegumesPage() {
  const product = await getShopifyProductByHandle(
    "mon-premier-imagier-fruits-legumes"
  );

  const price = formatPrice(product?.price ?? null);
  const numericPrice = Number(product?.price ?? 0);
  const stock = product?.inventoryQuantity ?? 0;

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
              src="/products/imagiers-fruits-legumes.png"
              alt="Mon premier imagier Fruits et légumes"
              style={{
                width: "100%",
                display: "block",
                objectFit: "contain",
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
              Dès 12 mois
            </span>

            <h1
              style={{
                margin: 0,
                fontFamily: "Georgia, serif",
                fontSize: "clamp(40px, 5vw, 66px)",
                lineHeight: 1.05,
                fontWeight: 400,
                color: "#403228",
              }}
            >
              Mon premier imagier
              <br />
              Fruits & légumes
            </h1>

            <p
              style={{
                marginTop: "24px",
                color: "#756359",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Un imagier pensé pour accompagner les premières
              découvertes de l’enfant et lui permettre de
              reconnaître et nommer les fruits et légumes du
              quotidien.
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
              <div>✓ Développe le vocabulaire</div>
              <div>✓ Découverte des fruits et légumes</div>
              <div>✓ Favorise la reconnaissance visuelle</div>
              <div>✓ Adapté aux tout-petits</div>
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
                  color: stock > 0 ? "#4f7358" : "#b64c4c",
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
              variantId={product?.variantId ?? null}
              handle="mon-premier-imagier-fruits-legumes"
              title="Mon premier imagier – Fruits & légumes"
              price={numericPrice}
              image="/products/imagiers-fruits-legumes.png"
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