<template>
  <div class="">
    <button class="flex " @click="show= !show">
      {{ text }}
      <div class="py-1 pl-2.5 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" fill="none" viewBox="0 0 15 10"
             :class="{'rotate-180': show}" class="transition duration-500 ease-in-out">
          <path fill="#373737"
                d="m14.506 2.544-6.3 6.319a.654.654 0 0 1-.244.159.824.824 0 0 1-.28.047.824.824 0 0 1-.282-.047.654.654 0 0 1-.244-.16L.837 2.545a.89.89 0 0 1-.262-.656.92.92 0 0 1 .281-.675.9.9 0 0 1 .656-.282.9.9 0 0 1 .657.282L7.68 6.725l5.513-5.512A.879.879 0 0 1 13.84.95a.91.91 0 0 1 .666.281.9.9 0 0 1 .281.657.9.9 0 0 1-.28.656Z"/>
        </svg>
      </div>

    </button>
    <Transition appear name="slide-dropdown">
    <div
        class="z-10 w-44 bg-white rounded mt-5  divide-y divide-gray-100 shadow-md dark:bg-gray-700 absolute "
         v-if="show">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200 ">
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ЛКО</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ЛКС</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ЛКР</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ЛКФР</a>
          </li>
        </ul>
    </div>
    </transition>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  text: {type: String, required: true},
  btnStyle: {
    type: Boolean,
    default: false
  }
})
const show = ref<boolean>(false)
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