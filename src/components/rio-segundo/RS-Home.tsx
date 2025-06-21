"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../common/TitleSection";
import SmallNew from "./SmallNew";
import { Noticia } from "@/types/noticia";
import BigNew from "./BigNew";
import AdBanner from "../publicidades/Horizontal";

export default function RS_Home() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await fetch("/api/noticias");
        const json = await res.json();

        setNoticias(json.data);
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (loading) return <p className="px-8 py-12">Cargando noticias...</p>;
  if (!noticias.length) return <p className="px-8 py-12">No hay noticias.</p>;

  return (
    <section className="mx-auto px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Río Segundo" />
        <div className="flex flex-col md:flex-row gap-8">
          {/* Noticia grande */}
          <BigNew noticia={noticias[0]} />

          {/* Noticias chicas */}
          <div className="md:w-1/3 flex flex-col gap-6">
            {noticias.slice(1).map((noticia) => (
              <SmallNew noticia={noticia} key={noticia.id} />
            ))}
          </div>
        </div>
        <AdBanner />
      </div>
    </section>
  );
}
