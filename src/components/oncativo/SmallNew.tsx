import { Noticia } from "@/types/noticia";
import Image from "next/image";
import { raleway } from "@/fonts/fonts";

interface Props {
  noticia: Noticia;
}

export default function SmallNew({ noticia }: Props) {
  return (
    <article
      key={noticia.id}
      className="flex h-40 rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-900"
    >
      <div className="relative w-1/3 h-full min-h-full">
        <Image
          src="/img.avif"
          alt={noticia.title}
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-3 flex flex-col md:justify-between w-2/3">
        <time className="text-xs text-gray-400 ml-auto">{noticia.date}</time>
        <div className="mt-3 md:mt-0">
          <h4
            className={`text-sm text-gray-900 dark:text-white mb-1 line-clamp-2 ${raleway.className} uppercase font-bold tracking-wide`}
          >
            {noticia.title}
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-xs line-clamp-2">
            {noticia.summary}
          </p>
        </div>

      </div>
    </article>
  );
}
