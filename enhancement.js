// Marketplace 2.0 presentation enhancement: Pixels-style recent sales history.
// Mock/demo data only. No live Pixels transactions.
(function () {
  const recentByItem = {
    scarrowt: [
      ['ElizaVictori','MisterPeterin',100,374,'1 minute ago'],
      ['ElizaVictori','Rias',100,374,'17 minutes ago'],
      ['ElizaVictori','Lizi',100,374,'22 minutes ago'],
      ['Muzzles','zunny',100,373,'31 minutes ago'],
      ['Muzzles','zunny',100,373,'31 minutes ago']
    ],
    popberry: [['PixelFarmer','Buyer B',250,395,'4 minutes ago'],['LandLord','MoonFarm',500,394,'12 minutes ago']],
    butterberry: [['Bumpkin','PixelFarmer',300,250,'6 minutes ago'],['MoonFarm','Buyer C',500,249,'19 minutes ago']],
    fertilizer: [['LandLord','Buyer B',40,620,'8 minutes ago'],['Bumpkin','MoonFarm',25,618,'24 minutes ago']],
    bbq: [['PixelFarmer','Buyer C',2,249997,'11 minutes ago'],['LandLord','MoonFarm',1,250000,'28 minutes ago']],
    salt: [['Bumpkin','Buyer B',1000,394,'5 minutes ago'],['MoonFarm','PixelFarmer',500,393,'21 minutes ago']],
    'pet-treat': [['PixelFarmer','Buyer C',20,9500,'9 minutes ago'],['LandLord','MoonFarm',10,9475,'26 minutes ago']],
    'sauna-portal': [['PixelFarmer','Buyer B',1,8500000,'34 minutes ago']]
  };

  const originalItemPage = window.itemPage;
  if (typeof originalItemPage !== 'function') return;

  window.itemPage = function () {
    let html = originalItemPage();
    const it = window.state && window.state.item;
    const rows = recentByItem[it] || [];
    const name = (typeof window.item === 'function' ? window.item().name : it);
    const icon = (typeof window.item === 'function' ? window.item().icon : '📦');
    const sales = `<div class="panel salesHistory"><div class="panelHead"><b>Sales History</b><span>RECENT MOCK SALES • PROTOTYPE</span></div>${rows.map(r=>`<div class="saleRow"><span class="salePeople"><b>${r[0]}</b> <small>(Sold)</small><br><span>${r[1]} <small>(Bought)</small></span></span><strong>${icon} ${Number(r[2]).toLocaleString()} × ${name}</strong><b><i class="coin">◉</i> ${Number(r[3]).toLocaleString()}</b><time>${r[4]}</time></div>`).join('') || '<div class="empty">No recent mock sales for this sample item.</div>'}</div>`;
    return html.replace('</section></div>', sales + '</section></div>');
  };

  // Re-render once so the enhancement is visible immediately on item pages.
  if (typeof window.render === 'function') window.render();
})();