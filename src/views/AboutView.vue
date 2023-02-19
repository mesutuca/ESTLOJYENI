<template>
 <div class="about bg-white w-full block">
  <div class="border-b">
   <div class="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center overflow-x-auto">
     <div class="header-left w-full">
      <ul class="flex flex-row gap-2 w-full">
       <li class="whitespace-nowrap p-1">
        <a href="">Takımlar</a>
       </li>
       <li class="whitespace-nowrap p-1">
        <a href="">Koltuk Takımı</a>
       </li>
       <li class="whitespace-nowrap p-1">
        <a href="">Ottoman Koltuk Takımı - Lacive</a>
       </li>
      </ul>
     </div>
     <div class="header-right flex gap-2 hidden xl:block">
      <ul class="flex flex-row gap-2 w-full">
       <li class="whitespace-nowrap p-1">
        <a href="#mainCarousel" :class="{active:currentSection ==='mainCarousel'}">galeri</a>
       </li>
       <li class="whitespace-nowrap p-1">
        <a href="#genelbilgi" :class="{active:currentSection==='genelbilgi'}">genelbilgi</a>
       </li>
       <li class="whitespace-nowrap p-1">
        <a href="#ozellestirme" :class="{active:currentSection==='ozellestirme'}">ozellestirme</a>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </div>
  <div class="sticky sm:hidden top-16 text-center z-10 bg-white">
   <div class="mx-8 border-b">
    <h2 class="uppercase font-medium">Ottoman Koltuk Takımı - Lacivert-Krem (Krom Ayaklı)</h2>
   </div>
  </div>
  <div class="container max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
   <div class="w-full mx-auto text-gray-800 relative md:text-left p-8 md:p-0 xl:p-0">
    <div class="md:flex items-start">
     <div class="w-full md:w-8/12 px-0 md:px-10 mb-10 md:mb-0 detail">
      <ProductCarousel>
       <div id="mainCarousel" class="carousel w-full">
        <div class="carousel__slide" data-src="https://www.weltew.com/uploads/2022/01/alacati-yemek-01_w1500_q70_op_op.webp" data-fancybox="gallery">
         <img src="https://www.weltew.com/uploads/2022/01/alacati-yemek-01_w1500_q70_op_op.webp"/>
        </div>
        <div class="carousel__slide" data-src="https://www.weltew.com/uploads/2022/01/alacati-yemek-03_w1500_q70_op_op.webp" data-fancybox="gallery">
         <img alt="" src="https://www.weltew.com/uploads/2022/01/alacati-yemek-03_w1500_q70_op_op.webp"/>
        </div>
        <div class="carousel__slide" data-src="https://www.weltew.com/uploads/2022/01/alacati-yemek-04-2_w1500_q70_op_op.webp" data-fancybox="gallery">
         <img alt="" src="https://www.weltew.com/uploads/2022/01/alacati-yemek-04-2_w1500_q70_op_op.webp"/>
        </div>
       </div>
       <div id="thumbCarousel" class="carousel mx-auto">
        <div class="carousel__slide">
         <img class="panzoom__content" src="https://www.weltew.com/uploads/2022/01/alacati-yemek-01_w1500_q70_op_op.webp"/>
        </div>
        <div class="carousel__slide">
         <img class="panzoom__content" src="https://www.weltew.com/uploads/2022/01/alacati-yemek-03_w1500_q70_op_op.webp"/>
        </div>
        <div class="carousel__slide">
         <img class="panzoom__content" src="https://www.weltew.com/uploads/2022/01/alacati-yemek-04-2_w1500_q70_op_op.webp"/>
        </div>
       </div>
      </ProductCarousel>
      <div class="detail border my-10" id="genelbilgi" key="1">
       <Tabs v-model="tabValue" class="w-full block">
        <template v-slot:tab="{ label }">{{ label }}</template>
        <TabBasePanel class="tab-pane" name="one" label="Ürün Bilgisi" v-slot="{ active }">
         <div class="py-6"> A - {{ active }} Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit.</div>
        </TabBasePanel>
        <TabBasePanel class="tab-pane" name="two" label="İade Şartları">
         <div class="py-6"> Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit.</div>
        </TabBasePanel>
        <TabBasePanel class="tab-pane" name="three" label="Taksit Seçenekleri">
         <div class="flex flex-wrap lg:flex-nowrap space-x-4 justify-start">
          <div class="w-full flex-wrap lg:w-1/3">
           <div class="payment-options-container" data-bank-name="Garanti BBVA">
            <div class="payment-options-logo">
             <div>
              <img class="inline-block" src="//st2.myideasoft.com/7.2.3.0/storefront/../images/cardlogos/cardlogo_1.png?revision=7.2.3.0-5" alt="Garanti BBVA">
             </div>
             <span>
              <strong>Garanti BBVA</strong>
             </span>
            </div>
            <div class="payment-options-content">
             <table class="table">
              <thead>
              <tr>
               <th class="border">Taksit Sayısı</th>
               <th class="border">Aylık Tutar</th>
               <th class="border">Toplam Tutar</th>
              </tr>
              </thead>
              <tbody>
              <tr>
               <td class="border">1</td>
               <td class="border">
                <strong> 4.723,08 </strong>
               </td>
               <td class="border">
                <strong> 4.723,08 </strong>
               </td>
              </tr>
              <tr>
               <td class="border">2</td>
               <td class="border"> 2.447,03</td>
               <td class="border"> 4.894,06</td>
              </tr>
              <tr>
               <td class="border">3</td>
               <td class="border"> 1.646,15</td>
               <td class="border"> 4.938,45</td>
              </tr>
              <tr>
               <td class="border">4</td>
               <td class="border"> 1.245,71</td>
               <td class="border"> 4.982,85</td>
              </tr>
              <tr>
               <td class="border">5</td>
               <td class="border"> 1.005,45</td>
               <td class="border"> 5.027,25</td>
              </tr>
              <tr>
               <td class="border">6</td>
               <td class="border"> 845,27</td>
               <td class="border"> 5.071,64</td>
              </tr>
              <tr>
               <td class="border">7</td>
               <td class="border"> 730,86</td>
               <td class="border"> 5.116,04</td>
              </tr>
              <tr>
               <td class="border">8</td>
               <td class="border"> 645,05</td>
               <td class="border"> 5.160,44</td>
              </tr>
              <tr>
               <td class="border">9</td>
               <td class="border"> 578,31</td>
               <td class="border"> 5.204,83</td>
              </tr>
              <tr>
               <td class="border">10</td>
               <td class="border"> 524,92</td>
               <td class="border"> 5.249,23</td>
              </tr>
              <tr>
               <td class="border">11</td>
               <td class="border"> 481,24</td>
               <td class="border"> 5.293,63</td>
              </tr>
              <tr>
               <td class="border">12</td>
               <td class="border"> 444,84</td>
               <td class="border"> 5.338,03</td>
              </tr>
              </tbody>
             </table>
            </div>
           </div>
          </div>
          <div class="w-full flex-wrap lg:w-1/3">
           <div class="payment-options-container" data-bank-name="Akbank">
            <div class="payment-options-logo">
             <div>
              <img class="inline-block" src="//st2.myideasoft.com/7.2.3.0/storefront/../images/cardlogos/cardlogo_2.png?revision=7.2.3.0-5" alt="Akbank">
             </div>
             <span>
              <strong>Akbank</strong>
             </span>
            </div>
            <div class="payment-options-content">
             <table class="table">
              <thead>
              <tr>
               <th class="border">Taksit Sayısı</th>
               <th class="border">Aylık Tutar</th>
               <th class="border">Toplam Tutar</th>
              </tr>
              </thead>
              <tbody>
              <tr>
               <td class="border">1</td>
               <td class="border">
                <strong> 4.723,08 </strong>
               </td>
               <td class="border">
                <strong> 4.723,08 </strong>
               </td>
              </tr>
              <tr>
               <td class="border">2</td>
               <td class="border"> 2.447,03</td>
               <td class="border"> 4.894,06</td>
              </tr>
              <tr>
               <td class="border">3</td>
               <td class="border"> 1.646,15</td>
               <td class="border"> 4.938,45</td>
              </tr>
              <tr>
               <td class="border">4</td>
               <td class="border"> 1.245,71</td>
               <td class="border"> 4.982,85</td>
              </tr>
              <tr>
               <td class="border">5</td>
               <td class="border"> 1.005,45</td>
               <td class="border"> 5.027,25</td>
              </tr>
              <tr>
               <td class="border">6</td>
               <td class="border"> 845,27</td>
               <td class="border"> 5.071,64</td>
              </tr>
              <tr>
               <td class="border">7</td>
               <td class="border"> 730,86</td>
               <td class="border"> 5.116,04</td>
              </tr>
              <tr>
               <td class="border">8</td>
               <td class="border"> 645,05</td>
               <td class="border"> 5.160,44</td>
              </tr>
              <tr>
               <td class="border">9</td>
               <td class="border"> 578,31</td>
               <td class="border"> 5.204,83</td>
              </tr>
              <tr>
               <td class="border">10</td>
               <td class="border"> 524,92</td>
               <td class="border"> 5.249,23</td>
              </tr>
              <tr>
               <td class="border">11</td>
               <td class="border"> 481,24</td>
               <td class="border"> 5.293,63</td>
              </tr>
              <tr>
               <td class="border">12</td>
               <td class="border"> 444,84</td>
               <td class="border"> 5.338,03</td>
              </tr>
              </tbody>
             </table>
            </div>
           </div>
          </div>
          <div class="w-full flex-wrap lg:w-1/3">
           <div class="payment-options-container" data-bank-name="T. İş Bankası">
            <div class="payment-options-logo">
             <div>
              <img class="inline-block" src="//st2.myideasoft.com/7.2.3.0/storefront/../images/cardlogos/cardlogo_3.png?revision=7.2.3.0-5" alt="T. İş Bankası">
             </div>
             <span>
              <strong>T. İş Bankası</strong>
             </span>
            </div>
            <div class="payment-options-content">
             <table class="table">
              <thead>
              <tr>
               <th class="border">Taksit Sayısı</th>
               <th class="border">Aylık Tutar</th>
               <th class="border">Toplam Tutar</th>
              </tr>
              </thead>
              <tbody>
              <tr>
               <td class="border">1</td>
               <td class="border">
                <strong> 4.723,08 </strong>
               </td>
               <td class="border">
                <strong> 4.723,08 </strong>
               </td>
              </tr>
              <tr>
               <td class="border">2</td>
               <td class="border"> 2.447,03</td>
               <td class="border"> 4.894,06</td>
              </tr>
              <tr>
               <td class="border">3</td>
               <td class="border"> 1.646,15</td>
               <td class="border"> 4.938,45</td>
              </tr>
              <tr>
               <td class="border">4</td>
               <td class="border"> 1.245,71</td>
               <td class="border"> 4.982,85</td>
              </tr>
              <tr>
               <td class="border">5</td>
               <td class="border"> 1.005,45</td>
               <td class="border"> 5.027,25</td>
              </tr>
              <tr>
               <td class="border">6</td>
               <td class="border"> 845,27</td>
               <td class="border"> 5.071,64</td>
              </tr>
              <tr>
               <td class="border">7</td>
               <td class="border"> 730,86</td>
               <td class="border"> 5.116,04</td>
              </tr>
              <tr>
               <td class="border">8</td>
               <td class="border"> 645,05</td>
               <td class="border"> 5.160,44</td>
              </tr>
              <tr>
               <td class="border">9</td>
               <td class="border"> 578,31</td>
               <td class="border"> 5.204,83</td>
              </tr>
              <tr>
               <td class="border">10</td>
               <td class="border"> 524,92</td>
               <td class="border"> 5.249,23</td>
              </tr>
              <tr>
               <td class="border">11</td>
               <td class="border"> 481,24</td>
               <td class="border"> 5.293,63</td>
              </tr>
              <tr>
               <td class="border">12</td>
               <td class="border"> 444,84</td>
               <td class="border"> 5.338,03</td>
              </tr>
              </tbody>
             </table>
            </div>
           </div>
          </div>
         </div>
        </TabBasePanel>
        <TabBasePanel class="tab-pane" name="four" label="Önerileriniz">
         <div class="py-6"> Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere
          blandit.
         </div>
        </TabBasePanel>
       </Tabs>
      </div>
     </div>
     <div class="w-full md:w-4/12 sticky top-36">
      <div class="border p-8">
       <div class="py-4">
        <h2 class="text-xl font-medium mb-2.5">22 AYAR KABURGA YÜZÜK BEYAZ ALTIN</h2>
        <div class="product-price flex flex-wrap items-center gap-2">
         <div class="hidden">
          <div class="discount-label">%20</div>
         </div>
         <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
           <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
            <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
           <span>4.89 <span class="text-slate-400 font-normal">(128)</span>
                    </span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="flex items-center">
           <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
            <circle cx="1" cy="1" r="1"/>
           </svg>
           <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"/>
            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
           </svg>
           Collingwood, Ontario
          </dd>
         </dl>
         <h1 class="text-xl font-bold mb-2">33.896,00 ₺</h1>
         <h1 class="line-through hidden">33.896,00 ₺</h1>
        </div>
        <p class="text-sm m-0">3.394,67 ₺ den başlayan</p>
        <div @click="select">Taksit Seçenekleri</div>
       </div>
       <div class="productdetails">
        <table>
         <tbody>
         <tr>
          <td>Kategori</td>
          <td>22 AYAR YÜZÜK</td>
         </tr>
         <tr>
          <td>Marka</td>
          <td>DURU KUYUMCULUK</td>
         </tr>
         <tr>
          <td>Stok Kodu</td>
          <td>GNTVY245_18304</td>
         </tr>
         </tbody>
        </table>
       </div>
       <div class="my-4 button flex overflow-hidden">
        <button class="p-2 w-full relative flex items-center justify-center text-white bg-[#0c3b5d] hover:bg-gray-50 hover:text-[#0c3b5d] border rounded-full">
         <span>Sepete Ekle</span>
        </button>
       </div>
       <div class="flex flex-wrap justify-between items-center ">
        <div class="flex flex-wrap items-center justify-center gap-2">
         <div>
          <span class="flaticon-whatsapp" style="font-size: 25px;color: #1ab52f;"></span>
         </div>
         <div class="flex flex-col">
          <span class="text-gray-400 text-sm">WhatsApp Sipariş</span>
          <a href="tel:+90 324 238 51 85" class="font-semibold">0 (542) 443 87 00</a>
         </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2">
         <div>
          <span class="flaticon-phone-call" style="font-size: 25px;color:#fb2121;"></span>
         </div>
         <div class="flex flex-col">
          <span class="text-gray-400 text-sm">Müşteri Hizmetleri</span>
          <a href="tel:+90 324 238 51 85" class="font-semibold">+90 (324) 238 51 85</a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8 detail" id="slider" key="2">
   <div class="w-full p-8 mx-auto text-gray-800 relative md:text-left">
    <div class="mb-4">
     <h2 class="text-center font-medium mb-6 text-2xl">ÜRÜNLERİMİZ</h2>
     <div class="title-shape"></div>
    </div>
    <div class="md:flex items-center">
     <Carousel v-if="getUyelik.length>0" :name="'productlist'" class="productlist"
               :options='{Dots:false,infinite: true, friction: 0.86,slidesPerPage: 1,Navigation: {prevTpl:"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11 5l-7 7 7 7\"/><path d=\"M4 12h16\"/></svg>",nextTpl:"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4 12h16\"/><path d=\"M13 5l7 7-7 7\"/></svg>"},Autoplay: false,center:false,fill:false}'>
      <figure itemscope itemtype="https://schema.org/Product" class="carousel__slide py-0 px-4 w-full md:w-1/4"
              v-for="(ImgData,Index) in getUyelik" :key="Index">
       <img itemprop="image" :src="ImgData.img" alt="" class="h-48 w-full"/>
       <figcaption class="mt-6">
        <h3 itemprop="name" class="text-lg font-semibold">Lucas</h3>
        <p>asdasd</p>
        <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
         <span itemprop="priceCurrency" content="TRY">$</span><span
            itemprop="price" content="1000.00">1,000.00</span>
         <link itemprop="availability" href="https://schema.org/InStock"/>
         In stock
        </div>
       </figcaption>
      </figure>
     </Carousel>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup>
