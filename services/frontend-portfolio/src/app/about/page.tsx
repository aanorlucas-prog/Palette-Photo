"use client";

export default function About() {
  return (
    <main className="relative min-h-screen bg-[#0c0c0c] text-gray-100 overflow-hidden">
      {/* 🌆 Fond flou en noir et blanc */}
      <div
        className="absolute inset-0 bg-[url('/bg-bw.jpg')] bg-cover bg-center opacity-20 blur-sm"
        aria-hidden="true"
      />

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* 🖼️ Photo du photographe */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/photographer.png"
            alt="Thomas Mercier - Photographe professionnel"
            className="rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-gray-800 max-w-xs sm:max-w-sm md:max-w-full hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        </div>

        {/* 🧑‍💼 Texte de présentation */}
        <div className="w-full md:w-1/2 text-gray-300 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-400 tracking-wide">
            Qui suis-je ?
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
            Je suis <strong className="text-amber-300">Thomas Mercier</strong>, photographe professionnel passionné par la lumière, 
            le portrait et la nature. Mon objectif est de capturer l’émotion et l’authenticité dans chaque cliché.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
            Basé à <span className="text-amber-300">Lyon</span>, je propose des prestations photo pour les particuliers, 
            les entreprises, les mariages et les événements artistiques.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Mon approche allie <em>esthétisme</em> et <em>humanité</em>, avec une recherche constante d’harmonie entre 
            la lumière, le sujet et le décor.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/portfolio"
              className="inline-block px-6 py-3 bg-amber-500/20 border border-amber-400/40 text-amber-300 font-semibold rounded-lg shadow hover:bg-amber-500/30 transition-all duration-300"
            >
              Voir mes réalisations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
