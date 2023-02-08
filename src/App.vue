<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

		<div class="flex flex-col flex-auto h-fit	items-center sm:justify-center min-w-0 md:p-6">
				<div class="flex md:w-full w-full md:max-w-6xl sm:rounded-2xl sm:shadow overflow-hidden bg-white">
						<!--    sm:w-auto py-8 px-4 sm:p-12 md:p-16-->
						<div class="w-full">
								<div class="w-full py-10">
										<div>
												<div class="mb-2 flex items-center justify-center">
														<img src="https://www.weltew.com/assets/images/weltew-logo.svg" alt="Weltew Home" width="290" height="28">
												</div>
												<div class=" mb-5 text-center border-b">
														<ul>
																<li class="inline-block">
																		<a href="" class="block relative px-2 py-4">Üye Girişi</a>
																</li>
																<li class="inline-block">
																		<a href="" class="block relative px-2 py-4">Üye Ol</a>
																</li>
														</ul>
												</div>
										</div>
										<form>
												<div class="md:flex mb-5 px-12 items-center">
														<div class="md:w-1/3">
																<label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0"
																							for="my-textfield">E-Postanız</label>
														</div>
														<div class="md:w-2/3">
																<input
																					class="block text-gray-700 rounded-sm border border-gray-200 block w-full focus:outline-cyan-500 focus:bg-white focus:border-green-700 px-4 py-2.5 "
																					id="my-textfield" type="text" placeholder="E-Postanız">
														</div>
												</div>
												<div class="md:flex mb-5 px-12 items-center">
														<div class="md:w-1/3">
																<label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0"
																							for="my-textfield">Şifre</label>
														</div>
														<div class="md:w-2/3">
																<input
																					class="block text-gray-700 rounded-sm border border-gray-200 block w-full focus:outline-cyan-500 focus:bg-white focus:border-green-700 px-4 py-2.5 "
																					id="my-textfield" type="text" placeholder="Şifre">
														</div>
												</div>


												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3"></div>
														<div class="md:w-2/3">
																<button
																					class="shadow rounded-full w-full bg-[#0c3b5d] border-transparent border-2 hover:bg-[#fff] hover:border-[#0c3b5d] hover:text-[#0c3b5d] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
																					type="button">
																		GİRİŞ YAP
																</button>
														</div>
												</div>
												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3">
														</div>
														<div class="md:w-2/3">
																<div class="grid grid-cols-2">
																		<div>
																				<input type="checkbox">
																				<label for="">Beni Hatırla</label>
																		</div>
																		<div>
																				<a href="">Şifremi unuttum</a>
																		</div>
																</div>
														</div>
												</div>
												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3">
														</div>
														<div class="md:w-2/3">
																<div class="flex items-center">
																		<div class="flex-auto mt-px border-t"></div>
																		<div class="mx-2 text-secondary">ya da</div>
																		<div class="flex-auto mt-px border-t"></div>
																</div>
														</div>
												</div>
												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3"></div>
														<div class="md:w-2/3">
																<div class="flex flex-col gap-3">
																		<button
																							class="shadow rounded-full w-full bg-[#0080bb] border-transparent border-2 hover:bg-[#fff] hover:border-[#0080bb] hover:text-[#0080bb] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
																							type="button">
																				Facebook ile Giriş Yap
																		</button>
																		<button
																							class="shadow rounded-full w-full bg-[#d64c3e] border-transparent border-2 hover:bg-[#fff] hover:border-[#d64c3e] hover:text-[#d64c3e] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
																							type="button">
																				Google ile Giriş Yap
																		</button>
																</div>
														</div>
												</div>
										</form>
								</div>
						</div>
						<div class="relative hidden md:flex flex-auto w-full items-center justify-center h-full overflow-hidden dark:border-l">
								<img src="https://www.weltew.com/assets/images/login.png" alt="">
						</div>
				</div>
		</div>

</template>

<style scoped>

</style>
