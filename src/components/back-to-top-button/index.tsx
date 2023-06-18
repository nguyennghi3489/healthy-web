import { ReactComponent as ButtonIcon } from "../icons/component_scroll.svg";
import styles from "./back-to-top-button.module.css";

export const BackToTopButton = () => {
  return (
    <button className={styles.container}>
      <ButtonIcon />
    </button>
  );
};
