// components/ui/SecondaryButton.tsx
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
  }
  
  export default function SecondaryButton({ children, ...props }: Props) {
    return (
      <button
        {...props}
        className={`bg-white text-orange-500 border border-orange-500 font-semibold px-5 py-2 rounded-xl hover:bg-orange-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
      >
        {children}
      </button>
    );
  }
  