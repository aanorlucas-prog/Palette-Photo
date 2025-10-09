"use client";
import Gallery from "@/components/Gallery";

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-[#202020] text-gray-100 overflow-hidden">
      {/* Arrière-plan texturé flou (léger, sombre) */}
      <div
        className="absolute inset-0 bg-[url('/bg-bw.jpg')] bg-cover bg-center opacity-10 blur-sm"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-amber-400 drop-shadow-lg mb-4">
            Portfolio
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de clichés capturant l’instant, la lumière et
            l’émotion à travers différents univers photographiques.
          </p>
        </header>

        <Gallery />
      </div>
    </main>
  );
}
