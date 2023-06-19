import styles from "./charts.module.css";
import { DashboardChart } from "./dashboard-chart";
import { ProgressBox } from "./progress-box";

export const Charts = () => (
  <div className={styles.charts}>
    <div className={styles.circleChart}>
      <ProgressBox />
    </div>
    <div className={styles.lineChart}>
      <DashboardChart />
    </div>
  </div>
);
