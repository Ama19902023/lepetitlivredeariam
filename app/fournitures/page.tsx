import Link from "next/link";

export const metadata = {
  title: "Fournitures pour enfants | Les cahiers d’Ariam",
  description:
    "Découvrez notre sélection de fournitures et accessoires pour accompagner les activités, les apprentissages et la créativité des enfants.",
};

const categories = [
  {
    title: "Écriture & dessin",
    description:
      "Crayons, feutres, gommes et accessoires adaptés aux petites mains.",
    emoji: "✏️",
  },
  {
    title: "Activités créatives",
    description:
      "Gommettes, colle, ciseaux enfants et matériel pour créer et manipuler.",
    emoji: "🎨",
  },
  {
    title: "Rangement & organisation",
    description:
      "Trousses, pochettes et solutions pratiques pour ranger le matériel.",
    emoji: "🧰",
  },
  {
    title: "Accessoires pour cahiers",
    description:
      "Feutres effaçables, velcro et accessoires pour profiter pleinement des cahiers.",
    emoji: "📚",
  },
];

export default function FournituresPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fffdf9",
        color: "#403228",
      }}
    >
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 32px 80px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#403228",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Retour à l’accueil
        </Link>

        <div
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "70px auto 55px",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontSize: "12px",
              marginBottom: "18px",
            }}
          >
            Les cahiers d’Ariam
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(42px, 6vw, 72px)",
              fontWeight: 400,
              margin: "0 0 20px",
            }}
          >
            Fournitures & accessoires
          </h1>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#725f52",
            }}
          >
            Une sélection de matériel pensée pour accompagner les activités,
            développer l’autonomie et laisser libre cours à la créativité des
            enfants.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((category) => (
            <article
              key={category.title}
              style={{
                border: "1px solid #eadfd6",
                padding: "34px",
                minHeight: "220px",
                background: "#ffffff",
              }}
            >
              <div
                style={{
                  fontSize: "34px",
                  marginBottom: "24px",
                }}
              >
                {category.emoji}
              </div>

              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 400,
                  fontSize: "25px",
                  marginBottom: "14px",
                }}
              >
                {category.title}
              </h2>

              <p
                style={{
                  color: "#725f52",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {category.description}
              </p>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            padding: "45px 25px",
            background: "#f8f3ee",
          }}
        >
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "32px",
              fontWeight: 400,
              marginBottom: "12px",
            }}
          >
            Les premiers produits arrivent bientôt
          </h2>

          <p
            style={{
              color: "#725f52",
              margin: 0,
            }}
          >
            Nous sélectionnons des fournitures adaptées aux activités et aux
            premiers apprentissages.
          </p>
        </div>
      </section>
    </main>
  );
}