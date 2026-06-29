<script lang="ts" setup>
import { Edit } from "lucide-vue-next";
import { _$t } from "~/utils/i18n";
const editTimeRecordObject = ref<TimeRecordForm>();

const props = defineProps<{
  timeRecord: TimeRecordMap;
  callback: (code?: string) => Promise<void>;
}>();

const modal = reactive({
  updateTimeRecord: {
    open: false,
  },
});

const openTimeRecordModal = () => {
  modal.updateTimeRecord.open = true;
  const tr = props.timeRecord;

  if (!tr) return;

  editTimeRecordObject.value = {
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

const closeTimeRecordModal = () => {
  modal.updateTimeRecord.open = false;
  editTimeRecordObject.value = undefined;
};
</script>

<template>
  <Button @click="openTimeRecordModal">
    <Edit />
    {{ _$t("edit") }}
  </Button>

  <Dialog
    v-bind:open="modal.updateTimeRecord.open"
    @update:open="!$event && closeTimeRecordModal()"
  >
    <DialogContent @interact-outside="$event.preventDefault()">
      <DialogHeader>
        <DialogTitle>
          <span class="mr-2"> {{ _$t("task") }} </span>
          <Badge v-if="editTimeRecordObject?.code" variant="outline">
            {{ editTimeRecordObject?.code }}
          </Badge>
        </DialogTitle>

        <DialogDescription>
          {{ _$t("taskModalDescription") }}
        </DialogDescription>
      </DialogHeader>

      <TimeRecordFormCreateAndUpdate
        :edit-object="editTimeRecordObject"
        hide-time-periods
        @close="closeTimeRecordModal"
      />
    </DialogContent>
  </Dialog>
</template>
