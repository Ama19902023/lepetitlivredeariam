"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/panier"
      className="iconButton cartButton"
      aria-label="Panier"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 4h2l2 11h10l2-8H6" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="17" cy="20" r="1" />
      </svg>

      <span className="cartCount">
        {totalItems}
      </span>
    </Link>
  );
}