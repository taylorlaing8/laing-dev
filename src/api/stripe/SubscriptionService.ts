import { stripeHttp } from '../http'

class SubscriptionService {
	getSubscriptions() {
		return stripeHttp.get(`/subscriptions`)
	}
}

export default new SubscriptionService()
