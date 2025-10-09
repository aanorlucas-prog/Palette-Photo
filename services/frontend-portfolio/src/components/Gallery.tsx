/* eslint-disable @next/next/no-img-element */

export default function Gallery() {
  const photos = [
    { id: 1, src: "/street2.jpg", alt: "Photographie de rue" },
    { id: 2, src: "/photo3.jpg", alt: "Portrait – Lumière naturelle" },
    { id: 3, src: "/wedding2.jpg", alt: "Mariage – Émotion" },
    { id: 4, src: "/wedding4.jpg", alt: "Mariage – Extérieur" },
    { id: 5, src: "/landscape2.jpg", alt: "Paysage – Montagne" },
    { id: 6, src: "/mer1.jpg", alt: "Paysage – Bord de mer" },
    { id: 7, src: "/street1.jpg", alt: "Photographie de rue" },
    { id: 8, src: "/wedding3.jpg", alt: "Mariage – Extérieur" },
    { id: 9, src: "/NB1.jpg", alt: "Nature – Détails floraux" },
    { id: 10, src: "/NB2.jpg", alt: "Photographie artistique – Noir & Blanc" },
    { id: 11, src: "/landscape3.jpg", alt: "Paysage – Montagne" },
    { id: 12, src: "/landscape4.jpg", alt: "Paysage – Montagne" },
    { id: 13, src: "/photo4.jpg", alt: "Portrait – Lumière naturelle" },
  ];

  return (
    <section className="bg-[#0a0a0a] text-gray-100 py-20 px-6 rounded-xl shadow-inner border border-amber-500/20">

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-7xl mx-auto space-y-5">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative overflow-hidden rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-gray-800 hover:border-amber-500/40 transition-all break-inside-avoid"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
              <p className="text-amber-400 text-sm font-medium mb-4 px-2 text-center">
                {photo.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
