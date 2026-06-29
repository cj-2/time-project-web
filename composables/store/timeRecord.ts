import { format } from "date-fns";

export const useRecordStore = defineStore(
  "time-record-store-0001",
  () => {
    const {
      query: paginationQuery,
      setPage,
      setPerPage,
      setSearch,
      addFilter,
      removeFilter,
      updateSort,
      updatePaginationQueryWithRoute,
    } = usePaginationQuery("tr_", 12, {
      sort: "desc",
      sortProp: "lastTimeDate",
    });

    const apiRes = ref<Pagination<RecordMap>>();
    const isPaginationFetch = ref(false);
    const isDeleteFetch = ref(false);

    const fetchData = async (updatePaginationQuery = true) => {
      if (updatePaginationQuery) {
        updatePaginationQueryWithRoute();
      }

      isPaginationFetch.value = true;

      try {
        const data = await recordApi().get(paginationQuery.value);
        if (data) apiRes.value = data;
      } catch (error) {
        ErrorToast(error);
      } finally {
        isPaginationFetch.value = false;
      }
    };

    const refetchData = async () => {
      await fetchData(false);
    };

    async function deleteRecord(id: number) {
      try {
        isDeleteFetch.value = true;
        await recordApi().delete(id);
        await refetchData();
      } finally {
        isDeleteFetch.value = false;
      }
    }

    const isFetch = computed(() => {
      return isDeleteFetch.value || isPaginationFetch.value;
    });

    const tableData = computed(() => {
      const recordsTable: RecordTable[] = [];

      if (apiRes.value?.data)
        apiRes.value.data.forEach((record) => {
          recordsTable.push({
            ...record,
            lastTimeDate:
              (record.meta?.lastTimeDate &&
                format(record.meta.lastTimeDate, "dd/MM/yyyy")) ||
              "-",
            description: record.description || "-",
            code: record.code || "-",
            name: record.name || "Sem título",
            categoryName: record.categoryName || "-",
            formattedTime: record.meta?.formattedTime || "Nenhum",
            timeCountText: periodLabel(record.meta?.timeCount!),
          });
        });

      return recordsTable;
    });

    return {
      fetchData,
      refetchData,
      paginationQuery,
      apiRes,
      isPaginationFetch,
      isFetch,
      tableData,

      setPage,
      setPerPage,
      setSearch,
      addFilter,
      removeFilter,
      updateSort,

      delete: deleteRecord,
      isDeleteFetch,
    };
  },
  {
    persist: false,
  },
);
