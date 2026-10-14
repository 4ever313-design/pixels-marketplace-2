# Marketplace 2.0 — Release Candidate QA

Status: presentation prototype / mock data only.

## Matching and execution
- Sell Listings sort lowest price first; ties use earlier order first.
- Buy Offers sort highest price first; ties use earlier order first.
- Buy Now crosses external sell listings only.
- Sell Now crosses external buy offers only.
- Optional max-buy / min-sell limit stops execution beyond the limit.
- Partial fills reduce the live order and preserve the remaining quantity.
- Fully filled orders disappear.
- Bulk execution reports fillable quantity, remaining quantity, average unit price and total.

## Balance and inventory safety
- Quantity must be a positive whole number.
- Offer/list price must be a positive whole number.
- Optional execution price limit must be positive or blank.
- Active Buy Offers reserve mock Coin so multiple offers cannot overcommit the wallet.
- Active Sell Listings reserve mock inventory so multiple listings cannot overcommit inventory.
- Buy execution cannot spend Coin already reserved by Buy Offers.
- Sell execution cannot use inventory already reserved by Sell Listings.
- Instant execution excludes the user's own orders to prevent self-trading in the demo.

## State changes
- Successful Buy Now decreases Coin and increases inventory.
- Successful Sell Now increases Coin and decreases inventory.
- Executions add a Market Activity record.
- Cancel removes an active order; its reserved Coin/inventory becomes available again.
- My Orders displays remaining quantity after partial fills.

## Presentation checks
- Real item/category names are limited to examples supplied from Pixels references.
- Service remains empty because the supplied Pixels reference showed no Service items.
- Trading prices, balances, player names and recent transactions are mock/demo data.
- Sales History is explicitly labelled mock/prototype.
- No live Pixels API, wallet, contract or backend is implied.

## Production boundary
A production implementation requires server-authoritative validation, authentication, persistence, atomic reservations/settlement, concurrency control, fees, rate limits, anti-abuse controls, audit logs and telemetry. Client-side prototype validation is UX demonstration only.
