require("dotenv").config()

interface StockPrice {
	ticker: string
	price: number
	timestamp: number
}

export class StockProxy {
	private cache: Map<string, StockPrice> = new Map()
	private cacheTTL: number = 60 * 1000 // 1 minute
	private pendingRequests: Map<string, Promise<StockPrice>> = new Map()

	constructor() {}

	async getPrice(ticker: string): Promise<StockPrice> {
		const cachedPrice = this.cache.get(ticker)
		if (cachedPrice && Date.now() - cachedPrice.timestamp < this.cacheTTL) {
			return cachedPrice
		}

		if (this.pendingRequests.has(ticker)) {
			return this.pendingRequests.get(ticker)!
		}

		const requestPromise = new Promise<StockPrice>(async (resolve, reject) => {
			try {
				const response = await fetch(`${process.env.API_URL}/${ticker}`)
				const { price, symbol } = await response.json()
				const newStock = { price, ticker: symbol, timestamp: Date.now() }

				this.cache.set(ticker, newStock)

				resolve(newStock)
			} catch (error) {
				reject(error)
			} finally {
				this.pendingRequests.delete(ticker)
			}
		})

		this.pendingRequests.set(ticker, requestPromise)

		return requestPromise
	}
}
