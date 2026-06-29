export interface TimeRecordLocalTable {
  timeRecordDate: string;
  periods: PeriodLocal[];
  formattedTime: string;
  code: string | undefined;
  id: number | null;
  localUuid: string;
  title: string;
  description: string;
  timerSessionType?: string;
  timerSessionFrom?: string;
}
