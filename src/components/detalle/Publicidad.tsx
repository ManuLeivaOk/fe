import Image from "next/image";

interface Props {
  image: string;
  alt?: string;
}

export default function PublicidadCard({ image, alt = "Publicidad" }: Props) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <Image src={image} alt={alt} width={600} height={300} className="object-cover w-full h-auto" />
    </div>
  );
}
