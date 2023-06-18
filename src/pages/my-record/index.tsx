import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { RecordBox } from "../../components/record-box";
import { MyDiary } from "./components/my-diary";
import { MyExercise } from "./components/my-exercise";
import styles from "./my-record.module.css";

export const MyRecord = () => {
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

        <div>Body Record</div>

        <div className={styles.myExcercise}>
          <MyExercise />
        </div>

        <div className={styles.myDiary}>
          <MyDiary />
        </div>

        <div className={styles.viewMore}>
          <Button>記録をもっと見る</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
