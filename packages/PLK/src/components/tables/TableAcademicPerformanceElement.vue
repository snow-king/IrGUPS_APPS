<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ index + 1 }}
    </th>
    <td class="py-4 px-6">
      {{ mark.exam }}
    </td>
    <td class="py-4 px-6 text-left">
      {{ mark.type }}
    </td>
    <td class="py-4 px-6 text-left">
      {{ mark.fio }}
    </td>
    <td class="py-4 px-6 text-left">
      {{ mark.mark }}
    </td>
    <td class="py-4 px-6 text-left">
      {{ `${Math.trunc(mark.h_all)}/${Math.trunc(mark.h_zet)}` }}
    </td>
    <td class="py-4 px-6 text-left">
      {{ mark.date }}
    </td>
  </tr>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Mark} from "../../../../_shared/DTO";

const props = defineProps({
  mark: {
    type: Object as PropType<Mark>,
    required: true,
  },
  index: { type: Number, required: true },
});
</script>

<style scoped></style>
