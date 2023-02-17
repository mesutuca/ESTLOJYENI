<template>
 <div class="w-full md:w-3/12 sticky top-16">
  <div class="bg-white px-8">
   <ul class="space-y-6 py-6 widget-navigation w-full">
    <li class="navigation-item">
     <router-link custom :to="{name:'uyelik'}" v-slot="{href, navigate, isActive, isExactActive}">
      {{ isExactActive}} {{ isActive}}
							href
      <a :href="href" @click="navigate" class="item cursor-pointer" :class="{ 'uk-active active': isActive || isExactActive || subIsActive('/uyelik') }">
       <div class="user-icon icon-size"></div>
       <span>Kullanıcı bilgilerim</span>
      </a>
     </router-link>
     <ul class="widget-navigation-dropdown ml-2.5 border-l-[3px] pl-3">
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

     <router-link custom :to="{name:'sepet'}" v-slot="{href, navigate, isActive, isExactActive}">
      {{ isExactActive}} {{isActive}}
      <a :href="href" @click="navigate" class="item cursor-pointer" :class="{ 'uk-active active': isActive || isExactActive || subIsActive('/sepet') }">
       <div class="siparis icon-size"></div>
       <span>Sipariş ve İadeler</span>
      </a>
     </router-link>
     <ul class="widget-navigation-dropdown ml-2.5 border-l-[3px] pl-3">
      <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
       <router-link :to="{name:'siparislerim'}">Siparişlerim</router-link>
      </li>
      <li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
       <router-link :to="{name:'iade-ve-iptal-taleplerim'}">İade ve İptal taleplerim</router-link>
      </li>
     </ul>
    </li>
    <li class="navigation-item">
     <a class="item">
      <div class="cikis icon-size"></div>
      <span>Soru ve Taleplerim</span>
     </a>
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


</template>

<script>
import UserIcon from "@/components/icons/UserIcon.vue";

export default {
 name: "AccountLayout",
 components: {UserIcon},
 data() {
  return {
   isOpen: false,
   password: '',
   showPasswordField: true
  }
 },
 methods: {
  subIsActive(input) {
   console.log(input)
   const paths = Array.isArray(input) ? input : [input]

   return paths.some(path => {
    return this.$route.path.indexOf(path) === 0 // current path starts with this path string
   })
  }
 }
}
</script>

<style lang="scss">

</style>
