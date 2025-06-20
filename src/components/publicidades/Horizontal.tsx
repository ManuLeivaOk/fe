import Image from "next/image";
import PrimaryButton from "../common/PrimaryButton";

export default function AdBanner() {
  return (
    <div className="relative h-40 rounded-xl overflow-hidden shadow-md bg-gradient-to-r from-orange-500 to-yellow-400 mt-4 ">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute w-full z-20 p-6 text-white flex items-center h-full">
        <div className="mr-8">
          <h3 className="text-2xl font-bold mb-2">
            ¡Conocé la nueva tienda en Río Segundo!
          </h3>
          <p className="text-sm">
            Descuentos especiales todo el mes. Visitá nuestro local hoy mismo.
          </p>
        </div>
        <PrimaryButton>¡Visitanos!</PrimaryButton>
      </div>

      <Image
        src="/ads/logo.jpg"
        alt="Publicidad tienda"
        fill
        className="object-cover z-0"
        priority
      />
    </div>
  );
}
