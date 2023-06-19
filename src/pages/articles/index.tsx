import { useEffect, useState } from "react";
import { Article } from "../../components/article";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import styles from "./article.module.css";
import { RecommendBox } from "./components/recommend-box";
import { IArticleModel } from "../../models/article";
import { getArticleList } from "../../apis/articles";

export const ArticlesPage = () => {
  const [articles, setArticles] = useState<IArticleModel[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticleList();
      setArticles(data);
    };
    fetchArticles();
  });

  return (
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
        {articles.map((item: IArticleModel) => (
          <Article
            key={item.id}
            url={item.url}
            title={item.title}
            date={item.date}
            tags={item.tags.join(" ")}
          />
        ))}
      </div>
      <div className={styles.viewMore}>
        <Button type="large">記録をもっと見る</Button>
      </div>
    </div>
  );
};
