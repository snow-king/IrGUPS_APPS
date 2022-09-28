<template>
  <div class="mt-20 mx-1 md:mx-20 md:p-10 bg-gray-50 rounded-md">
    <div class="flex text-xl font-medium break-all pl-4 p-1 dark:text-white">
      Документы заказанные через {{ cabinet }}
    </div>
    <form
        @submit.prevent="search"
        class="flex bg-white mt-4 p-3 shadow-md rounded-md justify-between px-10"
    >
      <div class="flex w-full justify-around">
        <select
            class="block p-2 h-10 w-full mx-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Выберите месяц</option>
          <option value="1">Январь</option>
          <option value="2">Февраль</option>
          <option value="3">Март</option>
          <option value="4">Апрель</option>
          <option value="5">Май</option>
          <option value="6">Июнь</option>
          <option value="7">Июль</option>
          <option value="8">Август</option>
          <option value="9">Сентябрь</option>
          <option value="10">Октябрь</option>
          <option value="11">Ноябрь</option>
          <option value="12">Декабрь</option>
        </select>
        <select
            class="block p-2 h-10 w-full mx-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Выберите год</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <select
            class="block p-2 h-10 w-full mx-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Выберите тип документа</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <select
            class="block p-2 h-10 w-full mx-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Выберите подразделения</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <skeleton-element :check-element="false" :width="'w-full'" :height="'h-10'">
          <select
              class="block p-2 h-10 w-full mx-4  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Выберите статус</option>
            <option v-for="el in status" :key=el :value="el">{{el}}</option>
          </select>
        </skeleton-element>

        <button
            type="button"
            @click="search"
            class="focus:outline-none text-white bg-primary-600 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-10"
        >
          <Spinner v-if="searchFlag" color="green" size="5" class="mx-2.5"/>
          <div v-else>Поиск</div>
        </button>
      </div>

    </form>
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
      <void-table-element :column="4"/>
    </TableWrapper>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {Spinner} from "flowbite-vue";
import TableWrapper from "plk-client/src/components/TableWrapper.vue";
import VoidTableElement from "plk-client/src/components/VoidTableElement.vue";
import SkeletonElement from "plk-client/src/components/SkeletonElement.vue"
import {getDocuments} from "../services";
import {useUserStore} from "../stores/useUserStore";
import {DocumentDto} from "../../../_shared/DTO";

//TODO сделать сортировку.
const route = useRoute();
const searchFlag = ref<boolean>(false);
const status = ref<Array<string>>([]);
const documents = ref();
const filters = ref({
  year: "",
  month: "",
  status: "",
});
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
const search = async () => {
  documents.value = await getDocuments(useUserStore().user).then((response: Array<DocumentDto>) => {
    response.map((el: DocumentDto) => {
      if (!status.value.includes(el.status) && el.status != null) {
        status.value.push(el.status.toLowerCase())
      }
    })
  })

};
search();
</script>

<style scoped></style>
