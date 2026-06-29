export const tpModal = reactive<{
  open: boolean;
  recordId?: number;
  form?: PeriodForm;
}>({
  open: false,
  recordId: undefined,
  form: undefined,
});

export const createPeriod = (recordId: number) => {
  tpModal.open = true;
  tpModal.recordId = recordId;
  tpModal.form = undefined;
};

export const editPeriod = (period: PeriodForm) => {
  tpModal.open = true;
  tpModal.recordId = undefined;
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
  recordId?: number;
  form?: PeriodForm;
}>({
  open: false,
  recordId: undefined,
});

export const createTimeMinute = (recordId: number) => {
  tmModal.open = true;
  tmModal.recordId = recordId;
};

export const closeTimeMinuteModal = async (
  callback: () => Promise<void>,
  refresh = false,
) => {
  tmModal.open = false;
  if (refresh) await callback();
};
