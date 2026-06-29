import { eachDayOfInterval, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { defineStore } from "pinia";

export const useRecordHistoryStore = defineStore(
  "record-history-store",
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
    } = usePaginationQuery("trh_");

    const apiRes = ref<Pagination<RecordHistoryDayMap>>();
    const isPaginationFetch = ref(false);
    const recordId = ref<number>();

    const setRecordId = (value: number) => {
      recordId.value = value;
    };

    const fetchData = async (updatePaginationQuery = true) => {
      if (updatePaginationQuery) {
        updatePaginationQueryWithRoute();
      }

      isPaginationFetch.value = true;

      try {
        const data = await recordApi().getHistory(
          paginationQuery.value,
          recordId.value!,
        );
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

    const isDeleteFetch = ref(false);

    const deleteRecord = async (id: number) => {
      try {
        isDeleteFetch.value = true;
        await categoryApi().delete(id);
        await refetchData();
      } finally {
        isDeleteFetch.value = false;
      }
    };

    const isFetch = computed(() => {
      return isDeleteFetch.value || isPaginationFetch.value;
    });

    const chartData = computed(() => {
      if (!apiRes.value?.data) return [];

      const firstDay = apiRes.value.data[0];
      const lastDay = apiRes.value.data[apiRes.value.data.length - 1];

      if (!firstDay || !lastDay) return [];

      const days = eachDayOfInterval({
        start: firstDay.date,
        end: lastDay.date,
      }).map<RecordHistoryDayChart>((i) => ({
        date: i.toISOString(),
        timeInHours: 0,
        timeInMinutes: 0,
        formattedTime: "",
      }));

      apiRes.value.data.forEach((d) => {
        const day = days.find(
          (i) =>
            format(new Date(i.date), "dd/MM/yyyy") ===
            format(new Date(d.date), "dd/MM/yyyy"),
        );
        if (!day) return;

        day.formattedTime = d.formattedTime;
        day.timeInHours = d.timeInHours;
        day.timeInMinutes = d.timeInMinutes;
      });

      return days;
    });

    const chartDataFormat = computed(() => {
      return {
        labels:
          chartData.value.map((i) => format(i.date, "d/MM/yy"), {
            locale: ptBR,
          }) || [],
        datasets: [
          // {
          //   label: "Horas",
          //   data: chartData.value.map((i) => i.timeInHours) || [],
          //   borderColor: "rgb(99, 102, 241)",
          //   backgroundColor: "rgba(99, 102, 241, 0.1)",
          //   fill: true,
          // },
          {
            label: "Minutos",
            data: chartData.value.map((i) => i.timeInMinutes) || [],
            borderColor: "rgb(99, 102, 241)",
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            fill: true,
          },
        ],
      };
    });

    return {
      fetchData,
      refetchData,
      paginationQuery,
      apiRes,
      isPaginationFetch,
      isFetch,
      chartData,
      chartDataFormat,

      setRecordId,

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
