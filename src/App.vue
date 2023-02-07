<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
		<div class="max-w-full">
				<div class="flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-8">
						<div class="flex md:w-full md:max-w-6xl sm:rounded-2xl sm:shadow overflow-hidden sm:bg-white">
								<div class="w-full sm:w-auto py-8 px-4 sm:p-12 md:p-16">
										<div class="w-full max-w-80 sm:w-80 mx-auto sm:mx-0">
												<div class="logo mb-2">
														<img src="https://www.weltew.com/assets/images/weltew-logo.svg" alt="Weltew Home" width="290" height="28">
												</div>
												<div class="flex gap-2 text-center items-center w-full justify-center">
														<a href="">Üye Girişi</a>
														<a href="">Üye Ol</a>
												</div>
												<form>
														<div class="flex flex-col sm:flex-row">
																<label for="">E-postanız</label>
																<input type="text" id="large-input"
																							class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
														</div>
												</form>
										</div>
								</div>
								<div class="w-full">
										<img src="https://www.weltew.com/assets/images/login.png" alt="" class="w-full">
								</div>
						</div>
				</div>
		</div>
</template>

<style scoped>

</style>
