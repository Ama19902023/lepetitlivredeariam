"use client";

import { useState } from "react";

type ProductImage = {
  src: string;
  alt: string;
};

type ProductGalleryProps = {
  images: ProductImage[];
};

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div
      style={{
        display: "flex",
        gap: "18px",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "88px",
          flexShrink: 0,
        }}
      >
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelected(image)}
            style={{
              width: "88px",
              height: "88px",
              padding: "4px",
              border:
                selected.src === image.src
                  ? "2px solid #403228"
                  : "1px solid #ded6d0",
              background: "#fff",
              cursor: "pointer",
            }}
            aria-label={`Afficher ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </button>
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <img
          src={selected.src}
          alt={selected.alt}
          style={{
            width: "100%",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}