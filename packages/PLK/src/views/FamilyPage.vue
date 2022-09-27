<template>
  <div>
    <div class="mt-20 mx-1 md:mx-20 md:p-10 bg-gray-50 rounded-md">
      <SearchElement @addChild="addFlag = !addFlag" />
      <div class="flex-col md: px-10">
        <div
          class="flex text-xl font-medium whitespace-nowrap py-5 dark:text-white"
        >
          Текущие обучающиеся:
        </div>
        <TableChilds v-model:updateFlag="addFlag" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import SearchElement from "../components/SearchElement.vue";
import TableChilds from "../components/tables/TableChilds.vue";
import {useStudentStore} from "../stores/useStudentStore";

useStudentStore().resetStudent();
const addFlag = ref(false);
</script>

<style scoped></style>
