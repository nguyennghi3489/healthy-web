export interface IBodyFatModel {
  date: string;
  val1: number;
  val2: number;
}

export type RecordType = "day" | "week" | "month" | "year";
export interface IBodyFatRecordsModel {
  day: IBodyFatModel[];
  week: IBodyFatModel[];
  month: IBodyFatModel[];
  year: IBodyFatModel[];
}
