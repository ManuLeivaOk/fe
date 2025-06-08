import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function NoticiaRelacionada({ title, image }: Props) {
  return (
    <div className="flex gap-3 items-center bg-white p-2 rounded shadow">
      <div className="relative w-20 h-20 rounded overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <p className="text-sm text-gray-800 font-medium">{title}</p>
    </div>
  );
}
