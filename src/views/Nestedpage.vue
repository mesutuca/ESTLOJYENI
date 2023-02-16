<template>
 <div class="container max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
  <div class="md:flex items-start">
   <div class="w-full md:w-5/12 sticky top-16">
    <div class="bg-white px-8">
     <ul class="space-y-6 py-6 widget-navigation w-full">
      <li class="navigation-item">
       <div>
        <a class="item cursor-pointer" @click="showList('uyelik')" key="0">
         <div class="user-icon icon-size"></div>
         <span>Kullanıcı bilgilerim</span>
        </a>
       </div>
       <ul class="widget-navigation-dropdown ml-2.5 border-l-[3px] pl-3" v-show="(activePageName === 'uyelik' && showNavigation)">
        <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
         <router-link :to="{name:'uyelik-bilgilerim'}">Üyelik bilgilerim</router-link>
        </li>
        <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
         <router-link :to="{name:'sifre-degisikligi'}">Şifre Değişikliği</router-link>
        </li>
        <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
         <router-link :to="{name:'iletisim-tercihlerim'}">İletişim tercihlerim</router-link>
        </li>
        <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
         <router-link :to="{name:'kayitli-kartlarim'}">Kayıtlı kartlarım</router-link>
        </li>
        <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
         <router-link :to="{name:'iban'}">IBAN bilgilerim</router-link>
        </li>
        <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
         <router-link :to="{name:'adreslerim'}">Adreslerim</router-link>
        </li>
       </ul>
      </li>
      <li class="navigation-item">
       <a class="item cursor-pointer" @click="showList('siparis')" key="1">
        <div class="siparis icon-size"></div>
        <span>Sipariş ve İadeler</span>
       </a>
       <ul class="widget-navigation-dropdown ml-2.5 border-l-[3px] pl-3" v-show="(activePageName === 'siparis' && showNavigation)">
        <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
         <router-link :to="{name:'siparislerim'}">Siparişlerim</router-link>
        </li>
        <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
         <router-link :to="{name:'iade-ve-iptal-taleplerim'}">İade ve İptal taleplerim</router-link>
        </li>
       </ul>
      </li>

      <li class="navigation-item">
       <router-link :to="{name:'soru-ve-taleplerim'}" class="item">
        <div class="cikis icon-size"></div>
        <span>Soru ve Taleplerim</span>
       </router-link>
      </li>
      <li class="navigation-item">
       <a class="item">
        <div class="cikis icon-size"></div>
        <span>Çıkış yap</span>
       </a>
      </li>

     </ul>
    </div>
   </div>
   {{ activePageName }}
   <div class="w-full md:w-9/12 px-8">
    <div class="bg-white px-8">
     <div class="px-4 py-4">
      <router-view/>
     </div>
    </div>
   </div>
  </div>
 </div>

</template>

<script setup>
import {ref, watchEffect} from "vue";
import {useRouter} from "vue-router";

const activePageName = ref()
const showNavigation = ref(false)

function showList(routeName) {

 if (activePageName.value !== routeName) {
  showNavigation.value = true
 }
 if (activePageName.value === routeName) {
  showNavigation.value = !showNavigation.value
 } else {
  activePageName.value = routeName
 }
}

const router = useRouter()

watchEffect(() => {
 if (router.currentRoute.value.meta.activePage) {
  activePageName.value = router.currentRoute.value.meta.activePage
  showNavigation.value = true
 } else {
  activePageName.value = ''
 }
})
</script>

<style scoped>

</style>
