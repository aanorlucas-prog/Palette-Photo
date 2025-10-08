"use client";

export default function Quote() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8 text-indigo-600">Demande de devis</h2>
      <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Nom complet</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Adresse e-mail</label>
          <input type="email" className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Type de prestation</label>
          <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500">
            <option>Portrait</option>
            <option>Mariage</option>
            <option>Entreprise</option>
            <option>Événementiel</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea rows={4} className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Envoyer la demande
        </button>
      </form>
    </section>
  );
}
