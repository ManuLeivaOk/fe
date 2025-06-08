import Image from "next/image";

export default function AdCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
      <div className="relative h-48 w-full">
        <Image
          src="/ads/logo.jpg"
          alt="Publicidad gimnasio"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Gimnasio Río Fit</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Entrená con nosotros. 2x1 en planes mensuales.</p>
        <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600 transition">
          Más info
        </button>
      </div>
    </div>
  );
}
