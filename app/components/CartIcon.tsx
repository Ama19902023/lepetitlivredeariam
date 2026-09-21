"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/panier"
      className="cartHeaderButton"
      aria-label={`Panier - ${totalItems} article${totalItems > 1 ? "s" : ""}`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="20" r="1" />
        <circle cx="19" cy="20" r="1" />
        <path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
      </svg>

      {totalItems > 0 && (
        <span className="cartHeaderCount">
          {totalItems}
        </span>
      )}
    </Link>
  );
}