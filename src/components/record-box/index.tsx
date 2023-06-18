import styles from "./record-box.module.css";

interface IRecordBox {
  url: string;
  title: string;
  description: string;
}

export const RecordBox = ({ url, title, description }: IRecordBox) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};
