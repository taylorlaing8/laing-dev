import { stripeHttp } from '../http'

class InvoiceService {
	getInvoices() {
		return stripeHttp.get(`/invoiceitems`)
	}
}

export default new InvoiceService()
