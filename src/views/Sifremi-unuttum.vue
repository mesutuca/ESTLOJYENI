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
																							for="email">E-Postanız</label>
														</div>
														<div class="md:w-2/3">
																<input
																					class="block w-full pl-4 pr-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
																					id="email" type="text" placeholder="E-Postanız">
														</div>
												</div>
												<div class="md:flex md:items-center px-12 mb-5">
														<div class="md:w-1/3"></div>
														<div class="md:w-2/3">
																<button
																					class="shadow rounded-full w-full bg-[#0c3b5d] border-transparent border-2 hover:bg-[#fff] hover:border-[#0c3b5d] hover:text-[#0c3b5d] focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4"
																					type="button">GÖNDER</button>
														</div>
												</div>

										</form>
								</div>
						</div>
						<div class="relative hidden md:flex flex-auto w-full items-center justify-center overflow-hidden">
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
						showPasswordField: true
				}
		}
}
</script>

<style scoped>

</style>