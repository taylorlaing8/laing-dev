<template>
	<div>
		<h1>SUBSCRIPTION PANEL</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SubscriptionService from '@/api/stripe/SubscriptionService'

export default defineComponent({
	name: 'InvoicePanel',

	setup() {
		const subscriptions = ref({})
		SubscriptionService.getSubscriptions().then((res) => {
			subscriptions.value = res.data
		})
		return {}
	},
})
</script>

<style scoped>
</style>