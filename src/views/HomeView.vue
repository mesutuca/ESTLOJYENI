<template>
	<div>
		<HomeCarousel>
			<div id="productCarousel" class="f-carousel w-full">
				<div
					class="f-carousel__slide"
					data-thumb-src="https://fancyapps.com/img/car_1_s.jpg"
					data-fancybox="gallery"
					data-src="https://fancyapps.com/img/car_1_b.jpg"
				>
					<div>TİTLE</div>
					<img
						alt=""
						width="1600"
						height="1067"
						data-lazy-src="https://fancyapps.com/img/car_1_b.jpg"
					/>
				</div>
				<div
					class="f-carousel__slide"
					data-thumb-src="https://fancyapps.com/img/car_2_s.jpg"
					data-fancybox="gallery"
					data-src="https://fancyapps.com/img/car_2_b.jpg"
				>
					<div>TİTLE</div>
					<img
						alt=""
						width="1600"
						height="1067"
						data-lazy-src="https://fancyapps.com/img/car_2_b.jpg"
					/>
				</div>
				<div
					class="f-carousel__slide"
					data-thumb-src="https://fancyapps.com/img/car_3_s.jpg"
					data-fancybox="gallery"
					data-src="https://fancyapps.com/img/car_3_b.jpg"
				>
					<div>TİTLE</div>
					<img
						alt=""
						width="1600"
						height="1067"
						data-lazy-src="https://fancyapps.com/img/car_3_b.jpg"
					/>
				</div>
				<div
					class="f-carousel__slide"
					data-thumb-src="https://fancyapps.com/img/car_4_s.jpg"
					data-fancybox="gallery"
					data-src="https://fancyapps.com/img/car_4_b.jpg"
				>
					<div>TİTLE</div>
					<img
						alt=""
						width="1600"
						height="1067"
						data-lazy-src="https://fancyapps.com/img/car_4_b.jpg"
					/>
				</div>
				<div
					class="f-carousel__slide"
					data-thumb-src="https://fancyapps.com/img/car_5_s.jpg"
					data-fancybox="gallery"
					data-src="https://fancyapps.com/img/car_5_b.jpg"
				>
					<div>TİTLE</div>
					<img
						alt=""
						width="1600"
						height="1067"
						data-lazy-src="https://fancyapps.com/img/car_5_b.jpg"
					/>
				</div>
				<div
					class="f-carousel__slide"
					data-thumb-src="https://fancyapps.com/img/car_6_s.jpg"
					data-fancybox="gallery"
					data-src="https://fancyapps.com/img/car_6_b.jpg"
				>
					<div>TİTLE</div>
					<img
						alt=""
						width="1600"
						height="1067"
						data-lazy-src="https://fancyapps.com/img/car_6_b.jpg"
					/>
				</div>
				<div
					class="f-carousel__slide"
					data-thumb-src="https://fancyapps.com/img/car_7_s.jpg"
					data-fancybox="gallery"
					data-src="https://fancyapps.com/img/car_7_b.jpg"
				>
					<div>TİTLE</div>
					<img
						alt=""
						width="1600"
						height="1067"
						data-lazy-src="https://fancyapps.com/img/car_7_b.jpg"
					/>
				</div>
				<div
					class="f-carousel__slide"
					data-thumb-src="https://fancyapps.com/img/car_8_s.jpg"
					data-fancybox="gallery"
					data-src="https://fancyapps.com/img/car_8_b.jpg"
				>
					<div>TİTLE</div>
					<img
						alt=""
						width="1600"
						height="1067"
						data-lazy-src="https://fancyapps.com/img/car_8_b.jpg"
					/>
				</div>
				<div
					class="f-carousel__slide"
					data-thumb-src="https://fancyapps.com/img/car_9_s.jpg"
					data-fancybox="gallery"
					data-src="https://fancyapps.com/img/car_9_b.jpg"
				>
					<div>TİTLE</div>
					<img
						alt=""
						width="1600"
						height="1067"
						data-lazy-src="https://fancyapps.com/img/car_9_b.jpg"
					/>
				</div>
			</div>
		</HomeCarousel>

		<Carousel v-if="getUyelik.length>0" :name="'homeSlider'" class="homeSlider hidden"
												:options="{Dots:true,infinite: true, friction: 0.86,slidesToSlide: 1,Navigation: true,Autoplay: false,Wheel:true}">
			<div class="f-carousel__slide" v-for="(ImgData,Index) in getUyelik" :key="Index">
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
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dolores illo, iure neque numquam provident vel
			voluptatibus? Commodi dicta dolorem explicabo maiores nesciunt perspiciatis quae repellendus ullam veniam
			voluptatibus!
		</div>
	</div>

</template>
<script setup>
import Carousel from "@/components/Fancy/Carousel.vue";
import {ref} from "vue";
import HomeCarousel from "@/components/Fancy/HomeCarousel.vue";

const getUyelik = [
	{
		title: 'asd',
		img: 'https://st.myideasoft.com/idea/kc/78/myassets/slider_pictures/pictures_1_2.jpg?revision=1676476564',
	},
	{
		title: 'asd',
		img: 'https://st.myideasoft.com/idea/kc/78/myassets/slider_pictures/pictures_1_4.jpg?revision=1676476564',
	},
	{
		title: 'asd',
		img: 'https://st.myideasoft.com/idea/kc/78/myassets/slider_pictures/pictures_1_7.jpg?revision=1676476564',
	}
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
<style lang="scss">
.homeSlider {
	&.has-dots {
		margin: 0;
	}

	.carousel__slide {
		padding: 0;
		width: var(--carousel-slide-width, 100%);
	}

	.carousel__button svg {
		stroke-width: 3px;
		stroke-linejoin: revert;
		stroke-linecap: butt;
		width: var(--carousel-button-svg-width, 80%);
		height: var(--carousel-button-svg-height, 80%);
		stroke: #fec438;
	}

	.carousel__dots {
		color: #fec438;
		top: calc(90% + 0.5rem);

		.carousel__dot {

			transition-duration: 0.4s;
			-webkit-transition-duration: 0.4s;
			-moz-transition-duration: 0.4s;
			-ms-transition-duration: 0.4s;
			-o-transition-duration: 0.4s;

			&:after {
				width: 10px;
				height: 10px;
				opacity: 1;
			}

			&.is-selected {
				width: 36px;

				&:after {
					width: 30px;
					border-radius: 10px;
				}
			}
		}
	}


}
</style>
