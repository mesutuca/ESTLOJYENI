<template>
 <div class="flex flex-col min-h-full">
  <Top/>
  <Header/>
  <Nav/>
  <router-view/>
 </div>

</template>
<script setup>
import {provide, ref, onMounted, onUnmounted, computed, watch,} from "vue";
import {RouterLink, RouterView} from 'vue-router'
import Header from "@/views/Layouts/Header.vue";
import Nav from "@/views/Layouts/Nav.vue";
import Top from "@/views/Layouts/Top.vue";

const openMenu = ref(false)
provide('openMenu', openMenu)

function useBreakpoints() {
 let windowWidth = ref(window.innerWidth)
 const onWidthChange = () => windowWidth.value = window.innerWidth
 onMounted(() => window.addEventListener('resize', onWidthChange))
 onUnmounted(() => window.removeEventListener('resize', onWidthChange))
 const type = computed(() => {
  if (windowWidth.value < 550) {
   return 'md1'
  }
  if (windowWidth.value >= 550 && windowWidth.value < 1200) {
   return 'md2'
  }
  if (windowWidth.value >= 1200) {
   return 'md3'
  }
  return null;
 })
 const width = computed(() => windowWidth.value)
 return {width, type}
}

const {width, type} = useBreakpoints()
watch(() => type.value, () => {
 console.log(type.value)
});


</script>
<style scoped>

</style>
