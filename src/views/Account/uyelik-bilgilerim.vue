<template>
 <div class="header">
  <h2 class="text-xl">Kullanıcı bilgilerim</h2>
 </div>


 <form action="" class="space-y-6 py-6">
  <div class="md:flex items-center">
   <div class="md:w-1/3">
    <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">T.C Kimlik Numarası</label>
   </div>
   <div class="md:w-2/3">
    <input
        class="block w-full pl-4 pr-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
        id="my-textfield" type="tel" placeholder="Doğum tarihi">
   </div>
  </div>
  <div class="md:flex items-center">
   <div class="md:w-1/3">
    <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">Ad</label>
   </div>
   <div class="md:w-2/3">
    <input
        class="block w-full pl-4 pr-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
        id="my-textfield" type="text" placeholder="E-Postanız">
   </div>
  </div>
  <div class="md:flex items-center">
   <div class="md:w-1/3">
    <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">Soyad</label>
   </div>
   <div class="md:w-2/3">
    <input
        class="block w-full pl-4 pr-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
        id="my-textfield" type="text" placeholder="E-Postanız">
   </div>
  </div>
  <div class="md:flex items-center">
   <div class="md:w-1/3">
    <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">E-posta adresi</label>
   </div>
   <div class="md:w-2/3">
    <input
        class="block w-full pl-4 pr-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
        id="my-textfield" type="text" placeholder="E-Postanız">
   </div>
  </div>
  <div class="md:flex items-center">
   <div class="md:w-1/3">
    <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">Doğum Tarihi</label>
   </div>
   <div class="md:w-2/3">
    <input
        class="block w-full pl-4 pr-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
        id="my-textfield" type="date" placeholder="Doğum tarihi">
   </div>
  </div>
  <div class="md:flex items-center">
   <div class="md:w-1/3">
    <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">Cinsiyet</label>
   </div>
   <div class="md:w-2/3">
    <div class="flex sm:space-x-6 flex-col sm:flex-row">
     <div class="flex items-center gap-2">
      <input type="radio" id="gender-male" value="male" autocomplete="sex" v-model="gender">
      <label for="gender-male" class="cursor-pointer">Erkek</label>
     </div>
     <div class="flex items-center gap-2">
      <input type="radio" id="gender-female" value="female" autocomplete="sex" v-model="gender">
      <label for="gender-female" class="cursor-pointer">Kadın</label>
     </div>
     <div class="flex items-center gap-2">
      <input type="radio" id="gender-unspecified" value="unspecified" autocomplete="sex" v-model="gender">
      <label for="gender-unspecified" class="cursor-pointer">Belirtmek istemiyorum</label>
     </div>
    </div>
   </div>
  </div>
  <div class="md:flex items-center">
   <div class="md:w-1/3">
    <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">Telefon</label>
   </div>
   <div class="md:w-2/3">
    <input
        class="block w-full pl-4 pr-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
        id="my-textfield" type="tel" placeholder="Doğum tarihi">
   </div>
  </div>
  <div class="md:flex items-center">
   <div class="md:w-1/3">
    <label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0" for="my-textfield">Cep Telefonu</label>
   </div>
   <div class="md:w-2/3">
    <input
        class="block w-full pl-4 pr-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
        id="my-textfield" type="tel" placeholder="Doğum tarihi">
   </div>
  </div>


 </form>
</template>

<script>
export default {
 name: "Bilgiler",
 data() {
  return {
   gender: "male",
  }
 }
}
</script>

<style scoped>

</style>