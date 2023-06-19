import { articlesMockData } from "../data/articles";
import { IArticleModel } from "../models/article";

export const getArticleList = (): Promise<IArticleModel[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(articlesMockData);
    }, 100);
  });
};
