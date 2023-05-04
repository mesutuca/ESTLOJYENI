<template>
  <div class="container max-w-9xl mx-auto py-4">
    <div class="grid grid-cols-3 gap-4">
      <div class="rounded bg-white overflow-hidden shadow-lg" v-for="i in 3">
        <div class="relative">
          <img class="w-full" src="https://fancyapps.com/img/car_1_b.jpg" alt="Mountains">
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Dağlar</div>
          <p class="text-gray-700 text-base">
            Bu kartta, dağ manzaralı bir resim ve resmin altında bir dizi metin bulunmaktadır.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#doğa</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#manzara</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Haberler"
}
</script>

<style scoped>

</style>