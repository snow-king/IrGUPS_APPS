<template>
  <div class="w-full">
    <label class="text-sm text-gray-500 dark:text-gray-400 pt-3 ml-1">{{
      text
    }}</label>
    <div class="flex text-gray-700">
      <input
        v-maska="{
          mask: 'D#/M#/Y###',
          tokens: {
            D: { pattern: /[0-3]/ },
            M: { pattern: /[0-1]/ },
            Y: { pattern: /[1-2]/ },
          },
        }"
        type="text"
        class="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-primary-600"
        placeholder="13/12/2000"
        v-model="picked"
        required
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits(["update:enterElement"]);

const props = defineProps({
  text: String,
  enterElement: {
    type: String,
    required: false,
    default: "",
  },
});
const picked = ref(
  new Date(props.enterElement).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
);
watch(picked, () => {
  emit(
    "update:enterElement",
    convertDigitIn(
      new Date(picked.value).toLocaleDateString("en-US", {
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
