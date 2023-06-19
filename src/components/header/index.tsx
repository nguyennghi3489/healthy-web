import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as MemoIcon } from "../icons/memo.svg";
import { ReactComponent as ChallengeIcon } from "../icons/challenge.svg";
import { ReactComponent as InfoIcon } from "../icons/info.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import { ReactComponent as CloseIcon } from "../icons/close.svg";
import { MenuItem } from "./menu-item";
import styles from "./header.module.css";
import { useState } from "react";
import { Button } from "../button";

export const Header = () => {
  const [isShowDropdown, setIsShowDropDown] = useState(false);

  const showDropdown = () => {
    setIsShowDropDown(true);
  };
  const hideDropdown = () => {
    setIsShowDropDown(false);
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <NavLink to="/">
          <Logo width={109} height={35} />
        </NavLink>
        <div className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/my-record">
                <MenuItem icon={MemoIcon} text="自分の記録" />
              </NavLink>
            </li>
            <li>
              <MenuItem icon={ChallengeIcon} text="チャレンジ" />
            </li>
            <li>
              <MenuItem icon={InfoIcon} text="お知らせ" badge="1" />
            </li>
          </ul>
          {isShowDropdown ? (
            <Button type="transparent" onClick={hideDropdown}>
              <CloseIcon />
            </Button>
          ) : (
            <Button type="transparent" onClick={showDropdown}>
              <MenuIcon />
            </Button>
          )}
          {isShowDropdown && (
            <ul className={styles.dropdown}>
              <li className={styles.dropdownItem}>
                <NavLink to="/my-record">自分の記録</NavLink>
              </li>
              <li className={styles.dropdownItem}>体重グラフ</li>
              <li className={styles.dropdownItem}>目標</li>
              <li className={styles.dropdownItem}>選択中のコース</li>
              <li className={styles.dropdownItem}>
                <NavLink to="/articles">コラム一覧</NavLink>
              </li>
              <li className={styles.dropdownItem}>設定</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
