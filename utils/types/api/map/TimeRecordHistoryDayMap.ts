export type RecordHistoryDayMap = {
  date: string;
  count: number;
  periods: PeriodMap[];
  periodsFormattedTime: string;
  sessions: TimerSessionMap[];
  sessionsFormattedTime: string;
  minutes: TimeMinutesMap[];
  minutesFormattedTime: string;
  timeInMinutes: number;
  timeInHours: number;
  formattedTime: string;
};

export type RecordHistoryDayChart = {
  date: string;
  timeInMinutes: number;
  timeInHours: number;
  formattedTime: string;
};
