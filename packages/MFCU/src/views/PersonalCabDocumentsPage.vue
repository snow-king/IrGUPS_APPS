<template>
  <div class="my-20 mx-1 md:mx-20 md:p-10 bg-gray-50 rounded-md">
    <div class="flex text-xl font-medium break-all pl-4 p-1 dark:text-white">
      Документы заказанные через {{ cabinet }}
    </div>
    <form
        @submit.prevent="search"
        class="flex bg-white mt-4 p-3 shadow-md rounded-md justify-between px-10 w-full"
    >
      <div class="flex w-full justify-around">
        <TheSelect :list="filters.month" @update="(el) =>filter.month = el" text="выберите месяц"></TheSelect>
        <TheSelect :list="filters.year" @update="(el) =>filter.year = el" text="выберите год"></TheSelect>
        <TheSelect :list="filters.type" @update="(el) =>filter.type = el" text="Выберите тип документа"></TheSelect>
        <TheSelect :list="filters.departments" @update="(el) =>filter.departments = el"
                   text="Выберите подразделения"></TheSelect>
        <TheSelect :list="filters.status" @update="(el) =>filter.status = el" text="Выбирите статус"></TheSelect>
        <button
            type="button"
            @click="search"
            class="focus:outline-none text-white bg-primary-600 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-10"
        >
          <Spinner v-if="searchFlag" color="green" size="5" class="mx-2.5"/>
          <div v-else>Поиск</div>
        </button>
      </div>
    </form>
    <nav v-if="paginateDocuments.length>1">
      <ul class="inline-flex -space-x-px justify-center w-full shadow-md">
        <li>
          <button @click="currentPage-= 1"
                  class="py-2 px-3 ml-0 h-full w-32 focus:outline-none text-white bg-primary-600 hover:bg-green-800 rounded-bl-lg ">
            предыдущая
          </button>
        </li>
        <li v-for="el in paginateDocuments.length" :key="el">
          <button
              :class="[
                  currentPage+1 === el ?
                  'py-2 px-3  text-primary-600 bg-primary-50 border border-gray-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white':
                  'py-2 px-3  text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              ]"
          >{{ el }}
          </button>
        </li>
        <li>
          <button
              class="py-2 px-3 h-full w-32 ml-0 focus:outline-none text-white bg-primary-600 hover:bg-green-800  rounded-br-lg "
              @click="currentPage+= 1"
          >
            следующая
          </button>
        </li>
      </ul>
    </nav>
    <TableWrapper
        class="mt-10"
        :columns="[
        'Фамилия Имя Отчество',
        'Дата обращения',
        'Статус',
        'Тип документа',
        'Подразделение',
      ]"
        :enumerable="true"
        :empty-slot="true"
    >
      <TableElementDocuments v-for="(document,number) in paginateDocuments[currentPage]" :key="document" :index="number"
                             :document="document"/>
      <void-table-element v-if="searchFlag" :column="4"/>
    </TableWrapper>
    <Alert type="danger" closable class="mb-2" v-if="alertState.status" @click="alertState.status=false">
      {{ alertState.text }}
    </Alert>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {Alert, Spinner} from "flowbite-vue";
import TableWrapper from "../../../_shared/components/TableWrapper.vue";
import VoidTableElement from "../../../_shared/components/VoidTableElement.vue";
import TheSelect from "../../../_shared/components/TheSelect.vue"
import {getDocuments, getFilters} from "../services";
import {useUserStore} from "../stores/useUserStore";
import {DocumentDto, DocumentsFilter, DocumentsFilters} from "../../../_shared/DTO";
import TableElementDocuments from "../components/TableElementDocuments.vue";
//TODO сделать сортировку.
const route = useRoute();
const searchFlag = ref<boolean>(true);
const documents = ref<Array<DocumentDto>>();
const currentPage = ref<number>(0)
const filters = ref<DocumentsFilters>({
  month: [], status: [], type: [],
  year: [], departments: []
});
const alertState = ref({
  status: false,
  text: ''
});
const filter = ref<DocumentsFilter>(<DocumentsFilter>{});


// смотрим какой кабинет выбран
const cabinet = computed<string>(() => {
  switch (route.params.cabinet) {
    case "empCab":
      return "Личный Кабинет Работника (ЛКР)";
    case "studCab":
      return "Личный Кабинет Студента (ЛКР)";
    case "individualCab":
      return "Личный Кабинет Физического Лица (ЛКФЗ)";
    case "parentCab":
      return "Личный Кабинет Родителя  (ЛКР)";
    default:
      return "";
  }
});
const refreshFilters = async () => {
  filters.value = await getFilters(useUserStore().user)
  searchFlag.value = false
}
const search = async () => {
  searchFlag.value = true
  documents.value = []
  let response = await getDocuments(useUserStore().user, filter.value)
  if (typeof response == "string") {
    alertState.value.text = response;
    alertState.value.status = true;
  } else {
    documents.value = await getDocuments(useUserStore().user, filter.value) as Array<DocumentDto>
    // paginateDocuments.value = sliceIntoChunks(documents.value, 50)
  }
  searchFlag.value = false
};
const paginateDocuments = computed<Array<Array<DocumentDto>>>(() => {
  const res = []
  const chunkSize = 50
  if (documents.value) {
    for (let i = 0; i < documents.value.length; i += chunkSize) {
      const chunk = documents.value.slice(i, i + chunkSize);
      res.push(chunk);
    }
  }
  return res
})

refreshFilters();
</script>

<style scoped></style>
