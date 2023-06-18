import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>会員登録</li>
          <li>運営会社</li>
          <li>利用規約</li>
          <li>個人情報の取扱について</li>
          <li>特定商取引法に基づく表記</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </div>
  );
};
