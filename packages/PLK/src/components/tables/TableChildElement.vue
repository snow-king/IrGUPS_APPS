<template>
  <Transition appear name="slide-dropdown">
    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        class="py-4 px-6 font-normal text-gray-900 whitespace-nowrap dark:text-white"
      >
        {{ `${child?.name1} ${child?.name2} ${child?.name3}` }}
      </th>
      <td class="py-4 px-6" :class="[status ? success : warning]">
        {{ status ? "Подтверждено" : "не подтверждено" }}
      </td>
      <td class="py-4 px-6">
        {{ child?.token }}
      </td>
      <td class="py-4 px-6 text-right">
        <router-link
          v-if="status"
          :to="{ name: 'Child', params: { id } }"
          class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >Подробнее
        </router-link>
        <div
          v-else
          class="font-medium text-gray-700 dark:text-primary-500 hover:underline cursor-pointer cursor-help"
          title="Cтатус родителя не подтверждён"
        >
          Подробнее
        </div>
      </td>
    </tr>
  </Transition>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { Person } from "../../../../_shared/DTO";

const success = ref("text-primary-500");
const warning = ref("text-amber-500");
const props = defineProps({
  child: { type: Object as PropType<Person>, required: true },
  status: Number,
});
const id = ref(props.child.id);
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
