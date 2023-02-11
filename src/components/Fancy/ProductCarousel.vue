<template>
 <slot/>
</template>

<script>
import {Carousel, Fancybox} from '@fancyapps/ui';
import {Autoplay} from '@fancyapps/ui/dist/carousel.autoplay.esm.js';

Carousel.Plugins.Autoplay = Autoplay;
export default {
 name: "ProductCarousel",
 mounted() {
  const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
   Dots: false,
   Autoplay: false,
  });
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
   Sync: {
    target: mainCarousel,
    friction: 0,
   },
   Autoplay: false,
   Dots: false,
   Navigation: false,
   center: true,
   slidesPerPage: 1,
   infinite: false,
  });
  Fancybox.bind('[data-fancybox="gallery"]', {
   Thumbs: false,
   Carousel: {
    on: {
     change: (that) => {
      mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
       friction: 0,
      });
     },
    },
   },
  });
 }
}
</script>

<style lang="scss">
#mainCarousel {
 /*width: 600px;*/
 /*margin: 0 auto 1rem auto;*/
 --carousel-button-color: #170724;
 --carousel-button-bg: #fff;
 --carousel-button-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%),
 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
 --carousel-button-svg-width: 20px;
 --carousel-button-svg-height: 20px;
 --carousel-button-svg-stroke-width: 2.5;
}

#mainCarousel .carousel__slide {
 width: 100%;
 padding: 0;
}

#mainCarousel .carousel__button.is-prev {
 left: -1.5rem;
}

#mainCarousel .carousel__button.is-next {
 right: -1.5rem;
}

#mainCarousel .carousel__button:focus {
 outline: none;
 box-shadow: 0 0 0 4px #A78BFA;
}

#thumbCarousel .carousel__slide {
 padding: 0;
 margin: 0.25rem;
 width: 96px;
 height: 64px;
}

#thumbCarousel .carousel__slide img {
 width: 100%;
 height: 100%;
 object-fit: cover;
 border-radius: 4px;
}

#thumbCarousel .carousel__slide {
 cursor: pointer;
 &:after {
  border: 2px solid rgba(34, 213, 233, .96);
  border-radius: 4px;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  //transition: opacity .15s;
  transition: all 0.3s ease-in-out 0s;
 }

 &.is-nav-selected {
  &:after {
   opacity: .92;
  }
 }
}
</style>