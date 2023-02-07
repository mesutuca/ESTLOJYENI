<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

 <div class="flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-8">
  <div class="flex md:w-full md:max-w-6xl sm:rounded-2xl sm:shadow overflow-hidden bg-white">
   <!--    sm:w-auto py-8 px-4 sm:p-12 md:p-16-->
   <div class="w-full ">
    <div class="w-full py-12">
     <div class="mb-2 flex items-center justify-center">
      <img src="https://www.weltew.com/assets/images/weltew-logo.svg" alt="Weltew Home" width="290" height="28">
     </div>
     <div class="mb-4 text-center">
      <a href="">Üye Girişi</a>
      <a href="">Üye Ol</a>
     </div>
     <form>
      <div class="md:flex mb-6 px-12 items-center">
       <div class="md:w-1/3">
        <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">E-Postanız</label>
       </div>
       <div class="md:w-2/3">
        <input class="block text-gray-700 rounded-sm border border-gray-200 block w-full focus:outline-cyan-500 focus:bg-white focus:border-green-700 px-4 py-2.5 " id="my-textfield" type="text" placeholder="E-Postanız">
       </div>
      </div>
      <div class="md:flex mb-6 px-12 items-center">
       <div class="md:w-1/3">
        <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">Şifre</label>
       </div>
       <div class="md:w-2/3">
        <input class="block text-gray-700 rounded-sm border border-gray-200 block w-full focus:outline-cyan-500 focus:bg-white focus:border-green-700 px-4 py-2.5 " id="my-textfield" type="text" placeholder="Şifre">
       </div>
      </div>


      <div class="md:flex md:items-center">
       <div class="md:w-1/3"></div>
       <div class="md:w-2/3">
        <button class="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
         Save
        </button>
       </div>
      </div>
     </form>
    </div>
   </div>
   <div class="relative hidden md:flex flex-auto w-full items-center justify-center h-full overflow-hidden dark:border-l">
    <img src="https://www.weltew.com/assets/images/login.png" alt="">
   </div>
  </div>
 </div>

</template>

<style scoped>

</style>
