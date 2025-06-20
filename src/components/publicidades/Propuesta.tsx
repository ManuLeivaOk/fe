import { raleway } from "@/fonts/fonts";
import SecondaryButton from "../common/SecondaryButton";

export default function AdSquare() {
  return (
    <div className="bg-gradient-to-tr from-orange-400 to-orange-600 text-white rounded-lg py-4 px-6 md:p-6 flex flex-col md:flex-row items-center shadow-lg h-full mx-8 text-center md:text-start max-w-7xl mx-auto">
      <h3 className={`text-xl font-bold md:mr-8 mb-2 md:mb-0 ${raleway.className} uppercase tracking-wide`}>Anunciá en nuestro sitio</h3>
      <p className="text-sm md:mr-8 mb-3 md:mb-0">
        Tu marca puede estar acá. ¡Llegá a miles de vecinos!
      </p>
      <SecondaryButton>
        Contactanos
      </SecondaryButton>
    </div>
  );
}
