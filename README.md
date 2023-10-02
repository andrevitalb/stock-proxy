# Stock Proxy

## Overview

To design a system to interface with the third-party API in the given scenario, a stock proxy pattern will be used. This pattern allows to provide a substitute or placeholder for the external API, which can hide its shortcomings.

### Functionality high-level overview

To address the limitations of the external API, a caching proxy service was implemented. This proxy service caches stock prices, preventing unnecessary repeated requests to the external API and mitigating the 1-second latency. Here's how the solution works:

- **Cache:** A cache is maintained to store recently fetched stock prices along with timestamps.

- **Debouncing:** To prevent concurrent requests from failing, we use a debouncing mechanism. If multiple requests for the same stock ticker come in concurrently, only the first one initiates a request to the external API. Subsequent requests wait for the ongoing request to complete and then receive the same result.

- **Caching and Update:** When a request is made, the cache is checked first. If the price is in the cache and not expired, it's returned. If it isn't, a request is initiated to the external API, updating the cache with the new price and timestamp, the `StockPrice` item.

## Utilizing the solution

### Install

Run `yarn` in this directory to install all dependencies.

### Mock external API

For purposes of this challenge, the `exampleServer.js` will serve as a mock API. Start it running: `yarn start:mock`

### Proxy server

Start the proxy server: `yarn start:proxy`

## Next steps

To make this solution more robust and production-ready, consider the following next steps:

1. **Monitoring and Logging:** Implementing logging and monitoring to track the usage of the proxy and identifying any issues or performance bottlenecks.

2. **Cache Eviction Strategy:** Implementing a cache eviction strategy to ensure that the cache doesn't grow indefinitely, both Least Frequently Used and Least Recently Used would be eviction policies worth evaluating.

3. **Error Handling:** Enhancing error handling to handle different error scenarios from the external API.

4. **Concurrency Control:** Implementing concurrency control to manage a limited number of concurrent requests to the external API to prevent overwhelming it would be something else to take into consideration depending on the load and scalability requirements.

5. **Security:** If this service is exposed to the internet or used in a production environment, implementing security measures like rate limiting and authentication.

6. **Testing:** Writing unit tests and integration tests to ensure the reliability of the proxy service.
