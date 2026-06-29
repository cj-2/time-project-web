export type PeriodForm = {
  id?: number;
  start: Date | string;
  end: Date | string;
  recordId: number;
  callback?: () => void;
};
