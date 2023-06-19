import { bodyFatRecordsMockData } from "../data/body-fat";
import { diaryMockData } from "../data/diary";
import { excercisesMockData } from "../data/excercises";
import { IBodyFatRecordsModel } from "../models/body-fat";
import { IDiaryModel } from "../models/diary";
import { IExcerciseModel } from "../models/excercise";

export const getBodyFatRecordsInfo = (): Promise<IBodyFatRecordsModel> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(bodyFatRecordsMockData);
    }, 100);
  });
};

export const getExcerciseInfo = (): Promise<IExcerciseModel[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(excercisesMockData);
    }, 100);
  });
};

export const getDiaryList = (): Promise<IDiaryModel[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(diaryMockData);
    }, 100);
  });
};