import ProductCarousel from "@/components/Fancy/ProductCarousel.vue";
import Carousel from "@/components/Fancy/Carousel.vue";
import Fancybox from "@/components/Fancy/Fancybox.vue";
import Tabs from "@/components/Tab/Tabs.vue";
import {Tabs as TabBase, TabPanel as TabBasePanel} from "@/components/Tab/Tabs.js";

import {ref, onMounted} from "vue";


const tabValue = ref("one");
const getUyelik = [
 {
  title: 'ORION TALİA POMPASIZ 5 AŞAMALI',
  img: 'https://www.orionsuaritma.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-27-at-16.11.15-e1659104837681.jpeg',
 }, {
  title: 'ORION TALIA POMPALI 5 AŞAMALI',
  img: 'https://www.orionsuaritma.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-27-at-16.11.15-e1659104837681.jpeg',
 },
 {
  title: 'ORİON MELİA POMPASIZ 5 AŞAMALI',
  img: 'https://www.orionsuaritma.com/wp-content/uploads/2019/11/aqualine.png',
 },
 {
  title: 'ORİON MELİA POMPALI 5 AŞAMALI',
  img: 'https://www.orionsuaritma.com/wp-content/uploads/2019/11/asia1-scaled.jpg',
 },
 {
  title: 'ORİON MELİA POMPASIZ 5 AŞAMALI',
  img: 'https://www.orionsuaritma.com/wp-content/uploads/2019/11/aqualine.png',
 },
 {
  title: 'ORION TALIA POMPALI 5 AŞAMALI',
  img: 'https://www.orionsuaritma.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-27-at-16.11.15-e1659104837681.jpeg',
 },
]

