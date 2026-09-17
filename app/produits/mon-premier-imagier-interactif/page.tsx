import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartButton } from "@/app/components/AddToCartButton";
import {
  formatPrice,
  getShopifyProductByHandle,
} from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Mon premier imagier interactif",
  description:
    "Découvrez Mon premier imagier interactif des Cahiers de Ariam, un support ludique pour apprendre en manipulant.",
  alternates: {
    canonical: "/produits/mon-premier-imagier-interactif",
  },
};

export default async function ImagierInteractifPage() {
  const shopifyProduct =
    await getShopifyProductByHandle(
      "mon-premier-imagier-interactif"
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
              src="/products/premier-imagier-interieur.png"
              alt="Mon premier imagier interactif"
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
              Apprendre en manipulant
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
              Mon premier imagier interactif
            </h1>

            <p
              style={{
                marginTop: "24px",
                color: "#756359",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Un imagier ludique pour observer, reconnaître,
              associer et apprendre grâce à la manipulation.
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
              <div>✓ Favorise la manipulation</div>
              <div>✓ Développe la motricité fine</div>
              <div>✓ Enrichit le vocabulaire</div>
              <div>✓ Encourage l’observation et l’association</div>
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
              handle="mon-premier-imagier-interactif"
              title="Mon premier imagier interactif"
              price={numericPrice}
              image="/products/premier-imagier-interieur.png"
              stock={stock}
            />
          </div>
        </div>
      </section>
    </main>
  );
}