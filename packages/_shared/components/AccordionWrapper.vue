<template>
  <TransitionGroup
    appear
    name="slide-dropdown"
    :duration="500"
    tag="div"
    class=""
  >
    <div
      class="flex-col bg-white md:mx-20 mx-2 mt-4 rounded-md shadow-lg transition duration-500 ease-in-out"
    >
      <div class="flex justify-between cursor-pointer" @click="open">
        <div class="font-semibold py-2 pl-4">
          {{ text }}
        </div>
        <div class="py-2">
          <img
            src="../../PLK/src/assets/icons-expand.svg "
            class="mr-3 h-7 transition duration-500 ease-in-out"
            v-if="ready"
            alt="UserAvatar"
            :class="{ 'rotate-180': rotate }"
          />
          <Spinner
            v-else
            color="green"
            size="6"
            class="mx-2 my-1 mr-3.5"
            :class="{ hidden: download }"
          />
        </div>
      </div>
      <Transition appear name="slide-dropdown" :duration="500">
        <div v-show="rotate" class="">
          <slot></slot>
        </div>
      </Transition>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Spinner } from "flowbite-vue";

const props = defineProps({
  text: String,
  ready: {
    type: Boolean,
    default: true,
  },
});

const download = ref(false);
const rotate = ref(false);
const open = () => {
  if (props.ready) {
    rotate.value = !rotate.value;
  }
};
onMounted(() => {
  setTimeout(() => {
    if (!props.ready) {
      download.value = true;
    }
  }, 5000);
});
</script>

<style scoped>
.slide-dropdown-enter-active {
  animation: translateY 0.5s;
}

.slide-dropdown-leave-active {
  animation: translateY 0.5s reverse;
}

@keyframes translateY {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }

  80% {
    opacity: 0.8;
    transform: translateY(5px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
