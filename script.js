const CA_FILE = 'ca.txt';
let contractAddress = null;

async function loadContract() {
  try {
    const res = await fetch(CA_FILE);
    if (!res.ok) throw new Error('ca.txt not found');
    const ca = (await res.text()).trim();
    const display = document.getElementById('ca-display');
    if (!ca || ca.includes('PLACEHOLDER')) {
      display.textContent = 'Contract address pending';
      return;
    }
    display.textContent = ca;
    contractAddress = ca;
    // Update all Dexscreener links
    document.querySelectorAll('[data-dex]').forEach(el => {
      el.href = `https://dexscreener.com/solana/${ca}`;
    });
  } catch (e) {
    document.getElementById('ca-display').textContent = 'Contract address unavailable';
  }
}

function setupCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const status = document.getElementById('copy-status');
      if (!contractAddress) {
        if (status) status.textContent = 'No contract to copy yet';
        return;
      }
      try {
        await navigator.clipboard.writeText(contractAddress);
        if (status) {
          status.textContent = 'Copied';
          setTimeout(() => { status.textContent = ''; }, 2000);
        }
      } catch {
        if (status) status.textContent = 'Copy failed — select and copy manually';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadContract();
  setupCopyButtons();
});