function select() {
 tabValue.value = 'three'
 return document.getElementById('genelbilgi').scrollIntoView()
}

const currentSection = ref('')
onMounted(() => {
 const obServer = new IntersectionObserver((entries, animatedScrollObserver) => {
  entries.forEach((entry) => {
   if (entry.intersectionRatio > 0) {
    currentSection.value = entry.target.getAttribute('id')
   }
  })
 })
 document.querySelectorAll('.detail').forEach((section) => {
  console.log(section)
  obServer.observe(section)
 })
})
</script>
<style lang="scss">
main {
 display: flex
}

article {
 width: 75%;
 margin-bottom: 100px;
}

article section {
 margin-bottom: 500px
}

aside {
 width: 25%
}

aside > div {
 position: sticky;
 top: 20px;
 padding-left: 2em
}

aside > div > a {
 display: block;
 color: #2c3e50;
 text-decoration: none;
 border-left: 1px solid #ccc;
 padding-left: 2em
}

aside a.active {
 font-weight: bold;
 border-color: black
}


.productdetails {
 table {
  tr {
   td {
    padding: 8px 0;
    font-size: 14px;
    border: none;
    border-left: none !important;
    line-height: inherit;

    &:first-child {
     min-width: 110px;
     font-weight: 800;

     &::after {
      content: ":";
      float: right;
      padding-right: 5px;
     }
    }
   }
  }
 }
}


