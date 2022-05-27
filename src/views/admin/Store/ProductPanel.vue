<template>
	<div>
		<h1>PRODUCTS PANEL</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ProductService from '@/api/stripe/ProductService'

export default defineComponent({
	name: 'ProductPanel',

	setup() {
		const products = ref({})
		ProductService.getProducts().then((res) => {
			products.value = res.data
		})
		return {}
	},
})
</script>

<style scoped>
</style>