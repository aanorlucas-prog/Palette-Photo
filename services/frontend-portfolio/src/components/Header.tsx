"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "A propos" },
    { href: "/quote", label: "Devis" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-amber-500/20 shadow-[0_0_15px_rgba(0,0,0,0.7)]">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-amber-400">
          Palette Photo
        </h1>

        <ul className="flex gap-8 text-sm font-medium">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors ${
                  pathname === href
                    ? "text-amber-400"
                    : "text-gray-400 hover:text-amber-300"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
