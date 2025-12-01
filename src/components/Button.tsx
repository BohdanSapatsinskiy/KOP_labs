import React from "react";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
  disabled,
  ...rest
}) => {
  const cls = className ?? "";

  return (
    <button
      type={type}
      disabled={disabled}
      className={cls}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

