<template>
  <div class="flex flex-col min-h-full">
    <Top/>
    <Header/>
    <Nav/>
    <!-- Main -->
    <router-view/>
    <Footer/>
  </div>
</template>
<script setup>
import {provide, ref, onMounted, onUnmounted, computed,} from "vue";
import {RouterLink, RouterView} from 'vue-router'
import Header from "@/views/Layouts/Header.vue";
import Nav from "@/views/Layouts/Nav.vue";
import Top from "@/views/Layouts/Top.vue";
import Footer from "@/views/Layouts/Footer.vue";

const openMenu = ref(false)
provide('openMenu', openMenu)


function useBreakpoints() {
  let windowWidth = ref(window.innerWidth)
  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))
  const type = computed(() => {
    if (windowWidth.value < 550) {
      return 'mobile'
    }
    if (windowWidth.value >= 550 && windowWidth.value < 1200) {
      return 'tablet'
    }
    if (windowWidth.value >= 1200) {
      return 'desktop'
    }
    return null;
  })
  const width = computed(() => windowWidth.value)
  return {width, type}
}

const {width, type} = useBreakpoints()
provide('screenType', type)

</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
