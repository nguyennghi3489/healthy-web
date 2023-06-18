import styles from "./thumbnail.module.css";

interface IThumbnail {
  url: string;
  text: string;
}
export const Thumbnail = ({ url, text }: IThumbnail) => {
  return (
    <div className={styles.container}>
      <img src={url} alt="" className={styles.image} />
      <p className={styles.description}>{text}</p>
    </div>
  );
};
