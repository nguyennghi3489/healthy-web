import { IExcerciseModel } from "../../../../models/excercise";
import styles from "./my-exercise.module.css";

interface IMyExcercise {
  exercises: IExcerciseModel[];
}
export const MyExercise = ({ exercises }: IMyExcercise) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoArea}>
        <h3 className={styles.heading}>MY EXERCISE</h3>
        <p className={styles.date}>2021.05.21</p>
      </div>
      <ul className={styles.activityList}>
        {exercises.map((item) => (
          <li key={item.id} className={styles.activity}>
            <div className={styles.activitySummary}>
              <h4 className={styles.name}>{item.name}</h4>
              <p className={styles.calo}>{item.calo}</p>
            </div>
            <p className={styles.duration}>{item.duration} min</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
