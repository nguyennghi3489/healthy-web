import { MouseEventHandler } from "react";
import { ReactComponent as ButtonIcon } from "../icons/component_scroll.svg";
import styles from "./back-to-top-button.module.css";

interface IBackToTopButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export const BackToTopButton = ({ onClick }: IBackToTopButton) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <ButtonIcon />
    </button>
  );
};
