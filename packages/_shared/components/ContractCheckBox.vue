<template>
  <div class="flex items-center py-1">
    <input
      type="checkbox"
      value=""
      v-model="picked"
      required
      class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="link-checkbox"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      ><a
        href="#"
        class="text-primary-600 dark:text-primary-500 hover:underline"
        >{{ text }}</a
      >
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits(["checked"]);
const picked = ref(false);
const props = defineProps({
  text: String,
  enterElement: Number,
});
watch(picked, () => {
  console.log(picked.value ? 1 : null);
  emit("checked", picked.value ? 1 : null);
});
</script>

<style scoped></style>
