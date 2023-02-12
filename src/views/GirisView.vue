<template>
		<div class="flex sm:items-center sm:justify-center min-h-screen min-w-screen md:p-6 ">
				<div class="flex md:w-full w-full md:max-w-8xl sm:rounded-2xl sm:shadow overflow-hidden bg-white">
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
																		<RouterLink to="/giris" class="block relative px-2 py-4">Üye Girişi</RouterLink>
																</li>
																<li class="inline-block">
																		<RouterLink to="/kayit" class="block relative px-2 py-4">Üye Ol</RouterLink>
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
																					class="block w-full pl-4 pr-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
																					id="my-textfield" type="text" placeholder="E-Postanız">
														</div>
												</div>
												<div class="md:flex mb-5 px-12 items-center">
														<div class="md:w-1/3">
																<label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0"
																							for="password">Şifre Belirleyin</label>
														</div>
														<div class="md:w-2/3">
																<div class="relative mb-2">
																		<input :type="showPasswordField?'password':'text'" id="password" v-model="password"
																									class="w-full pl-3 pr-10 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
																									placeholder="Şifre Belirleyin" type="password">
																		<button
																							class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors"
																							@click.prevent="showPasswordField=!showPasswordField">

																				<svg v-if="showPasswordField" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24"
																									height="24" fill="#94a3b8">
																						<path
																											d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
																				</svg>
																				<svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24"
																									fill="#94a3b8">
																						<path
																											d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L524 384.1c41.9-44 70.2-93.9 84-128.1C578 181.3 478.4 32 320 32c-66.9 0-123.2 26.6-168.3 63L48.4 14.8zM222.5 150c25.6-23.6 59.9-38 97.5-38c79.5 0 144 64.5 144 144c0 24.7-6.2 47.9-17.1 68.2l-38.7-30.1c5.1-11.7 7.9-24.6 7.9-38.1c0-53-43-96-96-96c-6.4 0-12.7 .6-18.8 1.8l11.6 58.2L222.5 150zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L85.7 163.5C60.2 197.1 42.1 230.8 32 256c30 74.7 129.6 224 288 224c46.9 0 88.6-13.1 124.9-33.4L373 389.9zM320 352c1.6 0 3.2 0 4.8-.1l-99.1-78.1C234 318.3 273.1 352 320 352z"/>
																				</svg>
																		</button>
																</div>
														</div>
												</div>
												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3"></div>
														<div class="md:w-2/3">
																<button
																					class="shadow rounded-full w-full bg-[#0c3b5d] border-transparent border-2 hover:bg-[#fff] hover:border-[#0c3b5d] hover:text-[#0c3b5d] focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4"
																					type="button">
																		GİRİŞ YAP
																</button>
														</div>
												</div>
												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3">
														</div>
														<div class="md:w-2/3" >
																<div class="grid grid-cols-2">
																		<div class="flex items-center gap-1 text-center">
																				<input type="checkbox" id="remember-me">
																				<label for="remember-me" class="cursor-pointer">Beni Hatırla</label>
																		</div>
																		<div class="text-end">
																				<RouterLink to="/sifremi-unuttum" class="block relative underline">Şifremi unuttum</RouterLink>
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
																							class="shadow rounded-full w-full bg-[#0080bb] border-transparent border-2 hover:bg-[#fff] hover:border-[#0080bb] hover:text-[#0080bb] focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4"
																							type="button">
																				Facebook ile Giriş Yap
																		</button>
																		<button
																							class="shadow rounded-full w-full bg-[#d64c3e] border-transparent border-2 hover:bg-[#fff] hover:border-[#d64c3e] hover:text-[#d64c3e] focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4"
																							type="button">
																				Google ile Giriş Yap
																		</button>
																</div>
														</div>
												</div>
										</form>
								</div>
						</div>
						<div class="relative hidden md:flex flex-auto w-full items-center justify-center overflow-hidden">
								<img src="https://www.weltew.com/assets/images/login.png" alt="">
						</div>
				</div>
		</div>
</template>

<script>
export default {
		name: "GirisView",
		data() {
				return {
						password: '',
						showPasswordField: true
				}
		}
}
</script>

<style scoped>

</style>