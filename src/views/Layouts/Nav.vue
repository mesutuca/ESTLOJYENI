<template>
 <div class="bg-gray-50 uppercase sm:sticky sm:top-0 sm:z-40 lg:block sm:shadow-sm responsive-navigation sm:border-b" :class="{'showMenu':openMenu}">
  <div class="container max-w-8xl mx-auto">
   <nav class="navigation">
    <ul class="navbar-item">
     <li class="item">
      <RouterLink to="/">ANASAYDA</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="/hesabim">HESABIM</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="/iletisim">İLETİŞİM</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="">YÜZÜK</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="/about">KOLYE</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="">KÜPE</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="">BİLEKLİK</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="">BİLEZİK</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="">ALYANS</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="">SAAT</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="">BEBEK</RouterLink>
     </li>
     <li class="item">
      <RouterLink to="/iletisim">ÇOK SATANLAR</RouterLink>
     </li>
    </ul>
   </nav>
  </div>
 </div>
</template>

<script setup>
import {inject, provide, ref} from "vue";
const openMenu = inject('openMenu')

</script>

<style lang="scss">

@media (max-width: 768px) {
 .responsive-navigation {
  top: 69px !important;
  overflow: auto !important;;
  z-index: 9 !important;;
  transform: translateX(-103%) !important;;
  will-change: transform !important;;
  transition: transform 200ms linear !important;;
  position: fixed !important;;
  left: 0 !important;;
  width: 100% !important;;
  height: 100% !important;;
  background: #fff !important;;
  border-top: 1px solid #e2e2e2 !important;

  &.showMenu {
   transform: translateX(0%) !important;
  }

  .navbar-item {
   padding: 0;
   margin: 0;
   display: flex;
   width: 100%;
   flex-direction: column;
   justify-content: flex-start;
  }
 }
}
</style>
