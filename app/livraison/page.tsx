import Link from "next/link";

export default function LivraisonPage() {
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
            Informations pratiques
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
            Livraison & délais
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
              Nous préparons chaque commande avec soin avant son
              expédition.
            </p>

            <h2 style={subTitleStyle}>Livraison en France</h2>

            <p>
              La livraison standard en France est proposée au tarif de
              4,90 €.
            </p>

            <p>
              La livraison est offerte dès 49 € d’achat.
            </p>

            <h2 style={subTitleStyle}>Délais</h2>

            <p>
              Le délai total comprend le temps de préparation de la
              commande ainsi que le délai d’acheminement du transporteur.
            </p>

            <p>
              Les délais peuvent varier selon la période, notamment lors
              des fêtes ou périodes de forte activité.
            </p>

            <h2 style={subTitleStyle}>Suivi de commande</h2>

            <p>
              Lorsqu’un suivi est disponible, les informations de suivi
              sont transmises après l’expédition de votre commande.
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