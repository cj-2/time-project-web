<script lang="ts" setup>
import { _$t } from "~/utils/i18n";

defineProps<{
  record: RecordMap;
}>();
</script>

<template>
  <Card>
    <CardContent>
      <p class="text-lg mt-6 pb-2">
        <span v-if="record.description" class="font-normal">
          {{ record.description }}
        </span>
        <span v-else class="font-normal">
          {{ _$t("emptyRecordDescription") }}
        </span>
      </p>

      <p v-if="record.categoryName" class="text-lg font-medium">
        {{ _$t("category") }}:
        <span class="font-normal">{{ record.categoryName }}</span>
      </p>

      <p v-if="record.externalLink" class="text-lg font-medium flex gap-2">
        {{ _$t("externalLink") }}:

        <span
          class="max-w-44 overflow-hidden inline-block overflow-ellipsis whitespace-nowrap"
        >
          <a
            :href="record.externalLink"
            target="_blank"
            class="underline hover:text-primary font-normal"
          >
            {{ record.externalLink }}
          </a>
        </span>
      </p>
    </CardContent>
  </Card>
</template>
