interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
  }
  
  export default function PrimaryButton({ children, ...props }: Props) {
    return (
      <button
        {...props}
        className={`bg-orange-500 text-white font-semibold px-5 py-2 rounded-xl shadow hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
      >
        {children}
      </button>
    );
  }
  