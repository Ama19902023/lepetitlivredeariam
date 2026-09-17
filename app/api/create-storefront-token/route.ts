import { NextResponse } from "next/server";

const shop = process.env.SHOPIFY_STORE_DOMAIN;
const clientId = process.env.SHOPIFY_CLIENT_ID;
const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

async function getAdminAccessToken() {
  if (!shop || !clientId || !clientSecret) {
    throw new Error("Variables Shopify manquantes");
  }

  const response = await fetch(
    `https://${shop}/admin/oauth/access_token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data.access_token as string;
}

export async function GET() {
  try {
    if (!shop) {
      throw new Error("SHOPIFY_STORE_DOMAIN manquant");
    }

    const adminToken = await getAdminAccessToken();

    const response = await fetch(
      `https://${shop}/admin/api/2026-07/storefront_access_tokens.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": adminToken,
        },
        body: JSON.stringify({
          storefront_access_token: {
            title: "Les Cahiers de Ariam Storefront",
          },
        }),
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          status: response.status,
          shopifyError: data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      ok: true,
      token: data.storefront_access_token?.access_token,
      scopes: data.storefront_access_token?.access_scope,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}