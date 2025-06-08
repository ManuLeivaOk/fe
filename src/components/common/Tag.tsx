import Link from "next/link";

interface Props {
  text: string;
}

export default function Tag({ text }: Props) {
  return (
    <Link
      className="text-[10px] mr-1 font-semibold uppercase bg-orange-500 text-white px-2 py-0.5 rounded-md hover:scale-105 transiti duration-300"
      href={"#"}
    >
      {text}
    </Link>
  );
}
