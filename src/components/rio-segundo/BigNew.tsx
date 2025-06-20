import { Noticia } from "@/types/noticia";
import Image from "next/image";
import { raleway } from "@/fonts/fonts";

interface Props {
  noticia: Noticia;
}

export default function BigNew({ noticia }: Props) {
  return (
    <article className="md:w-2/3 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900">
      <div className="relative w-full h-72">
        <Image
          src="/img.avif"
          alt={noticia.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="px-6 py-4 h-60 flex flex-col justify-around md:justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            <time className="text-xs text-gray-400 ml-auto">
              {noticia.date}
            </time>
          </div>

          <h3
            className={`text-2xl font-semibold mb-2 text-gray-900 dark:text-white ${raleway.className} uppercase tracking-wide`}
          >
            {noticia.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{noticia.summary}</p>
        </div>
{/*         <div>
          {noticia.tags.map((tag, i) => (
            <Tag text={tag} key={i} />
          ))}
        </div> */}
      </div>
    </article>
  );
}