.tabs-container {
 .tab {
  padding: 8px 12px;
  color: gray;
  font-weight: 700;
  cursor: pointer;

  &.is-active {
   color: #536dfe;
   border-bottom: 2px solid #536dfe;
  }

  &.is-disabled {
   color: #bdbdbd;
  }
 }

 .tab-panels {
  position: relative;
  display: flex;
  // background-color: #ffffff;
  // border-bottom-left-radius: 10px;
  // border-bottom-right-radius: 10px;
  padding: 0;
 }
}

.tab-content {
 position: relative;
 display: flex;
 background-color: #ffffff;
 border-radius: 10px;
 padding: 0;
}

.tab-pane {
 width: 100%;
 padding: 0;
 flex-shrink: 0;
 // background-color: lightsalmon;
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity 0.3s;
}

.fade-leave-active {
 position: absolute;
}

.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}

.fade-enter-active {
 transition-delay: 0.3s;
}

.slide-fade-ltr-leave-active,
.slide-fade-ltr-enter-active,
.slide-fade-rtl-leave-active,
.slide-fade-rtl-enter-active {
 width: 100%;
 transition: opacity 0.3s ease-out,
 transform 0.3s ease-out;
}

.slide-fade-ltr-enter-active,
.slide-fade-rtl-enter-active {
 transition-delay: 0.3s / 4;
}

