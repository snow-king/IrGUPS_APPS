<template>
  <form class="p-2" @submit.prevent="uploadDocument">
    <div
      class="w-full text-center font-medium text-xl pb-5 uppercase font-semibold text-gray-800 mb-4"
    >
      Заполните информацию о документе
    </div>
    <DoubleGridWrapper>
      <template #first>
        <LineInput
          :inputLength="4"
          text="Серия"
          v-model:enterElement="docData.seria"
          :require="true"
          :input-mask="'####'"
        />
      </template>
      <template #second>
        <LineInput
          text="Номер"
          v-model:enterElement="docData.number"
          :require="true"
          :input-mask="'######'"
        />
      </template>
    </DoubleGridWrapper>
    <DoubleGridWrapper>
      <template #first>
        <LineInput
          text="Наименование документа"
          v-model:enter-element="docData.name"
        />
      </template>
      <template #second>
        <div class="relative z-auto w-full flex-col">
          <label
            for="type"
            class="block mb-2 text-sm text-gray-500 dark:text-gray-400"
            >Выберите тип документа:</label
          >
          <select
            id="type"
            v-model="docData.type"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 h-2/3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="1">Свидетельство о рождении</option>
            <option value="2">Нотариальная доверенность</option>
            <option value="4">Документ подтверждающий опекунство</option>
            <option value="5">Иной тип документа</option>
          </select>
        </div>
      </template>
    </DoubleGridWrapper>
    <div>
      <DatepickerAdapter
        v-model:enterElement="docData.date"
        text="Дата выдачи"
      />
    </div>

    <DocDownloadField
      text="Загрузите копию документа:"
      @uploadFile="(n) => (file = n)"
      @deleteDocument="file = null"
    >
      - Не более 15 МБ;
      <br />
      - Формат: JPG, PDF
    </DocDownloadField>
    <hr class="my-4" />
    <div class="flex justify-center">
      <button
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
import { ref } from "vue";
import { ParentDocument } from "../../../../_shared/DTO";
import DatepickerAdapter from "../DateInput.vue";
import DocDownloadField from "../DocDownloadField.vue";
import { useUserStore } from "../../stores/useUserStore";
import { getPersonId, uploadFile } from "../../services";
import { Spinner } from "flowbite-vue";

const uploadFlag = ref<boolean>(false);
const docData = ref<ParentDocument>({} as ParentDocument);
const file = ref<File | null>();
const emits = defineEmits(["close", "upload"]);
const uploadDocument = async () => {
  uploadFlag.value = true;
  docData.value.person_id = (await getPersonId(useUserStore().user)) as number;
  if (file.value !== undefined && file.value !== null) {
    await uploadFile(useUserStore().user, file.value, docData.value);
  }
  emits("close");
  emits("upload");
  uploadFlag.value = false;
};
</script>

<style scoped></style>
