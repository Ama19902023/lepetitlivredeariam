"use client";

export default function Home() {
  const ageCategories = [
    { label: "12 — 18 mois", emoji: "🌾", desc: "Éveil & découverte" },
    { label: "18 mois — 3 ans", emoji: "🌱", desc: "Premières activités" },
    { label: "3 — 6 ans", emoji: "🌸", desc: "Apprentissages" },
    { label: "6 — 8 ans", emoji: "🍃", desc: "Lecture & autonomie" },
  ];

  const products = [
    { title: "La lune et le petit renard", age: "3 — 6 ans", price: "14,90 €", placeholder: "🌙" },
    { title: "Mila au pays des nuages", age: "4 — 7 ans", price: "15,90 €", placeholder: "☁️" },
    { title: "Le secret du jardin", age: "2 — 5 ans", price: "12,90 €", placeholder: "🌿" },
    { title: "Les couleurs d'Anouk", age: "3 — 6 ans", price: "14,90 €", placeholder: "🎨" },
  ];

  const reviews = [
    { name: "Nawal", initials: "N", text: "Un travail remarquable. Mon fils en a 3 et il les adore. La qualité est irréprochable, je recommande vivement.", source: "Avis Google" },
    { name: "Gwenaelle", initials: "G", text: "Excellent ! Je recommande à 1000%. Fait avec amour. Mes enfants sont fans, la qualité est incroyable !", source: "Avis Google" },
    { name: "Aqsa", initials: "A", text: "Je suis amoureuse de ces livres ! Tellement faits avec amour. Ma fille les adore et y revient tous les soirs.", source: "Avis Google" },
  ];

  return (
    <main className="bg-bone text-ink">
      <div className="bg-ink text-paper overflow-hidden py-2 text-[0.78rem] tracking-wide">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 gap-16 px-8">
              <span>· Livraison offerte dès 49€ ·</span>
              <span>· Livres imprimés en France ·</span>
              <span>· Faits main avec amour ·</span>
              <span>· Papier responsable ·</span>
              <span>· Livraison offerte dès 49€ ·</span>
              <span>· Livres imprimés en France ·</span>
            </div>
          ))}
        </div>
      </div>

      <nav className="sticky top-0 z-50 flex justify-between items-center px-[5vw] py-5 bg-bone/95 backdrop-blur-md border-b border-stone/10">
        <a href="#" className="font-hand text-[1.6rem] text-terra leading-none">
          Le petit livre <span className="text-ink">de Ariam</span>
        </a>
        <ul className="hidden lg:flex gap-10 list-none">
          <li><a href="#collection" className="text-ink text-[0.85rem] tracking-wide hover:text-terra transition-colors">COLLECTION</a></li>
          <li><a href="#ages" className="text-ink text-[0.85rem] tracking-wide hover:text-terra transition-colors">PAR ÂGE</a></li>
          <li><a href="#histoire" className="text-ink text-[0.85rem] tracking-wide hover:text-terra transition-colors">NOTRE HISTOIRE</a></li>
          <li><a href="#contact" className="text-ink text-[0.85rem] tracking-wide hover:text-terra transition-colors">CONTACT</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button aria-label="Recherche" className="grid place-items-center w-9 h-9 rounded-full hover:bg-shell/60 transition-colors">
            <span>🔍</span>
          </button>
          <button aria-label="Panier" className="grid place-items-center w-9 h-9 rounded-full hover:bg-shell/60 transition-colors relative">
            <span>🛒</span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-terra text-paper text-[0.65rem] rounded-full flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </nav>

      <div className="text-center py-3 bg-paper/50 border-b border-stone/5">
        <span className="font-hand text-[1.1rem] text-stone">Des histoires faites main pour grandir en douceur ♡</span>
      </div>

      <section className="px-[5vw] pt-16 pb-20 max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-up">
            <span className="text-[0.72rem] tracking-[0.25em] uppercase text-stone mb-5 block">— Édition 2026 —</span>
            <h1 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.05] tracking-tight font-light mb-6">
              Des histoires<br />
              qui font <em className="italic text-terra font-normal">grandir</em><br />
              les petits cœurs.
            </h1>
            <p className="text-[1.05rem] max-w-[440px] text-stone leading-relaxed mb-10">
              Une collection tendre de livres illustrés pour accompagner les enfants de 1 à 8 ans dans leurs émotions, leurs apprentissages et leurs grands rêves.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#collection" className="inline-block px-7 py-3.5 bg-ink text-paper text-[0.9rem] tracking-wide hover:bg-terra transition-colors">
                DÉCOUVRIR LA COLLECTION
              </a>
              <a href="#histoire" className="inline-block text-[0.9rem] tracking-wide text-ink underline underline-offset-8 decoration-1 hover:text-terra transition-colors">
                Notre histoire
              </a>
            </div>
          </div>

          <div className="relative fade-up">
            <div className="aspect-[4/5] photo-placeholder rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-stone/40">
                <span className="text-[5rem] mb-2">📖</span>
                <span className="font-hand text-[1.3rem]">votre photo ici</span>
              </div>
              <div className="absolute top-5 left-5 bg-bone/90 backdrop-blur px-3 py-1.5 text-[0.7rem] tracking-widest uppercase">
                Nouveauté
              </div>
            </div>
            <span className="absolute -bottom-3 -right-3 bg-honey text-ink px-4 py-2 font-hand text-[1.1rem] rotate-[-3deg] shadow-sm">
              édition collector ♡
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-20 pt-8 border-t border-stone/10 text-[0.8rem] text-stone tracking-wide">
          <div className="flex items-center gap-2">
            <span className="text-honey">★★★★★</span>
            <span>4.9/5 — + 400 avis</span>
          </div>
          <span className="hidden md:block w-1 h-1 bg-stone/30 rounded-full"></span>
          <span>🇫🇷 Imprimé en France</span>
          <span className="hidden md:block w-1 h-1 bg-stone/30 rounded-full"></span>
          <span>🌿 Papier responsable</span>
          <span className="hidden md:block w-1 h-1 bg-stone/30 rounded-full"></span>
          <span>📦 Livraison sous 48h</span>
        </div>
      </section>

      <section id="ages" className="px-[5vw] py-20 bg-paper">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[0.72rem] tracking-[0.25em] uppercase text-stone block mb-3">— Notre catalogue —</span>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-light">Choisir un livre par âge</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {ageCategories.map((cat) => (
              <a key={cat.label} href="#collection" className="bg-bone border border-stone/10 rounded-sm p-8 md:p-10 aspect-[4/5] flex flex-col items-center justify-center text-center hover:border-terra/40 hover:bg-shell/30 transition-all group">
                <span className="text-5xl md:text-6xl mb-5 group-hover:scale-110 transition-transform duration-500">{cat.emoji}</span>
                <span className="font-display text-[1.05rem] md:text-[1.2rem] font-medium text-ink mb-1">{cat.label}</span>
                <span className="text-[0.8rem] text-stone tracking-wide">{cat.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="px-[5vw] py-20">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <span className="text-[0.72rem] tracking-[0.25em] uppercase text-stone block mb-2">— Nos coups de cœur —</span>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-light">La collection</h2>
            </div>
            <a href="#" className="text-[0.85rem] tracking-wide text-stone underline underline-offset-4 hover:text-terra transition-colors">
              Voir tous les livres →
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {products.map((book) => (
              <article key={book.title} className="group cursor-pointer">
                <div className="aspect-[4/5] photo-placeholder mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-stone/30 text-[5rem]">
                    {book.placeholder}
                  </div>
                  <button className="absolute bottom-3 left-3 right-3 bg-ink text-paper py-2.5 text-[0.75rem] tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Ajouter — {book.price}
                  </button>
                </div>
                <div className="px-1">
                  <h3 className="font-display text-[1.05rem] font-medium leading-tight mb-1">{book.title}</h3>
                  <p className="text-[0.8rem] text-stone mb-2 tracking-wide">{book.age}</p>
                  <p className="font-display text-[1rem] text-terra">{book.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="histoire" className="px-[5vw] py-24 bg-paper">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] photo-placeholder relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-stone/30">
                <span className="text-[5rem] mb-2">👩‍🎨</span>
                <span className="font-hand text-[1.2rem]">portrait d&apos;Ariam</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-bone px-5 py-3 shadow-sm">
              <p className="font-hand text-[1.4rem] text-terra leading-none">— Ariam</p>
            </div>
          </div>
          <div>
            <span className="text-[0.72rem] tracking-[0.25em] uppercase text-stone block mb-3">— Notre histoire —</span>
            <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.4rem)] font-light leading-tight mb-8">
              Tout a commencé avec une<br />
              <em className="italic text-terra">petite fille</em> qui s&apos;appelait Ariam.
            </h2>
            <div className="space-y-5 text-stone text-[1rem] leading-relaxed">
              <p>Chaque soir, je lui inventais des histoires pour l&apos;endormir. Des renards malins, des lunes complices, des jardins enchantés.</p>
              <p>Un jour, j&apos;ai eu envie de partager ces histoires avec d&apos;autres enfants. C&apos;est ainsi qu&apos;est née notre petite maison d&apos;édition, faite avec beaucoup d&apos;amour.</p>
            </div>
            <div className="mt-10 pt-8 border-t border-stone/15 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-display text-[1.6rem] text-terra">100%</div>
                <div className="text-[0.75rem] text-stone tracking-wide mt-1">Made in France</div>
              </div>
              <div>
                <div className="font-display text-[1.6rem] text-terra">FSC</div>
                <div className="text-[0.75rem] text-stone tracking-wide mt-1">Papier responsable</div>
              </div>
              <div>
                <div className="font-display text-[1.6rem] text-terra">★ 4.9</div>
                <div className="text-[0.75rem] text-stone tracking-wide mt-1">+ 400 avis Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5vw] py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[0.72rem] tracking-[0.25em] uppercase text-stone block mb-3">— Vos avis —</span>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-light">Ce que disent les familles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <article key={i} className="bg-paper p-8 border border-stone/10">
                <div className="text-honey text-[0.95rem] mb-4 tracking-widest">★★★★★</div>
                <p className="text-ink text-[0.95rem] leading-relaxed mb-6 font-light italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-stone/10">
                  <div className="w-9 h-9 rounded-full bg-blush flex items-center justify-center font-display text-terra text-[0.95rem]">
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-medium text-[0.85rem]">{review.name}</div>
                    <div className="text-[0.7rem] text-stone tracking-wide">{review.source}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5vw] py-24 bg-shell/40">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="text-[0.72rem] tracking-[0.25em] uppercase text-stone block mb-3">— Newsletter —</span>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-light mb-4">
            Recevez nos nouveautés<br />
            <em className="italic text-terra">directement par mail</em>
          </h2>
          <p className="text-stone text-[0.95rem] mb-8 leading-relaxed">Une lettre douce une fois par mois.<br />Et un livre numérique offert pour vous remercier ♡</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const btn = e.currentTarget.querySelector("button");
              if (btn) btn.textContent = "Merci ♡";
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="votre@email.fr"
              required
              className="flex-1 px-5 py-3.5 bg-bone border border-stone/20 text-ink placeholder:text-stone/50 outline-none focus:border-terra transition-colors text-[0.9rem]"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-ink text-paper text-[0.85rem] tracking-wide hover:bg-terra transition-colors"
            >
              JE M&apos;INSCRIS
            </button>
          </form>
        </div>
      </section>

      <footer id="contact" className="bg-ink text-paper px-[5vw] pt-20 pb-8">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
            <div>
              <div className="font-hand text-[1.7rem] text-honey mb-4 leading-none">Le petit livre de Ariam</div>
              <p className="text-paper/60 text-[0.88rem] max-w-xs leading-relaxed mb-6">
                Des histoires tendres pour les petits rêveurs, imprimées avec soin en France.
              </p>
            </div>
            <div>
              <h4 className="text-[0.75rem] tracking-[0.2em] uppercase mb-5">Boutique</h4>
              <ul className="space-y-3 text-paper/70 text-[0.88rem]">
                <li><a href="#collection" className="hover:text-honey transition-colors">Tous les livres</a></li>
                <li><a href="#ages" className="hover:text-honey transition-colors">Par âge</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Coffrets cadeau</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Nouveautés</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[0.75rem] tracking-[0.2em] uppercase mb-5">Maison</h4>
              <ul className="space-y-3 text-paper/70 text-[0.88rem]">
                <li><a href="#histoire" className="hover:text-honey transition-colors">Notre histoire</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Avis clients</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[0.75rem] tracking-[0.2em] uppercase mb-5">Aide</h4>
              <ul className="space-y-3 text-paper/70 text-[0.88rem]">
                <li><a href="#" className="hover:text-honey transition-colors">Livraison</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Retours</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">CGV</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-paper/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.75rem] text-paper/50 tracking-wide">
            <span>© 2026 Le petit livre de Ariam</span>
            <span>Fait avec ♡ en France</span>
          </div>
        </div>
      </footer>
    </main>
  );
}