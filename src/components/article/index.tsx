import styles from "./article.module.css";

interface IThumbnail {
  url: string;
  text: string;
}

export const Article = ({ url, text }: IThumbnail) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagePart}>
        <img src={url} alt="" className={styles.image} />
        <p className={styles.description}>{text}</p>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
        </h3>
        <p className={styles.tags}>#魚料理 #和食 #DHA</p>
      </div>
    </div>
  );
};
