import { FunctionComponent } from "react";
import styles from "./menu-item.module.css";

interface IMenuItem {
  icon: FunctionComponent;
  text: string;
  badge?: string;
}
export const MenuItem = ({ icon, badge, text }: IMenuItem) => {
  const Icon = icon;
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon />
        {badge && <div className={styles.badge}>{badge}</div>}
      </div>
      <p>{text}</p>
    </div>
  );
};
