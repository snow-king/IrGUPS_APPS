<template>
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-gray-800 dark:text-white text-center"
      >
        Введите код с SMS
      </h1>
      <div>
        <input
          type="text"
          name="patronymic"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          placeholder="K2AS2"
          v-model="code"
          required
        />
      </div>
      <div class="flex">
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Не пришло ?
          <a
            href="#"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >переотправить</a
          >
          /
          <a
            href="#"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            @click="emits('return')"
          >
            изменить данные
          </a>
        </p>
      </div>
      <button
        type="button"
        @keyup.enter="codeConfirm"
        class="w-full bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        @click="codeConfirm"
      >
        Подтвердить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {confirm} from "../services";
import {ref} from "vue";

const code = ref<string>("");
const props = defineProps({
  user: {
    type: Number,
    default: Number,
  },
});
const emits = defineEmits(["return", "confirmed"]);
const codeConfirm = () => {
  confirm(props.user, code.value);
  emits("confirmed");
  emits("return");
};
</script>

<style scoped></style>
