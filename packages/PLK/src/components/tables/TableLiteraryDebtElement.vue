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
      {{ dept.name }}
    </td>
    <td class="py-4 px-6">
      {{ dept.date_give }}
    </td>
  </tr>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Book} from "../../../../_shared/DTO";

const props = defineProps({
  index: { type: Number, required: true },
  dept: { type: Object as PropType<Book>, required: true },
});
</script>

<style scoped></style>
