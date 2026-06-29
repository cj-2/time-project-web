<script lang="ts" setup>
defineProps<{
  periods: PeriodMap[] | PeriodLocal[];
  label: string;
}>();
</script>

<template>
  <section v-if="periods.length === 0">
    <span>{{ label }}</span>
  </section>

  <section v-else class="flex">
    <HoverCard :open-delay="0" :close-delay="0">
      <HoverCardTrigger>
        {{ label }}
      </HoverCardTrigger>

      <HoverCardContent align="center">
        <div class="flex gap-2">
          <Badge
            v-for="period in periods"
            :title="formatPeriodPopper(period).date"
            variant="outline"
          >
            {{ formatPeriodPopper(period).formatted }}
          </Badge>
        </div>
      </HoverCardContent>
    </HoverCard>
  </section>
</template>
