"use client";

import { useEffect, useState } from "react";

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

  function openImage(image: ProductImage) {
    setSelected(image);
    setIsOpen(true);
  }

  function closeImage() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
              onClick={() => openImage(image)}
              aria-label={`Agrandir ${image.alt}`}
              style={{
                width: "88px",
                height: "88px",
                padding: "4px",
                border:
                  selected.src === image.src
                    ? "2px solid #403228"
                    : "1px solid #ded6d0",
                background: "#fff",
                cursor: "zoom-in",
              }}
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
            onClick={() => openImage(selected)}
            aria-label={`Agrandir ${selected.alt}`}
            style={{
              width: "100%",
              border: "none",
              padding: 0,
              margin: 0,
              background: "transparent",
              cursor: "zoom-in",
              display: "block",
            }}
          >
            <img
              src={selected.src}
              alt={selected.alt}
              style={{
                width: "100%",
                display: "block",
                objectFit: "contain",
                cursor: "zoom-in",
              }}
            />
          </button>
        </div>
      </div>

      {/* MODALE PLEIN ÉCRAN */}
      {isOpen && (
        <div
          onClick={closeImage}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
          }}
        >
          {/* CROIX */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeImage();
            }}
            aria-label="Fermer l'image"
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              zIndex: 100000,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "none",
              background: "#ffffff",
              color: "#403228",
              fontSize: "32px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ×
          </button>

          {/* IMAGE AGRANDIE */}
          <img
            src={selected.src}
            alt={selected.alt}
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "92vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      )}
    </>
  );
}