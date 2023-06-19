import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { RecordBox } from "../../components/record-box";
import { BodyRecord } from "./components/body-record";
import { MyDiary } from "./components/my-diary";
import { MyExercise } from "./components/my-exercise";
import styles from "./my-record.module.css";
import { IBodyFatRecordsModel } from "../../models/body-fat";
import {
  getBodyFatRecordsInfo,
  getDiaryList,
  getExcerciseInfo,
} from "../../apis/my-record";
import { IExcerciseModel } from "../../models/excercise";
import { IDiaryModel } from "../../models/diary";

export const MyRecordPage = () => {
  const [bodyRecords, setBodyRecords] = useState<
    IBodyFatRecordsModel | undefined
  >(undefined);
  const [exercises, setExercises] = useState<IExcerciseModel[]>([]);
  const [diary, setDiary] = useState<IDiaryModel[]>([]);

  useEffect(() => {
    const fetchBodyRecords = async () => {
      const data = await getBodyFatRecordsInfo();
      setBodyRecords(data);
    };
    fetchBodyRecords();
  });

  useEffect(() => {
    const fetchExcercises = async () => {
      const data = await getExcerciseInfo();
      setExercises(data);
    };
    fetchExcercises();
  });

  useEffect(() => {
    const fetchDiary = async () => {
      const data = await getDiaryList();
      setDiary(data);
    };
    fetchDiary();
  });

  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.category}>
          <RecordBox
            url="images/MyRecommend-1.jpg"
            title="BODY RECORD"
            description="自分のカラダの記録"
          />
          <RecordBox
            url="images/MyRecommend-2.jpg"
            title="MY EXERCISE"
            description="自分の運動の記録"
          />
          <RecordBox
            url="images/MyRecommend-3.jpg"
            title="MY DIARY"
            description="自分の日記"
          />
        </div>

        <div className={styles.bodyRecord}>
          {bodyRecords && <BodyRecord bodyRecords={bodyRecords} />}
        </div>

        <div className={styles.myExcercise}>
          <MyExercise exercises={exercises} />
        </div>

        <div className={styles.myDiary}>
          <MyDiary diary={diary} />
        </div>

        <div className={styles.viewMore}>
          <Button type="large">記録をもっと見る</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
