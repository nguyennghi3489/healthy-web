import { Article } from "../../components/article";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import styles from "./article.module.css";
import { RecommendBox } from "./components/recommend-box";

export const ArticlesPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.category}>
          <RecommendBox title="RECOMMENDED COLUMN" description="オススメ" />
          <RecommendBox
            title="RECOMMENDED
DIET"
            description="ダイエット"
          />
          <RecommendBox
            title="RECOMMENDED
BEAUTY"
            description="美容"
          />
          <RecommendBox
            title="RECOMMENDED
HEALTH"
            description="健康"
          />
        </div>
        <div className={styles.articles}>
          <Article
            url="/images/column-1.jpg"
            title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
            date="2021.05.17 23:25"
            tags="#魚料理  #和食  #DHA"
          />
          <Article
            url="/images/column-1.jpg"
            title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
            date="2021.05.17 23:25"
            tags="#魚料理  #和食  #DHA"
          />
          <Article
            url="/images/column-1.jpg"
            title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
            date="2021.05.17 23:25"
            tags="#魚料理  #和食  #DHA"
          />
          <Article
            url="/images/column-1.jpg"
            title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
            date="2021.05.17 23:25"
            tags="#魚料理  #和食  #DHA"
          />
          <Article
            url="/images/column-1.jpg"
            title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
            date="2021.05.17 23:25"
            tags="#魚料理  #和食  #DHA"
          />
          <Article
            url="/images/column-1.jpg"
            title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
            date="2021.05.17 23:25"
            tags="#魚料理  #和食  #DHA"
          />
        </div>
        <div className={styles.viewMore}>
          <Button>記録をもっと見る</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
