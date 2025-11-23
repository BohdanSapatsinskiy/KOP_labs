type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; 
  disabled?: boolean;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
