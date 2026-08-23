"use client";

import { useState } from "react";

type Product = {
  id: number;
  title: string;
  category: string;
  age: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  background: string;
  accent: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "La lune et le petit renard",
    category: "Cahiers illustrés",
    age: "Dès 3 ans",
    price: "14,90 €",
    badge: "NOUVEAU",
    background: "#ead4ce",
    accent: "#d77867",
  },
  {
    id: 2,
    title: "Mila au pays des nuages",
    category: "Cahiers illustrés",
    age: "Dès 4 ans",
    price: "15,90 €",
    badge: "NOUVEAU",
    background: "#d6e4ef",
    accent: "#7baac8",
  },
  {
    id: 3,
    title: "Le secret du jardin",
    category: "Cahiers illustrés",
    age: "Dès 2 ans",
    price: "12,90 €",
    badge: "COUP DE CŒUR",
    background: "#d9e8d6",
    accent: "#7da47d",
  },
  {
    id: 4,
    title: "Les couleurs d'Anouk",
    category: "Premiers apprentissages",
    age: "Dès 2 ans",
    price: "13,90 €",
    background: "#f2dfd0",
    accent: "#d58b69",
  },
  {
    id: 5,
    title: "Mon premier imagier des animaux",
    category: "Imagiers",
    age: "12 / 36 mois",
    price: "11,90 €",
    background: "#f1e5be",
    accent: "#cda950",
  },
  {
    id: 6,
    title: "J'apprends les chiffres",
    category: "Apprentissages",
    age: "Dès 3 ans",
    price: "12,90 €",
    background: "#dbe9ed",
    accent: "#70a5b2",
  },
  {
    id: 7,
    title: "J'apprends les formes",
    category: "Apprentissages",
    age: "Dès 3 ans",
    price: "12,90 €",
    background: "#e9def0",
    accent: "#9c80b1",
  },
  {
    id: 8,
    title: "Mes premières émotions",
    category: "Émotions",
    age: "Dès 2 ans",
    price: "14,90 €",
    background: "#f1ddd6",
    accent: "#ca8375",
  },
];

const packs: Product[] = [
  {
    id: 101,
    title: "Pack Premiers apprentissages",
    category: "Packs",
    age: "2 / 4 ans",
    price: "29,90 €",
    oldPrice: "38,70 €",
    badge: "-20%",
    background: "#e4ecd9",
    accent: "#819b6d",
  },
  {
    id: 102,
    title: "Pack Histoires du soir",
    category: "Packs",
    age: "3 / 6 ans",
    price: "34,90 €",
    oldPrice: "44,70 €",
    badge: "-22%",
    background: "#e5ddee",
    accent: "#977dab",
  },
  {
    id: 103,
    title: "Pack Découverte",
    category: "Packs",
    age: "12 mois / 3 ans",
    price: "26,90 €",
    oldPrice: "35,70 €",
    badge: "-25%",
    background: "#efe0d0",
    accent: "#bd8065",
  },
];

const ageCategories = [
  {
    title: "12 / 18 mois",
    subtitle: "Éveil & découverte",
    background: "#f2e8cc",
    number: "01",
  },
  {
    title: "18 mois / 3 ans",
    subtitle: "Motricité & vocabulaire",
    background: "#e3ecd9",
    number: "02",
  },
  {
    title: "3 / 6 ans",
    subtitle: "Apprentissage & autonomie",
    background: "#dfe8ef",
    number: "03",
  },
  {
    title: "6 / 8 ans",
    subtitle: "Lecture & réflexion",
    background: "#ebe1ec",
    number: "04",
  },
];

