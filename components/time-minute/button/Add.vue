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
    variant="default"
    title="Ideal para pessoas que preferem focar longe dos computadores e celulares."
    @click="clickAction"
  >
    <CirclePlus />
    {{ "Registrar Minutos" }}
  </Button>
</template>
