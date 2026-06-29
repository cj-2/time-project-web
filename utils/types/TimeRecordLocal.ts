export interface RecordLocal {
  id: number | null;
  code?: string;
  localUuid: string;
  title: string;
  description: string;
  recordDate: string;
  periods: PeriodLocal[];
  timerSessionType?: string;
  timerSessionFrom?: string;
}

export type PeriodLocal = {
  start: Date;
  end: Date;
};
