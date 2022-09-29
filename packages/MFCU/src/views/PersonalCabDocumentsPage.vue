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
        <TheSelect :list="[]" text="Выберите тип документа"></TheSelect>
        <TheSelect :list="[]" text="Выберите подразделения"></TheSelect>
        <TheSelect :list="status" text="Выбирите статус"></TheSelect>
        <button
            type="button"
            @click="search"
            class="focus:outline-none text-white bg-primary-600 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-8"
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
import TableWrapper from "../../../_shared/components/TableWrapper.vue";
import VoidTableElement from "../../../_shared/components/VoidTableElement.vue";
import TheSelect from "../../../_shared/components/TheSelect.vue"
import {getDocuments} from "../services";
import {useUserStore} from "../stores/useUserStore";
import {DocumentDto, SelectDto} from "../../../_shared/DTO";

//TODO сделать сортировку.
const route = useRoute();
const searchFlag = ref<boolean>(true);
const status = ref<Array<SelectDto>>([]);
const years = ref<Array<SelectDto>>([]);
const month = [
  {name: "январь", value: 1},
  {name: "Февраль", value: 2},
  {name: "Март", value: 3},
  {name: "Апрель", value: 4},
  {name: "Май", value: 5},
  {name: "Июнь", value: 6},
  {name: "Июль", value: 7},
  {name: "Август", value: 8},
  {name: "Сентябрь", value: 9},
  {name: "Октябрь", value: 10},
  {name: "Ноябрь", value: 11},
  {name: "Декабрь", value: 12},
]
const documents = ref();
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
        }
      })
    }
    searchFlag.value= false
  })

};
search();
</script>

<style scoped></style>
