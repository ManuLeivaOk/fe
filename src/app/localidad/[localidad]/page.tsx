import SectionTitle from "@/components/common/TitleSection";
import PublicidadCard from "@/components/detalle/Publicidad";
import AdBanner from "@/components/publicidades/Horizontal";
import SmallNew from "@/components/rio-segundo/SmallNew";

export default function LocalitieNew() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 pb-12">
      <AdBanner />

      {/* Título */}
      <div className="my-8">
        <SectionTitle title="Noticias de Río Segundo" />
      </div>

      {/* Publicidad */}
      <div className="mb-12">
        <PublicidadCard image="/ads/banner1.jpg" />
      </div>

      <div className="flex">
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
        <div className="w-6/10 px-2">
          <SmallNew
            noticia={{
              id: 4,
              title: "Educación y futuro",
              summary:
                "Iniciativas para impulsar la educación tecnológica entre los jóvenes.",
              tags: ["Educación", "Tecnología"],
              date: "01 Jun 2025",
            }}
          />
        </div>
      </div>
    </section>
  );
}
