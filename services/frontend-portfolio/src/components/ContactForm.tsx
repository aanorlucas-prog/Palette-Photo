"use client";

export default function ContactForm() {
  return (
    <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">Nom</label>
        <input
          type="text"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea
          rows={4}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
      >
        Envoyer
      </button>
    </form>
  );
}
