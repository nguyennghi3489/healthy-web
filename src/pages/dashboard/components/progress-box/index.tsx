import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./progress-box.module.css";

export const ProgressBox = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="/images/d01.jpg" alt="" />
      <CircularProgressbar
        value={75}
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
        <div className={styles.date}>05/21</div>
        <div className={styles.percentage}>75%</div>
      </div>
    </div>
  );
};
