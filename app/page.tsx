"use client";

import { useState } from "react";

type Product = {
  id: number;
  title: string;
  subtitle: string;
  age: string;
  image: string;
  secondImage?: string;
  badge?: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Mon Busy Book",
    subtitle: "Un cahier ludique pour découvrir, manipuler et apprendre.",
    age: "À partir de 18 mois",
    image: "/products/busy-book-18-mois.png",
    badge: "Dès 18 mois",
  },
  {
    id: 2,
    title: "Mon premier imagier",
    subtitle:
      "Un imagier conçu pour enrichir le vocabulaire et reconnaître les objets du quotidien.",
    age: "Dès 12 mois",
    image: "/products/premier-imagier-12-mois.png",
    secondImage: "/products/premier-imagier-interieur.png",
    badge: "Dès 12 mois",
  },
  {
    id: 3,
    title: "Mon cahier d'activités Petite Section",
    subtitle:
      "Des activités adaptées aux premiers apprentissages de maternelle.",
    age: "3 - 4 ans",
    image: "/products/petite-section-3-4-ans.png",
    secondImage: "/products/petite-section-interieur.jpg",
    badge: "3 - 4 ans",
  },
  {
    id: 4,
    title: "Imagiers fruits & légumes",
    subtitle:
      "Découvrir les fruits et légumes avec des supports illustrés.",
    age: "Dès 12 mois",
    image: "/products/imagiers-fruits-legumes.png",
  },
  {
    id: 5,
    title: "Imagiers animaux & véhicules",
    subtitle:
      "Des univers familiers pour développer le vocabulaire des tout-petits.",
    age: "Dès 12 mois",
    image: "/products/imagiers-animaux-vehicules.png",
  },
  {
    id: 6,
    title: "Supports d'apprentissage",
    subtitle:
      "Couleurs, formes, alphabet et chiffres à découvrir en manipulant.",
    age: "Premiers apprentissages",
    image: "/products/supports-apprentissage.png",
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

        <div className="headerNavRow">
          <nav className="desktopNav">
            <div className="navDropdown">
              <button className="navLink">
                Les cahiers <span>⌄</span>
              </button>

              <div className="dropdownMenu">
                <div className="dropdownColumn">
                  <span className="dropdownTitle">Par âge</span>
                  <a href="#products">12 / 18 mois</a>
                  <a href="#products">18 mois / 3 ans</a>
                  <a href="#products">3 / 6 ans</a>
                  <a href="#products">6 / 8 ans</a>
                </div>

                <div className="dropdownColumn">
                  <span className="dropdownTitle">Collections</span>
                  <a href="#products">Busy Book</a>
                  <a href="#products">Imagiers</a>
                  <a href="#products">Maternelle</a>
                  <a href="#products">Supports éducatifs</a>
                </div>
              </div>
            </div>

            <a href="#products" className="navLink">
              Nouveautés
            </a>

            <a href="#products" className="navLink">
              Les packs
            </a>

            <a href="#products" className="navLink">
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

        {searchOpen && (
          <div className="searchPanel">
            <div className="searchContainer">
              <SearchIcon />

              <input
                autoFocus
                type="search"
                placeholder="Rechercher un cahier..."
              />

              <button onClick={() => setSearchOpen(false)}>Fermer</button>
            </div>
          </div>
        )}

        {mobileMenu && (
          <div className="mobileNav">
            <a href="#products">Les cahiers</a>
            <a href="#products">Nouveautés</a>
            <a href="#products">Les packs</a>
            <a href="#products">Par âge</a>
            <a href="#favorites">Coups de cœur</a>
            <a href="#reviews">Avis</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="realHero">
        <div className="container realHeroGrid">
          <div className="realHeroContent">
            <span className="eyebrow">Les Cahiers de Ariam</span>

            <h1>
              Apprendre en jouant,
              <br />
              <em>grandir en s'amusant.</em>
            </h1>

            <p>
              Des cahiers éducatifs et ludiques pensés pour accompagner les
              enfants dans leurs découvertes, leur autonomie et leurs premiers
              apprentissages.
            </p>

            <div className="heroButtons">
              <a href="#products" className="button buttonDark">
                Découvrir les cahiers
              </a>

              <a href="#featured" className="button buttonLight">
                Voir nos activités
              </a>
            </div>

            <div className="realHeroMini">
              <span>✓ Dès 12 mois</span>
              <span>✓ Activités ludiques</span>
              <span>✓ Supports réutilisables</span>
            </div>
          </div>

          <div className="realHeroImage">
            <img
              src="/products/busy-book-18-mois.png"
              alt="Mon Busy Book à partir de 18 mois"
            />

            <div className="realHeroBadge">
              <strong>Mon Busy Book</strong>
              <span>Dès 18 mois</span>
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
            title="Apprendre en jouant"
            text="Des activités pensées pour les enfants"
          />

          <Benefit
            number="02"
            title="Adapté à chaque âge"
            text="Des supports dès 12 mois"
          />

          <Benefit
            number="03"
            title="Manipuler & découvrir"
            text="Pour favoriser l'autonomie"
          />

          <Benefit
            number="04"
            title="Créé avec soin"
            text="Une sélection pédagogique"
          />
        </div>
      </section>

      {/* ======================================================
          NOS CAHIERS
      ====================================================== */}

      <section id="products" className="section">
        <div className="container">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">Notre collection</span>
              <h2>Nos cahiers</h2>
            </div>

            <a href="#products" className="sectionLink">
              Voir toute la collection →
            </a>
          </div>

          <div className="realProductGrid">
            {products.slice(0, 6).map((product) => (
              <RealProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          PETITE SECTION
      ====================================================== */}

      <section id="featured" className="featureSection">
        <div className="container featureGrid">
          <div className="featureImages">
            <img
              className="featureMainImage"
              src="/products/petite-section-3-4-ans.png"
              alt="Mon cahier d'activités Petite Section"
            />

            <img
              className="featureSecondImage"
              src="/products/petite-section-interieur.jpg"
              alt="Aperçu des activités Petite Section"
            />
          </div>

          <div className="featureContent">
            <span className="eyebrow">Maternelle · 3 à 4 ans</span>

            <h2>
              Mon cahier d'activités
              <br />
              Petite Section
            </h2>

            <p>
              Des activités variées pour travailler les émotions, les saisons,
              les lettres, le graphisme, l'observation et les premiers
              apprentissages.
            </p>

            <ul className="featureList">
              <li>Activités adaptées aux 3–4 ans</li>
              <li>Observation et association</li>
              <li>Graphisme et motricité fine</li>
              <li>Premiers apprentissages de maternelle</li>
            </ul>

            <a href="#products" className="button buttonDark">
              Découvrir le cahier
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          PREMIER IMAGIER
      ====================================================== */}

      <section className="featureSection alternateFeature">
        <div className="container featureGrid featureGridReverse">
          <div className="featureContent">
            <span className="eyebrow">Dès 12 mois</span>

            <h2>Mon premier imagier</h2>

            <p>
              Un support simple et visuel pour reconnaître les objets,
              enrichir le vocabulaire et accompagner les premières
              découvertes de l'enfant.
            </p>

            <ul className="featureList">
              <li>Images faciles à reconnaître</li>
              <li>Vocabulaire du quotidien</li>
              <li>Support visuel adapté aux tout-petits</li>
              <li>À découvrir avec un adulte</li>
            </ul>

            <a href="#products" className="button buttonDark">
              Découvrir l'imagier
            </a>
          </div>

          <div className="featureImages">
            <img
              className="featureMainImage"
              src="/products/premier-imagier-12-mois.png"
              alt="Mon premier imagier dès 12 mois"
            />

            <img
              className="featureSecondImage"
              src="/products/premier-imagier-interieur.png"
              alt="Aperçu de l'intérieur de Mon premier imagier"
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          UNIVERS
      ====================================================== */}

      <section id="favorites" className="section universeSection">
        <div className="container">
          <div className="centerHeader">
            <span className="eyebrow">Explorer nos univers</span>
            <h2>Des activités pour chaque découverte</h2>

            <p>
              Imagiers, activités, couleurs, formes, alphabet et vocabulaire :
              chaque support accompagne une étape différente.
            </p>
          </div>

          <div className="universeGrid">
            <article className="universeCard">
              <img
                src="/products/imagiers-fruits-legumes.png"
                alt="Imagiers fruits et légumes"
              />

              <div>
                <span>Dès 12 mois</span>
                <h3>Fruits & légumes</h3>
                <p>Découvrir et nommer les aliments du quotidien.</p>
              </div>
            </article>

            <article className="universeCard">
              <img
                src="/products/imagiers-animaux-vehicules.png"
                alt="Imagiers animaux et véhicules"
              />

              <div>
                <span>Dès 12 mois</span>
                <h3>Animaux & véhicules</h3>
                <p>Deux univers très appréciés des tout-petits.</p>
              </div>
            </article>

            <article className="universeCard">
              <img
                src="/products/supports-apprentissage.png"
                alt="Supports d'apprentissage"
              />

              <div>
                <span>Apprentissage</span>
                <h3>Couleurs, formes & alphabet</h3>
                <p>Manipuler, tracer, observer et apprendre progressivement.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ======================================================
          BANDEAU IMAGE
      ====================================================== */}

      <section className="imageStorySection">
        <div className="container imageStoryGrid">
          <div className="imageStoryContent">
            <span className="eyebrow">Les Cahiers de Ariam</span>

            <h2>Des supports conçus pour éveiller la curiosité</h2>

            <p>
              Chaque activité est pensée pour rendre l'apprentissage plus
              concret, plus visuel et plus amusant.
            </p>
          </div>

          <div className="imageStoryVisual">
            <img
              src="/products/supports-apprentissage.png"
              alt="Activités éducatives Les Cahiers de Ariam"
            />
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
            </div>
          </div>

          <div className="reviewsGrid">
            <ReviewCard
              name="Sarah"
              text="Ma fille adore manipuler les activités. Le format est vraiment adapté aux petits."
            />

            <ReviewCard
              name="Nadia"
              text="Très joli travail, les images sont claires et les activités très variées."
            />

            <ReviewCard
              name="Amélie"
              text="Un support ludique que nous utilisons régulièrement à la maison."
            />
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
                Des cahiers éducatifs, ludiques et colorés pour accompagner les
                enfants dans leurs premières découvertes.
              </p>
            </div>

            <FooterColumn
              title="Boutique"
              items={[
                "Tous les cahiers",
                "Busy Book",
                "Imagiers",
                "Maternelle",
                "Par âge",
              ]}
            />

            <FooterColumn
              title="Les Cahiers de Ariam"
              items={["Notre histoire", "Nos engagements", "Avis", "Contact"]}
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

function RealProductCard({ product }: { product: Product }) {
  return (
    <article className="realProductCard">
      <div className="realProductImageWrap">
        {product.badge && (
          <span className="realProductBadge">{product.badge}</span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="realProductImage"
        />
      </div>

      <div className="realProductInfo">
        <span>{product.age}</span>
        <h3>{product.title}</h3>
        <p>{product.subtitle}</p>

        <a href="#products">Découvrir →</a>
      </div>
    </article>
  );
}

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

function ReviewCard({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <article className="reviewCard">
      <div className="reviewStars">★★★★★</div>

      <p>“{text}”</p>

      <div className="reviewAuthor">
        <div className="reviewAvatar">{name.charAt(0)}</div>

        <div>
          <strong>{name}</strong>
          <span>Acheteuse vérifiée</span>
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