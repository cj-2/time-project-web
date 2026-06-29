<script lang="ts" setup>
import { CirclePlus } from "lucide-vue-next";

const props = defineProps<{
  timeRecordId: number;
}>();

const emit = defineEmits<{
  open: [value: number];
}>();

const clickAction = () => {
  if (!props.timeRecordId) return;
  emit("open", props.timeRecordId);
};
</script>

<template>
  <Button
    variant="outline"
    title="Ideal para registrar seu tempo de forma exata, considerando a hora de início e fim da sua tarefa."
    @click="clickAction"
  >
    <CirclePlus />
    {{ "Registrar Período" }}
  </Button>
</template>
