export const getPeriod = async (
  recordId: number,
  pagQuery: IPaginationQuery,
) => {
  return useCustomFetch()<Pagination<PeriodMap>>(
    `/periods/${recordId}?page=${pagQuery.page}&perPage=${pagQuery.perPage}`,
    { method: "GET" },
  );
};

export const postPeriod = async (body: PeriodDto) => {
  return useCustomFetch(false)<PeriodMap>("/periods", {
    method: "POST",
    body,
  });
};

export const postPeriodList = async (recordId: number, body: PeriodListDto) => {
  return useCustomFetch(false)<PeriodDto[]>(`/periods/list/${recordId}`, {
    method: "POST",
    body,
  });
};

export const putPeriod = async (id: number, body: PeriodDto) => {
  return useCustomFetch(false)<PeriodMap>(`/periods/${id}`, {
    method: "PUT",
    body,
  });
};

export const deletePeriod = async (id: number) => {
  return useCustomFetch(false)<boolean>(`/periods/${id}`, {
    method: "DELETE",
  });
};
