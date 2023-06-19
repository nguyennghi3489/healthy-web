import { LineChart, Line, XAxis, CartesianGrid } from "recharts";
import styles from "./dashboard-chart.module.css";
import { IBodyFatModel } from "../../../../../models/body-fat";

const data = [
  {
    name: "6月",
    val1: 40,
    val2: 24,
  },
  {
    name: "7月",
    val1: 60,
    val2: 11,
  },
  {
    name: "8月",
    val1: 10,
    val2: 24,
  },
  {
    name: "9月",
    val1: 45,
    val2: 32,
  },
  {
    name: "10月",
    val1: 140,
    val2: 52,
  },
  {
    name: "11月",
    val1: 100,
    val2: 32,
  },
  {
    name: "12月",
    val1: 90,
    val2: 32,
  },
  {
    name: "1月",
    val1: 120,
    val2: 51,
  },
  {
    name: "2月",
    val1: 85,
    val2: 12,
  },
  {
    name: "3月",
    val1: 40,
    val2: 59,
  },
  {
    name: "4月",
    val1: 31,
    val2: 124,
  },

  {
    name: "5月",
    val1: 60,
    val2: 14,
  },
];

interface IBodyFathart {
  bodyFatInfo: IBodyFatModel[];
}

export const BodyFathart = ({ bodyFatInfo }: IBodyFathart) => {
  return (
    <div className={styles.chartBox}>
      <LineChart
        width={680}
        height={300}
        data={bodyFatInfo}
        margin={{
          top: 12,
          left: 60,
          right: 30,
          bottom: 20,
        }}
      >
        <CartesianGrid
          horizontal={false}
          stroke="#777"
          fill="#2E2E2E"
          strokeDasharray="3 0"
        />
        <XAxis dataKey="date" stroke="#FFF" axisLine={false} tickLine={false} />
        <Line
          type="monotone"
          dataKey="val1"
          stroke="#FFCC21"
          strokeWidth={2}
          dot={{ stroke: "#FFCC21", strokeWidth: 2 }}
        />
        <Line
          type="monotone"
          dataKey="val2"
          stroke="#8FE9D0"
          strokeWidth={2}
          dot={{ stroke: "#8FE9D0", strokeWidth: 2 }}
        />
      </LineChart>
    </div>
  );
};
