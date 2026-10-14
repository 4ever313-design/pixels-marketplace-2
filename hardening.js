// Marketplace 2.0 release-candidate hardening.
// Demo-only client validation; production must remain server-authoritative.
(function () {
  const s = window.state;
  if (!s) return;
  const isPosInt = n => Number.isFinite(Number(n)) && Number(n) > 0 && Number.isInteger(Number(n));
  const isPos = n => Number.isFinite(Number(n)) && Number(n) > 0;
  const ownOrders = () => Object.values(s.orders).flat().filter(o => o.owner === '4ever313');
  const reservedCoins = () => ownOrders().filter(o => o.side === 'buy').reduce((a,o)=>a+o.qty*o.price,0);
  const reservedItems = id => (s.orders[id]||[]).filter(o=>o.owner==='4ever313'&&o.side==='sell').reduce((a,o)=>a+o.qty,0);
  const availableCoins = () => Math.max(0, s.wallet - reservedCoins());
  const availableItems = id => Math.max(0, (s.inventory[id]||0) - reservedItems(id));
  const strictBook = side => (s.orders[s.item]||[])
    .filter(o => o.side === side && o.owner !== '4ever313' && o.qty > 0 && o.price > 0)
    .sort((a,b)=> side==='sell' ? a.price-b.price || a.time-b.time : b.price-a.price || a.time-b.time);
  const strictDepth = (side, qty, limit) => {
    const list = side==='buy' ? strictBook('sell') : strictBook('buy');
    let remain=qty,total=0,filled=0;
    for (const o of list) {
      if (!remain) break;
      if (limit!=null && (side==='buy' ? o.price>limit : o.price<limit)) break;
      const take=Math.min(remain,o.qty); remain-=take; filled+=take; total+=take*o.price;
    }
    return {filled,remain,total,avg:filled?total/filled:0};
  };
  window.execute = function(side) {
    const q=Number(s.qty);
    if (!isPosInt(q)) return alert('Quantity must be a positive whole number.');
    let limit=null;
    if (s.limit!=='' && s.limit!=null) {
      limit=Number(s.limit);
      if (!isPos(limit)) return alert('Price limit must be a positive number or left blank.');
    }
    if (side==='sell' && q>availableItems(s.item)) return alert('Not enough available mock inventory. Items in your active sell listings are reserved.');
    const d=strictDepth(side,q,limit);
    if (!d.filled) return alert('No external order can be filled at the selected price limit.');
    if (side==='buy' && d.total>availableCoins()) return alert('Not enough available mock Coin balance. Coins committed to active buy offers are reserved.');
    let remaining=d.filled;
    const os=s.orders[s.item];
    const sorted=side==='buy'?strictBook('sell'):strictBook('buy');
    for (const o of sorted) {
      if (!remaining) break;
      if (limit!=null && (side==='buy'?o.price>limit:o.price<limit)) break;
      const live=os.find(x=>x.id===o.id);
      if (!live) continue;
      const take=Math.min(remaining,live.qty); live.qty-=take; remaining-=take;
    }
    s.orders[s.item]=os.filter(o=>o.qty>0);
    if (side==='buy') { s.wallet-=d.total; s.inventory[s.item]+=d.filled; }
    else { s.wallet+=d.total; s.inventory[s.item]-=d.filled; }
    const currentName=document.querySelector('.itemArt h2')?.textContent || s.item;
    s.trades.unshift({item:currentName,side,qty:d.filled,avg:d.avg,time:'just now'});
    s.modal=null; window.render();
  };
  window.place = function(side) {
    const q=Number(s.qty), p=Number(s.price);
    if (!isPosInt(q)) return alert('Quantity must be a positive whole number.');
    if (!isPosInt(p)) return alert('Coin per unit must be a positive whole number.');
    if (side==='sell' && q>availableItems(s.item)) return alert('Not enough available mock inventory after active sell listings.');
    if (side==='buy' && q*p>availableCoins()) return alert('Not enough available mock Coin balance after active buy offers.');
    s.orders[s.item].push({id:++s.nextId,side,qty:q,price:p,owner:'4ever313',time:Date.now()});
    s.modal=null; window.render();
  };
  window.marketplaceQA={availableCoins,availableItems,reservedCoins,reservedItems,strictDepth};
})();