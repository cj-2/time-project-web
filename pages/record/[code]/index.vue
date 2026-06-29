<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  name: "record",
});
</script>

<template>
  <NuxtLayout name="panel">
    <RecordPageBody
      #default="{
        actualRecordId,
        updatedOn,
        clearUpdatedOn,
        refreshPeriodCallback,
        record,
      }"
    >
      <ClientOnly>
        <HistoryDayList
          ref="historyTp"
          v-if="actualRecordId"
          :record-id="actualRecordId"
          :record="record"
          :callback="refreshPeriodCallback"
          :updated-on="updatedOn"
          :clear-updated-on="clearUpdatedOn"
        />
      </ClientOnly>
    </RecordPageBody>
  </NuxtLayout>
</template>

<style></style>
