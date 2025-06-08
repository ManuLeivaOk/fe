'use client'
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Ruta Nueve Sur</h2>
          <p className="text-white max-w-sm leading-relaxed">
            Información veraz y actualizada del sur de Córdoba. Noticias, opinión y más.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Secciones</h3>
          <ul className="space-y-2 text-white">
            {["Río Segundo", "Pilar", "Laguna Larga", "Oncativo", "Oliva"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
          <p className="flex items-center gap-2 text-white mb-2">
            <HiOutlineMail className="w-5 h-5" aria-hidden="true" />
            contacto@rutanuevesur.cl
          </p>
          <p className="flex items-center gap-2 text-white">
            <HiOutlinePhone className="w-5 h-5" aria-hidden="true" />
            +56 9 1234 5678
          </p>
        </div>
      </div>

      <div className="bg-gray-800 text-center text-sm py-6 text-gray-400">
        © {new Date().getFullYear()} Ruta Nueve Sur. Todos los derechos reservados.
      </div>
    </footer>
  );
}
