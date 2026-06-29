export const getRecords = async (pagQuery: IPaginationQuery) => {
  return useCustomFetch()<Pagination<RecordMap>>(
    `/records${paginationQueryHandle(pagQuery)}`,
    { method: "GET" },
  );
};

export const searchRecord = async (search: string = "") => {
  return useCustomFetch()<SearchRecordItem[]>(
    `/records/search?value=${search}`,
    { method: "GET" },
  );
};

export const getRecordByCode = async (code: string) => {
  return useCustomFetch()<RecordMap>(`/records/${code}`, {
    method: "GET",
  });
};

export const postRecord = async (body: CreateRecordDto) => {
  return useCustomFetch(false)<RecordMap>("/records", {
    method: "POST",
    body,
  });
};

export const putRecord = async (body: UpdateRecordDto) => {
  return useCustomFetch(false)<RecordMap>(`/records/${body.id}`, {
    method: "PUT",
    body,
  });
};

export const deleteRecord = async (id: number) => {
  return useCustomFetch(false)<boolean>(`/records/${id}`, { method: "DELETE" });
};

export const recordApi = () => ({
  get: async (pagQuery: IPaginationQuery) => {
    return useCustomFetch()<Pagination<RecordMap>>(
      `/records${paginationQueryHandle(pagQuery)}`,
      { method: "GET" },
    );
  },
  delete: async (id: number) => {
    return useCustomFetch(false)<boolean>(`/records/${id}`, {
      method: "DELETE",
    });
  },
  getHistory: async (pagQuery: IPaginationQuery, recordId: number) => {
    return useCustomFetch()<Pagination<RecordHistoryDayMap>>(
      `/records/history/${recordId}${paginationQueryHandle(pagQuery)}`,
      {
        method: "GET",
      },
    );
  },
});
