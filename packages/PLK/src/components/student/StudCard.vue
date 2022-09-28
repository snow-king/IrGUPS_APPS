<template>
  <div class="flex bg-white xl:mx-60 mx-2 p-4 shadow-md rounded-md">
    <div class="flex-col md:px-2 py-4 justify-center">
      <user class="hidden md:block sm:h-40" />
    </div>
    <div class="flex-col px-2 w-full">
      <!-- ///TODO CardInfo compoent -->
      <div class="flex text-lg font-medium px-2 pb-1">
        <SkeletonElement
          :checkElement="student?.name1"
          :width="'h-7'"
          :height="'w-60'"
        >
          {{ `${student?.name1} ${student?.name2} ${student?.name3}` }}
        </SkeletonElement>
      </div>
      <hr class="py-1" />
      <StudCardElement theme="Группа:" :value="specialityStud?.short_name" />
      <StudCardElement theme="Курс:" :value="studCard?.activeCourse.course" />
      <StudCardElement
        theme="Специальность:"
        :value="specialityStud?.parent?.name"
      />
      <StudCardElement
        theme="Специализация (профиль):"
        :value="specialityStud?.name"
      />
      <StudCardElement
        theme="Код специальности:"
        :value="specialityStud?.kod_spec"
      />
      <StudCardElement
        theme="Форма обучения:"
        :value="specialityStud?.study_form?.name"
      />
      <StudCardElement
        theme="Основа обучения:"
        :value="student?.stud_card?.activeCourse.contract.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Person, Specialty, StudCard } from "../../../../_shared/DTO";
import SkeletonElement from "../SkeletonElement.vue";
import User from "../svg/UserSVG.vue";
import StudCardElement from "./StudCardElement.vue";

const props = defineProps({
  student: { type: Object as PropType<Person>, required: true },
  specialityStud: { type: Object as PropType<Specialty>, required: true },
  studCard: { type: Object as PropType<StudCard>, required: true },
});
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
