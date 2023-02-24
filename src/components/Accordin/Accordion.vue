<template>
 <dl id="accordion-2" class="accordion box w-full" role="presentation">
  <accordion-item
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :groupId="id"
      ref="child"
      :key="item.id">
  </accordion-item>
 </dl>
</template>

<script setup>
import AccordionItem from "@/components/Accordin/AccordionItem.vue";

const props = defineProps({
 content: {type: Array, required: true},
 multiple: {type: Boolean, required: false},
 id: {type: String, required: false}
})

</script>

<style scoped>
</style>