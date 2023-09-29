# Stock Proxy

## Background Info

Imagine that we are a early-stage fintech startup. As part of our product, we allow our users to visualize realtime prices of stocks on major stock exchanges. However, since we are an early stage startup - we can only afford the most basic API for fetching this data.

The third-party API is very simple, a GET request for a ticker:

```
curl 127.0.0.1:8080/lookupPrice/TSLA
```

However, the API also has several restrictions.

1. Every lookup has a latency of 1 second
2. Any concurrent request to the API will fail

## The Problem

In the language of your choosing, design a system to interface with this API. The system should expose a function or two (or a class or module, whatever makes sense in your chosen language) that would allow developers on your team to get stock ticker prices while hiding the shortcomings of this external API.

Be sure to consider the following criteria:

1. It should be easy for internal developers to use
2. It should provide the experience your end-users expect
3. It needs to be done immediately, because the CEO is breathing down your neck (just kidding, we ask you to spend no more than 2 hours on this - we would like to be respectful of your time and understand that not every great idea/feature can be completed in that time).

## Your Solution

As you brainstorm your solution, please feel free to make reasonable assumptions (and document them) to help guide the tradeoffs you will make.

We expect you to deliver:

1. A short human-readable overview of what you did and why
2. Code we can actually run that uses the server example given (`exampleServer.js`)
3. A short overview of what you suggest be done next and why

## Next Steps

After you deliver your solution - we will review it and schedule your next interview. During that interview, we will go through a few questions we inevitably will have about your solution.

## Running the Example Server

In order to faciliate your development, we have written a server in node.js which mimics the restrictions we have laid out above.

```bash
# Running the server
node exampleServer.js

# Making a request for the stock price of "TSLA"
curl 127.0.0.1:8080/lookupPrice/TSLA
```
