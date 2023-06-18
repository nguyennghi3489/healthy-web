import styles from "./recommend-box.module.css";
interface IRecommendBox {
  title: string;
  description: string;
}

export const RecommendBox = ({ title, description }: IRecommendBox) => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.line} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
