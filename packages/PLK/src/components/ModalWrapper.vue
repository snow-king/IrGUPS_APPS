<template>
  <Transition
    enter-class="opacity-0"
    enter-active-class="ease-out transition-medium"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-active-class="ease-out transition-medium"
    leave-to-class="opacity-0"
  >
    <div
      v-show="show"
      class="z-30 fixed inset-0 transition-opacity"
      @click="$emit('close')"
    >
      <div class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
    </div>
  </Transition>
  <Transition name="bounce">
    <div
      v-show="show"
      class="fixed inset-0 w-full my-2 md:pt-10 md:flex items-center justify-center z-50 0 overflow-visible overflow-y-auto"
    >
      <div
        class="relative w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 opacity-1 rounded-md"
      >
        <button
          aria-label="close"
          class="absolute top-0 right-0 text-xl text-gray py-4 mx-4"
          @click="$emit('close')"
        >
          <cross />
        </button>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import Cross from "./svg/CrossSVG.vue";

const props = defineProps({
  show: Boolean,
  title: String,
});
const emits = defineEmits(["close"]);
const hide = () => {
  emits("close");
};
watch(
  () => props.show,
  () => {
    console.log(props.show ? "hidden" : "auto");
    document.body.style.overflow = props.show ? "hidden" : "auto";
  }
);
</script>

<style>
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
