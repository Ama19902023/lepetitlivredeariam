"use client";

import { useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  subtitle: string;
  age: string;
  image: string;
  secondImage?: string;
  badge?: string;
  href: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Mon Busy Book",
    subtitle:
      "Un cahier ludique pour découvrir, manipuler et apprendre.",
    age: "À partir de 18 mois",
    image: "/products/busy-book-18-mois.png",
    badge: "Dès 18 mois",
    href: "/produits/mon-busy-book",
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
    href: "/produits/mon-premier-imagier",
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
    href: "/produits/petite-section",
  },
];

const reviews = [
  {
    name: "Sarah",
    text: "Très joli cahier, mon fils adore manipuler les activités. Les supports sont visuels et faciles à comprendre.",
  },
  {
    name: "Nadia",
    text: "Une très belle découverte. Les activités sont variées et adaptées aux petits.",
  },
  {
    name: "Amélie",
    text: "Les visuels sont magnifiques et mon enfant revient spontanément vers le cahier.",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main>
      {/* =====================================================
          TOP BAR
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

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="siteHeader">
        <div className="headerLogoRow">
          <button
            className="mobileMenuButton"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Ouvrir le menu"
          >
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="brandLogoCentered">
            <img
              src="/logo-ariam.png"
              alt="Les Cahiers de Ariam"
              className="brandLogoImageCentered"
            />
          </Link>

          <div className="headerActions headerActionsTop">
            <button
              className="iconButton desktopOnly"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Rechercher"
            >
              <SearchIcon />
            </button>

            <button
              className="iconButton desktopOnly"
              aria-label="Mon compte"
            >
              <AccountIcon />
            </button>

            <button
              className="iconButton cartButton"
              aria-label="Panier"
            >
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
                  <span className="dropdownTitle">
                    Par âge
                  </span>

                  <a href="#collection">Dès 12 mois</a>
                  <a href="#collection">Dès 18 mois</a>
                  <a href="#collection">3 - 4 ans</a>
                  <a href="#collection">Maternelle</a>
                </div>

                <div className="dropdownColumn">
                  <span className="dropdownTitle">
                    Nos univers
                  </span>

                  <Link href="/produits/mon-busy-book">
                    Busy Books
                  </Link>

                  <Link href="/produits/mon-premier-imagier">
                    Imagiers
                  </Link>

                  <Link href="/produits/petite-section">
                    Cahiers d'activités
                  </Link>
                </div>
              </div>
            </div>

            <a href="#collection" className="navLink">
              Nouveautés
            </a>

            <a href="#univers" className="navLink">
              Les packs
            </a>

            <a href="#collection" className="navLink">
              Par âge
            </a>

            <a href="#collection" className="navLink">
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
                type="text"
                placeholder="Rechercher un cahier..."
                autoFocus
              />

              <button
                onClick={() => setSearchOpen(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        {mobileMenu && (
          <nav className="mobileNav">
            <a href="#collection">Les cahiers</a>
            <a href="#collection">Nouveautés</a>
            <a href="#univers">Les packs</a>
            <a href="#collection">Par âge</a>
            <a href="#reviews">Avis</a>
            <a href="#contact">Contact</a>
          </nav>
        )}
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="realHero">
        <div className="container realHeroGrid">
          <div className="realHeroContent">
            <span className="eyebrow">
              Les Cahiers de Ariam
            </span>

            <h1>
              Apprendre en jouant,
              <br />
              <em>grandir en s’amusant.</em>
            </h1>

            <p>
              Des cahiers éducatifs et ludiques pensés
              pour accompagner les enfants dans leurs
              découvertes, leur autonomie et leurs
              premiers apprentissages.
            </p>

            <div className="heroButtons">
              <a
                href="#collection"
                className="button buttonDark"
              >
                Découvrir les cahiers
              </a>

              <a
                href="#univers"
                className="button buttonLight"
              >
                Voir nos activités
              </a>
            </div>

            <div className="realHeroMini">
              <span>✓ Dès 12 mois</span>
              <span>✓ Activités ludiques</span>
              <span>✓ Supports réutilisables</span>
            </div>
          </div>

          <Link
            href="/produits/mon-busy-book"
            className="realHeroImage"
          >
            <img
              src="/products/busy-book-18-mois.png"
              alt="Mon Busy Book dès 18 mois"
            />

            <div className="realHeroBadge">
              <strong>Mon Busy Book</strong>
              <span>Dès 18 mois</span>
            </div>
          </Link>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
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
            text="Pour favoriser l’autonomie"
          />

          <Benefit
            number="04"
            title="Créé avec soin"
            text="Une sélection pédagogique"
          />
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section
        className="section"
        id="collection"
      >
        <div className="container">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">
                Notre collection
              </span>

              <h2>Nos cahiers</h2>
            </div>

            <a
              href="#collection"
              className="sectionLink"
            >
              Voir toute la collection →
            </a>
          </div>

          <div className="realProductGrid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PETITE SECTION FEATURE
      ====================================================== */}

      <section className="featureSection">
        <div className="container featureGrid">
          <div className="featureImages">
            <Link href="/produits/petite-section">
              <img
                src="/products/petite-section-3-4-ans.png"
                alt="Cahier d'activités Petite Section 3 à 4 ans"
                className="featureMainImage"
              />
            </Link>

            <Link href="/produits/petite-section">
              <img
                src="/products/petite-section-interieur.jpg"
                alt="Aperçu des activités Petite Section"
                className="featureSecondImage"
              />
            </Link>
          </div>

          <div className="featureContent">
            <span className="eyebrow">
              Maternelle · 3 à 4 ans
            </span>

            <h2>
              Mon cahier d’activités
              <br />
              Petite Section
            </h2>

            <p>
              Des activités variées pour travailler les
              émotions, les saisons, les lettres, le
              graphisme, l’observation et les premiers
              apprentissages.
            </p>

            <ul className="featureList">
              <li>
                Activités adaptées aux 3–4 ans
              </li>
              <li>
                Observation et association
              </li>
              <li>
                Graphisme et motricité fine
              </li>
              <li>
                Premiers apprentissages de maternelle
              </li>
            </ul>

            <Link
              href="/produits/petite-section"
              className="button buttonDark"
            >
              Découvrir le cahier
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PREMIER IMAGIER FEATURE
      ====================================================== */}

      <section className="featureSection alternateFeature">
        <div className="container featureGrid featureGridReverse">
          <div className="featureContent">
            <span className="eyebrow">
              Dès 12 mois
            </span>

            <h2>
              Mon premier imagier
            </h2>

            <p>
              Un support simple et visuel pour reconnaître
              les objets, enrichir le vocabulaire et
              accompagner les premières découvertes de
              l’enfant.
            </p>

            <ul className="featureList">
              <li>
                Images faciles à reconnaître
              </li>
              <li>
                Vocabulaire du quotidien
              </li>
              <li>
                Support visuel adapté aux tout-petits
              </li>
              <li>
                À découvrir avec un adulte
              </li>
            </ul>

            <Link
              href="/produits/mon-premier-imagier"
              className="button buttonDark"
            >
              Découvrir l’imagier
            </Link>
          </div>

          <div className="featureImages">
            <Link href="/produits/mon-premier-imagier">
              <img
                src="/products/premier-imagier-12-mois.png"
                alt="Mon premier imagier dès 12 mois"
                className="featureMainImage"
              />
            </Link>

            <Link href="/produits/mon-premier-imagier">
              <img
                src="/products/premier-imagier-interieur.png"
                alt="Aperçu intérieur de Mon premier imagier"
                className="featureSecondImage"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          OTHER UNIVERSES
      ====================================================== */}

      <section
        className="section universeSection"
        id="univers"
      >
        <div className="container">
          <div className="centerHeader">
            <span className="eyebrow">
              Découvrir autrement
            </span>

            <h2>Nos univers éducatifs</h2>

            <p>
              Des supports pensés pour accompagner chaque
              étape des apprentissages de l’enfant.
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
                <p>
                  Découvrir les aliments et enrichir le
                  vocabulaire du quotidien.
                </p>
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
                <p>
                  Reconnaître et nommer les animaux,
                  transports et objets familiers.
                </p>
              </div>
            </article>

            <article className="universeCard">
              <img
                src="/products/supports-apprentissage.png"
                alt="Supports d'apprentissage"
              />

              <div>
                <span>Apprentissages</span>
                <h3>Couleurs, formes & lettres</h3>
                <p>
                  Des supports visuels pour apprendre,
                  tracer, reconnaître et manipuler.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSY BOOK STORY
      ====================================================== */}

      <section className="imageStorySection">
        <div className="container imageStoryGrid">
          <div className="imageStoryContent">
            <span className="eyebrow">
              Dès 18 mois
            </span>

            <h2>
              Manipuler, observer,
              <br />
              apprendre.
            </h2>

            <p>
              Mon Busy Book accompagne l’enfant dans ses
              premières découvertes grâce à des activités
              visuelles et ludiques adaptées aux
              tout-petits.
            </p>

            <Link
              href="/produits/mon-busy-book"
              className="button buttonDark"
            >
              Voir Mon Busy Book
            </Link>
          </div>

          <Link
            href="/produits/mon-busy-book"
            className="imageStoryVisual"
          >
            <img
              src="/products/busy-book-18-mois.png"
              alt="Mon Busy Book dès 18 mois"
            />
          </Link>
        </div>
      </section>

      {/* =====================================================
          REVIEWS
      ====================================================== */}

      <section
        className="reviewsSection"
        id="reviews"
      >
        <div className="container">
          <div className="centerHeader">
            <span className="eyebrow">
              Les parents en parlent
            </span>

            <h2>Vos petits mots</h2>

            <div className="rating">
              <span>★★★★★</span>
              <strong>4,9 / 5</strong>
            </div>
          </div>

          <div className="reviewsGrid">
            {reviews.map((review) => (
              <article
                className="reviewCard"
                key={review.name}
              >
                <div className="reviewStars">
                  ★★★★★
                </div>

                <p>“{review.text}”</p>

                <div className="reviewAuthor">
                  <div className="reviewAvatar">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{review.name}</strong>
                    <span>Parent vérifié</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="newsletterSection">
        <div className="container newsletter">
          <div>
            <span className="eyebrow">
              Restons en contact
            </span>

            <h2>
              Rejoignez l’univers
              <br />
              des Cahiers de Ariam
            </h2>

            <p>
              Nouveautés, idées d’activités et conseils
              pour accompagner les apprentissages de vos
              enfants.
            </p>
          </div>

          <form
            className="newsletterForm"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              aria-label="Votre adresse e-mail"
            />

            <button type="submit">
              S’inscrire
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="footer"
        id="contact"
      >
        <div className="container">
          <div className="footerGrid">
            <div className="footerBrand">
              <img
                src="/logo-ariam.png"
                alt="Les Cahiers de Ariam"
                className="footerLogo"
              />

              <p>
                Des cahiers éducatifs et ludiques pour
                accompagner les enfants dans leurs
                premières découvertes.
              </p>
            </div>

            <FooterColumn
              title="Les cahiers"
              links={[
                {
                  label: "Mon Busy Book",
                  href: "/produits/mon-busy-book",
                },
                {
                  label: "Mon premier imagier",
                  href: "/produits/mon-premier-imagier",
                },
                {
                  label: "Petite Section",
                  href: "/produits/petite-section",
                },
              ]}
            />

            <FooterColumn
              title="Informations"
              links={[
                {
                  label: "Livraison",
                  href: "#",
                },
                {
                  label: "Paiement",
                  href: "#",
                },
                {
                  label: "Retours",
                  href: "#",
                },
              ]}
            />

            <FooterColumn
              title="Nous contacter"
              links={[
                {
                  label: "Contact",
                  href: "#contact",
                },
                {
                  label: "Instagram",
                  href: "#",
                },
                {
                  label: "FAQ",
                  href: "#",
                },
              ]}
            />
          </div>

          <div className="footerBottom">
            <span>
              © 2026 Les Cahiers de Ariam
            </span>

            <span>
              Tous droits réservés
            </span>
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
      <div className="benefitIcon">
        {number}
      </div>

      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <article className="realProductCard">
      <Link
        href={product.href}
        className="realProductImageWrap"
      >
        <img
          src={product.image}
          alt={product.title}
          className="realProductImage"
        />

        {product.badge && (
          <span className="realProductBadge">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="realProductInfo">
        <span>{product.age}</span>

        <h3>
          <Link href={product.href}>
            {product.title}
          </Link>
        </h3>

        <p>{product.subtitle}</p>

        <Link href={product.href}>
          Découvrir →
        </Link>
      </div>
    </article>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div className="footerColumn">
      <h4>{title}</h4>

      {links.map((link) =>
        link.href.startsWith("/") ? (
          <Link
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={link.label}
            href={link.href}
          >
            {link.label}
          </a>
        )
      )}
    </div>
  );
}

/* ============================================================
   ICONS
============================================================ */

function SearchIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
      />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="8"
        r="4"
      />
      <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 4h2l2 11h10l2-8H6" />

      <circle
        cx="9"
        cy="20"
        r="1"
      />

      <circle
        cx="17"
        cy="20"
        r="1"
      />
    </svg>
  );
}