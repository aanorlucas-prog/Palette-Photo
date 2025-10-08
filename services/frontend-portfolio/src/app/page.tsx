"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-20 bg-gradient-to-b from-gray-100 to-white">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-800">Bienvenue sur Palette Photo</h1>
      <p className="text-lg text-gray-600 mb-10">
        Découvrez l’univers du photographe Jean Dupont à travers son portfolio et ses services professionnels.
      </p>
      <Link
        href="/portfolio"
        className="px-6 py-3 text-white font-semibold bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
      >
        Voir le Portfolio
      </Link>
    </div>
  );
}
