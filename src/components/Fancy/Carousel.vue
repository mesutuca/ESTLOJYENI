<template>
		<div :id="name" class="carousel">
				<slot/>
		</div>
</template>

<script>
import {Carousel} from '@fancyapps/ui';
import {Autoplay} from '@fancyapps/ui/dist/carousel.autoplay.esm.js';

Carousel.Plugins.Autoplay = Autoplay;
export default {
		name: "Carousel",
		props: {
				name: String,
				options: {
						type: Object
				}
		},
		methods: {
				dataOptions() {
						return this.options
				}
		},
		mounted() {
				return new Carousel(document.querySelector("#" + this.name),
									this.dataOptions(),
				);
		}
}
</script>

<style scoped>

</style>
