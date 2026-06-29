export const getRecordQuery = () => {
  const route = useRoute();
  return useQuery({
    key: [`time-record-${route.params.code.toString()}`],
    query: () => getRecordByCode(`${route.params.code}`),
    refetchOnWindowFocus: false,
  });
};
