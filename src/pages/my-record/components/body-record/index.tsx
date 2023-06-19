import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import styles from "./body-record.module.css";
import { Button } from "../../../../components/button";
import {
  IBodyFatModel,
  IBodyFatRecordsModel,
  RecordType,
} from "../../../../models/body-fat";
import { useState } from "react";

interface IBodyRecord {
  bodyRecords: IBodyFatRecordsModel;
}
export const BodyRecord = ({ bodyRecords }: IBodyRecord) => {
  const [data, setData] = useState<IBodyFatModel[]>(bodyRecords.day);
  const [type, setType] = useState<RecordType>("day");
  const { day, week, month, year } = bodyRecords;
  const pickBodyRecordData = (type: "day" | "week" | "month" | "year") => {
    switch (type) {
      case "day":
        setData(day);
        setType("day");
        break;
      case "week":
        setData(week);
        setType("week");
        break;
      case "month":
        setType("month");
        setData(month);
        break;
      default:
        setType("year");
        setData(year);
        break;
    }
  };

  return (
    <div className={styles.chartBox}>
      <div className={styles.infoArea}>
        <h3 className={styles.heading}>BODY RECORD</h3>
        <p className={styles.date}>2021.05.21</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 12,
            left: 30,
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
          <XAxis
            dataKey="name"
            stroke="#FFF"
            axisLine={false}
            tickLine={false}
          />
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
      </ResponsiveContainer>

      <div className={styles.filterGroup}>
        <Button
          onClick={() => pickBodyRecordData("day")}
          active={type === "day"}
        >
          日
        </Button>
        <Button
          onClick={() => pickBodyRecordData("week")}
          active={type === "week"}
        >
          週
        </Button>
        <Button
          onClick={() => pickBodyRecordData("month")}
          active={type === "month"}
        >
          月
        </Button>
        <Button
          onClick={() => pickBodyRecordData("year")}
          active={type === "year"}
        >
          年
        </Button>
      </div>
    </div>
  );
};
