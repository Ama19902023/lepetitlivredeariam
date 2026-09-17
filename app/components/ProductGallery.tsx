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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "flex-start",
        }}
      >
        {/* MINIATURES */}
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

        {/* GRANDE IMAGE */}
        <div style={{ flex: 1 }}>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            style={{
              border: "none",
              padding: 0,
              background: "transparent",
              cursor: "zoom-in",
              width: "100%",
            }}
            aria-label="Agrandir l'image"
          >
            <img
              src={selected.src}
              alt={selected.alt}
              style={{
                width: "100%",
                display: "block",
                objectFit: "contain",
              }}
            />
          </button>
        </div>
      </div>

      {/* IMAGE AGRANDIE */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.88)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          {/* CROIX */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer"
            style={{
              position: "absolute",
              top: "20px",
              right: "25px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.95)",
              color: "#403228",
              fontSize: "28px",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* IMAGE PLEIN ÉCRAN */}
          <img
            src={selected.src}
            alt={selected.alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "92vh",
              objectFit: "contain",
              cursor: "zoom-out",
            }}
          />
        </div>
      )}
    </>
  );
}