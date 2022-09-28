<template>
  <Transition appear name="slide-dropdown">
    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        class="py-4 px-6 font-normal text-gray-900 whitespace-nowrap dark:text-white"
      >
        {{ index + 1 }}
      </th>
      <td class="py-4 px-6">
        {{ uchplan.idx }}
      </td>
      <td class="py-4 px-6">
        {{ uchplan.exam.exam }}
      </td>
      <td class="py-4 px-6">
        {{ `${Math.trunc(uchplan.h_all)}/${Math.trunc(uchplan.h_zet)}` }}
      </td>
    </tr>
  </Transition>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Uchplan } from "../../../../_shared/DTO";

const props = defineProps({
  uchplan: {
    type: Object as PropType<Uchplan>,
    required: true,
  },
  index: { type: Number, required: true },
});
</script>

<style scoped>
.slide-dropdown-enter-active {
  animation: translateX 0.5s;
}

.slide-dropdown-leave-active {
  animation: translateX 0.5s reverse;
}

@keyframes translateX {
  0% {
    opacity: 0;
    border: 0;
    transform: translateY(60px);
  }

  80% {
    transform: translateY(-1px);
    border: 0;
  }

  100% {
    opacity: 1;
    border: 0;
    transform: translateY(0px);
  }
}
</style>
