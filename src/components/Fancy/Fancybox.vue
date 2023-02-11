<template>
 <slot/>
</template>
<script>
import {Fancybox} from '@fancyapps/ui';

export default {
 name: "Fancybox",
 mounted() {
  Fancybox.bind('[data-fancybox="gallery"]', {
   Image: {
    wheel: 'slide'
   },
   Toolbar: {
    display: [
     {id: "prev", position: "center"},
     {id: "counter", position: "center"},
     {id: "next", position: "center"},
     "zoom",
     "slideshow",
     "fullscreen",
     "download",
     "thumbs",
     "close",
    ],
   },
   caption: function (fancybox, carousel, slide) {
    return (`${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption);
   },
  });
 }
}
</script>

<style scoped>

</style>
