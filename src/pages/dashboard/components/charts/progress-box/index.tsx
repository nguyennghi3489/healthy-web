import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./progress-box.module.css";
import { IAchievementModel } from "../../../../../models/achievement";

interface IProgressBox {
  achievement: IAchievementModel;
}

export const ProgressBox = ({ achievement }: IProgressBox) => {
  const { date, url, percentage } = achievement;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={url} alt="" />
      <CircularProgressbar
        value={percentage}
        text={""}
        strokeWidth={2}
        className={styles.progressBar}
        styles={buildStyles({
          pathColor: "#FFF",
          trailColor: "transparent",
          textSize: "18px",
          textColor: "#FFF",
        })}
      />
      <div className={styles.texts}>
        <div className={styles.date}>{date}</div>
        <div className={styles.percentage}>{percentage}%</div>
      </div>
    </div>
  );
};
