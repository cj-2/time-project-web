<script lang="ts" setup>
import { Edit } from "lucide-vue-next";
import { _$t } from "~/utils/i18n";
const editRecordObject = ref<RecordForm>();

const props = defineProps<{
  record: RecordMap;
  callback: (code?: string) => Promise<void>;
}>();

const modal = reactive({
  updateRecord: {
    open: false,
  },
});

const openRecordModal = () => {
  modal.updateRecord.open = true;
  const tr = props.record;

  if (!tr) return;

  editRecordObject.value = {
    id: tr.recordId,
    title: tr.name,
    description: tr.description,
    category: tr.categoryName || "",
    code: tr.code || "",
    externalLink: tr.externalLink || "",
    periods: [],
    callback: props.callback,
  };
};

const closeRecordModal = () => {
  modal.updateRecord.open = false;
  editRecordObject.value = undefined;
};
</script>

<template>
  <Button @click="openRecordModal">
    <Edit />
    {{ _$t("edit") }}
  </Button>

  <Dialog
    v-bind:open="modal.updateRecord.open"
    @update:open="!$event && closeRecordModal()"
  >
    <DialogContent @interact-outside="$event.preventDefault()">
      <DialogHeader>
        <DialogTitle>
          <span class="mr-2"> {{ _$t("task") }} </span>
          <Badge v-if="editRecordObject?.code" variant="outline">
            {{ editRecordObject?.code }}
          </Badge>
        </DialogTitle>

        <DialogDescription>
          {{ _$t("taskModalDescription") }}
        </DialogDescription>
      </DialogHeader>

      <RecordFormCreateAndUpdate
        :edit-object="editRecordObject"
        hide-time-periods
        @close="closeRecordModal"
      />
    </DialogContent>
  </Dialog>
</template>
