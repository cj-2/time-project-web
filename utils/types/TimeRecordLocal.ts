export interface TimeRecordLocal {
  id: number | null;
  code?: string;
  localUuid: string;
  title: string;
  description: string;
  timeRecordDate: string;
  periods: PeriodLocal[];
  timerSessionType?: string;
  timerSessionFrom?: string;
}

export type PeriodLocal = {
  start: Date;
  end: Date;
};
