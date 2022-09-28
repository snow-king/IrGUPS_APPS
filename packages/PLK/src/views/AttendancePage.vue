<template>
  <div class="mt-20 md:mx-20 md:p-10 bg-gray-50 rounded-md">
    <div class="flex px-10">
      <ReturnBtn />
      <div class="flex text-xl font-medium break-all pl-4 p-1 dark:text-white">
        Данные пропускной системы
      </div>
    </div>
    <Alert type="info" closable class="mx-10 my-5 font-normal"
      >Показываются посещаемость в текущем месяце c 1 числа.</Alert
    >
  </div>
</template>

<script setup lang="ts">
import { Alert } from "flowbite-vue";
import ReturnBtn from "../components/student/ReturnBtn.vue";
</script>

<style scoped></style>
