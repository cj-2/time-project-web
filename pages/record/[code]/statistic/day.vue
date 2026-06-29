<script lang="ts" setup>
definePageMeta({ middleware: ["auth"], name: "record.statistic.day" });
useHead({ title: "Resumo Diário" });
</script>

<template>
  <NuxtLayout name="panel">
    <RecordPageBody
      #default="{ actualRecordId, updatedOn, clearUpdatedOn, record }"
    >
      <StatisticDay
        :record-id="actualRecordId"
        :record="record"
        :updated-on="updatedOn"
        :clear-updated-on="clearUpdatedOn"
      />
    </RecordPageBody>
  </NuxtLayout>
</template>
