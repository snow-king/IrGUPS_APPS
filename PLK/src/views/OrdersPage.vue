<template>
  <div class="my-20 md:mx-20 md:p-10 bg-gray-50 rounded-md">
    <div class="flex px-10">
      <ReturnBtn />
      <div
        class="flex text-xl font-semibold break-all pl-4 p-1 dark:text-white"
      >
        Приказы по студенту:
      </div>
    </div>
    <div class="flex-col md: px-10 pt-3">
      <TableWrapper
        :columns="orderColumns"
        :empty-slot="true"
        :enumerable="true"
      >
        <TableOrderElement
          v-for="order in orders"
          :order="order"
          :key="order.id"
        />
        <VoidTableElement v-if="!orders.length" :column="3" />
      </TableWrapper>
      <!--            <TableOrder :orders="orders"/>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStudentStore} from "../stores/useStudentStore";
import ReturnBtn from "../components/student/ReturnBtn.vue";
import {Order} from "../../../_shared/DTO";
import {getOrders} from "../services";
import {useUserStore} from "../stores/useUserStore";
import {ref} from "vue";
import TableWrapper from "../../../_shared/components/TableWrapper.vue";
import TableOrderElement from "../components/tables/TableOrderElement.vue";
import VoidTableElement from "../../../_shared/components/VoidTableElement.vue";

const orderColumns = ["Номер приказа", "Дата", "Тема приказа"];
const orders = ref<Array<Order>>([]);
const refreshOrders = async () => {
  orders.value = await getOrders(useUserStore(), useStudentStore().StudCard);
};
refreshOrders();
</script>

<style scoped></style>
