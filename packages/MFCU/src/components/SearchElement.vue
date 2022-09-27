<template>
  <div class="flex-col">
    <form @submit.prevent="search">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >Поиск</label
      >
      <div class="relative">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-primary-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          v-model="token"
          type="search"
          id="default-search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Введите токен ребёнка"
          required
        />
        <button
          type="button"
          @click="search"
          class="flex justify-center text-white absolute right-2.5 bottom-2.5 bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3.5 w-20 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <Spinner v-if="searchFlag" color="green" size="5" class="mx-2.5" />
          <div v-else>Поиск</div>
        </button>
      </div>
      <transition-group name="slide-dropdown" appear>
        <Alert type="warning" class="mt-2 mx-4" v-if="searchResult"
          >Пользователь не найден</Alert
        >
        <Alert type="success" class="mt-2 mx-4" v-if="childAdded"
          >Пользователь прикреплён</Alert
        >
      </transition-group>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Alert, Spinner } from "flowbite-vue";
import { ref, watch } from "vue";
import { getAccess } from "../services";
import { useUserStore } from "../stores/useUserStore";

const token = ref("");
const searchResult = ref(false);
const childAdded = ref(false);
const searchFlag = ref(false);
const emits = defineEmits(["addChild"]);
const search = async () => {
  let response = await getAccess(token.value, useUserStore().user);
  if (response === 404) {
    searchResult.value = true;
  } else {
    childAdded.value = true;
    emits("addChild");
  }
};
watch(token, () => {
  if (childAdded.value || searchResult) {
    searchResult.value = false;
    childAdded.value = false;
  }
});
</script>

<style scoped>
.slide-dropdown-enter-active {
  animation: translateX 0.5s;
}

.slide-dropdown-leave-active {
  animation: translateX 0.5s reverse;
}

@keyframes translateX {
  0% {
    opacity: 0;
    border: 0;
    transform: translateY(60px);
  }

  80% {
    transform: translateY(-1px);
    border: 0;
  }

  100% {
    opacity: 1;
    border: 0;
    transform: translateY(0px);
  }
}
</style>
