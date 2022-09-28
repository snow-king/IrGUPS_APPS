<!--TODO Сделать валидацию данных и проверку если файл уже загружен-->
<!--TODO Сделать отдельный компонент выбора страны-->
<template>
  <form @submit.prevent="uploadPerson">
    <!-- ---------------------------------------------------------------- -->
    <DoubleGridWrapper>
      <template #first>
        <LineInput
          text="Серия"
          v-model:enterElement="person.pass_ser"
          :require="true"
          :input-mask="'####'"
        />
      </template>
      <template #second>
        <LineInput
          text="Номер"
          v-model:enterElement="person.pass_num"
          :require="true"
          :input-mask="'######'"
        />
      </template>
    </DoubleGridWrapper>
    <!-- ---------------------------------------------- -->
    <DoubleGridWrapper>
      <template #first>
        <LineInput
          text="Кем выдан:"
          v-model:enterElement="person.pass_loc"
          :require="true"
        />
      </template>
      <template #second>
        <LineInput
          text="Код подразделения:"
          v-model:enterElement="person.pass_code_subdivision"
          :require="true"
          :input-mask="'###-###'"
        />
      </template>
    </DoubleGridWrapper>
    <!-- ---------------------------------------------- -->
    <DoubleGridWrapper>
      <template #first>
        <div class="relative z-0 w-full group flex">
          <label
            for="countries"
            class="block mb-2 text-sm text-gray-500 dark:text-gray-400"
            >Выберите гражданство:</label
          >
          <select
            v-model="country"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 h-2/3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 z-0"
          >
            <option v-for="item in countryListName" :key="item">
              {{ item }}
            </option>
          </select>
        </div>
      </template>
      <template #second>
        <LineInput
          text="Место рождения:"
          v-model:enterElement="person.location_birth"
          :require="true"
        />
      </template>
    </DoubleGridWrapper>
    <!-- ---------------------------------------------- -->
    <DoubleGridWrapper>
      <template #first>
        <DatepickerAdapter
          v-model:enterElement="person.pass_date"
          text="Дата выдачи"
        />
      </template>
      <template #second>
        <DatepickerAdapter
          v-model:enterElement="person.dob"
          text="Дата рождения"
        />
      </template>
    </DoubleGridWrapper>
    <SexRadioBtn
      :enterElement="person.sex"
      @checked="(n) => (person.sex = n)"
    />
    <hr class="my-4" />
    <!-- ---------------------------------------------- -->
    <DocDownloadField
      text="Загрузите копию паспорта:"
      @uploadFile="(n) => (file = n)"
      @deleteDocument="file = null"
    >
      - Не более 15 МБ;
      <br />
      - Формат: JPG, PDF
    </DocDownloadField>
    <hr class="my-4" />

    <div class="flex-col">
      <ContractCheckBox
        @checked="(n) => (person.consent_1 = n)"
        text="Согласие законного представителя поступающего, обучающегося не достигшего 18 лет на обработку ПДн"
      />
      <ContractCheckBox
        @checked="(n) => (person.consent_2 = n)"
        text="Согласие законного представителя поступающего, обучающегося не достигшего 18 лет на распространение ПДн"
      />
      <ContractCheckBox
        @checked="(n) => (person.consent_3 = n)"
        text="Соглашение о признании ПЭП"
      />
    </div>
    <hr class="my-4" />

    <div class="flex justify-center">
      <button
        :disabled="!agreements"
        :class="{
          'hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer':
            agreements,
          'cursor-no-drop': !agreements,
        }"
        class="text-white bg-primary-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        <Spinner v-if="uploadFlag" color="green" size="5" class="mx-2.5" />
        <div v-else>сохранить</div>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import DoubleGridWrapper from "../DoubleGridWrapper.vue";
import LineInput from "../LineInput.vue";
import { ParentDocument, Person } from "../../../../_shared/DTO";
import { computed, PropType, ref, watch } from "vue";
import { countries, updatePerson, uploadFile } from "../../services";
import { useUserStore } from "../../stores/useUserStore";
import DocDownloadField from "../DocDownloadField.vue";
import DatepickerAdapter from "../DateInput.vue";
import ContractCheckBox from "../ContractCheckBox.vue";
import SexRadioBtn from "../SexRadioBtn.vue";
import { Spinner } from "flowbite-vue";

const file = ref<File | null>();
const props = defineProps({
  personGetter: { type: Object as PropType<Person>, required: true },
});
const emits = defineEmits(["close"]);
const person = ref<Person>(props.personGetter);
const text = ref("");
const uploadFlag = ref<boolean>(false);
// country handler
let countryList = ref<[{ id: number; name: string }]>();
const getCountries = async () => {
  try {
    let response = await countries();
    if (response === 401) {
      useUserStore().exitSystem();
    }
    countryList.value = response;
  } catch (error) {
    console.log(error);
  }
};
const country = ref<string>("");
watch(country, () => {
  if (countryList.value != undefined) {
    let el = countryList.value.find((el) => el.name == country.value);
    person.value.country = el?.id;
  }
});
getCountries();
const countryListName = computed(() => {
  if (countryList.value) {
    return countryList.value.map(
      (element: { id: number; name: string }) => element.name
    );
  }
  return ["none"];
});
const uploadPerson = async () => {
  uploadFlag.value = true;
  let response = await updatePerson(useUserStore().user, person.value);
  console.log(response);
  if (response == 204) {
    let passport: ParentDocument = {
      person_id: person.value.id,
      type: 1,
      name: "Паспорт",
      seria: person.value.pass_ser ?? "",
      number: person.value.pass_num ?? "",
      date: person.value.pass_date?.toString() ?? Date(),
    };
    if (file.value !== undefined && file.value !== null) {
      await uploadFile(useUserStore().user, file.value, passport);
    }
    emits("close");
    uploadFlag.value = false;
  }
};
const agreements = computed(() => {
  return (
    person.value.consent_1 === 1 &&
    person.value.consent_2 === 1 &&
    person.value.consent_3 === 1 &&
    file.value !== undefined
  );
});
</script>

<style scoped></style>
