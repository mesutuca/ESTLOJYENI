<template>
 <Carousel v-if="getUyelik.length>0" :name="'slider1'" class="homeSlider"
           :options="{Dots:true,infinite: true, friction: 0.86,slidesToSlide: 1,Navigation: true,Autoplay: false,Wheel:true}">
  <div class="carousel__slide" v-for="(ImgData,Index) in getUyelik" :key="Index">
   <img :src="ImgData.img" :alt="ImgData.title">
  </div>
 </Carousel>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <div class="hidden">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam voluptatibus!
 </div>

</template>
<script setup>
import Carousel from "@/components/Fancy/Carousel.vue";
import {ref} from "vue";

const getUyelik = [
 {
  title: 'asd',
  img: 'https://puretech.com.tr/en/wp-content/uploads/sites/2/slider1/Yakut-banner-e.jpeg',
 }, {
  title: 'asd',
  img: 'https://puretech.com.tr/en/wp-content/uploads/sites/2/2021/12/Cocuklu-Banner-e.jpg',
 },
 {
  title: 'asd',
  img: 'https://st3.myideasoft.com/idea/kc/78/myassets/products/242/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58lss8005y0y0-2_min.jpg?revision=1672816890',
 },
 {
  title: 'asd',
  img: 'https://st3.myideasoft.com/idea/kc/78/myassets/products/242/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58lss8005y0y0-2_min.jpg?revision=1672816890',
 },
 {
  title: 'asd',
  img: 'https://st3.myideasoft.com/idea/kc/78/myassets/products/242/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58lss8005y0y0-2_min.jpg?revision=1672816890',
 },
 {
  title: 'asd',
  img: 'https://st3.myideasoft.com/idea/kc/78/myassets/products/242/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58lss8005y0y0-2_min.jpg?revision=1672816890',
 },
]
const getUyelik2 = [
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
]
</script>
<style>

</style>