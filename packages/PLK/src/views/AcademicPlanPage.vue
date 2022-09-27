<template>
  <div class="mt-20 md:mx-20 md:p-10 bg-gray-50 rounded-md">
    <div class="flex px-10">
      <ReturnBtn />
      <div
        class="flex text-xl font-normal break-all pl-4 p-1 dark:text-white"
      >
        Индивидуальный учебный план обучающегося
      </div>
    </div>
    <div class="flex-col md:px-10 pt-3">
      <TableWrapper :columns="uchplansColumn" :enumerable="true">
        <AcademicPlanElement
          v-for="uchplan in uchplans"
          :uchplan="uchplan"
          :index="uchplans.indexOf(uchplan)"
          :key="uchplan.id"
        />
        <VoidTableElement v-if="!uchplans.length" :column="2" />
      </TableWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReturnBtn from "../components/student/ReturnBtn.vue";
import {ref} from "vue";
import {Uchplan} from "../../../_shared/DTO";
import {getUchplan} from "../services";
import {useStudentStore} from "../stores/useStudentStore";
import TableWrapper from "../../../_shared/components/TableWrapper.vue";
import AcademicPlanElement from "../components/tables/AcademicPlanElement.vue";
import VoidTableElement from "../../../_shared/components/VoidTableElement.vue";

const uchplansColumn = ["Индекс", "Наименование дисциплины", "Часы/зеты"];
const uchplans = ref<Array<Uchplan>>([]);
const refreshUchplan = async (): Promise<void> => {
  uchplans.value = await getUchplan(useStudentStore().group);
};
refreshUchplan();
</script>

<style scoped></style>
