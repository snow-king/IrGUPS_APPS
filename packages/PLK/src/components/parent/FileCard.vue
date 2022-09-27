<template>
  <div class="bg-white md:mx-60 mt-10 rounded-md shadow-lg p-4">
    <div class="font-semibold text-center text-lg uppercase text-gray-800">
      Загруженные документы
    </div>
    <hr class="p-1" />
    <div v-if="files">
      <div class="flex flex-wrap">
        <DocElement
          v-for="file in files"
          :doc-name="file.name"
          :key="file.id"
          @delete="deleteFile(file)"
        />
      </div>
      <hr class="p-1" v-if="files.length" />
      <div class="flex justify-center pt-5">
        <button
          class="bg-primary-600 p-2 font-semibold hover:bg-primary-700 rounded-md text-white shadow-md flex"
          @click="modalShow = true"
        >
          Загрузить
        </button>
      </div>
    </div>

    <div v-else class="flex justify-center my-4">
      <spinner color="green" size="12" />
    </div>
  </div>
  <modal :show="modalShow" @close="modalShow = false">
    <DocumentDataAdd @close="modalShow = false" @upload="fileRefresh" />
  </modal>
</template>

<script setup lang="ts">
import DocElement from "../DocElement.vue";
import {ref} from "vue";
import {delDocuments, getDocuments} from "../../services";
import {useUserStore} from "../../stores/useUserStore";
import {ParentDocument} from "../../../../_shared/DTO";
import {Spinner} from "flowbite-vue";
import Modal from "../ModalWrapper.vue";
import DocumentDataAdd from "./DocumentDataAdd.vue";

const modalShow = ref(false);
const files = ref<Array<ParentDocument>>();
const fileRefresh = async () => {
  files.value = await getDocuments(useUserStore().user);
};
const deleteFile = async (file: ParentDocument) => {
  if (file.id) {
    await delDocuments(useUserStore(), file.id);
    await fileRefresh();
  }
};
fileRefresh();
</script>

<style scoped></style>
