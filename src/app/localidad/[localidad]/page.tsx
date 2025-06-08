import PublicidadCard from "@/components/detalle/Publicidad";
import NoticiaRelacionada from "@/components/detalle/RelatedNew";
import AdBanner from "@/components/publicidades/Horizontal";
import Image from "next/image";

export default function NoticiaDetalle() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8 pb-12">
      <AdBanner />
      {/* Imagen principal */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden my-8">
        <Image
          src="/img.avif"
          alt="Título de la noticia"
          fill
          className="object-cover"
        />
      </div>

      {/* Título + subtítulo */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 font-raleway">
        Avances en infraestructura vial de Río Segundo
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        El nuevo plan urbano mejorará el tránsito y conectividad regional.
      </p>

      {/* Contenido */}
      <article className="prose dark:prose-invert max-w-none mb-12">
        <p className="tracking-wide text-justify">
          Río Segundo ha anunciado una inversión histórica en infraestructura
          vial. Se contempla la repavimentación de más de 30 kilómetros de
          rutas, la incorporación de ciclovías y la instalación de nuevas
          luminarias. Río Segundo ha anunciado una inversión histórica en
          infraestructura vial. Se contempla la repavimentación de más de 30
          kilómetros de rutas, la incorporación de ciclovías y la instalación de
          nuevas luminarias.
        </p>
        <p className="tracking-wide mt-5 text-justify">
          Además, se incluirán sistemas de monitoreo y mejoras en la
          señalización. El intendente destacó la importancia de este plan como
          eje para el desarrollo económico. Río Segundo ha anunciado una
          inversión histórica en infraestructura vial. Se contempla la
          repavimentación de más de 30 kilómetros de rutas, la incorporación de
          ciclovías y la instalación de nuevas luminarias.
        </p>
      </article>

      {/* Publicidad */}
      <div className="mb-12">
        <PublicidadCard image="/ads/banner1.jpg" />
      </div>

      {/* Noticias relacionadas */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Noticias relacionadas
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <NoticiaRelacionada
          title="La comunidad participa en el nuevo plan de desarrollo urbano"
          image="/img.avif"
        />
        <NoticiaRelacionada
          title="Se inaugura un nuevo centro de salud en el barrio Norte"
          image="/img.avif"
        />
      </div>
    </section>
  );
}
