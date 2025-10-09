"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* 🖼️ Image de fond floutée */}
      <Image
        src="/bg-bw.jpg" // 🔸 à mettre dans /public/images
        alt="Photographie noir et blanc"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* 💬 Contenu principal */}
      <div className="relative z-10 px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-lg">
          Palette Photo
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Découvrez l’univers de <span className="text-amber-400">Thomas Mercier</span>, photographe professionnel.  
          Un regard unique sur l’émotion, la lumière et le détail.
        </p>

        <Link
          href="/portfolio"
          className="inline-block px-8 py-3 rounded-full  bg-amber-400 hover:bg-amber-500 transition transform hover:scale-105 shadow-md"
        >
          <p className="font-semibold text-black">
            Voir le Portfolio
          </p>
          
        </Link>
      </div>

      {/* Dégradé subtil en overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
    </div>
  );
}
