<template>

	<header class="sticky top-0 z-50 md:relative bg-white">
		<div class="container max-w-9xl h-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="flex flex-row items-center justify-between">
				<div class="lg:w-4/12">
					<div class="flex items-center">
						<button type="button" id="hamburger"
														class="inline-flex md:hidden items-center justify-center focus:outline-none py-1 pr-2 pl-2"
														:class="{'is-active':openMenu}" @click="showMenu">
        <span class="ham__icon">
         <span></span>
         <span></span>
         <span></span>
         </span>
						</button>
						<div class="logo pr-4">
							<router-link to="/">
								<picture>
									<source media="(max-width:320px)"
																	srcset="https://st.ourhtmldemo.com/new/universal/images/logo/logo.pnghttps://www.weltew.com/assets/images/weltew-logo-125.svg">
									<source media="(max-width:375px)" srcset="https://st.ourhtmldemo.com/new/universal/images/logo/logo.png">
									<source media="(max-width:1280px)" srcset="https://st.ourhtmldemo.com/new/universal/images/logo/logo.png">
									<img src="https://st.ourhtmldemo.com/new/universal/images/logo/logo.png" alt="Weltew Home">
								</picture>
							</router-link>
						</div>
					</div>
				</div>
				<div class="lg:w-9/12 justify-end items-center gap-4 hidden md:flex">
					<div class="flex flex-row items-center gap-2">
						<div class="border-2 h-12 w-12 flex items-center justify-center">
							<i class="fas fa-phone-alt"></i>
						</div>
						<div class="flex flex-col">
							<span class="font-bold">Call Us Now</span>
							<span>1800-45-678-9012</span>
						</div>
					</div>
					<div class="flex flex-row items-center gap-2">
						<div class="border-2 h-12 w-12 flex items-center justify-center">
							<i class="fas fa-wifi"></i>
						</div>
						<div class="flex flex-col">
							<span class="font-bold">Call Us Now</span>
							<span>1800-45-678-9012</span>
						</div>
					</div>
					<div>
						<button class="border-2 rounded px-8 py-3">CONSULTATION</button>
					</div>
				</div>
			</div>
		</div>
	</header>
	<Teleport to="body">
		<ShopCart :show="showCart" @close="showCart = false"/>
	</Teleport>
</template>

<script setup>
import ShopCart from "@/views/ShopCart.vue";
import {inject, provide, ref, watch, nextTick} from "vue";

const screenType = inject('screenType')
const showCart = ref(false)
const users = ref([
	{
		id: 1,
		text: "Learn JavaScript",
		done: 'https://www.weltew.com/uploads/2022/06/milano-kose-relax-01_h60_q70_op.webp'
	},
	{
		id: 2,
		text: "Learn",
		done: 'https://www.weltew.com/uploads/2022/06/milano-kose-large-01_h60_q70_op.webp'
	},
	{
		id: 3,
		text: "Play around in JSFiddle",
		done: 'https://www.weltew.com/uploads/2020/11/florya-orta-sehpa-1_h60_q70_op.webp'
	},
	{
		id: 4,
		text: "Build something awesome",
		done: 'https://www.weltew.com/uploads/2021/06/new-zirkon12215-1_h60_q70_op.webp'
	},
	{
		id: 5,
		text: "asd",
		done: 'https://www.weltew.com/uploads/2021/06/new-zirkon12215-1_h60_q70_op.webp'
	},
	{
		id: 6,
		text: "bb",
		done: 'https://www.weltew.com/uploads/2021/06/new-zirkon12215-1_h60_q70_op.webp'
	}
])
const filteredUsers = ref([])
const search = ref()
const searchref = ref()
const isOpen = ref()
const searchButton = ref(false);


function inputChanged() {

	filteredUsers.value = []
	const filtered = users.value.filter((user) => {
		return search.value.toLowerCase().split(" ").every(v => user.text.toLowerCase().includes(v))
	});
	isOpen.value = true
	filteredUsers.value.push(...filtered)
}

const showMobile = ref(false)

watch(() => showMobile.value, () => {
	if (showMobile.value) {
		document.body.classList.add('overflow-hidden')
	} else {
		document.body.classList.remove('overflow-hidden')
	}
});

function showSearch() {
	searchButton.value = !searchButton.value
	nextTick(() => {
		focusInput();
	});
}

function focusInput() {
	searchref.value.focus();
}

const openMenu = inject('openMenu')

function showMenu() {
	openMenu.value = !openMenu.value
}

function hideMethod() {
	isOpen.value = false
}
</script>

<style scoped>


@media only screen and (max-width: 1024px) {
	.search-box {
		display: block;
		position: absolute;
		top: 69px;
		left: 0;
		margin: 0 !important;
		width: 100%;
		background: #fff;
		padding: 0;
		border-bottom: 1px solid #e2e2e2;
		z-index: 9;
	}

	input {
		border: 0;
		border-radius: 0;
	}
}

.mobile__seperator {
	width: 1px;
	height: 24px;
	background: #e9e9e9;
}

.cart-badge {
	width: 16px;
	height: 16px;
	background: #ed0202;
	border-radius: 50%;
	display: block;
	position: absolute;
	right: -0.5rem;
	top: 0;
	text-align: center;
	font-size: 10px;
	color: #fff;
	font-family: cursive;
}
</style>