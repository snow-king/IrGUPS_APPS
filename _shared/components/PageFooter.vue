<template>
  <footer
    class="fixed bottom-0 left-0 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md: dark:bg-gray-800 dark:border-gray-600"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2022
      <a href="https://www.irgups.ru/" class="hover:underline">ИрГУПС</a>. Все
      права защищены.
    </span>
    <ul
      class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <li class="mr-4 hover:underline md:mr-6">
        <a href="https://vk.com/irgups" target="_blank">
          <VK />
        </a>
      </li>
      <li class="mr-4 hover:underline md:mr-6">
        <a href="https://t.me/irgups_official" target="_blank">
          <Telegram />
        </a>
      </li>
      <li class="mr-4 hover:underline md:mr-6">
        <Popper arrow class="">
          <button>
            <Telephone />
          </button>
          <template #content>
            <div>
              <div class="font-medium">
                Деканат ФУТиИТ:
                <a href="tel:+73952638399" class="text-primary-500"
                  >+7 (3952) 638-399</a
                >
                доб. 0113, 0109
              </div>
              <div class="font-medium">
                Студенческий отдел кадров:
                <a href="tel:+73952638399" class="text-primary-500"
                  >+7 (3952) 638-399</a
                >
                доб. 0238/ 0540
              </div>
              <div class="font-medium">
                Отдел по договорной работе:
                <a href="tel:+73952638395" class="text-primary-500"
                  >+7 (3952) 638-395</a
                >
                / email:
                <a href="mailto:odrian@irgups.ru" class="text-primary-500"
                  >odrian@irgups.ru</a
                >
              </div>
              <div class="font-medium">
                Бухгалтерия:
                <a href="tel:+73952638399" class="text-primary-500">
                  +7 (3952) 638-399</a
                >
                доб. 1138 / email:<a
                  href="mailto:a-207@irgups.ru "
                  class="text-primary-500"
                >
                  a-207@irgups.ru
                </a>
              </div>
              <div class="font-medium">
                Служба поддержки:
                <a href="tel: +73952506959" class="text-primary-500"
                  >+7 (3952) 506-959</a
                >
                / email:<a
                  href="mailto:studhelp@irgups.ru "
                  class="text-primary-500"
                >
                  studhelp@irgups.ru
                </a>
              </div>
            </div>
          </template>
        </Popper>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import VK from "../../PLK/src/components/svg/VK.vue";
import Telegram from "../../PLK/src/components/svg/TelegramSVG.vue";
import Telephone from "../../PLK/src/components/svg/TelephoneSVG.vue";
</script>

<style>
:root {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
