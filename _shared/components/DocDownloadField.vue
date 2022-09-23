<template>
  <div
    class="flex text-xl font-semibold whitespace-nowrap py-4 dark:text-white text-gray-800"
  >
    {{ text }}
  </div>
  <div class="flex justify-center items-center w-full" v-if="!showFile">
    <label
      for="dropzone-file"
      class="flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div class="flex flex-col justify-center items-center pt-5 pb-6">
        <svg
          aria-hidden="true"
          class="mb-3 w-10 h-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span class="font-semibold">Кликнете для загрузки</span> или
          перетащите файл
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          <slot> </slot>
        </p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        class="hidden"
        ref="file"
        v-on:change="handleFileUpload()"
      />
    </label>
  </div>

  <div v-else>
    <DocElement :doc-name="fileName" @deleteDocument="deleteDoc" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DocElement from "./DocElement.vue";
const file = ref();
const props = defineProps({
  text: String,
});
const emits = defineEmits(["uploadFile", "deleteDocument"]);
const fileName = ref<string>("");
const showFile = ref(false);
const deleteDoc = () => {
  emits("deleteDocument");
  showFile.value = false;
  emits("uploadFile", null);
};

const handleFileUpload = async () => {
  fileName.value = file.value.files[0].name;
  emits("uploadFile", file.value.files[0]);
  showFile.value = true;
};
</script>

<style scoped></style>
