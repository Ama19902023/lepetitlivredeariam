"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      orderNumber: formData.get("orderNumber"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Erreur lors de l’envoi."
        );
      }

      setSuccess(
        "Votre message a bien été envoyé. Nous vous répondrons dès que possible."
      );

      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          padding: "30px 0",
          borderBottom: "1px solid #eee7df",
        }}
      >
        <div
          style={{
            width: "min(1100px, calc(100% - 40px))",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#756359",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </section>

      <section style={{ padding: "80px 0 100px" }}>
        <div
          style={{
            width: "min(900px, calc(100% - 40px))",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              display: "block",
              marginBottom: "14px",
              color: "#bd7c67",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Nous contacter
          </span>

          <h1
            style={{
              margin: 0,
              fontFamily: "Georgia, serif",
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: 400,
              color: "#403228",
            }}
          >
            Une question ?
          </h1>

          <p
            style={{
              marginTop: "24px",
              maxWidth: "650px",
              color: "#756359",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Une question sur un produit, votre commande ou la
            livraison ? Écrivez-nous directement.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: "45px",
              display: "grid",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              <Field
                label="Nom *"
                name="name"
                type="text"
                required
              />

              <Field
                label="Adresse e-mail *"
                name="email"
                type="email"
                required
              />
            </div>

            <Field
              label="Objet *"
              name="subject"
              type="text"
              required
            />

            <Field
              label="Numéro de commande"
              name="orderNumber"
              type="text"
            />

            <label
              style={{
                display: "grid",
                gap: "8px",
                color: "#403228",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Message *

              <textarea
                name="message"
                required
                rows={8}
                style={{
                  width: "100%",
                  padding: "15px",
                  border: "1px solid #ded6d0",
                  background: "#fff",
                  color: "#403228",
                  fontSize: "16px",
                  resize: "vertical",
                }}
              />
            </label>

            {success && (
              <div
                style={{
                  padding: "15px",
                  background: "#eef6ef",
                  color: "#42664a",
                  fontSize: "14px",
                }}
              >
                {success}
              </div>
            )}

            {error && (
              <div
                style={{
                  padding: "15px",
                  background: "#fff0f0",
                  color: "#a44242",
                  fontSize: "14px",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                minHeight: "54px",
                padding: "0 30px",
                border: "none",
                background: "#403228",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading
                ? "Envoi en cours..."
                : "Envoyer le message"}
            </button>
          </form>

          <div
            style={{
              marginTop: "45px",
              paddingTop: "30px",
              borderTop: "1px solid #eee7df",
              color: "#756359",
              lineHeight: 1.8,
            }}
          >
            <p>
              Vous pouvez également nous écrire directement à :
            </p>

            <a
              href="mailto:contact@lescahiersdeariam.fr"
              style={{
                color: "#403228",
                fontWeight: 600,
              }}
            >
              contact@lescahiersdeariam.fr
            </a>

            <p style={{ marginTop: "16px" }}>
              Ou nous retrouver sur{" "}
              <a
                href="https://www.instagram.com/les_cahiers_de_ariam/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#403228",
                  fontWeight: 600,
                }}
              >
                Instagram
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label
      style={{
        display: "grid",
        gap: "8px",
        color: "#403228",
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      {label}

      <input
        name={name}
        type={type}
        required={required}
        style={{
          width: "100%",
          height: "50px",
          padding: "0 15px",
          border: "1px solid #ded6d0",
          background: "#fff",
          color: "#403228",
          fontSize: "16px",
        }}
      />
    </label>
  );
}