<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link :to="{ name: 'ParentPage' }" class="flex items-center">
        <alone-logo class="h-6 sm:h-10 mr-3 hidden md:block" />
        <span
          class="self-center text-xl font-medium whitespace-nowrap dark:text-white text-gray-900"
          >Личный кабинет родителя</span
        >
      </router-link>
      <button
        type="button"
        class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
        @click="menu = !menu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="w-full md:block md:w-auto"
        id="navbar-solid-bg"
        :class="{ hidden: !menu }"
      >
        <ul
          class="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
        >
          <li>
            <router-link
              :to="{ name: 'ParentPage' }"
              :class="[route.path === '/parent' ? 'text-primary-700' : '']"
              class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:text-gray-700 md:hover:text-primary-700 md:p-0 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent"
            >
              Личные данные</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'FamilyPage' }"
              :class="[route.path === '/family' ? 'text-primary-700' : '']"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Обучающиеся</router-link
            >
          </li>
          <!--          <li>-->
          <!--            <a href="#"-->
          <!--               class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Документы</a>-->
          <!--          </li>-->
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              @click="exit"
              >Выход</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useUserStore } from "../stores/useUserStore";
import AloneLogo from "./svg/aloneLogo.vue";
import { ref } from "vue";
const exit = () => {
  useUserStore().exitSystem();
};
const menu = ref(false);
const route = useRoute();
</script>

<style scoped></style>
