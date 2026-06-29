export type TimeRecordHistoryDayMap = {
  date: string;
  count: number;
  periods: TimePeriodMap[];
  periodsFormattedTime: string;
  sessions: TimerSessionMap[];
  sessionsFormattedTime: string;
  minutes: TimeMinutesMap[];
  minutesFormattedTime: string;
  timeInMinutes: number;
  timeInHours: number;
  formattedTime: string;
};

export type TimeRecordHistoryDayChart = {
  date: string;
  timeInMinutes: number;
  timeInHours: number;
  formattedTime: string;
};
