<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  name: "record",
});
</script>

<template>
  <NuxtLayout name="panel">
    <TimeRecordPageBody
      #default="{
        actualTimeRecordId,
        updatedOn,
        clearUpdatedOn,
        refreshPeriodCallback,
        timeRecord,
      }"
    >
      <ClientOnly>
        <HistoryDayList
          ref="historyTp"
          v-if="actualTimeRecordId"
          :time-record-id="actualTimeRecordId"
          :time-record="timeRecord"
          :callback="refreshPeriodCallback"
          :updated-on="updatedOn"
          :clear-updated-on="clearUpdatedOn"
        />
      </ClientOnly>
    </TimeRecordPageBody>
  </NuxtLayout>
</template>

<style></style>
