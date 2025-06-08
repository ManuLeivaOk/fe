import { raleway } from "@/fonts/fonts";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-8">
      <span className="inline-block w-1.5 h-12 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-4"></span>
      <h2 className={`leading-tight drop-shadow-md text-orange-500 font-bold tracking-normal uppercase ${raleway.className}`}>{title}</h2>
    </div>
  );
}
