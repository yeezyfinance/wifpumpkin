document.addEventListener('DOMContentLoaded', async () => {
  let ca = 'YOUR_SOLANA_CONTRACT_ADDRESS_HERE';

  try {
    const response = await fetch('ca.txt');
    if (response.ok) {
      ca = (await response.text()).trim();
    }
  } catch (e) {
    console.warn('Could not load ca.txt, using placeholder');
  }

  const caDisplay = document.getElementById('ca-display');
  if (caDisplay) caDisplay.textContent = ca || 'Contract address not set';

  const dexLink = document.getElementById('dex-link');
  const viewChart = document.getElementById('view-chart');
  const buyNow = document.getElementById('buy-now');

  if (ca && ca !== 'YOUR_SOLANA_CONTRACT_ADDRESS_HERE') {
    const dexUrl = `https://dexscreener.com/solana/${ca}`;
    if (dexLink) dexLink.href = dexUrl;
    if (viewChart) viewChart.href = dexUrl;
    // Example Jupiter buy link
    if (buyNow) buyNow.href = `https://jup.ag/swap/SOL-${ca}`;
  } else {
    if (dexLink) dexLink.href = 'https://dexscreener.com/solana';
    if (viewChart) viewChart.href = 'https://dexscreener.com/solana';
  }

  function copyCA() {
    if (!ca || ca === 'YOUR_SOLANA_CONTRACT_ADDRESS_HERE') {
      alert('Contract address not yet set. Edit ca.txt');
      return;
    }
    navigator.clipboard.writeText(ca).then(() => {
      const btn = document.getElementById('copy-contract');
      const orig = btn.textContent;
      btn.textContent = 'COPIED!';
      setTimeout(() => btn.textContent = orig, 2000);
    }).catch(() => alert('Copy failed'));
  }

  document.getElementById('copy-contract')?.addEventListener('click', copyCA);
  document.getElementById('copy-ca-btn')?.addEventListener('click', copyCA);

  // Smooth scroll for nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
