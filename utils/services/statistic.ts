export const getRangeStatistic = async (
  date: Date | null = null,
  recordId: number | undefined = undefined,
) => {
  return useCustomFetch()<RangeStatistic>(
    `/statistics${
      recordId ? "/" + recordId : ""
    }/day?date=${date?.toISOString()}`,
    { method: "GET" },
  );
};
