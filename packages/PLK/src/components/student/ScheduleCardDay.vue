<template>
  <div>
    <div
      class="max-w-sm bg-white rounded-t-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 pb-4 m-3 border-dashed border-b-8 border-gray-300"
    >
      <div
        class="bg-primary-600 text-white font-bold flex justify-center rounded-t-md py-1 shadow-lg px-40"
      >
        <SkeletonElement check-element="day">
          {{ day?.day }}
        </SkeletonElement>
      </div>
      <div v-for="subjects in day?.subjects" :key="subjects.lec_id">
        <transition appear name="slide-dropdown">
          <div
            class="px-3 py-1 flex-col"
            v-if="checkWeek(subjects.lec_week) && checkGroup(subjects.subgroup)"
          >
            <div class="border-b-2 grid-cols-2 text-sm px-4">
              <div class="flex justify-center font-semibold">
                <div class="font-semibold text-center">
                  {{ subjects.exam.exam }}
                </div>
              </div>
              <hr class="border-gray-500 mx-8" />
              <div class="font-medium py-1 text-center">
                {{ subjects.lec_type.name }}
              </div>
              <div class="flex justify-between">
                <div class="font-semibold py-1">
                  {{ time[subjects.lec_id] }}
                </div>
                <div class="font-semibold py-1">
                  {{ subjects.auditorium.name }}
                </div>
              </div>
              <div class="font-medium py-1 text-center">
                {{
                  `${subjects.employ.name1}  ${subjects.employ.name2[0]}. ${subjects.employ.name3[0]}.`
                }}
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div v-if="day?.subjects.length === 0">
        <p class="text-center py-4"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {ScheduleDay, Times} from "../../../../_shared/DTO";
import SkeletonElement from "../../../../_shared/components/SkeletonElement.vue";

const time: Times = {
  1: "8:30-10:00",
  2: "10:10-11:40",
  3: "12:10-13:40",
  4: "13:50-15:20",
  5: "15:30-17:00",
  6: "17:10-18:40",
  7: "18:45-20:15",
  8: "20:20-21:50",
};
const props = defineProps({
  day: {
    type: Object as PropType<ScheduleDay>,
  },
  group: Number as PropType<1 | 2>,
  parity: { type: Boolean, required: true },
});
const checkWeek = (type: number) => {
  if (type === 1) return true;
  if (!props.parity) {
    return type === 2;
  } else {
    return type === 3;
  }
};
const checkGroup = (group: 0 | 1 | 2) => {
  if (group == 0) return true;
  else if (props?.group === 1) return group == 1;
  else return group == 2;
};
</script>

<style scoped>
.slide-dropdown-enter-active {
  animation: translateX 0.5s;
}

.slide-dropdown-leave-active {
  opacity: 0;
}

@keyframes translateX {
  0% {
    opacity: 0;
    border: 0;
    transform: translateX(60px);
  }

  80% {
    opacity: 0.8;
    transform: translateX(-1px);
    border: 0;
  }

  100% {
    opacity: 1;
    border: 0;
    transform: translateY(0px);
  }
}
</style>
