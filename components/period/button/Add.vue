<script lang="ts" setup>
import { CirclePlus } from "lucide-vue-next";

const props = defineProps<{
  recordId: number;
}>();

const emit = defineEmits<{
  open: [value: number];
}>();

const clickAction = () => {
  if (!props.recordId) return;
  emit("open", props.recordId);
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
