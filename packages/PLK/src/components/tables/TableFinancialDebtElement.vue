<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ dept.num }}
    </th>
    <td class="py-4 px-6">
      {{ dept.date_of }}
    </td>
    <td class="py-4 px-6 text-left">
      {{ dept.doc_type }}
    </td>
    <td class="py-4 px-6 text-left">
      {{ dept.dept ? `${dept.dept.debt} руб` : "----" }}
    </td>
    <td class="py-4 px-6 text-left">
      {{ dept.dept ? `${dept.dept.date_update}` : "----" }}
    </td>
    <td class="py-4 px-6 text-left">----</td>
    <td class="py-4 px-6 text-left">?</td>
  </tr>
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import {Dogovor} from "../../../../_shared/DTO";

const props = defineProps({
  dept: { type: Object as PropType<Dogovor>, required: true },
});
</script>

<style scoped></style>
