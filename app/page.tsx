"use client";

import { useState } from "react";
import Link from "next/link";
import CartIcon from "./components/CartIcon";

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
    href: "/produits/mon-cahier-d-activites-petite-section",
  },
  {
    id: 4,
    title: "Mon premier imagier interactif",
    subtitle:
      "Un imagier ludique pour observer, reconnaître, associer et apprendre en manipulant.",
    age: "Premiers apprentissages",
    image: "/products/premier-imagier-interieur.png",
    badge: "Interactif",
    href: "/produits/mon-premier-imagier-interactif",
  },
  {
    id: 5,
    title: "Pack affiches d’apprentissage",
    subtitle:
      "Des supports visuels pour apprendre les couleurs, les formes, les lettres et les chiffres.",
    age: "Apprentissage",
    image: "/products/supports-apprentissage.png",
    badge: "Pack",
    href: "/produits/pack-affiches-dapprentissage",
  },
];

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main>
      {/* HEADER */}
      <header className="siteHeader">
        <div className="headerLogoRow">
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

            <CartIcon />
          </div>
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

              <button onClick={() => setSearchOpen(false)}>
                Fermer
              </button>
            </div>
          </div>
        )}
      </header>

      {/* AVANTAGES */}
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

      {/* COLLECTION */}
      <section className="section" id="collection">
        <div className="container">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">
                Notre collection
              </span>

              <h2>Nos cahiers</h2>
            </div>
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

      {/* PETITE SECTION */}
      <section className="featureSection">
        <div className="container featureGrid">
          <div className="featureImages">
            <Link href="/produits/mon-cahier-d-activites-petite-section">
              <img
                src="/products/petite-section-3-4-ans.png"
                alt="Cahier d'activités Petite Section 3 à 4 ans"
                className="featureMainImage"
              />
            </Link>

            <Link href="/produits/mon-cahier-d-activites-petite-section">
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
              <li>Activités adaptées aux 3–4 ans</li>
              <li>Observation et association</li>
              <li>Graphisme et motricité fine</li>
              <li>Premiers apprentissages de maternelle</li>
            </ul>

            <Link
              href="/produits/mon-cahier-d-activites-petite-section"
              className="button buttonDark"
            >
              Découvrir le cahier
            </Link>
          </div>
        </div>
      </section>

      {/* PREMIER IMAGIER */}
      <section className="featureSection alternateFeature">
        <div className="container featureGrid featureGridReverse">
          <div className="featureContent">
            <span className="eyebrow">
              Dès 12 mois
            </span>

            <h2>Mon premier imagier</h2>

            <p>
              Un support simple et visuel pour reconnaître
              les objets, enrichir le vocabulaire et
              accompagner les premières découvertes de
              l’enfant.
            </p>

            <ul className="featureList">
              <li>Images faciles à reconnaître</li>
              <li>Vocabulaire du quotidien</li>
              <li>Support visuel adapté aux tout-petits</li>
              <li>À découvrir avec un adulte</li>
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

      {/* UNIVERS EDUCATIFS */}
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
            {/* FRUITS & LEGUMES */}
            <article className="universeCard">
              <Link href="/produits/mon-premier-imagier-fruits-legumes">
                <img
                  src="/products/imagiers-fruits-legumes.png"
                  alt="Imagiers fruits et légumes"
                />
              </Link>

              <div>
                <span>Dès 12 mois</span>

                <h3>
                  <Link href="/produits/mon-premier-imagier-fruits-legumes">
                    Fruits & légumes
                  </Link>
                </h3>

                <p>
                  Découvrir les aliments et enrichir le
                  vocabulaire du quotidien.
                </p>
              </div>
            </article>

            {/* ANIMAUX & VEHICULES */}
            <article className="universeCard">
              <Link href="/produits/mon-premier-imagier-animaux-vehicules">
                <img
                  src="/products/imagiers-animaux-vehicules.png"
                  alt="Imagiers animaux et véhicules"
                />
              </Link>

              <div>
                <span>Dès 12 mois</span>

                <h3>
                  <Link href="/produits/mon-premier-imagier-animaux-vehicules">
                    Animaux & véhicules
                  </Link>
                </h3>

                <p>
                  Reconnaître et nommer les animaux,
                  transports et objets familiers.
                </p>
              </div>
            </article>

            {/* PACK AFFICHES */}
            <article className="universeCard">
              <Link href="/produits/pack-affiches-dapprentissage">
                <img
                  src="/products/supports-apprentissage.png"
                  alt="Supports d'apprentissage"
                />
              </Link>

              <div>
                <span>Apprentissages</span>

                <h3>
                  <Link href="/produits/pack-affiches-dapprentissage">
                    Couleurs, formes & lettres
                  </Link>
                </h3>

                <p>
                  Des supports visuels pour apprendre,
                  tracer, reconnaître et manipuler.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
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
                  label: "Fruits & légumes",
                  href: "/produits/mon-premier-imagier-fruits-legumes",
                },
                {
                  label: "Animaux & véhicules",
                  href: "/produits/mon-premier-imagier-animaux-vehicules",
                },
                {
                  label: "Petite Section",
                  href: "/produits/mon-cahier-d-activites-petite-section",
                },
                {
                  label: "Imagier interactif",
                  href: "/produits/mon-premier-imagier-interactif",
                },
                {
                  label: "Pack affiches",
                  href: "/produits/pack-affiches-dapprentissage",
                },
              ]}
            />

            <FooterColumn
              title="Informations"
              links={[
                {
                  label: "Livraison & délais",
                  href: "/livraison",
                },
                {
                  label: "Paiement sécurisé",
                  href: "/paiement",
                },
              ]}
            />

            <FooterColumn
              title="Nous contacter"
              links={[
                {
                  label: "Contact",
                  href: "/contact",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/les_cahiers_de_ariam/",
                },
                {
                  label: "FAQ",
                  href: "/faq",
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
            target={
              link.href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              link.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
          >
            {link.label}
          </a>
        )
      )}
    </div>
  );
}

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
      <circle cx="11" cy="11" r="7" />
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
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
    </svg>
  );
}