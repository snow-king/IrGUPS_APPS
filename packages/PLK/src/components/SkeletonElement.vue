<template>
  <div>
    <div
        class="bg-gray-200 rounded-md dark:bg-gray-700 animate-pulse"
        v-show="!checkElement"
        :class="[width, height]"
    ></div>
    <Transition name="fade" :duration="500">
      <div v-if="checkElement">
        <div>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(["width", "height", "checkElement"]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  animation: fade 0.7s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  animation: fade 0.7s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    border: 0;
  }

  50% {
    opacity: 0.5;
    border: 0;
  }

  100% {
    opacity: 1;
    border: 0;
  }
}
</style>
