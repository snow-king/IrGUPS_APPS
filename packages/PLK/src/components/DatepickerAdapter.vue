<template>
  <div class="w-full">
    <label class="text-sm text-gray-500 dark:text-gray-400 pt-3 ml-1">{{
        text
      }}</label>
    <div class="flex text-gray-700">
      <input
          type="text"
          class=" w-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-primary-600 "
          placeholder=" "
          v-model="picked"
          required
      />
      <p class=" pt-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 ">
        д.</p>
      <input
          type="text"
          class="w-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
          placeholder=" "
          v-model="picked"
          required
      />
      <p class="pt-2.5  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 ">
        м.</p>
      <input
          type="text"
          class="w-14 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 "
          placeholder=" "
          v-model="picked"
          required
      />
      <p class="pt-2.5  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 ">
        г.</p>
      <div
        class="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 "
    ></div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

const emit = defineEmits(["update:enterElement"]);

const props = defineProps({
  text: String,
  enterElement: {
    type: String,
    required: false,
    default: "",
  },
});
const picked = ref(new Date(props.enterElement));
watch(picked, () => {
  emit(
      "update:enterElement",
      convertDigitIn(
          picked.value.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
      )
  );
});

function convertDigitIn(str: string) {
  return str.split("/").reverse().join("/").replace(/-/g, "/");
}
</script>

<style scoped></style>
