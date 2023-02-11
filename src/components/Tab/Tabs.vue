<template>
 <TabsBase
     v-model="currentValue"
     class="tabs-container"
     v-slot="{ panels, direction }"
 >
  <TabBaseList class="tab-list flex flex-col md:flex-row flex-wrap list-none border-b pl-0 mb-4">
   <TabBaseButton
       v-for="panel in panels"
       :key="panel.name"
       class="tab flex-auto text-center nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent cursor-pointer"
       :class="{'is-active': panel.props.active,'is-disabled': panel.props.disabled}"
       :id="panel.id"
       :name="panel.name"
       v-bind="panel.props"
   >
    <slot name="tab" v-bind="panel.props">{{ panel.props.label }}</slot>
   </TabBaseButton>
  </TabBaseList>
  <TabBaseTransition
      class="tab-panels"
      :transition="`slide-fade-${direction}`"
  >
   <slot/>
  </TabBaseTransition>
 </TabsBase>
</template>

<script>
import {computed} from "vue";
import {
 Tabs as TabsBase,
 TabList as TabBaseList,
 TabButton as TabBaseButton,
 TabTransition as TabBaseTransition,
} from "./Tabs.js";

export default {
 name: "Tabs",

 emits: ["update:modelValue"],

 props: {
  modelValue: {type: String},
 },

 components: {
  TabsBase,
  TabBaseList,
  TabBaseButton,
  TabBaseTransition,
 },

 setup(props, context) {
  let currentValue = computed({
   get: () => props.modelValue,
   set: (name) => {
    context.emit("update:modelValue", name);
   },
  });

  return {
   currentValue,
  };
 },
};
</script>
