<script lang="ts" setup>
import { Edit } from "lucide-vue-next";

const props = defineProps<{
  period: PeriodMap;
}>();

const emit = defineEmits<{
  open: [value: PeriodForm];
}>();

const editData = reactive<PeriodForm>({
  id: 0,
  recordId: 0,
  end: "",
  start: "",
  callback: () => {},
});

const clickAction = async () => {
  const tp = props.period;

  editData.id = tp.periodId;
  editData.start = tp.start;
  editData.end = tp.end;
  editData.recordId = tp.recordId;
  editData.callback = () => {};

  emit("open", editData);
};
</script>

<template>
  <Button variant="ghost" size="sm" @click="clickAction">
    <Edit />
    {{ _$t("edit") }}
  </Button>
</template>
