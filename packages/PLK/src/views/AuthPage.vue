<template>
  <section class="bg-gray-50 dark:bg-gray-900 min-h-screen min-w-screen">
    <div
      class="flex flex-col items-center justify-center px-6 py-10 mx-auto lg:py-0"
    >
      <img
        class="w-96 pb-5 pt-20 mr-2"
        src="https://www.irgups.ru/images/logotip.svg"
        alt="logo"
      />
      <LoginForm
        v-if="!confirm"
        v-on:toggle="toggleRegister = !toggleRegister"
      />
      <ConfirmPhone
        v-if="confirm"
        @return="confirm = !confirm"
        :user="user"
        @confirmed="show = true"
      />
      <Modal :show="toggleRegister" @close="toggleRegister = false">
        <RegisterForm
          v-if="toggleRegister"
          @close="toggleRegister = false"
          @created="(n) => toConfirm(n)"
        />
      </Modal>
      <transition name="slide-dropdown" appear>
        <Alert
          type="success"
          closable
          class="static mt-10 lg:w-1/4 w-1/2"
          @click="show = false"
          v-if="show"
          >Пользователь зарегистрирован</Alert
        >
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import Modal from "../components/ModalWrapper.vue";
import { Alert } from "flowbite-vue";
import ConfirmPhone from "../components/ConfirmPhone.vue";

const toggleRegister = ref(false);
const confirm = ref<boolean>(false);
const user = ref<number>();
const show = ref<boolean>(false);
const toConfirm = (n: number) => {
  user.value = n;
  confirm.value = !confirm.value;
};
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
