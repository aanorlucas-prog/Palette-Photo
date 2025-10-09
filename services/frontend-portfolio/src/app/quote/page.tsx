"use client";

import ContactForm from "@/components/ContactForm";

export default function Quote() {
  return (
    <main className="relative min-h-screen bg-[#202020] text-gray-100 overflow-hidden">
      {/* Fond flou léger */}
      <div
        className="absolute inset-0 bg-[url('/bg-bw.jpg')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />

      <section className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-center text-amber-400 tracking-wide">
          Demande de devis
        </h2>

        <ContactForm></ContactForm>
      </section>
    </main>
  );
}
