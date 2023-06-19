import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as MemoIcon } from "../icons/memo.svg";
import { ReactComponent as ChallengeIcon } from "../icons/challenge.svg";
import { ReactComponent as InfoIcon } from "../icons/info.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import { MenuItem } from "./menu-item";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <Logo width={109} height={35} />
        <div className={styles.nav}>
          <ul>
            <li>
              <MenuItem icon={MemoIcon} text="自分の記録" />
            </li>
            <li>
              <MenuItem icon={ChallengeIcon} text="チャレンジ" />
            </li>
            <li>
              <MenuItem icon={InfoIcon} text="お知らせ" badge="1" />
            </li>
          </ul>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};
