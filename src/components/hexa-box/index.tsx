import { FunctionComponent } from "react";
import styles from "./hexa-box.module.css";

interface IHexaBox {
  icon: FunctionComponent;
  text: string;
}

export const HexaBox = ({ icon, text }: IHexaBox) => {
  const Icon = icon;
  return (
    <div className={styles.container}>
      <Icon />
      {text}
    </div>
  );
};
