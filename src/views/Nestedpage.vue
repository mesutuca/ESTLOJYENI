<template>
		<div class="container max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
				<div class="md:flex items-start">
						<div class="w-full md:w-5/12 sticky top-16">
								<div class="bg-white px-8">
										<ul class="space-y-6 py-6 widget-navigation w-full">
												<li class="navigation-item">
														<router-link custom to="/hesabim" v-slot="{href, navigate, isActive, isExactActive}" key="1">
																<a @click.stop="showDropdown('hesabim')" class="item cursor-pointer"
																			:class="{ 'uk-active active': isActive || isExactActive || subIsActive('/hesabim') }"
																>
																		<div class="siparis icon-size"></div>
																		<span>Sipariş ve İadeler</span>
																</a>
														</router-link>
														<ul class="widget-navigation-dropdown ml-2.5 border-l-[3px] pl-3">
																<li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
																		<router-link to="/hesabim/uyelik-bilgilerim">Üyelik bilgilerim</router-link>
																</li>
																<li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
																		<router-link to="/hesabim/sifre-degisikligi">Şifre Değişikliği</router-link>
																</li>
																<li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
																		<router-link to="/hesabim/iletisim-tercihlerim">İletişim tercihlerim</router-link>
																</li>
																<li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
																		<router-link to="/hesabim/kayitli-kartlarim">Kayıtlı kartlarım</router-link>
																</li>
																<li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
																		<router-link to="/hesabim/iban">IBAN bilgilerim</router-link>
																</li>
																<li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
																		<router-link to="/hesabim/adreslerim">Adreslerim</router-link>
																</li>
														</ul>
												</li>
												<li class="navigation-item">
														<router-link custom to="/hesabim/siparislerim" v-slot="{href, navigate, isActive, isExactActive}" key="2">
																<a @click.stop="showDropdown('siparislerim')" class="item cursor-pointer"
																			:class="{ 'uk-active active': isActive || isExactActive || subIsActive('/hesabim/siparislerim') }"
																>
																		<div class="siparis icon-size"></div>
																		<span>Sipariş ve İadeler</span>
																</a>
														</router-link>
														<ul class="widget-navigation-dropdown ml-2.5 border-l-[3px] pl-3">
																<li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
																		<router-link to="/hesabim/siparislerim">Siparişlerim</router-link>
																</li>
																<li class="relative ml-3 before:absolute before:top-0 before:bottom-0 before:-left-6 before:w-5 before:h-[2px] before:my-auto before:bg-gray-200 ">
																		<router-link to="/hesabim/iade-ve-iptal-taleplerim">İade ve İptal taleplerim</router-link>
																</li>
														</ul>
												</li>

												<li class="navigation-item">
														<a class="item">
																<div class="cikis icon-size"></div>
																<span>Soru ve Taleplerim</span>
														</a>
												</li>
												<li class="navigation-item">
														<a class="item">
																<div class="cikis icon-size"></div>
																<span>Çıkış yap</span>
														</a>
												</li>

										</ul>
								</div>
						</div>
						<div class="w-full md:w-9/12 px-8">
								<div class="bg-white px-8">
										<div class="px-4 py-4">
												<router-view/>
										</div>
								</div>
						</div>
				</div>
		</div>

</template>

<script>
export default {
		name: "Nestedpage",
		data() {
				return {
						showName: '',
				}
		},
		methods: {
				showDropdown(input) {

				},
				subIsActive(input) {
						console.log(input, 'input')
						const paths = Array.isArray(input) ? input : [input]
						return paths.some(path => {
								return this.$route.path.indexOf(path) === 0 // current path starts with this path string
						})
				}
		}
}
</script>

<style scoped>

</style>