.slide-fade-ltr-leave-active,
.slide-fade-rtl-leave-active {
 z-index: 10;
 // opacity: 1;
 transform: translateX(0);
}

.slide-fade-rtl-enter-active,
.slide-fade-ltr-leave-to {
 z-index: 5;
 // opacity: 0;
 transform: translateX(100%);
}

.slide-fade-ltr-enter-active,
.slide-fade-rtl-leave-active {
 z-index: 5;
 // opacity: 0;
 transform: translateX(-100%);
}

.slide-fade-ltr-enter-to,
.slide-fade-rtl-enter-to {
 z-index: 10;
 // opacity: 1;
 transform: translateX(0);
}

.slide-fade-ltr-leave-active,
.slide-fade-rtl-leave-active {
 position: absolute;
}

.payment-options-container {
 font-size: 15px;
}

.payment-options-logo {
 padding: 1.6rem 0;
 text-align: center;
}

.payment-options-container .payment-options-logo img {
 max-width: 100%;
 max-height: 5rem;
}

.payment-options-container .payment-options-logo span {
 display: block;
 font-size: 1.4rem;
}

.payment-options-container .payment-options-logo strong {
 display: inline-block;
 margin: 0 0.2rem;
}

.payment-options-container .payment-options-content table th {
 vertical-align: middle;
 text-align: center;
 background: #fafafa;
}

.payment-options-container .payment-options-content table th, .payment-options-container .payment-options-content table td {
 padding: 0.5rem;
}

.payment-options-container .payment-options-content table th:nth-child(1), .payment-options-container .payment-options-content table td:nth-child(1) {
 text-align: center;
 width: 20%;
}

.payment-options-container .payment-options-content table th:nth-child(2), .payment-options-container .payment-options-content table td:nth-child(2) {
 text-align: right;
}

.payment-options-container .payment-options-content table th:nth-child(3), .payment-options-container .payment-options-content table td:nth-child(3) {
 text-align: right;
}


.discount-label {
 display: flex;
 align-items: center;
 justify-content: center;
 width: 48px;
 height: 29px;
 background: #fb2121;
 color: #fff;
 font-size: 18px;
 font-weight: 600;
 border-radius: 4px;
 z-index: 15;
}
</style>
