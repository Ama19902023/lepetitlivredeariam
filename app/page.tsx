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
    title: "Mon premier imagier – Fruits & légumes",
    subtitle:
      "Découvrir les aliments et enrichir le vocabulaire du quotidien.",
    age: "Dès 12 mois",
    image: "/products/imagiers-fruits-legumes.png",
    badge: "Dès 12 mois",
    href: "/produits/mon-premier-imagier-fruits-legumes",
  },
  {
    id: 5,
    title: "Mon premier imagier – Animaux & véhicules",
    subtitle:
      "Reconnaître et nommer les animaux, transports et objets familiers.",
    age: "Dès 12 mois",
    image: "/products/imagiers-animaux-vehicules.png",
    badge: "Dès 12 mois",
    href: "/produits/mon-premier-imagier-animaux-vehicules",
  },
  {
    id: 6,
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

      {/* NOS CAHIERS */}
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