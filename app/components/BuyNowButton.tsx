"use client";

import { useState } from "react";

type BuyNowButtonProps = {
  variantId: number | null;
  disabled?: boolean;
  maxQuantity?: number;
};

export default function BuyNowButton({
  variantId,
  disabled = false,
  maxQuantity = 99,
}: BuyNowButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleBuyNow() {
    if (!variantId || disabled) return;

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          variantId,
          quantity,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error ||
            data.userErrors?.[0]?.message ||
            data.graphqlErrors?.[0]?.message ||
            "Impossible de créer le paiement"
        );
      }

      if (!data.checkoutUrl) {
        throw new Error("Aucune URL de paiement n'a été générée");
      }

      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Une erreur est survenue"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#403228",
          }}
        >
          Quantité
        </span>

        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          disabled={quantity <= 1 || disabled}
          style={{
            width: "42px",
            height: "42px",
            fontSize: "20px",
            cursor: quantity <= 1 || disabled ? "not-allowed" : "pointer",
          }}
        >
          -
        </button>

        <span
          style={{
            minWidth: "30px",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          {quantity}
        </span>

        <button
          type="button"
          onClick={() =>
            setQuantity((q) => Math.min(maxQuantity, q + 1))
          }
          disabled={quantity >= maxQuantity || disabled}
          style={{
            width: "42px",
            height: "42px",
            fontSize: "20px",
            cursor:
              quantity >= maxQuantity || disabled ? "not-allowed" : "pointer",
          }}
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleBuyNow}
        disabled={disabled || loading || !variantId}
        style={{
          width: "100%",
          padding: "17px 24px",
          border: "none",
          background:
            disabled || !variantId ? "#cfc6c0" : "#403228",
          color: "#fff",
          fontSize: "15px",
          fontWeight: 700,
          cursor:
            disabled || !variantId ? "not-allowed" : "pointer",
        }}
      >
        {loading
          ? "Préparation du paiement..."
          : disabled
          ? "Rupture de stock"
          : "Acheter maintenant"}
      </button>

      {error && (
        <p
          style={{
            color: "#b64c4c",
            marginTop: "12px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
