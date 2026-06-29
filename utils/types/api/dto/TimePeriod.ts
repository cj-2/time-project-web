export type PeriodDto = {
  recordId: number;
  start: Date;
  end: Date;
};

export type PeriodListDto = {
  type: string;
  from: string;
  periods: { start: Date; end: Date }[];
};
