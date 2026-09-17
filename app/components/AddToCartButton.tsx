"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

type AddToCartButtonProps = {
  variantId: number | null;
  handle: string;
  title: string;
  price: number;
  image: string;
  stock: number;
};

export function AddToCartButton({
  variantId,
  handle,
  title,
  price,
  image,
  stock,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const disabled = !variantId || stock <= 0;

  function handleAddToCart() {
    if (!variantId || disabled) return;

    addItem({
      variantId,
      handle,
      title,
      price,
      image,
      quantity,
      maxQuantity: stock,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
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
        <strong style={{ color: "#403228" }}>Quantité</strong>

        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          disabled={quantity <= 1 || disabled}
          style={{
            width: "42px",
            height: "42px",
            fontSize: "20px",
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
          onClick={() => setQuantity((q) => Math.min(stock, q + 1))}
          disabled={quantity >= stock || disabled}
          style={{
            width: "42px",
            height: "42px",
            fontSize: "20px",
          }}
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={disabled}
        style={{
          width: "100%",
          padding: "17px 24px",
          border: "none",
          background: disabled
            ? "#cfc6c0"
            : added
            ? "#607b63"
            : "#403228",
          color: "#fff",
          fontSize: "15px",
          fontWeight: 700,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {disabled
          ? "Rupture de stock"
          : added
          ? "Ajouté au panier ✓"
          : "Ajouter au panier"}
      </button>
    </div>
  );
}
