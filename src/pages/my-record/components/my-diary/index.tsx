import { IDiaryModel } from "../../../../models/diary";
import styles from "./my-diary.module.css";

interface IMyDiary {
  diary: IDiaryModel[];
}
export const MyDiary = ({ diary }: IMyDiary) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>MY DIARY</h3>
      <div className={styles.list}>
        {diary.map((item: IDiaryModel) => (
          <div className={styles.item} key={item.id}>
            <h4 className={styles.time}>{item.date}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
