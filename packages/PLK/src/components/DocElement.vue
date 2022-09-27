<template>
  <Transition name="bounce" appear>
    <div
      class="flex-col p-2 w-40 border-2 m-4 rounded-md"
      @click="emits('delete')"
    >
      <button class="flex justify-end w-full" type="button">
        <cross />
      </button>
      <div class="flex justify-center">
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="60px"
          height="60px"
        >
          <path
            d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"
          />
        </svg>
      </div>
      <div class="text-center text-sm pt-2 font-medium break-words">
        {{ docName }}
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Cross from "./svg/CrossSVG.vue";

const emits = defineEmits(["delete"]);
const props = defineProps({
  docName: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    overflow: hidden;
    transform: scale(0);
  }
  50% {
    overflow: hidden;
    transform: scale(1.1);
  }
  100% {
    overflow: auto;
    transform: scale(1);
  }
}
</style>
