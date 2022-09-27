<template>
  <div class="z-50">
    <label class="text-sm text-gray-500 dark:text-gray-400 pt-3 mr-3">{{
      text
    }}</label>
    <datepicker
      v-model="picked"
      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-full z-50"
    />
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
