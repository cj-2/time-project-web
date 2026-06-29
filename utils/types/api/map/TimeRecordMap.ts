export type TimeRecordMap = {
  recordId: number;
  name: string;
  description: string;
  userId: number;
  category: CategoryMap;
  categoryName: string | null;
  categoryId: number | null;
  code: string;
  externalLink: string;
  meta: TimeRecordMeta | null;
};
