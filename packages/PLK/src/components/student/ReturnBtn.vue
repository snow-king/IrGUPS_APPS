<template>
  <router-link
    :to="{ name: 'Child', params: { id } }"
    class="bg-primary-600 py-2 px-4 font-semibold hover:bg-primary-700 h-11 rounded-md text-white shadow-md flex w-20"
  >
    Назад
  </router-link>
</template>

<script setup lang="ts">
import {useStudentStore} from "../../stores/useStudentStore";

const id = useStudentStore().id;
</script>

<style scoped></style>
