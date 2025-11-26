type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, onClick, className, disabled, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={className ?? ""}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
