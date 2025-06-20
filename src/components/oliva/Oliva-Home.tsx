import SectionTitle from "../common/TitleSection";
import SmallNew from "./SmallNew";
import { Noticia } from "@/types/noticia";
import BigNew from "./BigNew";
import AdBanner from "../publicidades/Horizontal";

const noticias: Noticia[] = [
  {
    id: 1,
    title: "Noticia Principal: Avances en Río Segundo",
    summary:
      "Últimas novedades sobre el desarrollo económico y social en Río Segundo.",
    tags: ["Economía", "Actualidad"],
    date: "07 Jun 2025",
  },
  {
    id: 2,
    title: "Evento cultural destacado",
    summary:
      "Se acerca un evento que promete reunir a toda la comunidad local.",
    tags: ["Cultura", "Evento"],
    date: "05 Jun 2025",
  },
  {
    id: 3,
    title: "Nueva infraestructura vial",
    summary:
      "Proyecto para mejorar la conectividad y el transporte en la región.",
    tags: ["Infraestructura", "Transporte"],
    date: "03 Jun 2025",
  },
  {
    id: 4,
    title: "Educación y futuro",
    summary:
      "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
    tags: ["Educación", "Tecnología"],
    date: "01 Jun 2025",
  },
];

export default function Oliva_Home() {
  return (
    <section className="mx-auto px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Oliva" />
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
        <AdBanner/>
      </div>
    </section>
  );
}
