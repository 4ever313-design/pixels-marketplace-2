# Pixels Marketplace 2.0 — Community Prototype

Interactive proof-of-concept by **4ever313** for expanding the existing Pixels Marketplace into a simple two-sided market.

**Live demo:** https://4ever313-design.github.io/pixels-marketplace-2/

## Product direction
The prototype is intentionally **Pixels-first**: the visual language is inspired by the existing in-game Marketplace so the proposal feels like an extension of the current product rather than a replacement. Other game-market UX references were used only as inspiration for information architecture such as offers, bulk execution and recent market activity.

## What is implemented
- Sell Listings + public Buy Offers
- Bulk Buy / Buy Now
- Sell Now / Accept best Buy Offers
- Make Buy Offer
- List for Sale
- Best-price-first matching
- Time priority for equal prices
- Partial fills with remaining quantity kept active
- Bulk execution across multiple price levels
- Optional maximum buy / minimum sell price
- Fillable quantity, average price and estimated total preview
- My Orders + cancellation
- Market Activity / trade history
- Mock wallet and inventory validation
- Responsive browser UI

## Four basic player actions
**Need an item now?** Bulk Buy / Buy Now consumes the best available Sell Listings.

**Want a better buying price?** Make a Buy Offer and wait for a seller.

**Want to sell immediately?** Sell Now accepts the best available Buy Offers.

**Want a higher selling price?** List for Sale and wait for a buyer.

This keeps the player-facing decision simple: **speed vs preferred price**.

## Scope / important note
This is an unofficial UX + market-logic proof-of-concept using mock data. It does **not** connect to Pixels production APIs, wallets, smart contracts, inventory or settlement. It is not an official Pixels feature.

A production implementation would require team-owned backend/API contracts, authentication, inventory/fund reservation, atomic settlement, validation, rate limiting, persistence, anti-abuse controls, fees, audit logging, concurrency handling, telemetry and security review.

## Suggested production interfaces
- `GET /market/items`
- `GET /market/:item/orderbook`
- `POST /market/orders`
- `DELETE /market/orders/:id`
- `POST /market/execute`
- `GET /market/me/orders`
- `GET /market/me/trades`

The server should remain authoritative for matching and settlement. Client-side matching in this repository exists only to demonstrate expected behavior.

## Matching rule demonstrated
1. Best price first.
2. At the same price, earliest order first.
3. Partial fills leave remaining quantity active.
4. Bulk execution crosses multiple price levels until the requested quantity or price limit is reached.

## Run locally
No dependencies or build step are required. Open `index.html`, or run `python -m http.server 8080` and visit `http://localhost:8080`.
