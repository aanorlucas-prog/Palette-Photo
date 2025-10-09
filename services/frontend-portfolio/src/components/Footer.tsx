export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-amber-500/25 text-center py-6 text-sm text-gray-500 shadow-[0_-2px_10px_rgba(0,0,0,0.6)]">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-amber-400 font-medium">Thomas Mercier</span> — Tous droits réservés
      </p>
      <p className="mt-1 text-gray-600">
        Créé avec <span className="text-amber-400">❤️</span> par Aanor Lucas
      </p>
    </footer>
  );
}
