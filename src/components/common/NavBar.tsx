'use client'
import { raleway } from "@/fonts/fonts";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-orange-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold tracking-tight font-title ${raleway.className} tracking-wide`}>Ruta Nueve Sur</h1>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:scale-110 transition-transform duration-300">Inicio</a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">Noticias</a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">Opinión</a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">Contacto</a>
        </nav>
      </div>

      {/* Menú móvil desplegable con animación */}
      <nav
        className={`md:hidden bg-orange-500 px-4 pb-4 space-y-3 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'hidden'
        }`}
      >
        <a href="#" className="block hover:underline text-white">Inicio</a>
        <a href="#" className="block hover:underline text-white">Noticias</a>
        <a href="#" className="block hover:underline text-white">Opinión</a>
        <a href="#" className="block hover:underline text-white">Contacto</a>
      </nav>
    </header>
  );
}
