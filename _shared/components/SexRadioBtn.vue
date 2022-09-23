<template>
  <div class="">
    <h3 class="mb-4 font-semibold text-gray-500 dark:text-white">Пол</h3>
    <ul
      class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <li
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center pl-3">
          <input
            id="horizontal-list-radio-license"
            type="radio"
            name="list-radio"
            value="1"
            v-model="sex"
            class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="horizontal-list-radio-license"
            class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >Мужской
          </label>
        </div>
      </li>
      <li
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center pl-3">
          <input
            id="horizontal-list-radio-id"
            type="radio"
            name="list-radio"
            value="2"
            v-model="sex"
            class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="horizontal-list-radio-id"
            class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >Женский</label
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  enterElement: { type: Number, required: true },
});
const sex = ref<number>();
// eslint-disable-next-line vue/no-setup-props-destructure
sex.value = props.enterElement;
const emits = defineEmits(["checked"]);
watch(
  () => sex.value,
  () => {
    emits("checked", sex.value);
  }
);
</script>

<style scoped></style>
