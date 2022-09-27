<!--TODO: алгоритм: грузим все прошлые семмаки по ведомостям -> текущий простсщ
-->

<template>
  <div class="mt-20 md:mx-10 md:p-10 bg-gray-50 rounded-md">
    <div class="flex md:px-10 px-3.5">
      <ReturnBtn />
      <div
        class="flex text-xl font-medium break-all pl-4 p-1 dark:text-white"
      >
        Успеваемость обучаещего
      </div>
    </div>
    <div class="flex-col pt-3 mb-20">
      <div v-for="(semester, name) in semesters" :key="name">
        <Accordion
          :text="name + ' семестр'"
          :ready="!!semester.length"
          v-if="useStudentStore().StudCard.activeCourse.semestr > name"
        >
          <TableWrapper
            :columns="academicPerformanceColumns"
            :enumerable="true"
            :rounded-top="false"
          >
            <TableAcademicPerformanceElement
              v-for="mark in semester"
              :mark="mark"
              :index="semester.indexOf(mark)"
              :key="semester.indexOf(mark)"
            />
          </TableWrapper>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReturnBtn from "../components/student/ReturnBtn.vue";
import Accordion from "../../../_shared/components/AccordionWrapper.vue";
import {useStudentStore} from "../stores/useStudentStore";
import {useUserStore} from "../stores/useUserStore";
import {getMarks} from "../services";
import {ref} from "vue";
import {Mark, Semesters} from "../../../_shared/DTO";
import TableWrapper from "../../../_shared/components/TableWrapper.vue";
import TableAcademicPerformanceElement from "../components/tables/TableAcademicPerformanceElement.vue";

const academicPerformanceColumns = [
  "Наименование дисциплины",
  "Вид контроля",
  "ФИО Преподавателя",
  "Оценка",
  "Часы/зеты",
  "Дата сдачи",
];
let semesters = ref<Semesters>({
  1: [] as Array<Mark>,
  2: [] as Array<Mark>,
  3: [] as Array<Mark>,
  4: [] as Array<Mark>,
  5: [] as Array<Mark>,
  6: [] as Array<Mark>,
  7: [] as Array<Mark>,
  8: [] as Array<Mark>,
});
const refreshMarks = async () => {
  await getMarks(useUserStore().user, useStudentStore().StudCard.id).then(
    (response: Array<Mark>) => {
      response?.map((value: Mark) => {
        if (value.semester) {
          semesters?.value[value?.semester]?.push(value);
        }
      });
    }
  );
};
refreshMarks();
</script>

<style scoped></style>
