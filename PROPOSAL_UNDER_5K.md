# Marketplace 2.0 — Buy Offers, Sell Listings & Better Price Discovery

I’d like to propose an expansion of the existing Pixels Marketplace that keeps it familiar and simple while giving buyers and sellers more control.

The core idea is to add the missing side of the market. Today, sellers can list an item at their preferred price and buyers decide whether to purchase it. Marketplace 2.0 would also let buyers publicly say: “I want this quantity, and this is the price I’m willing to pay.”

This creates four simple actions:

**BUY NOW** — Buy immediately from the best available Sell Listings.

**MAKE BUY OFFER** — Choose an item, quantity and unit price, then wait for a seller.

**SELL NOW** — Sell immediately into the best available Buy Offers.

**LIST FOR SALE** — Choose quantity and unit price, then wait for a buyer.

So the decision stays easy:
Need it now? → Buy Now
Want a better price? → Make Buy Offer
Want to sell now? → Sell Now
Want a higher price? → List For Sale

## TWO-SIDED MARKET
Each stackable Marketplace item could show both:

**Sell Listings:** lowest price → highest price
**Buy Offers:** highest price → lowest price

This makes both supply and demand visible. Players no longer see only what sellers are asking; they can also see what buyers are actually willing to pay.

## PRICE-TIME PRIORITY
Price should be the primary priority. The lowest Sell Listing fills first and the highest Buy Offer fills first. If multiple orders have the same price, the earliest order can fill first. This makes execution predictable and fair.

## PARTIAL FILLS
Large stackable orders should support partial fills. If someone offers to buy 1,000 Salt and a seller has 300, the seller can fill 300 and the remaining 700 stays active. The same can work for Sell Listings.

This is important because large orders should not require another player to match the exact quantity.

## BULK EXECUTION
Buy Now and Sell Now can fill across multiple price levels. Before confirming, the UI can show:
- Quantity currently fillable
- Average execution price
- Estimated total
- Remaining unfilled quantity
- Optional maximum buy price / minimum sell price

This gives players fast execution without hiding the cost of crossing several listings/offers.

## ORDER MANAGEMENT
A simple My Orders / My Trades area can show active orders, remaining quantity after partial fills, cancellations and recent executions.

The goal is **not** to turn Pixels into a complicated exchange. It is to make the Marketplace players already understand faster, clearer and more useful—especially for Resources, crafting materials and frequently traded stackable items.

I also built a functional Marketplace 2.0 proof-of-concept to demonstrate the UX and matching logic, including Buy/Sell Offers, price-time priority, partial fills, bulk execution and order management. It uses mock data only and is intended for the Pixels team to review as a product/technical prototype, not as production-ready backend code.

**Prototype + source code:** https://github.com/4ever313-design/pixels-marketplace-2
**Live demo:** https://4ever313-design.github.io/pixels-marketplace-2/
