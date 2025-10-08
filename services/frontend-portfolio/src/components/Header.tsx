"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Palette Photo
        </Link>
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/">Accueil</Link>
          <Link href="/about">Qui suis-je</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/quote">Devis</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
