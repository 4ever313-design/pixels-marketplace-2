# Pixels Marketplace 2.0 — Functional Prototype

A zero-dependency, browser-runnable proof-of-concept for the Marketplace 2.0 community proposal by 4ever313.

## What is implemented
- Two-sided order book: Sell Listings + Buy Offers
- Buy Now / Sell Now
- Make Buy Offer / List For Sale
- Price-time priority
- Partial fills
- Bulk execution across multiple price levels
- Optional max/min execution price
- Fillable quantity, average price and estimated total preview
- Per-item order books
- My Orders + cancellation
- My Trades
- Mock wallet/inventory updates
- Responsive UI

## Run
Open `index.html` in any modern browser. No install/build step is required.

For a local server: `python -m http.server 8080` then open `http://localhost:8080`.

## Scope / important note
This is a UX + market-logic proof-of-concept using mock data. It does **not** connect to Pixels production APIs, wallets, smart contracts, inventory, or settlement. A production integration would require team-owned backend/API contracts, authentication, inventory/fund reservation, atomic settlement, validation, rate limits, persistence, anti-abuse controls, fees, audit logging and production security review.

## Suggested production interfaces
- `GET /market/items`
- `GET /market/:item/orderbook`
- `POST /market/orders` (buy offer / sell listing)
- `DELETE /market/orders/:id`
- `POST /market/execute` (buy now / sell now with quantity + optional limit)
- `GET /market/me/orders`
- `GET /market/me/trades`

Server should remain authoritative for matching and settlement. Client-side matching here exists only to demonstrate expected behavior.

## Matching rule demonstrated
1. Best price first.
2. At the same price, earliest order first.
3. Partial fills leave remaining quantity active.
4. Marketable bulk orders may cross multiple price levels until quantity or price limit is reached.
