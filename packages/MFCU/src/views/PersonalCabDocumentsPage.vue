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
        <TheSelect :list="month" text="выберите месяц" ></TheSelect>
        <TheSelect :list="years" text="выберите год"></TheSelect>
        <TheSelect :list="dockType" text="Выберите тип документа"></TheSelect>
        <TheSelect :list="departments" text="Выберите подразделения"></TheSelect>
        <TheSelect :list="status" text="Выбирите статус"></TheSelect>
        <button
            type="button"
            @click="search"
            class="focus:outline-none text-white bg-primary-600 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-8"
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
      <TableElementDocuments v-for="(document,number) in documents" :key="document" :index="number" :document="document" />
      <void-table-element v-if="searchFlag" :column="4"/>
    </TableWrapper>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {Spinner} from "flowbite-vue";
import TableWrapper from "../../../_shared/components/TableWrapper.vue";
import VoidTableElement from "../../../_shared/components/VoidTableElement.vue";
import TheSelect from "../../../_shared/components/TheSelect.vue"
import {getDocuments} from "../services";
import {useUserStore} from "../stores/useUserStore";
import {DocumentDto, SelectDto} from "../../../_shared/DTO";
import TableElementDocuments from "../components/TableElementDocuments.vue";

//TODO сделать сортировку.
const route = useRoute();
const searchFlag = ref<boolean>(true);
const status = ref<Array<SelectDto>>([]);
const years = ref<Array<SelectDto>>([]);
const dockType =  ref<Array<SelectDto>>([]);
const departments =  ref<Array<SelectDto>>([]);
const month = ref<Array<SelectDto>>([]);
const documents = ref<Array<DocumentDto>>();
const filters = ref({
  year: "",
  month: "",
  status: "",
});


// смотри как кабинет собираем
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
    if (response){
      response?.map((el: DocumentDto) => {
        if (!status.value.some( value => value.value === el.status) && el.status != null) {
          status.value.push({
            name: el.status.toLowerCase(),
            value: el.status
          })
        }
        if (!years.value.some(value => value.value === new Date(el.date_create).getFullYear())  && el.date_create != null){
          years.value.push({
            name: new Date(el.date_create).getFullYear(),
            value: new Date(el.date_create).getFullYear()
          })
          month.value.push({
            name: new Date(el.date_create).toLocaleDateString('Ru', {month: 'long'}),
            value: new Date(el.date_create).getMonth()
          })
        }
        if (!dockType.value.some(value => value.value === el.docType)  && el.docType != null){
          dockType.value.push({
            name: el.docType.toLowerCase(),
            value: el.docType
          })
        }
        if (!departments.value.some(value => value.value === el.department)  && el.department != null){
          departments.value.push({
            name: el.department.toLowerCase(),
            value: el.department
          })
        }
      })
    }
    searchFlag.value= false
    return response;
  })

};
search();
</script>

<style scoped></style>
