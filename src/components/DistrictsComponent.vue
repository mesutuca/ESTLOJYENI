<template>
		<select v-model="value"
										ref="printerSelect"
										@change="inputChanged"
										class="w-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
				<option value="null" selected>İlçe Seçin</option>
				<option v-for="(district, index) in districts" :key="index">{{ district.ilce_adi }}</option>
		</select>
</template>


<script setup>
import {computed, ref} from "vue";

const printerSelect = ref([])
const props = defineProps({
		modelValue: [String],
		districts: [Array],
});
let emit = defineEmits(['update:modelValue']);
const value = computed({
		get() {
				// const printerOpts = printerSelect.value.children
				// if (printerOpts?.length) {
				// 		emit('update:modelValue', printerOpts[0].value)
				// }
				return props.modelValue
		},
		set(val) {
				emit('update:modelValue', val)
		}
});

function inputChanged(e) {
		emit('update:modelValue', e.target.value)
}

</script>
<!--<script>-->
<!--import {defineComponent} from "vue";-->

<!--export default defineComponent({-->
<!--		props: ['modelValue', 'districts'],-->
<!--		emits: ['update:modelValue'],-->
<!--		mounted: function () {-->
<!--				const printerOpts = this.$refs.printerSelect.children;-->
<!--				if (printerOpts?.length) {-->
<!--						this.$emit('update:modelValue', printerOpts[0].value)-->
<!--				}-->
<!--		}-->
<!--})-->
<!--</script>-->

<style scoped>

</style>