<template>
  <div class="mb-9">
    <h2 class="font-medium text-xl">Siparişlerim</h2>
  </div>
  <div class="bg-white">
    <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th class="order-list-ref-no px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Ref No</th>
          <th class="order-list-payment-type px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Ödeme Türü</th>
          <th class="order-list-shipping-information px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Kargo Bilgileri</th>
          <th class="order-list-status px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Durumu</th>
          <th class="order-list-order-date px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Sipariş Tarihi</th>
          <th class="order-list-total-price px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Toplam Tutar</th>
          <th class="order-list-action-button px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"></th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        <tr v-for="list in 10">
          <td scope="col" class="order-list-ref-no" :class="ortakClass">6416f520006e5</td>
          <td scope="col" class="order-list-payment-type" :class="ortakClass">Kredi Kartı</td>
          <td scope="col" class="order-list-shipping-information" :class="ortakClass">Yurtiçi Kargo</td>
          <td scope="col" class="order-list-status " :class="ortakClass">
            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
              Siparişiniz Alındı
            </div>
          </td>
          <td scope="col" class="order-list-order-date" :class="ortakClass">19-03-2023 14:42:23</td>
          <td scope="col" class="order-list-total-price" :class="ortakClass">241,65 TL</td>
          <td scope="col" class="order-list-action-button" :class="ortakClass"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const ortakClass = 'px-4 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-200 font-normal';

</script>

<style scoped>

</style>
