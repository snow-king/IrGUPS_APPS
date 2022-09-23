<template>
  <PasswordProgressBar
    :value="score"
    :max="descriptions.length"
    :color="description.color"
  />
  <p class="absolute mt-1 pb-4 text-sm">
    {{ description.label }}
  </p>
</template>

<script setup lang="ts">
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";
import zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
import zxcvbnEnPackage from "@zxcvbn-ts/language-en";
import { computed, watch } from "vue";
import PasswordProgressBar from "./PasswordProgressBar.vue";

const emits = defineEmits(["passed", "failed"]);
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
const descriptions = computed(() => [
  {
    color: "bg-red-600",
    label: "пароль не подходит",
  },
  { color: "bg-red-300", label: "пароль не подходит" },
  { color: "bg-yellow-400", label: "слабая надёжность" },
  { color: "bg-green-200", label: "средняя надёжность" },
  {
    color: "bg-green-400",
    label: "идеалньо!",
  },
]);

const description = computed(() =>
  props.text && props.text.length > 0
    ? descriptions.value[score.value - 1]
    : {
        color: "bg-transparent",
        label: "Начните вводить свой пароль",
      }
);

const score = computed(() => {
  const hasValue = props.text && props.text.length > 0;
  if (!hasValue) {
    return 0;
  }

  return zxcvbn(props.text).score + 1;
});

const isPasswordStrong = computed(() => score.value >= 4);

watch(isPasswordStrong, (value) => {
  value ? emits("passed") : emits("failed");
});

const options = {
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  translations: zxcvbnEnPackage.translations,
};

zxcvbnOptions.setOptions(options);
</script>

<style scoped></style>
