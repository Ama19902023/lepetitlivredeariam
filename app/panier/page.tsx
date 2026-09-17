"use client";

import Link from "next/link";
import { useCart } from "@/app/components/CartProvider";

export default function CartPage() {
  const {
    items,
    subtotal,
    removeItem,
    setQuantity,
    clearCart,
  } = useCart();

  const freeShippingThreshold = 49;
  const remainingForFreeShipping = Math.max(
    0,
    freeShippingThreshold - subtotal
  );

  if (items.length === 0) {
    return (
      <main
        style={{
          minHeight: "70vh",
          padding: "80px 20px",
          background: "#fff",
        }}
      >
        <div
          style={{
            width: "min(900px, 100%)",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "48px",
              fontWeight: 400,
              color: "#403228",
            }}
          >
            Votre panier est vide
          </h1>

          <p
            style={{
              marginTop: "18px",
              color: "#756359",
              fontSize: "17px",
            }}
          >
            Découvrez nos cahiers et ajoutez vos favoris au panier.
          </p>

          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "15px 24px",
              background: "#403228",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Découvrir les produits
          </Link>
        </div>
      </main>
    );
  }

  async function handleCheckout() {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map((item) => ({
            variantId: item.variantId,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        alert(
          data.error ||
            data.userErrors?.[0]?.message ||
            "Impossible de créer le paiement"
        );

        return;
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue.");
    }
  }

  return (
    <main
      style={{
        padding: "60px 20px 100px",
        background: "#fff",
      }}
    >
      <div
        style={{
          width: "min(1100px, 100%)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div>
            <span
              style={{
                color: "#bd7c67",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Les Cahiers de Ariam
            </span>

            <h1
              style={{
                margin: "8px 0 0",
                fontFamily: "Georgia, serif",
                fontSize: "48px",
                fontWeight: 400,
                color: "#403228",
              }}
            >
              Votre panier
            </h1>
          </div>

          <Link
            href="/"
            style={{
              color: "#756359",
              textDecoration: "none",
            }}
          >
            ← Continuer mes achats
          </Link>
        </div>

        {remainingForFreeShipping > 0 ? (
          <div
            style={{
              marginBottom: "30px",
              padding: "16px 18px",
              background: "#f6f1ed",
              color: "#5f4f44",
              fontSize: "14px",
            }}
          >
            Plus que{" "}
            <strong>
              {remainingForFreeShipping.toLocaleString(
                "fr-FR",
                {
                  style: "currency",
                  currency: "EUR",
                }
              )}
            </strong>{" "}
            pour bénéficier de la livraison offerte.
          </div>
        ) : (
          <div
            style={{
              marginBottom: "30px",
              padding: "16px 18px",
              background: "#eef5ef",
              color: "#4f7358",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            ✓ Livraison offerte dès 49 €
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "50px",
            alignItems: "start",
          }}
        >
          <div>
            {items.map((item) => (
              <article
                key={item.variantId}
                style={{
                  display: "grid",
                  gridTemplateColumns: "130px 1fr",
                  gap: "24px",
                  padding: "24px 0",
                  borderBottom: "1px solid #eee7df",
                }}
              >
                <Link href={`/produits/${item.handle}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "130px",
                      height: "130px",
                      objectFit: "cover",
                    }}
                  />
                </Link>

                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "20px",
                    }}
                  >
                    <div>
                      <Link
                        href={`/produits/${item.handle}`}
                        style={{
                          color: "#403228",
                          textDecoration: "none",
                        }}
                      >
                        <h2
                          style={{
                            margin: 0,
                            fontFamily: "Georgia, serif",
                            fontSize: "24px",
                            fontWeight: 400,
                          }}
                        >
                          {item.title}
                        </h2>
                      </Link>

                      <p
                        style={{
                          margin: "8px 0 0",
                          color: "#756359",
                        }}
                      >
                        {item.price.toLocaleString("fr-FR", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </p>
                    </div>

                    <strong
                      style={{
                        color: "#403228",
                        fontSize: "17px",
                      }}
                    >
                      {(
                        item.price * item.quantity
                      ).toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </strong>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginTop: "22px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #d9d0c9",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setQuantity(
                            item.variantId,
                            item.quantity - 1
                          )
                        }
                        disabled={item.quantity <= 1}
                        style={{
                          width: "38px",
                          height: "38px",
                          border: "none",
                          background: "#fff",
                          cursor:
                            item.quantity <= 1
                              ? "not-allowed"
                              : "pointer",
                        }}
                      >
                        −
                      </button>

                      <span
                        style={{
                          width: "42px",
                          textAlign: "center",
                          fontWeight: 700,
                        }}
                      >
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setQuantity(
                            item.variantId,
                            item.quantity + 1
                          )
                        }
                        disabled={
                          item.quantity >= item.maxQuantity
                        }
                        style={{
                          width: "38px",
                          height: "38px",
                          border: "none",
                          background: "#fff",
                          cursor:
                            item.quantity >=
                            item.maxQuantity
                              ? "not-allowed"
                              : "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(item.variantId)
                      }
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "#9a6d5e",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </article>
            ))}

            <button
              type="button"
              onClick={clearCart}
              style={{
                marginTop: "24px",
                border: "none",
                background: "transparent",
                color: "#756359",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Vider le panier
            </button>
          </div>

          <aside
            style={{
              padding: "28px",
              border: "1px solid #eee7df",
              position: "sticky",
              top: "30px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                fontFamily: "Georgia, serif",
                color: "#403228",
                fontSize: "28px",
                fontWeight: 400,
              }}
            >
              Récapitulatif
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "24px",
                color: "#756359",
              }}
            >
              <span>Sous-total</span>

              <strong
                style={{
                  color: "#403228",
                }}
              >
                {subtotal.toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                })}
              </strong>
            </div>

            <p
              style={{
                marginTop: "14px",
                color: "#756359",
                fontSize: "13px",
                lineHeight: 1.6,
              }}
            >
              Les frais de livraison sont calculés lors du
              paiement. Livraison offerte dès 49 € en France.
            </p>

            <button
              type="button"
              onClick={handleCheckout}
              style={{
                width: "100%",
                marginTop: "24px",
                padding: "16px 20px",
                border: "none",
                background: "#403228",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Passer au paiement
            </button>

            <div
              style={{
                marginTop: "18px",
                fontSize: "12px",
                color: "#756359",
                lineHeight: 1.7,
              }}
            >
              ✓ Paiement sécurisé
              <br />
              ✓ Stock vérifié
              <br />
              ✓ Livraison offerte dès 49 €
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}