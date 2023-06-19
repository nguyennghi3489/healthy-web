import styles from "./thumbnail.module.css";

interface IThumbnail {
  url: string;
  type: string;
  date: string;
}
export const Thumbnail = ({ url, type, date }: IThumbnail) => {
  return (
    <div className={styles.container}>
      <img src={url} alt="" className={styles.image} />
      <p className={styles.description}>{`${date} ${type}`}</p>
    </div>
  );
};
