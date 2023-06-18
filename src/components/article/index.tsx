import styles from "./article.module.css";

interface IThumbnail {
  url: string;
  title: string;
  date: string;
  tags: string;
}

export const Article = ({ url, date, title, tags }: IThumbnail) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagePart}>
        <img src={url} alt="" className={styles.image} />
        <p className={styles.description}>{date}</p>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.tags}>{tags}</p>
      </div>
    </div>
  );
};
