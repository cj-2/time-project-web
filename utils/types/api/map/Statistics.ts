export type RangeStatistic = {
  startDay: string;
  endDay: string;

  totalHours: string;
  isolatedPeriodHours: string;
  timerHours: string;
  pomodoroHours: string;
  manualHours: string;

  breakHours: string;

  timerCount: number;
  pomodoroCount: number;
  breakCount: number;
  sessionCount: number;
  periodCount: number;
  isolatedPeriodCount: number;
  manualCount: number;

  totalInHours: number;
  totalInMinutes: number;

  averageHours: string;
  daysCount: number;
  activeDaysCount: number;
  averageInHours: number;
  averageInMinutes: number;

  recordRangeProgress: RecordRangeProgress[] | null;
};

export type RecordRangeProgress = {
  totalHours: string;
  record: RecordMap;
};

export type RangeStatisticsWithDays = {
  total: RangeStatistic;
  days: RangeStatistic[];
};
