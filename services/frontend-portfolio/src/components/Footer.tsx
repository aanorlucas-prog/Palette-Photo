export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Palette Photo - Jean Dupont</p>
        <p className="mt-2 md:mt-0">
          Développé par <span className="text-indigo-400">Aanor Lucas</span>
        </p>
      </div>
    </footer>
  );
}
