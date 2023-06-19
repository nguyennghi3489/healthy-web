import { IAchievementModel } from "../../../../models/achievement";
import { IBodyFatModel } from "../../../../models/body-fat";
import styles from "./charts.module.css";
import { BodyFathart } from "./dashboard-chart";
import { ProgressBox } from "./progress-box";

interface ICharts {
  achievement?: IAchievementModel;
  bodyFatInfo?: IBodyFatModel[];
}
export const Charts = ({ achievement, bodyFatInfo }: ICharts) => (
  <div className={styles.charts}>
    <div className={styles.circleChart}>
      {achievement && <ProgressBox achievement={achievement} />}
    </div>
    <div className={styles.lineChart}>
      {bodyFatInfo && <BodyFathart bodyFatInfo={bodyFatInfo} />}
    </div>
  </div>
);
