import { NextResponse } from "next/server";

const shop = process.env.SHOPIFY_STORE_DOMAIN;
const clientId = process.env.SHOPIFY_CLIENT_ID;
const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

async function getAdminAccessToken() {
  if (!shop || !clientId || !clientSecret) {
    throw new Error(
      "Variables Shopify manquantes dans .env.local"
    );
  }

  const tokenResponse = await fetch(
    `https://${shop}/admin/oauth/access_token`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
      cache: "no-store",
    }
  );

  const tokenText = await tokenResponse.text();

  if (!tokenResponse.ok) {
    throw new Error(
      `Erreur token Shopify ${tokenResponse.status}: ${tokenText}`
    );
  }

  const tokenData = JSON.parse(tokenText);

  if (!tokenData.access_token) {
    throw new Error(
      "Shopify n'a pas renvoyé de token d'accès"
    );
  }

  return tokenData.access_token as string;
}

export async function GET() {
  try {
    if (!shop) {
      throw new Error(
        "SHOPIFY_STORE_DOMAIN manquant"
      );
    }

    const accessToken =
      await getAdminAccessToken();

    const productsResponse = await fetch(
      `https://${shop}/admin/api/2026-07/products.json?limit=20`,
      {
        method: "GET",
        headers: {
          "X-Shopify-Access-Token":
            accessToken,
          "Content-Type":
            "application/json",
        },
        cache: "no-store",
      }
    );

    const productsText =
      await productsResponse.text();

    if (!productsResponse.ok) {
      throw new Error(
        `Erreur produits Shopify ${productsResponse.status}: ${productsText}`
      );
    }

    const data = JSON.parse(productsText);

    const products = data.products.map(
      (product: any) => ({
        id: product.id,
        title: product.title,
        handle: product.handle,
        status: product.status,
        vendor: product.vendor,
        productType: product.product_type,
        price:
          product.variants?.[0]?.price ??
          null,
        inventoryQuantity:
          product.variants?.[0]
            ?.inventory_quantity ?? null,
      })
    );

    return NextResponse.json({
      ok: true,
      count: products.length,
      products,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur inconnue";

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      {
        status: 500,
      }
    );
  }
}