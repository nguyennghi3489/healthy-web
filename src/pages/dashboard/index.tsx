import { Header } from "../../components/header";
import { HexaBox } from "../../components/hexa-box";
import { ReactComponent as KnifeIcon } from "../../components/icons/knife.svg";
import { ReactComponent as CupIcon } from "../../components/icons/cup.svg";
import styles from "./dashboard.module.css";
import { Thumbnail } from "../../components/thumbnail";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      {/* <InfoArea></InfoArea> */}
      <div className={styles.category}>
        <HexaBox icon={KnifeIcon} text="Morning" />
        <HexaBox icon={KnifeIcon} text="Lunch" />
        <HexaBox icon={KnifeIcon} text="Dinner" />
        <HexaBox icon={CupIcon} text="Snack" />
      </div>

      <div className={styles.meals}>
        <div className={styles.meal}>
          <Thumbnail text="05.21.Morning" url="/images/m01.jpg" />
        </div>
        <div className={styles.meal}>
          <Thumbnail text="05.21.Snack" url="/images/l01.jpg" />
        </div>
        <div className={styles.meal}>
          <Thumbnail text="05.21.Lunch" url="/images/l03.jpg" />
        </div>
        <div className={styles.meal}>
          <Thumbnail text="05.21.Dinner" url="/images/d01.jpg" />
        </div>
        <div className={styles.meal}>
          <Thumbnail text="05.20.Morning" url="/images/m01.jpg" />
        </div>
        <div className={styles.meal}>
          <Thumbnail text="05.20.Lunch" url="/images/l02.jpg" />
        </div>
        <div className={styles.meal}>
          <Thumbnail text="05.20.Dinner" url="/images/d02.jpg" />
        </div>
        <div className={styles.meal}>
          <Thumbnail text="05.20.Snack" url="/images/s01.jpg" />
        </div>
      </div>

      <div className={styles.viewMore}>
        <Button>記録をもっと見る</Button>
      </div>
      <Footer />
    </div>
  );
};
