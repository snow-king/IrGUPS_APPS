<template>
  <skeleton-element :check-element="list.length" :width="'h-10'"
                    :height="'w-60'">
    <select
        v-model="currentElement"
        class="block p-1 px-2 h-10 w-52 mx-4  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected disabled >{{ text }}</option>
      <option v-for="el in list" :key=el :value="el">{{ el.name }}</option>
    </select>
  </skeleton-element>
</template>

<script setup lang="ts">
import {PropType, ref, watch} from "vue";
import SkeletonElement from "./SkeletonElement.vue";
import {SelectDto} from "../DTO";

const props = defineProps({
  list: Object as PropType<Array<SelectDto>>,
  text: String,
  selectElement:  Object as PropType<SelectDto>
})
const currentElement = ref( props.selectElement ? props.selectElement: props.text)
const $emits = defineEmits(['update'])
watch( currentElement, ()=> {
  $emits('update', currentElement.value)
} )
</script>

<style scoped>

</style>