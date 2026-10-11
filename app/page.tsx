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
    <>
      <header className="siteHeader">
        <div className="headerInner">
          <div className="headerSpacer" />

          <Link href="/" className="logoLink" aria-label="Les cahiers d'Ariam">
            <img
              src="/logo-ariam.jpeg"
              alt="Les cahiers d'Ariam"
              className="siteLogo"
            />
          </Link>

          <div className="headerActions">
            <button
              type="button"
              className="headerIconButton"
              aria-label="Rechercher"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <SearchIcon />
            </button>

            <Link
              href="/account"
              className="headerIconButton"
              aria-label="Mon compte"
            >
              <AccountIcon />
            </Link>

            <CartIcon />
          </div>
        </div>

        {searchOpen && (
          <div className="searchPanel">
            <div className="searchPanelInner">
              <input
                type="search"
                placeholder="Rechercher un cahier, un imagier..."
                className="searchInput"
                autoFocus
              />

              <button
                type="button"
                className="searchClose"
                onClick={() => setSearchOpen(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="benefitsBar">
        <div className="benefitsGrid">
          <Benefit
            number="01"
            title="APPRENDRE EN JOUANT"
            text="Des activités pensées pour les enfants"
          />

          <Benefit
            number="02"
            title="ADAPTÉ À CHAQUE ÂGE"
            text="Des supports dès 12 mois"
          />

          <Benefit
            number="03"
            title="MANIPULER & DÉCOUVRIR"
            text="Pour favoriser l’autonomie"
          />

          <Benefit
            number="04"
            title="CRÉÉ AVEC SOIN"
            text="Une sélection pédagogique"
          />
        </div>
      </section>

      <main>
        <section className="productsSection">
          <div className="container">
            <div className="sectionHeading">
              <p className="eyebrow">NOTRE COLLECTION</p>

              <h1>Nos cahiers</h1>

              <Link href="/fournitures" className="fournituresLink">
                Découvrir nos fournitures & accessoires →
              </Link>
            </div>

            <div className="realProductGrid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="fournituresHomeSection">
          <div className="container">
            <div className="fournituresHomeCard">
              <div className="fournituresHomeContent">
                <p className="eyebrow">NOUVEL UNIVERS</p>

                <h2>Fournitures & accessoires</h2>

                <p>
                  Retrouvez prochainement une sélection de matériel pour
                  accompagner les activités, les premiers apprentissages et la
                  créativité des enfants.
                </p>

                <Link href="/fournitures" className="fournituresButton">
                  Découvrir la rubrique
                </Link>
              </div>

              <div className="fournituresCategories">
                <span>✏️ Écriture & dessin</span>
                <span>🎨 Activités créatives</span>
                <span>🧰 Rangement</span>
                <span>📚 Accessoires pour cahiers</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="container footerGrid">
          <div className="footerBrand">
            <img
              src="/logo-ariam.jpeg"
              alt="Les cahiers d'Ariam"
              className="footerLogo"
            />

            <p>
              Des cahiers et supports éducatifs pensés pour accompagner les
              enfants dans leurs découvertes et leurs apprentissages.
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
            title="Fournitures"
            links={[
              {
                label: "Toutes les fournitures",
                href: "/fournitures",
              },
              {
                label: "Écriture & dessin",
                href: "/fournitures",
              },
              {
                label: "Activités créatives",
                href: "/fournitures",
              },
              {
                label: "Accessoires pour cahiers",
                href: "/fournitures",
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
                external: true,
              },
              {
                label: "FAQ",
                href: "/faq",
              },
            ]}
          />
        </div>

        <div className="footerBottom">
          <div className="container footerBottomInner">
            <span>© 2026 Les cahiers d&apos;Ariam</span>

            <span>Apprendre • manipuler • découvrir</span>
          </div>
        </div>
      </footer>
    </>
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
    <div className="benefitItem">
      <div className="benefitNumber">{number}</div>

      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const displayedImage =
    showSecondImage && product.secondImage
      ? product.secondImage
      : product.image;

  return (
    <article className="productCard">
      <Link
        href={product.href}
        className="productImageLink"
        aria-label={product.title}
      >
        <div className="productImageWrapper">
          <img
            src={displayedImage}
            alt={product.title}
            className="productImage"
          />

          {product.badge && (
            <span className="productBadge">{product.badge}</span>
          )}
        </div>
      </Link>

      {product.secondImage && (
        <div className="productImageControls">
          <button
            type="button"
            className={!showSecondImage ? "imageDot active" : "imageDot"}
            aria-label="Voir la couverture"
            onClick={() => setShowSecondImage(false)}
          />

          <button
            type="button"
            className={showSecondImage ? "imageDot active" : "imageDot"}
            aria-label="Voir l'intérieur"
            onClick={() => setShowSecondImage(true)}
          />
        </div>
      )}

      <div className="productInfo">
        <p className="productAge">{product.age}</p>

        <h2>
          <Link href={product.href}>{product.title}</Link>
        </h2>

        <p className="productSubtitle">{product.subtitle}</p>

        <Link href={product.href} className="productDiscoverLink">
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
    external?: boolean;
  }[];
}) {
  return (
    <div className="footerColumn">
      <h2>{title}</h2>

      <ul>
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SearchIcon() {
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
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function AccountIcon() {
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
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
    </svg>
  );
}