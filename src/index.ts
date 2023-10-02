import { StockProxy } from "./proxyServer"

const test = async () => {
	const stockProxy = new StockProxy()

	const price = await stockProxy.getPrice("TSLA")

	console.log(price)
}

test()
