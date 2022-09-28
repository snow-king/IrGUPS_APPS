<template>
  <transition-group name="fade" mode="out-in">
    <div class="mt-20 md:p-10 bg-gray-50 rounded-md">
      <StudCard
        :student="useStudentStore().PersonData"
        :speciality-stud="useStudentStore().Specialty"
        :stud-card="useStudentStore().StudCard"
      />
      <div
        class="bg-white xl:mx-60 mt-10 rounded-md shadow-lg p-4"
        v-if="useStudentStore().PersonData.name1"
      >
        <div class="flex justify-center text-xl font-medium">
          <p>Данные о обучающемся</p>
        </div>
        <hr class="mx-4 text-black" />
        <div
          class="grid grid-cols-2 gap-4 font-medium text-lg justify-items-center"
        >
          <div class="flex-col justify-start p-2">
            <div
              class="flex p-1 hover:text-primary-500 cursor-pointer hover:underline underline-offset-6"
            >
              <router-link :to="{ name: 'Schedule', params: { id } }"
                >Расписание</router-link
              >
            </div>
            <div
              class="p-1 hover:text-primary-500 cursor-pointer hover:underline underline-offset-6"
            >
              <router-link :to="{ name: 'Attendance', params: { id } }"
                >Посещаемость</router-link
              >
            </div>
            <div
              class="p-1 hover:text-primary-500 cursor-pointer hover:underline underline-offset-6"
            >
              <router-link :to="{ name: 'Debt', params: { id } }"
                >Задолженность</router-link
              >
            </div>
          </div>
          <div class="flex-col justify-start p-2">
            <div
              class="p-1 hover:text-primary-500 cursor-pointer hover:underline underline-offset-6"
            >
              <router-link :to="{ name: 'Uchplan', params: { id } }"
                >Учебный план</router-link
              >
            </div>
            <div
              class="p-1 hover:text-primary-500 cursor-pointer hover:underline underline-offset-6 flex"
            >
              <router-link :to="{ name: 'Orders', params: { id } }"
                >Приказы</router-link
              >
            </div>
            <div
              class="p-1 hover:text-primary-500 cursor-pointer hover:underline underline-offset-6"
            >
              <router-link :to="{ name: 'AcademicPerformance', params: { id } }"
                >Успеваемость</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import StudCard from "../components/student/StudCard.vue";
import { ref } from "vue";
import { Schedule } from "../../../_shared/DTO";
import { useStudentStore } from "../stores/useStudentStore";
import { useUserStore } from "../stores/useUserStore";
import { useRoute } from "vue-router";

const route = useRoute();
const id = ref<string>("0");
const refreshStudent = async () => {
  await useStudentStore().getStudent(
    useUserStore().user,
    route.params.id as string
  );
  id.value = useStudentStore().id.toString();
};
refreshStudent();
</script>

<style scoped></style>
