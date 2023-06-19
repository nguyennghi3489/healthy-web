import { MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonType = "large" | "default" | "transparent";
interface IButton {
  children: ReactNode;
  type?: ButtonType;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const getButtonStyle = (type: ButtonType, active: boolean) => {
  const activeStyle = active ? styles.active : "";
  switch (type) {
    case "transparent":
      return styles.transparent;
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
  onClick,
  ...rest
}: IButton) => {
  const buttonStyle = getButtonStyle(type, active);
  return (
    <button className={buttonStyle} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
