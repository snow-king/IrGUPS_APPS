<template>
  <div>
    <div class="my-14 lg:mx-40 bg-gray-50 rounded-md p-2 mb-20">
      <div class="flex-col">
        <!-- Person card-->
        <div class="bg-white lg:mx-60 mt-10 rounded-md shadow-lg p-4">
          <div
            class="font-semibold text-center text-lg uppercase text-gray-800"
          >
            Персональные данные
          </div>
          <div class="font-semibold p-2">
            <SkeletonElement
              :checkElement="person.name1"
              :width="'h-6'"
              :height="'w-60'"
            >
              {{ `${person.name1} ${person.name2} ${person.name3}` }}
            </SkeletonElement>
          </div>
          <hr class="p-2" />
          <div class="flex justify-between font-medium px-2">
            <div class="flex justify-between w-full pr-5 р-2">
              <div class="">Серия:</div>
              <div class="text-primary-800 text-right">
                <SkeletonElement
                  :checkElement="person.name1"
                  :width="'h-4'"
                  :height="'w-60'"
                >
                  {{ person.pass_ser }}
                </SkeletonElement>
              </div>
            </div>
            <div class="flex justify-between w-full">
              <div class="justify-between">Номер:</div>
              <div class="text-primary-800 text-right">
                <SkeletonElement
                  :checkElement="person.name1"
                  :width="'h-4'"
                  :height="'w-60'"
                  class="p-1.5"
                >
                  {{ person.pass_num }}
                </SkeletonElement>
              </div>
            </div>
          </div>
          <div class="flex justify-between font-medium px-2">
            <div class="flex justify-between w-full pr-5">
              <div class="">Кем выдан:</div>
              <div class="text-primary-800 text-right">
                <SkeletonElement
                  :checkElement="person.name1"
                  :width="'h-4'"
                  :height="'w-60'"
                >
                  {{ person.pass_loc }}
                </SkeletonElement>
              </div>
            </div>
            <div class="flex justify-between w-full">
              <div class="justify-between">Код подразделения:</div>
              <div class="text-primary-800 text-right">
                <SkeletonElement
                  :checkElement="person.name1"
                  :width="'h-4'"
                  :height="'w-60'"
                  class="p-1.5"
                >
                  {{ person.pass_code_subdivision }}
                </SkeletonElement>
              </div>
            </div>
          </div>
          <div class="flex justify-between font-medium px-2">
            <div class="flex justify-between w-full pr-5">
              <div class="">Гражданство:</div>
              <div class="text-primary-800 text-right">
                <SkeletonElement
                  :checkElement="person.name1"
                  :width="'h-4'"
                  :height="'w-60'"
                >
                  {{ country.name ?? "" }}
                </SkeletonElement>
              </div>
            </div>
            <div class="flex justify-between w-full">
              <div class="justify-between">Место рождения:</div>
              <div class="text-primary-800 text-right">
                <SkeletonElement
                  :checkElement="person.name1"
                  :width="'h-4'"
                  :height="'w-60'"
                  class="p-1.5"
                >
                  {{ person.location_birth }}
                </SkeletonElement>
              </div>
            </div>
          </div>
          <div class="flex justify-between font-medium px-2 pb-2">
            <div class="flex justify-between w-full pr-5">
              <div class="">Дата выдачи:</div>
              <div class="text-primary-800 text-right">
                <SkeletonElement
                  :checkElement="person.name1"
                  :width="'h-4'"
                  :height="'w-60'"
                >
                  {{ person.pass_date }}
                </SkeletonElement>
              </div>
            </div>
            <div class="flex justify-between w-full">
              <div class="justify-between">Дата рождения:</div>
              <div class="text-primary-800">
                <SkeletonElement
                  :checkElement="person.name1"
                  :width="'h-4'"
                  :height="'w-60'"
                  class="p-1.5"
                >
                  {{ person.dob }}
                </SkeletonElement>
              </div>
            </div>
          </div>
          <hr class="p-1" />
          <div class="flex justify-center">
            <button
              class="bg-primary-600 p-2 font-semibold hover:bg-primary-700 rounded-md text-white shadow-md flex"
              @click="modalShow = true"
            >
              {{ person.pass_ser ? "Изменить" : "Заполнить" }}
            </button>
          </div>
        </div>
        <FileCard />
      </div>
    </div>
  </div>
  <Modal :show="modalShow" v-if="person.name1" @close="modalShow = false">
    <PasswordDataAdd
      v-if="person"
      :person-getter="person"
      @close="modalShow = false"
    />
  </Modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../stores/useUserStore";
import { Country, Person } from "../../../_shared/DTO";
import { getCountry, getPerson } from "../services";
import { useRouter } from "vue-router";

import SkeletonElement from "../../../_shared/components/SkeletonElement.vue";
import PasswordDataAdd from "../components/parent/PasswordDataAdd.vue";
import Modal from "../../../_shared/components/ModalWrapper.vue";
import FileCard from "../components/parent/FileCard.vue";

const router = useRouter();
let user = useUserStore().user;
let person = ref<Person>({} as Person);
const country = ref<Country>({} as Country);
const modalShow = ref(false);
const getInfo = async () => {
  let response = await getPerson(user);
  if (response === "Unauthorized") {
    useUserStore().exitSystem();
  } else {
    if (typeof response !== "string") {
      person.value = response as Person;
      if (person.value.country) {
        country.value = await getCountry(person.value.country);
      }
    } else console.log(response);
  }
};

getInfo();
</script>

<style scoped></style>
