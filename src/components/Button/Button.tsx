import React from "react";
import styles from './Button.module.css';

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
  const cls = className ?? `${styles["spec-btn"]}`;

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
