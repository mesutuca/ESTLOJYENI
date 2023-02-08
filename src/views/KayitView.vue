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
																							for="name">Adınız</label>
														</div>
														<div class="md:w-2/3">
																<input
																					class="block text-gray-700 rounded-sm border border-gray-200 block w-full focus:outline-cyan-500 focus:bg-white focus:border-green-700 px-4 py-2.5 "
																					id="name" type="text" placeholder="Adınız">
														</div>
												</div>
												<div class="md:flex mb-5 px-12 items-center">
														<div class="md:w-1/3">
																<label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0"
																							for="subname">Soyadınız</label>
														</div>
														<div class="md:w-2/3">
																<input
																					class="block text-gray-700 rounded-sm border border-gray-200 block w-full focus:outline-cyan-500 focus:bg-white focus:border-green-700 px-4 py-2.5 "
																					id="subname" type="text" placeholder="Soyadınız">
														</div>
												</div>
												<div class="md:flex mb-5 px-12 items-center">
														<div class="md:w-1/3">
																<label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0"
																							for="email">E-Postanız</label>
														</div>
														<div class="md:w-2/3">
																<input
																					class="block text-gray-700 rounded-sm border border-gray-200 block w-full focus:outline-cyan-500 focus:bg-white focus:border-green-700 px-4 py-2.5 "
																					id="email" type="text" placeholder="E-Postanız">
														</div>
												</div>
												<div class="md:flex mb-5 px-12 items-center">
														<div class="md:w-1/3">
																<label class="block text-gray-600 font-medium md:text-left mb-3 md:mb-0"
																							for="password">Şifre Belirleyin</label>
														</div>
														<div class="md:w-2/3">
																<input
																					class="block text-gray-700 rounded-sm border border-gray-200 block w-full focus:outline-cyan-500 focus:bg-white focus:border-green-700 px-4 py-2.5 "
																					id="password" type="text" placeholder="Şifre Belirleyin">
																<p class="py-2 text-sm text-gray-600">Şifreniz en az 8 karakter olmalıdır.</p>
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
																									class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
																									placeholder="Password" type="password">
																		<button
																							class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors"
																							@click.prevent="showPasswordField=!showPasswordField">
																				<i class="mdi mdi-eye-outline"
																							:class="`mdi-${showPasswordField?'eye-outline':'eye-off-outline'}`"></i>
																		</button>
																</div>
														</div>
												</div>

												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3">
														</div>
														<div class="md:w-2/3">
																<div>
																		<input type="checkbox" id="">
																		<label for="">Kampanyalar ile ilgili elektronik ileti almak istiyorum.</label>
																</div>
														</div>
												</div>
												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3"></div>
														<div class="md:w-2/3">
																<button
																					class="shadow rounded-full w-full bg-[#0c3b5d] border-transparent border-2 hover:bg-[#fff] hover:border-[#0c3b5d] hover:text-[#0c3b5d] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
																					type="button">
																		KAYIT OL
																</button>
														</div>
												</div>
												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3">
														</div>
														<div class="md:w-2/3">
																<p class="text-xs">Devam et butonuna basarak
																		<button>Üyelik Sözleşmesi</button>
																		ni,
																		<button>Açık Rıza Metni</button>
																		ni,
																		<button>Aydınlatma Metni</button>
																		ni okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
																</p>

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
																				Facebook ile Kayıt Ol
																		</button>
																		<button
																							class="shadow rounded-full w-full bg-[#d64c3e] border-transparent border-2 hover:bg-[#fff] hover:border-[#d64c3e] hover:text-[#d64c3e] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
																							type="button">
																				Google ile Kayıt Ol
																		</button>
																</div>
														</div>
												</div>
										</form>
								</div>
						</div>
						<div class="relative hidden md:flex flex-auto w-full h-full items-center justify-center h-full overflow-hidden dark:border-l">
								<img src="https://www.weltew.com/assets/images/login.png" alt="	" class="object-cover w-full h-full">
						</div>
				</div>
		</div>

</template>

<script>
export default {
		name: "KayitView",
		data() {
				return {
						password: '',
						showPasswordField: false
				}
		}
}
</script>

<style scoped>

</style>