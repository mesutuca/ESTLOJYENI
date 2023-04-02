<template>
  <slot/>
</template>

<script>


import {Carousel} from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import {Thumbs} from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';
import {Fancybox} from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';

// import {Autoplay} from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm'
//
// Carousel.Plugins.Autoplay = Autoplay;
export default {
  name: "ProductCarousel",
  mounted() {
    new Carousel(document.getElementById('productCarousel'),
        {
          infinite: true,
          Dots: false,
          Thumbs: {
            type: 'classic',
            Carousel: {
              slidesPerPage: 1,
              Navigation: true,
              center: true,
              fill: true,
              dragFree: true,
            },
          },
        },
        {Thumbs}
    );

    Fancybox.bind('[data-fancybox="gallery"]', {
      idle: false,
      compact: false,
      dragToClose: false,

      animated: false,
      showClass: 'f-fadeSlowIn',
      hideClass: false,

      Carousel: {
        infinite: false,
      },

      Images: {
        zoom: false,
        Panzoom: {
          maxScale: 1.5,
        },
      },

      Toolbar: {
        absolute: true,
        display: {
          left: [],
          middle: [],
          right: ['close'],
        },
      },

      Thumbs: {
        type: 'classic',
        Carousel: {
          axis: 'x',

          slidesPerPage: 1,
          Navigation: true,
          center: true,
          fill: true,
          dragFree: true,

          breakpoints: {
            '(min-width: 640px)': {
              axis: 'y',
            },
          },
        },
      },
    });
  }
}
</script>

<style lang="scss">
@import '@fancyapps/ui/dist/carousel/carousel.css';
@import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';
@import '@fancyapps/ui/dist/fancybox/fancybox.css';
@import "src/assets/productSlider.scss";
</style>