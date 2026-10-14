# Marketplace 2.0 — Buy Offers, Sell Listings & Better Price Discovery

I’d like to propose an upgrade to the existing Pixels Marketplace that keeps the experience familiar while making trading faster, clearer and more flexible.

The main idea is simple: **show both sides of the market.**

Today, sellers can list items and buyers decide whether to purchase them. Marketplace 2.0 would add public **Buy Offers**, allowing a buyer to say: “I want this quantity, and this is the price I’m willing to pay.”

That creates four easy actions:

**BUY NOW** — Buy immediately from the best available Sell Listings.

**MAKE BUY OFFER** — Choose quantity and price, then wait for a seller.

**SELL NOW** — Sell immediately into the best available Buy Offers.

**LIST FOR SALE** — Choose quantity and price, then wait for a buyer.

The choice remains simple:
Need it now? → Buy Now
Want a better buying price? → Make Buy Offer
Want to sell now? → Sell Now
Want a higher selling price? → List For Sale

## TWO-SIDED MARKET
Each supported Marketplace item could display:

**Sell Listings:** lowest price → highest price
**Buy Offers:** highest price → lowest price

Players would see not only what sellers are asking, but also what buyers are actually willing to pay. This should improve price discovery and make supply and demand much easier to understand.

## PRICE-TIME PRIORITY
Orders can follow a predictable rule: best price first, then earliest order when prices are equal.

Lowest Sell Listing fills first.
Highest Buy Offer fills first.

## PARTIAL FILLS
Large orders should not require an exact quantity match.

Example: a buyer wants 1,000 Salt at a specific price. A seller has 300. The seller can fill 300 and the remaining 700 stays active.

The same concept can apply to Sell Listings.

## BULK EXECUTION
Buy Now / Sell Now can automatically fill across multiple compatible orders and price levels.

Before confirmation, the UI can clearly show:
- Quantity currently fillable
- Average execution price
- Estimated total
- Remaining unfilled quantity
- Optional maximum buy price / minimum sell price

This gives players fast execution while still protecting them from crossing prices they do not want.

## ORDER & TRADE HISTORY
A simple My Orders / Market Activity area can show active orders, remaining quantities after partial fills, cancellations and recent executions. Recent sales can also remain visible for additional price context.

## WHY THIS FITS PIXELS
The goal is **not to turn Pixels into a complicated exchange.** The goal is to expand the Marketplace players already understand with a few intuitive options that are especially useful for resources, crafting materials and other frequently traded stackable items.

To make the proposal easier to evaluate, I built a functional Marketplace 2.0 proof-of-concept showing the proposed UX and matching behavior: Buy Offers, Sell Listings, price-time priority, partial fills, bulk execution, order management and recent sales.

The prototype uses **mock/demo trading data only**. It is a product/technical concept for discussion and is not presented as production-ready Pixels backend code.

**Live demo:** https://4ever313-design.github.io/pixels-marketplace-2/
**Source code:** https://github.com/4ever313-design/pixels-marketplace-2

I’d love to hear what the Pixels team and community think about this direction, and which parts would be most useful in the real Marketplace.