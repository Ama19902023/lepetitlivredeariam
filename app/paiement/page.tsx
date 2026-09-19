import Link from "next/link";

export default function PaiementPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
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
            Votre commande
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
            Paiement sécurisé
          </h1>

          <div
            style={{
              marginTop: "40px",
              color: "#756359",
              fontSize: "17px",
              lineHeight: 1.9,
            }}
          >
            <p>
              Le paiement de votre commande est effectué via le
              processus de paiement sécurisé Shopify.
            </p>

            <h2 style={subTitleStyle}>Paiement sécurisé</h2>

            <p>
              Les informations de paiement sont traitées par les
              services de paiement sécurisés disponibles au moment de
              votre commande.
            </p>

            <p>
              Les Cahiers de Ariam ne stockent pas directement vos
              données bancaires.
            </p>

            <h2 style={subTitleStyle}>Moyens de paiement</h2>

            <p>
              Les moyens de paiement disponibles sont affichés
              directement lors du passage au paiement.
            </p>

            <h2 style={subTitleStyle}>Confirmation</h2>

            <p>
              Après validation du paiement, vous êtes redirigé vers la
              confirmation de votre commande.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const subTitleStyle = {
  marginTop: "38px",
  marginBottom: "10px",
  fontFamily: "Georgia, serif",
  fontSize: "28px",
  fontWeight: 400,
  color: "#403228",
};