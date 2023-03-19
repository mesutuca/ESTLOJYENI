<template>

  <header class="sticky top-0 bg-white z-50 border-b md:relative sm:py-8 py-5">
    <div class="container max-w-8xl h-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-row items-center justify-between">
        <div class="lg:w-4/12">
          <div class="flex items-center">
            <button type="button" id="hamburger"
                    class="inline-flex md:hidden items-center justify-center focus:outline-none py-1 pr-2 pl-2"
                    :class="{'is-active':openMenu}" @click="showMenu">
        <span class="ham__icon">
         <span></span>
         <span></span>
         <span></span>
         </span>
            </button>
            <div class="logo pr-4">
              <router-link to="/">
                <picture>
                  <source media="(max-width:320px)" srcset="https://www.weltew.com/assets/images/weltew-logo-125.svg">
                  <source media="(max-width:375px)" srcset="https://www.weltew.com/assets/images/weltew-logo-165.svg">
                  <source media="(max-width:1280px)" srcset="https://www.weltew.com/assets/images/weltew-logo-200.svg">
                  <img src="https://www.weltew.com/assets/images/weltew-logo.svg" alt="Weltew Home" width="290" height="28">
                </picture>
              </router-link>
            </div>
          </div>
        </div>
        <div class="lg:w-5/12">
          <div class="search-box" v-show="screenType !=='mobile' ||searchButton" v-click-outside="hideMethod">
            <form class="sm:block relative">
              <div class="relative">
                <input
                    type="text" tabindex="0" @focus="isOpen=true" @focusout="isOpen=false"
                    placeholder="Aradığınız ürün ?" v-model="search" ref="searchref" @keyup="inputChanged"
                    class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white">
                <button
                    class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                    </path>
                  </svg>
                </button>
              </div>
              <div class="result-search block bg-white w-full overflow-auto	max-h-64 absolute" v-show="isOpen">
                <div class="sticky top-0 bg-white z-20 border-b px-4 sm:px-6 lg:px-8 py-2"
                     v-show="filteredUsers.length>0">{{ filteredUsers.length }} Sonuç Bulundu
                </div>
                <a href="" v-for="(user, i) in filteredUsers" :key="i" v-show="isOpen"
                   class="flex items-center border-b px-4 sm:px-6 lg:px-8">
                  <div class="images flex items-center">
                    <img :src="user.done" alt="">
                  </div>
                  <div class="flex flex-col">
                    <span>{{ user.text }}</span>
                    <small>L Koltuk Takımı ve Köşe Takımı Fiyatları Modelleri</small>
                  </div>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div class="lg:w-3/12 flex justify-end items-center">
          <button class="md:hidden inline-flex items-center justify-center focus:outline-none py-1 pr-2 pl-2"
                  @click="showSearch()">
            <svg aria-hidden="true" class="w-5 h-5 text-[#004481] dark:text-gray-400" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <div class="inline-flex items-center justify-center mobile__seperator"></div>
          <router-link to="/hesabim" class="flex items-center justify-center focus:outline-none py-1 pr-2 pl-2">
            <svg aria-hidden="true" class="w-6 h-6 fill-[#004481] dark:text-gray-400" viewBox="0 0 448 512"
                 xmlns="http://www.w3.org/2000/svg" width="36" height="36">
              <path xmlns="http://www.w3.org/2000/svg"
                    d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
            </svg>
            <span class="ml-2 font-light text-[#004481]">Üye Girişi</span>
          </router-link>
          <div class="inline-flex items-center justify-center mobile__seperator"></div>
          <button class="inline-flex items-center justify-center focus:outline-none py-1 pr-2 pl-2" @click="showCart = true">
      <span class="relative inline-block">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-[#004481] dark:text-gray-400"
            width="20" height="20">
        <path xmlns="http://www.w3.org/2000/svg"
              d="M128 128V96C128 42.98 170.1 0 224 0C277 0 320 42.98 320 96V128H400C426.5 128 448 149.5 448 176V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V176C0 149.5 21.49 128 48 128H128zM160 128H288V96C288 60.65 259.3 32 224 32C188.7 32 160 60.65 160 96V128zM48 160C39.16 160 32 167.2 32 176V416C32 451.3 60.65 480 96 480H352C387.3 480 416 451.3 416 416V176C416 167.2 408.8 160 400 160H320V240C320 248.8 312.8 256 304 256C295.2 256 288 248.8 288 240V160H160V240C160 248.8 152.8 256 144 256C135.2 256 128 248.8 128 240V160H48z"/>
       </svg>
       <span class="cart-badge ">0</span>
      </span>
            <span class="block ml-4 hidden">
       <strong class="block">160,00 ₺</strong>
      </span>
          </button>
        </div>
      </div>
    </div>
  </header>
  <Teleport to="body">
    <ShopCart :show="showCart" @close="showCart = false"/>
  </Teleport>
</template>

<script setup>
import ShopCart from "@/views/ShopCart.vue";
import {inject, provide, ref, watch, nextTick} from "vue";

const screenType = inject('screenType')
const showCart = ref(false)
const users = ref([
  {
    id: 1,
    text: "Learn JavaScript",
    done: 'https://www.weltew.com/uploads/2022/06/milano-kose-relax-01_h60_q70_op.webp'
  },
  {
    id: 2,
    text: "Learn",
    done: 'https://www.weltew.com/uploads/2022/06/milano-kose-large-01_h60_q70_op.webp'
  },
  {
    id: 3,
    text: "Play around in JSFiddle",
    done: 'https://www.weltew.com/uploads/2020/11/florya-orta-sehpa-1_h60_q70_op.webp'
  },
  {
    id: 4,
    text: "Build something awesome",
    done: 'https://www.weltew.com/uploads/2021/06/new-zirkon12215-1_h60_q70_op.webp'
  },
  {
    id: 5,
    text: "asd",
    done: 'https://www.weltew.com/uploads/2021/06/new-zirkon12215-1_h60_q70_op.webp'
  },
  {
    id: 6,
    text: "bb",
    done: 'https://www.weltew.com/uploads/2021/06/new-zirkon12215-1_h60_q70_op.webp'
  }
])
const filteredUsers = ref([])
const search = ref()
const searchref = ref()
const isOpen = ref()
const searchButton = ref(false);


function inputChanged() {

  filteredUsers.value = []
  const filtered = users.value.filter((user) => {
    return search.value.toLowerCase().split(" ").every(v => user.text.toLowerCase().includes(v))
  });
  isOpen.value = true
  filteredUsers.value.push(...filtered)
}

const showMobile = ref(false)

watch(() => showMobile.value, () => {
  if (showMobile.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
});

function showSearch() {
  searchButton.value = !searchButton.value
  nextTick(() => {
    focusInput();
  });
}

function focusInput() {
  searchref.value.focus();
}

const openMenu = inject('openMenu')

function showMenu() {
  openMenu.value = !openMenu.value
}

function hideMethod() {
  isOpen.value = false
}
</script>

<style scoped>


@media only screen and (max-width: 1024px) {
  .search-box {
    display: block;
    position: absolute;
    top: 69px;
    left: 0;
    margin: 0 !important;
    width: 100%;
    background: #fff;
    padding: 0;
    border-bottom: 1px solid #e2e2e2;
    z-index: 9;
  }

  input {
    border: 0;
    border-radius: 0;
  }
}

.mobile__seperator {
  width: 1px;
  height: 24px;
  background: #e9e9e9;
}

.cart-badge {
  width: 16px;
  height: 16px;
  background: #ed0202;
  border-radius: 50%;
  display: block;
  position: absolute;
  right: -0.5rem;
  top: 0;
  text-align: center;
  font-size: 10px;
  color: #fff;
  font-family: cursive;
}
</style>