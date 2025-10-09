"use client";

export default function ContactForm() {
  return (
   <form className="bg-[#111] border border-amber-500/20 shadow-[0_0_25px_rgba(0,0,0,0.6)] rounded-2xl p-8 space-y-6">
          {/* Nom complet */}
          <div>
            <label className="block text-amber-300 mb-2 font-medium">
              Nom complet
            </label>
            <input
              type="text"
              className="w-full bg-[#0f0f0f] border border-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:border-amber-500 focus:ring-amber-400 focus:ring-1 outline-none transition-all"
              placeholder="Thomas Mercier"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-amber-300 mb-2 font-medium">
              Adresse e-mail
            </label>
            <input
              type="email"
              className="w-full bg-[#0f0f0f] border border-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:border-amber-500 focus:ring-amber-400 focus:ring-1 outline-none transition-all"
              placeholder="thomas.mercier@email.com"
            />
          </div>

          {/* Type de prestation */}
          <div>
            <label className="block text-amber-300 mb-2 font-medium">
              Type de prestation
            </label>
            <select
              className="w-full bg-[#0f0f0f] border border-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:border-amber-500 focus:ring-amber-400 focus:ring-1 outline-none transition-all"
              defaultValue=""
            >
              <option value="" disabled>
                Sélectionnez une prestation
              </option>
              <option>Portrait</option>
              <option>Mariage</option>
              <option>Entreprise</option>
              <option>Événementiel</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-amber-300 mb-2 font-medium">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-[#0f0f0f] border border-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:border-amber-500 focus:ring-amber-400 focus:ring-1 outline-none transition-all resize-none"
              placeholder="Décrivez votre demande..."
            ></textarea>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-amber-500/20 border border-amber-400/40 text-amber-300 py-3 rounded-lg font-semibold shadow hover:bg-amber-500/30 hover:border-amber-400 transition-all duration-300"
          >
            Envoyer la demande
          </button>
        </form>
  );
}
