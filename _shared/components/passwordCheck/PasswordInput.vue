<template>
  <div class="w-full">
    <label
      for="password"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Пароль</label
    >
    <div class="flex">
      <popper class="w-full p-0 m-0" arrow>
        <input
          :type="show ? 'password' : 'text'"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-l-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          required
          v-model="password"
        />
        <template #content>
          <div class="mx-2">
            <p>Пароль должен содержать:</p>
            <ul class="list-disc pl-4">
              <li>
                <div class="flex">
                  <p>8-12 знаков&#160;</p>

                  <p class="text-primary-600" v-show="check.lengthPas">
                    &#10003;
                  </p>
                </div>
              </li>
              <li>
                <div class="flex">
                  <p>Прописные латинские буквы&#160;</p>
                  <p class="text-primary-600" v-show="check.uppercase">
                    &#10003;
                  </p>
                </div>
              </li>
              <li>
                <div class="flex">
                  <p>Строчные латинские буквы&#160;</p>
                  <p class="text-primary-600" v-show="check.lowercase">
                    &#10003;
                  </p>
                </div>
              </li>
              <li>
                <div class="flex">
                  <p>Цифры&#160;</p>
                  <p class="text-primary-600" v-show="check.number">&#10003;</p>
                </div>
              </li>
              <li>
                <div class="flex">
                  <p>Символы @ # $ % ^ & / * ) ( + = -&#160;</p>
                  <p class="text-primary-600" v-show="check.symbol">&#10003;</p>
                </div>
              </li>
              <li>
                <p>Не должно быть пробелов, точек и запятых&#160;</p>
                <p class="text-primary-600" v-show="check.punctuation">
                  &#10003;
                </p>
              </li>
            </ul>
          </div>
        </template>
      </popper>
      <div
        class="flex-col p-1.5 pt-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-r-lg"
      >
        <eye @click="show = !show" />
      </div>
    </div>
    <PasswordScore
      :text="password"
      @passed="isPasswordStrong = true"
      @failed="isPasswordStrong = false"
      class="pb-10"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import PasswordScore from "./PasswordScore.vue";
import Eye from "../../../PLK/src/components/svg/EyeSVG.vue";
const show = ref<boolean>(false);
const props = defineProps({
  password: {
    type: String,
    required: true,
  },
});
const check = ref({
  lengthPas: false,
  uppercase: false,
  lowercase: false,
  number: false,
  symbol: false,
  punctuation: false,
});

watch(
  () => props.password,
  () => {
    check.value.lengthPas = !!(
      password.value.length >= 8 && password.value.length << 12
    );
    check.value.uppercase = !/^[A-Z\d]*$/.test(props.password);
    check.value.lowercase = !/^[a-z\d]*$/.test(props.password);
    check.value.number = /[0-9]/.test(props.password);
    check.value.symbol = /[@#$%^&/*)(+=-]/.test(props.password);
    check.value.punctuation = !/[\s.,]/.test(props.password);
  }
);

const emit = defineEmits(["update:password", "passed", "failed"]);
const password = computed({
  get: () => props.password,
  set: (value) => emit("update:password", value),
});
const isPasswordStrong = ref(false);
</script>

<style scoped></style>
