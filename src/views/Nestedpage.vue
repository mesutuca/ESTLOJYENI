<template>
 <div class="container max-w-9xl mx-auto py-6 sm:px-6 lg:px-8">
  <div class="md:flex items-start">
   <div class="w-full md:w-3/12 sm:sticky top-16">
    <div class="user mb-2">
     <div class="">
      <div class="flex items-center">
       <div class="flex items-center justify-center w-14 h-14 rounded-full overflow-hidden mr-2">
        <div class="flex items-center justify-center w-full h-full rounded overflow-hidden uppercase text-xl font-bold leading-none bg-gray-200 text-gray-600">
         MU
        </div>
       </div>

       <h2 class="font-medium">Mesut UCA</h2>
      </div>
     </div>
    </div>
    <div class="bg-white px-8">
     <ul class="space-y-6 py-6 widget-navigation w-full">
      <li class="navigation-item" :class="activePageName ==='uyelik' ?'active':''">
       <div>
        <a class="item cursor-pointer" @click="showList('uyelik')" key="0">
         <div class="user-icon icon-size"></div>
         <span>Kullanıcı bilgilerim</span>
        </a>
       </div>
       <ul class="widget-navigation-dropdown ml-2.5 border-l-[3px] pl-3"
           v-show="(activePageName === 'uyelik' && showNavigation)">
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
      <li class="navigation-item" :class="activePageName ==='siparis' ?'active':''">
       <a class="item cursor-pointer" @click="showList('siparis')" key="1">
        <div class="siparis icon-size"></div>
        <span>Sipariş ve İadeler</span>
       </a>
       <ul class="widget-navigation-dropdown ml-2.5 border-l-[3px] pl-3"
           v-show="(activePageName === 'siparis' && showNavigation)">
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
   <div class="w-full md:w-9/12 px-8">
    <router-view/>
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

<style lang="scss">

.widget-navigation {
 li.navigation-item {
  display: block;
  width: 100%;

  a.item {
   text-decoration: none;
   height: 32px;
   font-size: 14px;
   font-weight: 600;
   font-style: normal;
   font-stretch: normal;
   line-height: 2.29;
   letter-spacing: -.15px;
   color: #484848;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: horizontal;
   -webkit-box-direction: normal;
   -ms-flex-direction: row;
   flex-direction: row;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   position: relative;

   span {
    height: 100%;
   }

   &:hover {
    color: #ff6000;
   }
  }

  .widget-navigation-dropdown {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -ms-flex-direction: column;
   flex-direction: column;
   -webkit-box-flex: 1;
   -ms-flex: 1;
   flex: 1;

   a {
    display: block;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.29;
    letter-spacing: -.15px;
    color: #484848;
    text-decoration: none;
    padding-left: 16px;
    cursor: pointer;

    &:hover {
     color: #ff6000;
     border-radius: 8px;
     background-color: rgba(255, 96, 0, .0784313725490196);
    }

    &.router-link-active {
     color: #ff6000;
     border-radius: 8px;
     background-color: rgba(255, 96, 0, .0784313725490196);
    }
   }

  }

  &.active {
   a.item {
    color: #ff6000;
   }
  }
 }


}

.icon-size {
 width: 24px;
 height: 24px;
 margin-right: 16px
}

.siparis {
 background-repeat: no-repeat;
 background-position: 50%;
 background-size: contain;
 background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' fill='%23484848'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h24v24H0z'/%3E%3C/defs%3E%3Cg fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cg mask='url(%23b)'%3E%3Cpath d='M18.524 0a2.253 2.253 0 011.996 1.204l.074.153 2.39 5.832c.17.316.266.677.266 1.061v13.5A2.25 2.25 0 0121 24H3a2.25 2.25 0 01-2.25-2.25V8.25c0-.384.096-.745.265-1.06l2.4-5.853A2.25 2.25 0 015.298.007L5.475 0h13.05zM21 7.5H3a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V8.25A.75.75 0 0021 7.5zM18.75 18a.75.75 0 110 1.5h-4.5a.75.75 0 110-1.5zm-7.5-16.5H5.473a.752.752 0 00-.63.335l-.049.09L3.125 6h8.125V1.5zm7.276 0H12.75V6h8.124l-1.66-4.055a.75.75 0 00-.578-.437l-.11-.008z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")

}

