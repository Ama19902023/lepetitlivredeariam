type ShopifyProduct = {
  id: number;
  title: string;
  handle: string;
  status: string;
  vendor: string;
  productType: string;
  price: string | null;
  inventoryQuantity: number | null;
  variantId: number | null;
};

const shop = process.env.SHOPIFY_STORE_DOMAIN;
const clientId = process.env.SHOPIFY_CLIENT_ID;
const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

async function getAdminAccessToken() {
  if (!shop || !clientId || !clientSecret) {
    throw new Error(
      "Variables Shopify manquantes dans .env.local"
    );
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

  const text = await response.text();

  if (!response.ok) {
    throw new Error(
      `Erreur token Shopify ${response.status}: ${text}`
    );
  }

  const data = JSON.parse(text);

  if (!data.access_token) {
    throw new Error(
      "Shopify n'a pas renvoyé de token d'accès"
    );
  }

  return data.access_token as string;
}

export async function getShopifyProducts(): Promise<
  ShopifyProduct[]
> {
  if (!shop) {
    throw new Error(
      "SHOPIFY_STORE_DOMAIN manquant"
    );
  }

  const accessToken =
    await getAdminAccessToken();

  const response = await fetch(
    `https://${shop}/admin/api/2026-07/products.json?limit=100`,
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

  const text = await response.text();

  if (!response.ok) {
    throw new Error(
      `Erreur produits Shopify ${response.status}: ${text}`
    );
  }

  const data = JSON.parse(text);

  return data.products.map(
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

      variantId:
        product.variants?.[0]?.id ??
        null,
    })
  );
}

export async function getShopifyProductByHandle(
  handle: string
): Promise<ShopifyProduct | null> {
  const products =
    await getShopifyProducts();

  return (
    products.find(
      (product) =>
        product.handle === handle
    ) ?? null
  );
}

export function formatPrice(
  price: string | null
) {
  if (!price) {
    return "";
  }

  const amount = Number(price);

  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}