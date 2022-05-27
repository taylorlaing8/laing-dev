<template>
	<div>
		<h1>INVOICE PANEL</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InvoiceService from '@/api/stripe/InvoiceService'

export default defineComponent({
	name: 'InvoicePanel',

	setup() {
		const invoices = ref({})
		InvoiceService.getInvoices().then((res) => {
			invoices.value = res.data
		})
		return {}
	},
})
</script>

<style scoped>
</style>