<template>
  <div class="p-1 sm:p-8">
    <h1
      class="text-lg text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
    >
      Форма регистрации родителя (законного представителя)
    </h1>
    <form class="space-y-4 md:space-y-6" @submit.prevent="uploadUser">
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Фамилия</label
        >
        <input
          type="text"
          name="lastName"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          placeholder="Фамилия"
          required
          v-model="user.lastName"
        />
      </div>
      <div>
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Имя</label
        >
        <input
          type="text"
          name="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          placeholder="Имя"
          required
          v-model="user.firstName"
        />
      </div>
      <div>
        <label
          for="patronymic"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Отчество</label
        >
        <input
          type="text"
          name="patronymic"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          placeholder="Отчество"
          required
          v-model="user.patronymic"
        />
      </div>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Ваш email</label
        >
        <input
          type="email"
          name="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          placeholder="name@company.com"
          required
          v-model="user.email"
        />
      </div>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Ваш номер телефона</label
        >
        <input
          type="tel"
          name="phone"
          pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          placeholder="88005553535"
          required
          v-model="user.phone"
        />
      </div>
      <div class="pb-4">
        <PasswordInput v-model:password="user.password" />
      </div>
      <div class="text-center text-sm text-primary-700">
        После регистрации/смены пароля вам придет смс и письмо на почту
      </div>
      <button
        type="submit"
        class="w-full bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Регистрация
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {UserRegister} from "../../../_shared/DTO";
import PasswordInput from "./passwordCheck/PasswordInput.vue";
import {register} from "../services";

const user = ref<UserRegister>({
  firstName: "",
  lastName: "",
  patronymic: "",
  email: "",
  password: "",
  phone: "",
});
const props = defineProps({
  isOpen: Boolean,
});

const emits = defineEmits(["close", "created"]);
const closeModal = () => {
  emits("close");
};
const uploadUser = async () => {
  let response = await register(user.value);
  emits("close");
  emits("created", response);
};
</script>

<style scoped></style>
