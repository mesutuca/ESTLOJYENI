<template>
	<slot/>
</template>

<script>

import {Carousel} from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import {Thumbs} from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';

export default {
	name: "HomeCarousel",
	mounted() {
		new Carousel(document.getElementById('productCarousel'),
			{
				infinite: true,
				Dots: false,
			}
		);
	}
}
</script>

<style scoped>

</style>