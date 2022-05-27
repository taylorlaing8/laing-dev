import axios from 'axios'

export const http = axios.create({
	baseURL: '/api/v1',
	headers: {},
})

export const adminHttp = axios.create({
	baseURL: '/api/admin',
	headers: {},
})

export const stripeHttp = axios.create({
	baseURL: 'https://api.stripe.com/v1/',
	headers: {
		Authorization:
			'Bearer sk_test_51I8rPjEvpyFMVmhqpF6v6JJCPOqSJnSxzV2JGmGez0iz8CtGf4WA96cfyrT1Liipyek7RFZ8y8iRGWXnm3nRbogo00swihEiX1',
	},
})
