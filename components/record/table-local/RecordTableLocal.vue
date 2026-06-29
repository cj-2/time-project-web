<script lang="ts" setup>
import { watch } from "vue";
import { useEventBus } from "@vueuse/core";
import { columns } from "./columns";

const timerStore = useTimerStore();

const props = withDefaults(
  defineProps<{
    id: number | null;
    postPeriodCallback: (code: string) => void;
  }>(),
  {
    id: null,
    postPeriodCallback: (code = "") => {},
  },
);

const timer = computed(() => timerStore.getTimer(props.id));

const records = computed<RecordLocalTable[]>(() =>
  timerStore.getRecords(props.id),
);

const totalPages = computed(() =>
  Math.ceil(timer.value.localRecords.length / timerStore._perPage),
);

const modal = reactive({ open: false });

const confirmDelete = <
  {
    open: boolean;
    uuid: string;
    id: number | null;
  }
>reactive({
  open: false,
  uuid: "",
  id: null,
});

const editRecordObject = ref<RecordForm | undefined>(undefined);

watch(
  () => timer.value.localRecords.length,
  (newTotalPages) => {
    if (timer.value.page > newTotalPages) timer.value.page = newTotalPages;
  },
);

const closeConfirmDeleteModal = () => {
  confirmDelete.open = false;
  confirmDelete.uuid = "";
  confirmDelete.id = null;
};

const openConfirmDeleteModal = (uuid: string, id: number | null) => {
  confirmDelete.open = true;
  confirmDelete.uuid = uuid;
  confirmDelete.id = id;
};

const deleteAction = () => {
  timerStore.deleteRecordLocal(confirmDelete.uuid, props.id);
  closeConfirmDeleteModal();
};

const openModal = (record: RecordLocal, isSync = false, isBind = false) => {
  if (!record) return;

  editRecordObject.value = recordLocalToForm(
    { ...record, isSync, isBind },
    () => {
      timerStore.deleteRecordLocal(record.localUuid, props.id);
      props.postPeriodCallback(record.code || "");
    },
  );

  modal.open = true;
};

const closeModal = () => {
  modal.open = false;

  setTimeout(() => {
    if (modal.open == false) {
      editRecordObject.value = undefined;
    }
  }, 500);
};

const bus = useEventBus<RecordLocalTableBusEvent>(TRL_TABLE_BUS_NAME);

const handleWithBus = (event: RecordLocalTableBusEvent) => {
  if (event.action == "delete") {
    openConfirmDeleteModal(event.data.localUuid, event.data.id);
  } else if (event.action == "sync") {
    openModal(event.data, true);
  } else if (event.action == "bind") {
    openModal(event.data, true, true);
  } else if (event.action == "createFrom") {
    openModal(event.data);
  }
};

bus.on(handleWithBus);

onBeforeUnmount(() => {
  bus.off(handleWithBus);
});
</script>

<template>
  <GDataTable :columns="columns" :data="records" />

  <GPaginationV2
    :page="timer.page"
    :per-page="timerStore._perPage"
    :total-pages="totalPages"
    :total-items="timer.localRecords.length"
    :per-page-list="[6]"
    hide-last-first
    hide-per-page
    total-label="Sessões"
    @update:page="(value) => (timer.page = parseInt(value))"
    @update:perPage="(value) => (timerStore._perPage = parseInt(value))"
  />

  <Dialog v-bind:open="modal.open" @update:open="!$event && closeModal()">
    <DialogContent @interact-outside="$event.preventDefault()">
      <DialogHeader>
        <DialogTitle> {{ _$t("task") }} </DialogTitle>

        <DialogDescription>
          {{ editRecordObject?.code }}
        </DialogDescription>
      </DialogHeader>

      <RecordFormCreateAndUpdate
        :edit-object="editRecordObject"
        @close="closeModal"
      />
    </DialogContent>
  </Dialog>

  <GModalConfirm
    v-model:open="confirmDelete.open"
    :title="_$t('confirmDeleteLocalRecordMessage')"
    :description="_$t('warningLostTime')"
    @confirm="deleteAction"
    @cancel="closeConfirmDeleteModal"
  />
</template>
