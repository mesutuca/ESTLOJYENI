<template>
 <div class="tab" v-if="isActive">
  <slot></slot>
 </div>
</template>

<script>
import {onBeforeMount, ref, inject, watch} from "vue";

export default {
 name: "Tab",
 props: ["title"],
 setup(props) {
  const isActive = ref(false);
  const tabs = inject("TabsProvider");

  watch(() => tabs.selectedIndex, () => {
       isActive.value = props.title === tabs.selectedIndex;
      }
  );

  onBeforeMount(() => {
   isActive.value = props.title === tabs.selectedIndex;
  });
  return {isActive};
 },
};
</script>
