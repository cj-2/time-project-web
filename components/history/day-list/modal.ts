export const tpModal = reactive<{
  open: boolean;
  timeRecordId?: number;
  form?: PeriodForm;
}>({
  open: false,
  timeRecordId: undefined,
  form: undefined,
});

export const createPeriod = (timeRecordId: number) => {
  tpModal.open = true;
  tpModal.timeRecordId = timeRecordId;
  tpModal.form = undefined;
};

export const editPeriod = (period: PeriodForm) => {
  tpModal.open = true;
  tpModal.timeRecordId = undefined;
  tpModal.form = period;
};

export const closePeriodModal = async (
  callback: () => Promise<void>,
  refresh = false,
) => {
  tpModal.open = false;
  if (refresh) await callback();
};

export const deleteTpModal = reactive({
  open: false,
  id: 0,
});

export const openDeleteTpModal = (id: number) => {
  deleteTpModal.open = true;
  deleteTpModal.id = id;
};

export const closeDeleteTpModal = () => {
  deleteTpModal.open = false;
};

export const deleteTsModal = reactive({
  open: false,
  id: 0,
});

export const openDeleteTsModal = (id: number) => {
  deleteTsModal.open = true;
  deleteTsModal.id = id;
};

export const closeDeleteTsModal = () => {
  deleteTsModal.open = false;
};

export const deleteTmModal = reactive({
  open: false,
  id: 0,
});

export const openDeleteTmModal = (id: number) => {
  deleteTmModal.open = true;
  deleteTmModal.id = id;
};

export const closeDeleteTmModal = () => {
  deleteTmModal.open = false;
};

export const tmModal = reactive<{
  open: boolean;
  timeRecordId?: number;
  form?: PeriodForm;
}>({
  open: false,
  timeRecordId: undefined,
});

export const createTimeMinute = (timeRecordId: number) => {
  tmModal.open = true;
  tmModal.timeRecordId = timeRecordId;
};

export const closeTimeMinuteModal = async (
  callback: () => Promise<void>,
  refresh = false,
) => {
  tmModal.open = false;
  if (refresh) await callback();
};
