import type { ReactNode } from "react";
import styles from "./BasePage.module.css";

type Props = {
  children: ReactNode;
  background?: string;
};

const BasePage = ({ children, background }: Props) => {
  return (
    <div
      className={styles.table}
      style={background ? { backgroundImage: `url(${background})`, backgroundSize: 'cover' } : undefined}
    >
      {children}
    </div>
  );
};

export default BasePage;
