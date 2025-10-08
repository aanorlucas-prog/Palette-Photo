import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center py-20 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-4">
        Bienvenue chez Palette Photo
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Capturer l’instant, révéler l’émotion. Découvrez l’univers d’un photographe passionné entre portraits, paysages et créations artistiques.
      </p>
      <Link
        to="/portfolio"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Découvrir le portfolio
      </Link>
    </section>
  );
}
