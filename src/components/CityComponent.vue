<template>
 <select v-model="value"
         class="w-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
  <option value="null" selected>İl Seçin</option>
  <option v-for="city in citiesAndDistricts.data" :key="city.plaka_kodu">
   {{ city.il_adi }}
  </option>
 </select>
</template>

<script setup>
import {computed} from "vue";
import illerveilceler from "./ililce.json";

const citiesAndDistricts = illerveilceler
const props = defineProps({
 modelValue: [String],
 districts: [],
});
let emit = defineEmits(['update:modelValue', 'districts']);
const value = computed({
 get() {
  return props.modelValue
 },
 set(val) {
  setDist(val)
 }
});


function inputChanged(e) {
 setDist(e.target.value)
 emit('update:modelValue', e.target.value)
}

function setDist(e) {
 const findArray = citiesAndDistricts.data.find(element => element.il_adi === e)
 if (findArray) {
  emit('update:modelValue', e)
  emit('districts', findArray.ilceler)
 } else {
  emit('update:modelValue', null)
  emit('districts', null)
 }

}
</script>

<style scoped>

</style>