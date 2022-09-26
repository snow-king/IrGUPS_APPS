<template>
  <div class="mt-20 md:mx-20 md:p-10 bg-gray-50 rounded-md">
    <div class="flex px-10">
      <ReturnBtn />
      <div
        class="flex text-xl font-semibold break-all pl-4 p-1 dark:text-white"
      >
        Задолженности на
        {{
          new Date().toLocaleString("ru", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })
        }}
      </div>
    </div>
    <div class="flex-col md:px-10 pt-3">
      <Accordion text="Фионансовая" :ready="!!finical?.length">
        <div class="px-5 py-2">
          Информация об оплате проходит <b>от 3 до 5 рабочих дней</b>. Если по
          истечении 5 дней, информация о задолженности не обновилась, обратитесь
          в бухгалтерию, чтобы убедиться, что оплата действительно прошла (т.
          <a href="tel: +73952638399" class="text-primary-500"
            >+7 (3952) 638-399 </a
          >доб. (1138). Если в бухгалтерии оплата прошла, обратитесь в службу
          поддержки (<a href="tel:+73952506959" class="text-primary-500"
            >+7 (3952) 50-69-59</a
          >)
        </div>
        <TableWrapper :columns="finicalDebtColumn">
          <TableFinancialDebtElement
            v-for="dept in finical"
            :dept="dept"
            :key="dept.num"
          />
        </TableWrapper>
      </Accordion>
      <Accordion text="Литературная" :ready="!!books?.length">
        <TableWrapper :columns="booksDebtColumn" :enumerable="true">
          <TableLiteraryDebtElement
            v-for="(dept, number) in books"
            :dept="dept"
            :index="number"
            :key="number"
          />
        </TableWrapper>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReturnBtn from "../components/student/ReturnBtn.vue";
import Accordion from "../../../_shared/components/AccordionWrapper.vue";
import {ref} from "vue";
import {financialDebt, literaryDebt} from "../services";
import {useUserStore} from "../stores/useUserStore";
import {useStudentStore} from "../stores/useStudentStore";
import {Book, Dogovor} from "../../../_shared/DTO";
import TableFinancialDebtElement from "../components/tables/TableFinancialDebtElement.vue";
import TableWrapper from "../../../_shared/components/TableWrapper.vue";
import TableLiteraryDebtElement from "../components/tables/TableLiteraryDebtElement.vue";

const finicalDebtColumn = [
  "Номер договора",
  "Дата оформления",
  "Вид",
  "Задолженность по договору",
  "Дата обновления задолжности",
  "Дата отсрочки",
  "Договор",
];
const booksDebtColumn = ["Наименование книги", "Дата взятия"];
const finical = ref<Array<Dogovor>>([] as Array<Dogovor>);
const books = ref<Array<Book>>([] as Array<Book>);
const refreshData = async () => {
  books.value = await literaryDebt(
    useUserStore().user,
    useStudentStore().StudCard.id
  );
  finical.value = await financialDebt(
    useUserStore().user,
    useStudentStore().StudCard.id
  );
  console.log(books?.value);
};
refreshData();
</script>

<style scoped></style>
