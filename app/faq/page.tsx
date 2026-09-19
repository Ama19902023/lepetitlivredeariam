import Link from "next/link";

const questions = [
  {
    question: "À partir de quel âge les cahiers sont-ils adaptés ?",
    answer:
      "Les produits sont conçus pour différents âges. Certains supports sont adaptés dès 12 mois, d’autres dès 18 mois ou à partir de 3 ans. L’âge recommandé est précisé sur chaque fiche produit.",
  },
  {
    question: "Les activités sont-elles réutilisables ?",
    answer:
      "Selon le produit, certaines activités sont conçues pour être manipulées plusieurs fois. Les détails sont indiqués sur chaque fiche.",
  },
  {
    question: "Puis-je acheter les imagiers séparément ?",
    answer:
      "Oui. Les imagiers Fruits & légumes et Animaux & véhicules peuvent être achetés séparément depuis leurs fiches produit respectives.",
  },
  {
    question: "Quels sont les frais de livraison ?",
    answer:
      "La livraison standard en France est facturée 4,90 €. Elle est offerte dès 49 € d’achat.",
  },
  {
    question: "Comment suivre ma commande ?",
    answer:
      "Lorsqu’un suivi est disponible, les informations vous sont communiquées après l’expédition de votre commande.",
  },
  {
    question: "Comment vous contacter ?",
    answer:
      "Vous pouvez utiliser la page Contact ou nous retrouver sur Instagram @les_cahiers_de_ariam.",
  },
];

export default function FAQPage() {
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
            Besoin d’aide ?
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
            Questions fréquentes
          </h1>

          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gap: "18px",
            }}
          >
            {questions.map((item) => (
              <details
                key={item.question}
                style={{
                  border: "1px solid #e9e1db",
                  padding: "22px 24px",
                  background: "#fff",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontFamily: "Georgia, serif",
                    fontSize: "21px",
                    color: "#403228",
                  }}
                >
                  {item.question}
                </summary>

                <p
                  style={{
                    margin: "18px 0 0",
                    color: "#756359",
                    fontSize: "16px",
                    lineHeight: 1.8,
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}