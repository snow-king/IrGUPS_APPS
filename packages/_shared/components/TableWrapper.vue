<template>
  <div
    class="overflow-x-auto relative shadow-md my-4 mb-20"
    :class="[roundedTop ? 'rounded-lg' : 'rounded-b-lg']"
  >
    <table
      class="w-full text-sm text-left text-gray-700 dark:text-gray-400 border-collapse overflow-hidden"
    >
      <thead
        class="text-xs text-gray-600 uppercase font-normal bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6" v-if="enumerable">№</th>
          <th
            scope="col"
            class="py-3 px-6"
            v-for="column in columns"
            :key="column"
          >
            {{ column }}
          </th>
          <th class="py-3 px-6" v-if="emptySlot">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  columns: { type: Object as PropType<Array<string>>, required: true },
  enumerable: { type: Boolean, default: false },
  emptySlot: { type: Boolean, default: false },
  roundedTop: { type: Boolean, default: true },
});
</script>

<style scoped></style>
