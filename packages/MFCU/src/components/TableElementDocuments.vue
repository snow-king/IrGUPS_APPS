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
      {{ document.fullName }}
    </td>
    <td class="py-4 px-6">
      {{ document.date_create}}
    </td>
    <td class="py-4 px-6">
      {{ document.status }}
    </td>
    <td class="py-4 px-6">
      {{ document.docType }}
    </td>
    <td class="py-4 px-6">
      {{ document.department }}
    </td>
    <td class="py-4 px-6">
      <button class="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-8">
        внести изменения
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import {DocumentDto} from '../../../_shared/DTO'
import {PropType} from "vue";
const props = defineProps({
  index: {type: Number, required: true},
  document: { type: Object as PropType<DocumentDto>, required: true}
})
</script>

<style scoped>

</style>