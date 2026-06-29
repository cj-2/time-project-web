export interface RecordSharedDto {
  title?: string;
  description?: string;
  code?: string;
  categoryId?: number | null;
  externalLink?: string;
  timerSessionType?: string;
  timerSessionFrom?: string;
}

export interface CreateRecordDto extends RecordSharedDto {
  periods: { start: Date | string; end: Date | string }[];
}

export interface UpdateRecordDto extends RecordSharedDto {
  id: number;
}
