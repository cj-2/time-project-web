export type TimePeriodMap = {
  periodId: number;
  recordId: number;
  start: string;
  end: string;
  time: {
    seconds: string;
    minutes: string;
    hours: string;
    days: string;
  };
  formattedTime: string;
};
