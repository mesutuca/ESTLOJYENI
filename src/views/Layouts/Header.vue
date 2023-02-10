<template>
		<header class="sticky top-0 bg-white z-50 border-b md:relative py-8">
				<div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div class="flex flex-row items-center justify-between">
								<div class="logo lg:w-3/12 py-2">
										<router-link to="/">
												<img src="https://www.weltew.com/assets/images/weltew-logo.svg" class="w-36 sm:w-52" alt="">
										</router-link>
								</div>
								<div class="lg:w-5/12">
										<form>
												<div class="relative">
														<input
																			type="text" tabindex="0" @focus="isOpen===true" @focusout="isOpen===false"
																			placeholder="Aradığınız ürün ?" v-model="search" ref="inputs" @keyup="inputChanged"
																			class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white">
														<button
																			class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors">
																<svg aria-hidden="true" class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none"
																					stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
																		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
																								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
																		</path>
																</svg>
														</button>
												</div>
												<div class="result-search block bg-white w-full overflow-auto	max-h-64 absolute">
														<div class="sticky top-0 bg-white z-20 border-b px-4 sm:px-6 lg:px-8 py-2"
																			v-show="filteredUsers.length>0">
																{{ filteredUsers.length }} Sonuç Bulundu
														</div>
														<a href="" v-for="(user, i) in filteredUsers" :key="i" v-show="isOpen"
																	class="flex items-center border-b px-4 sm:px-6 lg:px-8">
																<div class="images flex items-center">
																		<img :src="user.done" alt="">
																</div>
																<div class="flex flex-col">
																		<span>{{ user.text }}</span>
																		<small>L Koltuk Takımı ve Köşe Takımı Fiyatları Modelleri</small>
																</div>
														</a>
												</div>
										</form>
								</div>
								<div class="lg:w-4/12 flex justify-end">
										<div class="lg:flex flex-wrap items-center justify-center mr-0 lg:mr-9 hidden">
												<div class="mr-4 hover:scale-125 ease-in-out duration-700">
														<span class="flaticon-phone-call" style="font-size: 34px;"></span>
												</div>
												<div class="flex flex-col">
														<span class="text-gray-400">Bizi Arayın</span>
														<a href="tel:+90 324 238 51 85">+90 324 238 51 85</a></div>
										</div>
										<button class="flex items-center relative" @click="showCart = true">
												<span class="relative inline-block">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-8 text-gray-200">
																<path xmlns="http://www.w3.org/2000/svg"
																						d="M128 128V96C128 42.98 170.1 0 224 0C277 0 320 42.98 320 96V128H400C426.5 128 448 149.5 448 176V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V176C0 149.5 21.49 128 48 128H128zM160 128H288V96C288 60.65 259.3 32 224 32C188.7 32 160 60.65 160 96V128zM48 160C39.16 160 32 167.2 32 176V416C32 451.3 60.65 480 96 480H352C387.3 480 416 451.3 416 416V176C416 167.2 408.8 160 400 160H320V240C320 248.8 312.8 256 304 256C295.2 256 288 248.8 288 240V160H160V240C160 248.8 152.8 256 144 256C135.2 256 128 248.8 128 240V160H48z"/>
														</svg>
														<span
																			class="absolute top-0 -right-2 px-1.5 py-1 text-xs font-medium leading-none text-white transform bg-red-600 rounded-full">0</span>
												</span>
												<span class="block ml-4">
														<strong class="block">160,00 ₺</strong>
												</span>
										</button>
								</div>
						</div>
				</div>
		</header>
		<Teleport to="body">
				<ShopCart :show="showCart" @close="showCart = false"/>
		</Teleport>
</template>

<script>
import ShopCart from "@/views/ShopCart.vue";

export default {
		name: "Header",
		components: {ShopCart},
		data() {
				return {
						showCart: false,
						users: [
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
						],
						searchButton: false,
						filteredUsers: [],
						search: '',
						arrowCounter: -1,
						isOpen: false,
				}
		},

		methods: {
				inputChanged() {
						this.filteredUsers = []
						const filtered = this.users.filter((user) => {
								return this.search.toLowerCase().split(" ").every(v => user.text.toLowerCase().includes(v))
						});
						this.isOpen = true
						this.filteredUsers.push(...filtered)
				}
		}
}
</script>

<style scoped>

</style>