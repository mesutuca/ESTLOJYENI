<template>
		<div class="flex flex-col min-h-full">
				<Top/>
				<Header/>
				<Nav/>

				<router-view/>
		</div>

</template>
<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Header from "@/views/Layouts/Header.vue";
import Nav from "@/views/Layouts/Nav.vue";
import Top from "@/views/Layouts/Top.vue";
</script>
<style scoped>

</style>
