export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-[6vw] py-[18px] bg-cream/85 backdrop-blur-md border-b border-ink/10">
        <div className="font-hand text-[1.7rem] text-terracotta-deep font-bold">
          Le petit livre <span className="text-ink">de Ariam</span>
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#livres" className="text-ink font-semibold text-[0.95rem] hover:text-terracotta transition-colors">Nos livres</a></li>
          <li><a href="#histoire" className="text-ink font-semibold text-[0.95rem] hover:text-terracotta transition-colors">Notre histoire</a></li>
          <li><a href="#contact" className="text-ink font-semibold text-[0.95rem] hover:text-terracotta transition-colors">Contact</a></li>
        </ul>
        <button className="bg-ink text-cream border-none px-[18px] py-[10px] rounded-full font-bold cursor-pointer text-[0.9rem] hover:-translate-y-0.5 transition-transform">
          Panier (0)
        </button>
      </nav>

      {/* HERO */}
      <section className="px-[6vw] py-[7vh] grid md:grid-cols-[1.1fr_0.9fr] gap-[60px] items-center min-h-[80vh]">
        <div>
          <span className="font-hand text-[1.6rem] text-sage inline-block mb-2 -rotate-2">
            ✦ Histoires faites main ✦
          </span>
          <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-none tracking-tight font-medium mb-6">
            Des histoires<br />
            qui font <em className="italic text-terracotta font-normal">grandir</em><br />
            les petits cœurs.
          </h1>
          <p className="text-[1.15rem] max-w-[480px] text-[#4a3d31] mb-8">
            Une collection tendre de livres illustrés pour accompagner les enfants de 2 à 8 ans dans leurs premières aventures, leurs émotions et leurs grands rêves.
          </p>
          <div className="flex gap-[14px] flex-wrap">
            <a href="#livres" className="inline-block px-7 py-[14px] rounded-full font-bold no-underline cursor-pointer text-base bg-terracotta text-cream-soft shadow-lg hover:bg-terracotta-deep hover:-translate-y-1 transition-all">
              Découvrir la collection
            </a>
            <a href="#histoire" className="inline-block px-7 py-[14px] rounded-full font-bold no-underline cursor-pointer text-base bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-cream transition-all">
              Notre histoire
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[500px]">
          <div className="absolute w-[240px] h-[320px] rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-md shadow-xl flex flex-col justify-between p-6 text-cream-soft bg-terracotta -rotate-[8deg] -translate-x-[80px] translate-y-[20px]">
            <h3 className="font-display text-[1.4rem] leading-tight font-medium">La lune et le petit renard</h3>
            <span className="font-hand text-[1.2rem] opacity-90">— Ariam</span>
          </div>
          <div className="absolute w-[240px] h-[320px] rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-md shadow-xl flex flex-col justify-between p-6 text-cream-soft bg-sage rotate-[4deg] translate-x-5 -translate-y-[30px] z-10">
            <h3 className="font-display text-[1.4rem] leading-tight font-medium">Mila au pays des nuages</h3>
            <span className="font-hand text-[1.2rem] opacity-90">— Ariam</span>
          </div>
          <div className="absolute w-[240px] h-[320px] rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-md shadow-xl flex flex-col justify-between p-6 text-cream-soft bg-mustard rotate-[12deg] translate-x-[110px] translate-y-[40px]">
            <h3 className="font-display text-[1.4rem] leading-tight font-medium">Le secret du jardin</h3>
            <span className="font-hand text-[1.2rem] opacity-90">— Ariam</span>
          </div>
        </div>
      </section>

      {/* LIVRES */}
      <section id="livres" className="px-[6vw] py-[10vh]">
        <div className="text-center mb-[60px]">
          <span className="font-hand text-[1.5rem] text-terracotta">~ Notre collection ~</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-tight">Des livres à lire et à relire</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10 max-w-[1200px] mx-auto">
          {[
            { title: "La lune et le petit renard", age: "3 — 6 ans", desc: "Un voyage poétique sur l'amitié et le courage, à lire au creux du soir.", price: "14,90 €", from: "from-terracotta", to: "to-[#e07a4f]" },
            { title: "Mila au pays des nuages", age: "4 — 7 ans", desc: "Une aventure aérienne qui apprend à apprivoiser ses peurs.", price: "15,90 €", from: "from-sage", to: "to-[#a3b48d]" },
            { title: "Le secret du jardin", age: "2 — 5 ans", desc: "Un éveil à la nature et aux petits bonheurs du quotidien.", price: "12,90 €", from: "from-pink", to: "to-[#f0c4b8]" },
            { title: "Les couleurs d'Anouk", age: "3 — 6 ans", desc: "Un livre tendre pour mettre des mots sur les émotions.", price: "14,90 €", from: "from-mustard", to: "to-[#e8c473]" },
          ].map((book) => (
            <div key={book.title} className="bg-cream-soft rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl transition-all border border-ink/10">
              <div className={`aspect-[3/4] rounded-xl mb-[18px] flex items-center justify-center text-cream-soft text-center p-5 font-display text-[1.5rem] leading-tight bg-gradient-to-br ${book.from} ${book.to}`}>
                {book.title}
              </div>
              <h3 className="font-display text-[1.4rem] font-medium mb-1.5">{book.title}</h3>
              <span className="font-hand text-sage text-[1.1rem]">{book.age}</span>
              <p className="text-[0.95rem] text-[#5a4a3c] mt-3 mb-[18px]">{book.desc}</p>
              <div className="flex justify-between items-center">
                <span className="font-display text-[1.4rem] text-terracotta-deep font-bold">{book.price}</span>
                <button className="bg-ink text-cream border-none px-4 py-2 rounded-full font-bold cursor-pointer text-[0.85rem] hover:bg-terracotta-deep transition-colors">
                  Ajouter
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HISTOIRE */}
      <section id="histoire" className="px-[6vw] py-[10vh]">
        <div className="bg-ink text-cream-soft rounded-[32px] py-[8vh] px-[6vw] grid md:grid-cols-2 gap-[60px] items-center">
          <div>
            <span className="font-hand text-[1.5rem] text-mustard">~ Notre histoire ~</span>
            <h2 className="font-display text-[2.6rem] font-medium my-2 leading-tight">Tout a commencé avec une petite fille qui s&apos;appelait Ariam.</h2>
            <p className="text-[1.05rem] text-[#d4c8b6] mb-4">Chaque soir, je lui inventais des histoires pour l&apos;endormir. Des renards malins, des lunes complices, des jardins enchantés.</p>
            <p className="text-[1.05rem] text-[#d4c8b6]">Un jour, j&apos;ai eu envie de partager ces histoires avec d&apos;autres enfants. C&apos;est ainsi qu&apos;est née notre petite maison d&apos;édition, faite avec beaucoup d&apos;amour, et imprimée en France sur du papier responsable.</p>
          </div>
          <div className="aspect-square bg-terracotta rounded-full flex items-center justify-center font-hand text-[5rem] text-cream-soft shadow-2xl max-w-[280px] mx-auto">
            A.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-ink text-cream px-[6vw] py-[60px] mt-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-hand text-[2rem] text-mustard mb-3">Le petit livre de Ariam</div>
          <p className="text-[#d4c8b6] max-w-[340px]">Des histoires pour les petits, imprimées avec soin en France.</p>
          <div className="border-t border-cream/15 mt-10 pt-5 text-center text-[0.85rem] text-[#9a8e7c]">
            © 2026 Le petit livre de Ariam — Fait avec ♡
          </div>
        </div>
      </footer>
    </main>
  );
}