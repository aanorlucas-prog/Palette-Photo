/* eslint-disable @next/next/no-img-element */
export default function Gallery() {
  const photos = [
    { id: 1, src: "/photos/photo1.jpg", alt: "Portrait 1" },
    { id: 2, src: "/photos/photo2.jpg", alt: "Mariage 1" },
    { id: 3, src: "/photos/photo3.jpg", alt: "Paysage 1" },
    { id: 4, src: "/photos/photo4.jpg", alt: "Entreprise 1" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          className="rounded-lg shadow-md hover:scale-105 transition-transform"
        />
      ))}
    </div>
  );
}
