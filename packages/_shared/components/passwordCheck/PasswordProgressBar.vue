<template>
  <div class="flex h-2 border border-grey-30 rounded shadow-md my-2">
    <div
      :style="{ width: `${width}%` }"
      :class="[color]"
      class="progress-bar flex h-full rounded-md"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  max: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "bg-transparent",
  },
});
const width = computed(() => (props.value / props.max) * 100);
</script>

<style scoped>
.progress-bar {
  transition: 0.5s ease-in-out;
}
</style>
