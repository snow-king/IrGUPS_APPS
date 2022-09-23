<template>
  <Transition appear name="slide-dropdown">
    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 animate-pulse"
    >
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
      </th>
      <td class="py-4 px-6" v-for="el in column - 1" :key="el">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
      </td>
      <td class="py-4 px-6">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
      </td>

      <td class="py-4 px-6 text-right">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
      </td>
    </tr>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  column: {
    type: Number,
    required: true,
  },
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
