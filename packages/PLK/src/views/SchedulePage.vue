<template>
  <div
    class="mt-20 md:mx-20 md:p-10 bg-gray-50 rounded-md mb-28 cursor-default"
  >
    <div class="flex md:flex-row flex-col md:px-10 px-3.5">
      <ReturnBtn />
      <div
        class="flex md:flex-row flex-col text-xl font-semibold whitespace-nowrap md:pl-4 p-1 dark:text-white"
      >
        <skeleton-element
          :check-element="subjects.length !== 0"
          :width="'h-7'"
          :height="'w-80'"
        >
          <div
            class="flex md:flex-row flex-col md:justify-start justify-center"
          >
            <div class="md:text-start text-center">
              Расписание занятие на&nbsp; {{ type ? " подгруппу" : "группу" }}
            </div>
            <div class="flex justify-center" v-if="type">
              <div
                class="px-1 ml-1 link link-underline link-underline-green cursor-pointer"
                @click="group = 1"
                :class="[group === 1 ? 'link-underline-active' : '']"
              >
                1
              </div>
              /
              <div
                class="px-1 link link-underline link-underline-green cursor-pointer"
                @click="group = 2"
                :class="[group === 2 ? 'link-underline-active' : '']"
              >
                2
              </div>
            </div>
          </div>
        </skeleton-element>
      </div>
    </div>
    <div
      class="flex md:flex-row px-10 py-2 text-xl font-semibold justify-center"
    >
      <skeleton-element
        :check-element="subjects.length !== 0"
        :width="'h-8'"
        :height="'w-96'"
      >
        <div class="text-primary-700 uppercase drop-shadow-md text-center">
          {{
            new Date().toLocaleString("ru", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </div>
      </skeleton-element>
    </div>

    <div class="flex items-center justify-center font-bold">
      <div class="mx-1">
        <button
          class="link link-underline link-underline-green text-black px-2"
          @click="parity = true"
          :class="[parity ? 'link-underline-active' : '']"
        >
          Числитель
        </button>
      </div>
      <div class="mx-1">
        <button
          class="link link-underline link-underline-green px-2"
          @click="parity = false"
          :class="[!parity ? 'link-underline-active' : '']"
        >
          Знаменатель
        </button>
      </div>
    </div>
    <div class="flex-col md: px-10 pt-3">
      <div class="flex justify-evenly flex-wrap">
        <ScheduleCardDay
          v-for="(day, number) in dayOfWeek"
          :day="day"
          :parity="!parity"
          :group="group"
          :key="number"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReturnBtn from "../components/student/ReturnBtn.vue";
import ScheduleCardDay from "../components/student/ScheduleCardDay.vue";
import {getSchedule} from "../services";
import {computed, onMounted, ref} from "vue";
import {Schedule, Subject} from "../../../_shared/DTO";
import {useStudentStore} from "../stores/useStudentStore";
import SkeletonElement from "../../../_shared/components/SkeletonElement.vue";

const group = ref<1 | 2>(1);
const parity = ref<boolean>(false);
const dayOfWeek = ref<Schedule>({
  1: {
    day: "Понедельник",
    subjects: [],
  },
  2: {
    day: "Вторник",
    subjects: [],
  },
  3: {
    day: "Среда",
    subjects: [],
  },
  4: {
    day: "Четверг",
    subjects: [],
  },
  5: {
    day: "Пятница",
    subjects: [],
  },
  6: {
    day: "Суббота",
    subjects: [],
  },
});
const subjects = ref<Array<Subject>>([]);

const refreshSchedule = async (): Promise<void> => {
  subjects.value = await getSchedule(useStudentStore().group);
  subjects.value?.map((el: Subject) => {
    const dow: keyof Schedule = el.dow;
    dayOfWeek.value[dow].subjects.push(el);
  });
};
onMounted(() => {
  refreshSchedule();
  let d0 = new Date().getTime();
  let d = new Date(new Date().getFullYear(), 0, 1);
  let re =
    Math.floor((d0 - d.getTime()) / 8.64e7) + (d.getDay() ? d.getDay() - 1 : 6);
  parity.value = !!(Math.floor(re / 7) % 2);
});
const type = computed(() => {
  let flag = false;
  subjects.value.map((el) => {
    if (el.subgroup !== 0) flag = true;
  });
  return flag;
});
</script>

<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.4s ease-in-out;
}

.link-underline-green {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#059669, #059669);
}

.link-underline:hover {
  background-size: 100% 3px;
  background-position: 0 100%;
}

.link-underline-active {
  background-size: 100% 3px;
  background-position: 0 100%;
}
</style>
