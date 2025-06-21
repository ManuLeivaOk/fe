export interface Noticia {
  id: number;
  documentId: string;
  titulo: string;
  subtitulo: string;
  contenido: ContenidoBlock[];
  fechaPublicacion: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: NoticiaImage;
}

export interface ContenidoBlock {
  type: "paragraph" | string;
  children: ContenidoChild[];
}

export interface ContenidoChild {
  type: "text" | string;
  text: string;
}

export interface NoticiaImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
