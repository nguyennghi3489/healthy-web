import { ReactNode } from "react";
import styles from "./button.module.css";

type ButtonType = "large" | "default";
interface IButton {
  children: ReactNode;
  type?: ButtonType;
  active?: boolean;
}

const getButtonStyle = (type: ButtonType, active: boolean) => {
  const activeStyle = active ? styles.active : "";
  switch (type) {
    case "large":
      return styles.container;
    default:
      return `${styles.default} ${activeStyle}`;
  }
};

export const Button = ({
  children,
  type = "default",
  active = false,
}: IButton) => {
  const buttonStyle = getButtonStyle(type, active);
  return <button className={buttonStyle}>{children}</button>;
};
