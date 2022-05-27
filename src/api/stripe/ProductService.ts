import { stripeHttp } from '../http'

class ProductService {
	getProducts() {
		return stripeHttp.get(`/products`)
	}
}

export default new ProductService()