.user-icon {
 background-repeat: no-repeat;
 background-position: 50%;
 background-size: contain;
 background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23484848'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cg stroke='%23484848' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.375'%3E%3Cpath d='M16.07 16.747a1.355 1.355 0 102.71.002 1.355 1.355 0 00-2.71-.002z'/%3E%3Cpath d='M18.578 11.5l.4 1.313c.136.453.6.723 1.06.617l1.333-.309a1.21 1.21 0 011.152 2.006l-.932 1.005a.906.906 0 000 1.227l.932 1.005a1.21 1.21 0 01-1.152 2.006l-1.332-.31a.901.901 0 00-1.056.621l-.4 1.314a1.204 1.204 0 01-2.305 0l-.404-1.314a.9.9 0 00-1.061-.616l-1.332.31a1.211 1.211 0 01-1.153-2.006l.933-1.005a.906.906 0 000-1.227l-.933-1.005a1.211 1.211 0 011.153-2.006l1.332.308a.896.896 0 001.06-.616l.4-1.313c.153-.51.62-.858 1.151-.86.531 0 1 .347 1.154.855zM3.743 5.159a4.01 4.01 0 108.018 0 4.01 4.01 0 00-8.017 0zM9.64 17.19H1.149a6.603 6.603 0 013.44-5.797 6.603 6.603 0 016.735.239'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
}

.cikis {
 background-repeat: no-repeat;
 background-position: 50%;
 background-size: contain;
 background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' fill='%23484848'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h24v24H0z'/%3E%3C/defs%3E%3Cg fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cg mask='url(%23b)'%3E%3Cpath d='M14.426 1c1.202.06 2.13 1.081 2.076 2.25v4.5a.75.75 0 11-1.5 0l.001-4.534c.017-.378-.274-.698-.615-.716H2.153c-.378.018-.669.338-.65.75L1.5 21.284c-.017.377.275.698.614.716H14.35c.378-.018.669-.338.651-.75v-4.5a.75.75 0 011.5 0v4.466c.054 1.203-.874 2.223-2.114 2.284l-12.31-.001c-1.202-.06-2.13-1.08-2.076-2.249L.003 3.284C-.052 2.082.875 1.061 2.115 1zm9.576 11.284a.76.76 0 01-.097.34l-.021.034-.047.065-.054.061-3.75 3.75a.75.75 0 01-1.134-.976l.073-.084 2.469-2.47H7.502a.75.75 0 01-.743-.648l-.007-.102a.75.75 0 01.648-.743l.102-.007h13.939l-2.47-2.47a.75.75 0 01-.072-.976l.073-.084a.75.75 0 01.976-.073l.085.073 3.75 3.75a.753.753 0 01.122.16l.023.045a.758.758 0 01.062.189l.009.067.001.017-.002-.018.004.07v.03z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")

}

.dropdownss {
 width: 25px;
 height: 25px;
 background-repeat: no-repeat;
 background-position: 50%;
 background-size: contain;
 background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' fill='%23787878'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h12v12H0z'/%3E%3C/defs%3E%3Cg opacity='.9' transform='matrix(1 0 0 -1 0 24)'%3E%3Ccircle cx='12' cy='12' r='12' fill-opacity='.08'/%3E%3Cg transform='translate(6 6)'%3E%3Cmask id='b'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cg mask='url(%23b)'%3E%3Cpath d='M.64 8.86L6 3.5l5.36 5.36a.375.375 0 00.53-.53L6.53 2.97a.75.75 0 00-1.06 0L.11 8.33a.375.375 0 10.53.53z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
 background-color: #fff
}

</style>
