export type PeriodForm = {
  id?: number;
  start: Date | string;
  end: Date | string;
  timeRecordId: number;
  callback?: () => void;
};
