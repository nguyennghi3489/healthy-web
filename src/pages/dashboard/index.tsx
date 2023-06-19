import { Header } from "../../components/header";
import { HexaBox } from "../../components/hexa-box";
import { ReactComponent as KnifeIcon } from "../../components/icons/knife.svg";
import { ReactComponent as CupIcon } from "../../components/icons/cup.svg";
import styles from "./dashboard.module.css";
import { Thumbnail } from "../../components/thumbnail";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { Charts } from "./components/charts";
import { useEffect, useState } from "react";
import {
  getAchievementInfo,
  getBodyFatInfo,
  getMealHistory,
} from "../../apis/dashboard";
import { IAchievementModel } from "../../models/achievement";
import { IBodyFatModel } from "../../models/body-fat";
import { IMealModel } from "../../models/meal";

export const DashboardPage = () => {
  const [achievement, setAchievement] = useState<IAchievementModel | undefined>(
    undefined
  );
  const [bodyFatInfo, setBodyFatInfo] = useState<IBodyFatModel[] | undefined>(
    undefined
  );
  const [mealHistory, setMealHistory] = useState<IMealModel[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchAchievement = async () => {
      const data = await getAchievementInfo();
      setAchievement(data);
    };
    fetchAchievement();
  });

  useEffect(() => {
    const fetchBodyFatInfo = async () => {
      const data = await getBodyFatInfo();
      setBodyFatInfo(data);
    };
    fetchBodyFatInfo();
  });

  useEffect(() => {
    const fetchMealHistory = async () => {
      const data = await getMealHistory();
      setMealHistory(data);
    };
    fetchMealHistory();
  });

  return (
    <div>
      <Header />
      <div className={styles.chartsWrapper}>
        <Charts achievement={achievement} bodyFatInfo={bodyFatInfo} />
      </div>

      <div className={styles.category}>
        <HexaBox icon={KnifeIcon} text="Morning" />
        <HexaBox icon={KnifeIcon} text="Lunch" />
        <HexaBox icon={KnifeIcon} text="Dinner" />
        <HexaBox icon={CupIcon} text="Snack" />
      </div>

      <div className={styles.meals}>
        {mealHistory &&
          mealHistory.map((item) => (
            <div key={item.id} className={styles.meal}>
              <Thumbnail type={item.type} date={item.date} url={item.url} />
            </div>
          ))}
      </div>

      <div className={styles.viewMore}>
        <Button type="large">記録をもっと見る</Button>
      </div>
      <Footer />
    </div>
  );
};
