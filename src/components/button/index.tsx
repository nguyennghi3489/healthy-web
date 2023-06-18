import { ReactNode } from "react";
import styles from "./button.module.css";

interface IButton {
  children: ReactNode;
}

export const Button = ({ children }: IButton) => {
  return <button className={styles.container}>{children}</button>;
};
