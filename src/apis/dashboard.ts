import { achivementMockData } from "../data/achievements";
import { bodyFatMockData } from "../data/body-fat";
import { mealHistoryMockData } from "../data/meal-history";
import { IAchievementModel } from "../models/achievement";
import { IBodyFatModel } from "../models/body-fat";
import { IMealModel } from "../models/meal";

export const getAchievementInfo = (): Promise<IAchievementModel> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(achivementMockData);
    }, 100);
  });
};

export const getBodyFatInfo = (): Promise<IBodyFatModel[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(bodyFatMockData);
    }, 100);
  });
};

export const getMealHistory = (): Promise<IMealModel[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(mealHistoryMockData);
    }, 100);
  });
};
