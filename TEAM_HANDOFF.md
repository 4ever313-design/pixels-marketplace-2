# Pixels Marketplace 2.0 — Team Handoff Notes

## Product goal
Extend the familiar Pixels Marketplace rather than replace it. Sellers keep listings; buyers gain public buy offers. Players can choose speed (Buy Now / Sell Now) or preferred price (Buy Offer / Sell Listing).

## Why this helps
- Makes both supply and demand visible.
- Improves price discovery.
- Reduces repeated undercutting as the only visible signal.
- Gives bulk resource traders a direct path to available liquidity.
- Lets large orders fill partially rather than requiring exact quantity matches.

## Prototype boundaries
The included app intentionally uses mock state and client-side matching. It is designed to communicate UX and matching semantics, not bypass or reproduce Pixels backend infrastructure.

## Production requirements
Authoritative server matching; inventory and currency reservation; atomic settlement; cancellation semantics; fee calculation; validation; persistence; concurrency handling; rate limiting; abuse controls; transaction history; telemetry; permissions/authentication; and team security review.

## Open product decisions for Pixels team
- Which item categories support Buy Offers and partial fills.
- Minimum order value / quantity.
- Order expiry policy.
- Fee model for maker/taker actions.
- Whether market orders can cross unlimited levels or require a default slippage cap.
- Reservation model for FLOWER/items while an order is open.
- Visibility of player names and market depth.
