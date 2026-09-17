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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Erreur token Shopify ${response.status}: ${JSON.stringify(
        data
      )}`
    );
  }

  if (!data.access_token) {
    throw new Error(
      "Shopify n'a pas renvoyé de token d'accès"
    );
  }

  return data.access_token as string;
}

type CheckoutItem = {
  variantId: number | string;
  quantity: number;
};

function toGraphqlVariantId(
  variantId: number | string
) {
  const value = String(variantId);

  if (
    value.startsWith(
      "gid://shopify/ProductVariant/"
    )
  ) {
    return value;
  }

  return `gid://shopify/ProductVariant/${value}`;
}

export async function POST(request: Request) {
  try {
    if (!shop) {
      throw new Error(
        "SHOPIFY_STORE_DOMAIN manquant"
      );
    }

    const body = await request.json();

    let items: CheckoutItem[] = [];

    /*
      Support du nouveau panier multi-produits
    */
    if (
      Array.isArray(body.items) &&
      body.items.length > 0
    ) {
      items = body.items;
    }

    /*
      Compatibilité avec l'ancien bouton
      variantId + quantity
    */
    else if (body.variantId) {
      items = [
        {
          variantId: body.variantId,
          quantity: body.quantity ?? 1,
        },
      ];
    }

    if (items.length === 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "Panier vide",
        },
        {
          status: 400,
        }
      );
    }

    const lineItems = items.map(
      (item) => {
        const quantity = Number(
          item.quantity
        );

        if (
          !item.variantId ||
          !Number.isInteger(quantity) ||
          quantity < 1
        ) {
          throw new Error(
            "Produit ou quantité invalide"
          );
        }

        return {
          variantId:
            toGraphqlVariantId(
              item.variantId
            ),
          quantity,
        };
      }
    );

    console.log(
      "CHECKOUT ITEMS:",
      lineItems
    );

    const accessToken =
      await getAdminAccessToken();

    const query = `
      mutation DraftOrderCreate(
        $input: DraftOrderInput!
      ) {
        draftOrderCreate(input: $input) {
          draftOrder {
            id
            name
            invoiceUrl

            lineItems(first: 50) {
              nodes {
                title
                quantity
                variant {
                  id
                }
              }
            }

            subtotalPriceSet {
              shopMoney {
                amount
                currencyCode
              }
            }

            totalPriceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }

          userErrors {
            field
            message
          }
        }
      }
    `;

    const variables = {
      input: {
        lineItems,
      },
    };

    const response = await fetch(
      `https://${shop}/admin/api/2026-07/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
          "X-Shopify-Access-Token":
            accessToken,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
        cache: "no-store",
      }
    );

    const data = await response.json();

    console.log(
      "SHOPIFY CHECKOUT RESPONSE:",
      JSON.stringify(data, null, 2)
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            `Erreur HTTP Shopify ${response.status}`,
          raw: data,
        },
        {
          status: response.status,
        }
      );
    }

    if (data.errors) {
      return NextResponse.json(
        {
          ok: false,
          graphqlErrors:
            data.errors,
        },
        {
          status: 400,
        }
      );
    }

    const result =
      data.data?.draftOrderCreate;

    if (!result) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Shopify n'a pas retourné draftOrderCreate",
        },
        {
          status: 400,
        }
      );
    }

    if (
      result.userErrors &&
      result.userErrors.length > 0
    ) {
      return NextResponse.json(
        {
          ok: false,
          userErrors:
            result.userErrors,
        },
        {
          status: 400,
        }
      );
    }

    const draftOrder =
      result.draftOrder;

    if (!draftOrder) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "La commande Shopify n'a pas été créée",
        },
        {
          status: 400,
        }
      );
    }

    if (!draftOrder.invoiceUrl) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Aucune URL de paiement Shopify générée",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      ok: true,

      checkoutUrl:
        draftOrder.invoiceUrl,

      draftOrderId:
        draftOrder.id,

      draftOrderName:
        draftOrder.name,

      lineItems:
        draftOrder.lineItems
          ?.nodes ?? [],

      subtotal:
        draftOrder
          .subtotalPriceSet
          ?.shopMoney ?? null,

      total:
        draftOrder
          .totalPriceSet
          ?.shopMoney ?? null,
    });
  } catch (error) {
    console.error(
      "CHECKOUT ERROR:",
      error
    );

    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Erreur inconnue",
      },
      {
        status: 500,
      }
    );
  }
}