const reviews = [
  {
    name: "Sarah",
    text: "Très belle découverte. Les cahiers sont magnifiques et ma fille les réclame régulièrement.",
  },
  {
    name: "Nadia",
    text: "Les activités sont adaptées, les illustrations sont douces et la qualité est vraiment au rendez-vous.",
  },
  {
    name: "Amélie",
    text: "Très jolie boutique et produits soigneusement préparés. Mon fils adore ses nouveaux cahiers.",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main>
      {/* ======================================================
          BARRE SUPÉRIEURE
      ====================================================== */}

      <div className="topBenefits">
        <div className="topBenefitsInner">
          <span>
            <b>♡</b>
            Créé avec amour
          </span>

          <span>
            <b>✦</b>
            Activités éducatives
          </span>

          <span>
            <b>♢</b>
            Livraison offerte dès 49 €
          </span>

          <span>
            <b>✓</b>
            Paiement sécurisé
          </span>
        </div>
      </div>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <header className="siteHeader">
        {/* Ligne logo */}

        <div className="headerLogoRow">
          <button
            className="mobileMenuButton"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>

          <a href="#" className="brandLogoCentered">
            <img
              src="/logo-ariam.png"
              alt="Les Cahiers de Ariam"
              className="brandLogoImageCentered"
            />
          </a>

          <div className="headerActions headerActionsTop">
            <button
              className="iconButton"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Rechercher"
            >
              <SearchIcon />
            </button>

            <button className="iconButton desktopOnly" aria-label="Compte">
              <AccountIcon />
            </button>

            <button className="iconButton cartButton" aria-label="Panier">
              <CartIcon />
              <span className="cartCount">0</span>
            </button>
          </div>
        </div>

        {/* Ligne menu */}

        <div className="headerNavRow">
          <nav className="desktopNav">
            <div className="navDropdown">
              <button className="navLink">
                Les cahiers <span>⌄</span>
              </button>

              <div className="dropdownMenu">
                <div className="dropdownColumn">
                  <span className="dropdownTitle">Par âge</span>

                  <a href="#ages">12 / 18 mois</a>
                  <a href="#ages">18 mois / 3 ans</a>
                  <a href="#ages">3 / 6 ans</a>
                  <a href="#ages">6 / 8 ans</a>
                </div>

                <div className="dropdownColumn">
                  <span className="dropdownTitle">Collections</span>

                  <a href="#products">Cahiers illustrés</a>
                  <a href="#products">Imagiers</a>
                  <a href="#products">Apprentissages</a>
                  <a href="#products">Émotions</a>
                </div>
              </div>
            </div>

            <a href="#new" className="navLink">
              Nouveautés
            </a>

            <a href="#packs" className="navLink">
              Les packs
            </a>

            <a href="#ages" className="navLink">
              Par âge
            </a>

            <a href="#favorites" className="navLink">
              Coups de cœur
            </a>

            <a href="#reviews" className="navLink">
              Avis
            </a>

            <a href="#contact" className="navLink">
              Contact
            </a>
          </nav>
        </div>

        {/* Recherche */}

        {searchOpen && (
          <div className="searchPanel">
            <div className="searchContainer">
              <SearchIcon />

              <input
                autoFocus
                type="search"
                placeholder="Rechercher un cahier, une activité..."
              />

              <button onClick={() => setSearchOpen(false)}>Fermer</button>
            </div>
          </div>
        )}

        {/* Menu mobile */}

        {mobileMenu && (
          <div className="mobileNav">
            <a href="#products">Les cahiers</a>
            <a href="#new">Nouveautés</a>
            <a href="#packs">Les packs</a>
            <a href="#ages">Par âge</a>
            <a href="#favorites">Coups de cœur</a>
            <a href="#reviews">Avis</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroContent">
            <span className="eyebrow">
              Bienvenue chez Les Cahiers de Ariam
            </span>

            <h1>
              Apprendre,
              <br />
              <em>jouer & grandir.</em>
            </h1>

            <p className="heroDescription">
              Des cahiers illustrés et des activités éducatives conçus pour
              accompagner les enfants de 12 mois à 8 ans dans leurs
              découvertes, leur autonomie et leurs apprentissages.
            </p>

            <div className="heroButtons">
              <a href="#products" className="button buttonDark">
                Découvrir les cahiers
              </a>

              <a href="#ages" className="button buttonLight">
                Choisir par âge
              </a>
            </div>

            <div className="heroBenefits">
              <span>★ 4,9 / 5</span>
              <span>Activités éducatives</span>
              <span>Supports réutilisables</span>
              <span>Livraison rapide</span>
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroCircle heroCircleLarge" />
            <div className="heroCircle heroCircleSmall" />

            <div className="heroBook heroBookBack">
              <span className="miniBrand">Les Cahiers de Ariam</span>

              <div className="cloudShape" />

              <h3>
                Mila au pays
                <br />
                des nuages
              </h3>

              <span className="bookAge">Dès 4 ans</span>
            </div>

            <div className="heroBook heroBookFront">
              <span className="miniBrand">Les Cahiers de Ariam</span>

              <div className="moonShape" />

              <h3>
                La lune et
                <br />
                le petit renard
              </h3>

              <span className="bookAge">Dès 3 ans</span>
            </div>

            <div className="heroSticker">
              <strong>Nouveau</strong>
              <span>à découvrir</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          AVANTAGES
      ====================================================== */}

      <section className="benefitsBar">
        <div className="container benefitsGrid">
          <Benefit
            number="01"
            title="Activités ludiques"
            text="Apprendre en s'amusant"
          />

          <Benefit
            number="02"
            title="Adaptés à chaque âge"
            text="De 12 mois à 8 ans"
          />

          <Benefit
            number="03"
            title="Matériel de qualité"
            text="Pensé pour être réutilisé"
          />

          <Benefit
            number="04"
            title="Livraison soignée"
            text="France & Belgique"
          />
        </div>
      </section>

      {/* ======================================================
          NOUVEAUTÉS
      ====================================================== */}

      <section id="new" className="section">
        <div className="container">
          <SectionHeader
            kicker="Vient de sortir"
            title="Nos nouveautés"
            link="Voir tous les cahiers"
          />

          <div className="productGrid">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          PAR ÂGE
      ====================================================== */}

      <section id="ages" className="section softSection">
        <div className="container">
          <div className="centerHeader">
            <span className="eyebrow">Choisir facilement</span>

            <h2>Des activités pour chaque âge</h2>

            <p>
              Choisissez une tranche d'âge pour retrouver les cahiers et
              activités adaptés au développement de votre enfant.
            </p>
          </div>

          <div className="ageGrid">
            {ageCategories.map((category) => (
              <a
                href="#products"
                className="ageCard"
                key={category.title}
                style={{ backgroundColor: category.background }}
              >
                <span className="ageNumber">{category.number}</span>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                  <span className="ageLink">Découvrir →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          COLLECTION
      ====================================================== */}

      <section id="products" className="section">
        <div className="container">
          <SectionHeader
            kicker="Notre collection"
            title="Les cahiers"
            link="Voir toute la boutique"
          />

          <div className="productGrid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          UNIVERS
      ====================================================== */}

      <section className="editorialSection">
        <div className="container editorialGrid">
          <div className="editorialVisual">
            <div className="editorialBook">
              <span>Les Cahiers de Ariam</span>

              <div className="leafDrawing">
                <span />
                <span />
                <span />
                <span />
              </div>

              <strong>
                Le secret
                <br />
                du jardin
              </strong>

              <small>Dès 2 ans</small>
            </div>
          </div>

          <div className="editorialContent">
            <span className="eyebrow">Apprendre autrement</span>

            <h2>Des supports pensés pour les petits curieux</h2>

            <p>
              Nos cahiers associent découverte, manipulation et apprentissage
              afin d'aider chaque enfant à progresser à son rythme.
            </p>

            <p>
              Des univers doux et colorés pour travailler le vocabulaire, la
              concentration, l'observation, la motricité et l'autonomie.
            </p>

            <a href="#products" className="textLink">
              Découvrir notre univers →
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          PACKS
      ====================================================== */}

      <section id="packs" className="section">
        <div className="container">
          <SectionHeader
            kicker="Plus avantageux"
            title="Nos packs"
            link="Voir tous les packs"
          />

          <div className="packGrid">
            {packs.map((pack) => (
              <ProductCard key={pack.id} product={pack} large />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          COUPS DE CŒUR
      ====================================================== */}

      <section id="favorites" className="section softSection">
        <div className="container">
          <SectionHeader
            kicker="Les préférés"
            title="Coups de cœur"
            link="Tout découvrir"
          />

          <div className="productGrid">
            {[products[2], products[0], products[5], products[7]].map(
              (product) => (
                <ProductCard key={product.id} product={product} />
              )
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          AVIS
      ====================================================== */}

      <section id="reviews" className="reviewsSection">
        <div className="container">
          <div className="centerHeader">
            <span className="eyebrow">Ils nous font confiance</span>

            <h2>Vos avis</h2>

            <div className="rating">
              <span>★★★★★</span>
              <strong>4,9 / 5</strong>
              <small>plus de 400 avis</small>
            </div>
          </div>

          <div className="reviewsGrid">
            {reviews.map((review) => (
              <article className="reviewCard" key={review.name}>
                <div className="reviewStars">★★★★★</div>

                <p>“{review.text}”</p>

                <div className="reviewAuthor">
                  <div className="reviewAvatar">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{review.name}</strong>
                    <span>Acheteuse vérifiée</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          NEWSLETTER
      ====================================================== */}

      <section className="newsletterSection">
        <div className="container newsletter">
          <div>
            <span className="eyebrow">Le courrier d'Ariam</span>

            <h2>Recevez nos nouveautés</h2>

            <p>
              Nouveaux cahiers, idées d'activités et offres directement dans
              votre boîte mail.
            </p>
          </div>

          <form
            className="newsletterForm"
            onSubmit={(event) => event.preventDefault()}
          >
            <input type="email" placeholder="Votre adresse e-mail" />

            <button type="submit">Je m'inscris</button>
          </form>
        </div>
      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footerGrid">
            <div className="footerBrand">
              <img
                src="/logo-ariam.png"
                alt="Les Cahiers de Ariam"
                className="footerLogo"
              />

              <p>
                Des cahiers tendres, éducatifs et colorés pour accompagner les
                enfants dans leurs premières découvertes.
              </p>
            </div>

            <FooterColumn
              title="Boutique"
              items={[
                "Tous les cahiers",
                "Nouveautés",
                "Les packs",
                "Par âge",
                "Coups de cœur",
              ]}
            />

            <FooterColumn
              title="Les Cahiers de Ariam"
              items={[
                "Notre histoire",
                "Nos engagements",
                "Vos avis",
                "Contact",
              ]}
            />

            <FooterColumn
              title="Aide & informations"
              items={[
                "Livraison",
                "Retours",
                "Questions fréquentes",
                "CGV",
                "Mentions légales",
                "Confidentialité",
              ]}
            />
          </div>

          <div className="footerBottom">
            <span>© 2026 Les Cahiers de Ariam</span>
            <span>Fait avec ♡ en France</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   COMPONENTS
============================================================ */

function Benefit({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="benefit">
      <span className="benefitIcon">{number}</span>

      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

function SectionHeader({
  kicker,
  title,
  link,
}: {
  kicker: string;
  title: string;
  link: string;
}) {
  return (
    <div className="sectionHeader">
      <div>
        <span className="eyebrow">{kicker}</span>
        <h2>{title}</h2>
      </div>

      <a href="#" className="sectionLink">
        {link} →
      </a>
    </div>
  );
}

function ProductCard({
  product,
  large = false,
}: {
  product: Product;
  large?: boolean;
}) {
  return (
    <article className={`productCard ${large ? "largeProductCard" : ""}`}>
      <div
        className="productVisual"
        style={{
          backgroundColor: product.background,
        }}
      >
        {product.badge && (
          <span className="productBadge">{product.badge}</span>
        )}

        <button
          className="favoriteButton"
          aria-label="Ajouter aux favoris"
        >
          ♡
        </button>

        <div
          className="bookMockup"
          style={{
            borderColor: product.accent,
          }}
        >
          <span className="bookMockupBrand">
            Les Cahiers
            <br />
            de Ariam
          </span>

          <div
            className="bookMockupSymbol"
            style={{
              backgroundColor: product.accent,
            }}
          />

          <strong>{product.title}</strong>

          <small>{product.age}</small>
        </div>
      </div>

      <div className="productInfo">
        <span className="productCategory">{product.category}</span>

        <h3>{product.title}</h3>

        <div className="productBottom">
          <div className="prices">
            {product.oldPrice && (
              <span className="oldPrice">{product.oldPrice}</span>
            )}

            <strong>{product.price}</strong>
          </div>

          <button className="addButton" aria-label="Ajouter au panier">
            +
          </button>
        </div>
      </div>
    </article>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="footerColumn">
      <h4>{title}</h4>

      {items.map((item) => (
        <a href="#" key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}

/* ============================================================
   ICONS
============================================================ */

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21c.8-4.5 3.2-6.5 7.5-6.5s6.7 2 7.5 6.5" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 4h2l2.2 10.3a2 2 0 0 0 2 1.7h7.9a2 2 0 0 0 2-1.7L21 7H6" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  );
}