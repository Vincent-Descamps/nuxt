<template>
	<div class="text-center mt-7 max-w-sm mx-auto card">
		<p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
		<p class="mt-7 text-6xl font-bold">Ooops.</p>
		<p class="mt-7 text-6xl font-bold">Something went wrong!</p>
		<p class="mt-7 text-6xl font-bold">:(</p>
		<p class="mt-7">{{ error.message }}</p>
		<button class="btn mt-7" @click="handleClearError">Go Home...</button>
	</div>
</template>

<script setup>
	defineProps(["error"])

	const handleClearError = () => clearError({ redirect: "/" })
</script>

<style scoped>

</style>
