<template>
  <div
    class="flex justify-between px-2 py-0.5 transition duration-150 border-b border-transparent hover:border-primary-400 cursor-default"
  >
    <div class="font-semibold">
      {{ theme }}
    </div>
    <div class="text-right">
      <SkeletonElement :checkElement="value" :width="'h-4'" :height="'w-60'">
        {{ value }}
      </SkeletonElement>
    </div>
  </div>
</template>

<script setup lang="ts">
import SkeletonElement from "../../../../_shared/components/SkeletonElement.vue";

const props = defineProps({
  theme: String,
  value: String,
});
</script>

<style scoped></style>
