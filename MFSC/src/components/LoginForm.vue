<template>
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1
        class="text-xl font-semibold leading-tight tracking-tight text-gray-900 text-center md:text-2xl dark:text-white"
      >
        МФЦУ ИрГУПС
      </h1>
      <form class="space-y-4 md:space-y-6" @submit.prevent="login">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Ваш email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            placeholder="name@company.com"
            required
            v-model="user.email"
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Пароль</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="user.password"
          />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 text-primary-600"
                required
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="text-gray-500 dark:text-gray-300"
                >Запомни меня</label
              >
            </div>
          </div>
          <a
            href="#"
            class="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500"
            >Забыли пароль?</a
          >
        </div>
        <button
          type="button"
          @keyup.enter="login"
          class="w-full bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          @click="login"
        >
          Войти
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import {UserLogin} from "../DTO";
import {useUserStore} from "../stores/useUserStore";

const emit = defineEmits(["toggle"]);
const user = ref<UserLogin>({
  email: "",
  password: "",
});
const userStore = useUserStore();
const router = useRouter();
const openRegister = () => {
  emit("toggle");
};
const login = async () => {
  await userStore.signing(user.value);
  if (userStore.token) {
    router.push({ name: "HomePage" });
  }
};
</script>

<style scoped></style>
