<template>
  <TableWrapper
    :columns="['Фамилия Имя Отчество', 'Статус', 'Уникальный Идентификатор']"
    :empty-slot="true"
  >
    <TableChildElement
      v-for="child in family"
      :key="child"
      :status="child.status"
      :child="child.child"
    />
    <VoidTableElement v-if="!family" :column="2" />
  </TableWrapper>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import router from "../../router";
import {searchFamily} from "../../services";
import {useUserStore} from "../../stores/useUserStore";
import TableChildElement from "./TableChildElement.vue";
import VoidTableElement from "../../../../_shared/components/VoidTableElement.vue";
import TableWrapper from "../../../../_shared/components/TableWrapper.vue";

const emits = defineEmits(["tableUpdated"]);
const props = defineProps({
  updateFlag: Boolean,
});
const family = ref();
const updateFamily = async () => {
  let response = await searchFamily(useUserStore().user);
  if (response === "Unauthorized") {
    useUserStore().exitSystem();
    await router.push("/login");
  }
  family.value = response;
};
updateFamily();
watch(
  () => props.updateFlag,
  () => {
    updateFamily();
    emits("tableUpdated");
  },
  { deep: true }
);
</script>

<style scoped></style>
