<template>
  <Transition appear name="slide-dropdown">
    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        class="py-4 px-6 font-normal text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td class="py-4 px-6 text-yellow">
        {{ order.num }}
      </td>
      <td class="py-4 px-6">
        {{ order.date }}
      </td>
      <td class="py-4 px-6">
        {{ order.name }}
      </td>
      <td class="py-4 px-6 text-right">
        <button
          class="bg-yellow-300 rounded-l-md text-white p-2 font-medium hover:bg-yellow-400 shadow-md"
          disabled
        >
          Просмотр Приказа
        </button>
        <button
          class="bg-yellow-300 rounded-r-md text-white p-2 font-medium hover:bg-yellow-400 shadow-md"
          disabled
        >
          Выписка из приказа
        </button>
      </td>
    </tr>
  </Transition>
</template>

<script setup lang="ts">
import {PropType, ref} from "vue";
import {Order} from "../../../../_shared/DTO";

const success = ref("text-primary-500");
const warning = ref("text-amber-500");
const props = defineProps({
  order: {
    type: Object as PropType<Order>,
    required: true,
  },
  status: Number,
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
