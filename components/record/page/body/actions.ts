export const getRecordQuery = () => {
  const route = useRoute();
  return useQuery({
    key: [`record-${route.params.code.toString()}`],
    query: () => getRecordByCode(`${route.params.code}`),
    refetchOnWindowFocus: false,
  });
};
