export const getPeriod = async (
  timeRecordId: number,
  pagQuery: IPaginationQuery,
) => {
  return useCustomFetch()<Pagination<PeriodMap>>(
    `/periods/${timeRecordId}?page=${pagQuery.page}&perPage=${pagQuery.perPage}`,
    { method: "GET" },
  );
};

export const postPeriod = async (body: PeriodDto) => {
  return useCustomFetch(false)<PeriodMap>("/periods", {
    method: "POST",
    body,
  });
};

export const postPeriodList = async (
  timeRecordId: number,
  body: PeriodListDto,
) => {
  return useCustomFetch(false)<PeriodDto[]>(`/periods/list/${timeRecordId}`, {
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
