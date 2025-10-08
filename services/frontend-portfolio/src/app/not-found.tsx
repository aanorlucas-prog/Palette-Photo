"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-500"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700"
      >
        Oups... Page introuvable !
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-gray-500 max-w-md"
      >
        Il semble que cette page ait disparu ou que le lien soit incorrect.  
        Revenez à l’accueil pour continuer votre visite.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-block px-6 py-3 text-white text-lg font-medium rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 shadow-md hover:shadow-lg hover:brightness-95 transition"
        >
          Retour à l’accueil
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-sm text-gray-400"
      >
        Palette Photo © {new Date().getFullYear()}
      </motion.div>
    </main>
  );
}
