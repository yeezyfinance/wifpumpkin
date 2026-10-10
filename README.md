# wifpumpkin

Single-page website for the wifpumpkin community culture token on Solana.  
Domain: **wifpumpkin.com**

## Files

- `index.html` — main page
- `style.css` — styles
- `script.js` — copy button and contract loading
- `ca.txt` — contract address (replace the placeholder with the real Solana CA)
- `banner.jpg` — hero artwork
- `CNAME` — custom domain file for GitHub Pages

## Deploy to GitHub Pages + Custom Domain

1. Create a new public repository on GitHub (e.g. `wifpumpkin`).
2. Upload **all** files from this package to the repository root (including `CNAME`).
3. Go to repository Settings → Pages.
4. Under "Build and deployment", select source: Deploy from a branch → main → / (root).
5. Under "Custom domain", enter `wifpumpkin.com` and save. GitHub will detect the `CNAME` file.
6. At your domain registrar (where you bought wifpumpkin.com), set these DNS records:
   - **A records** (recommended):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or a **CNAME** record for `www` pointing to `YOURUSERNAME.github.io`
7. Enable "Enforce HTTPS" in the Pages settings once DNS propagates (can take a few minutes to a few hours).
8. Replace the contents of `ca.txt` with the verified contract address and commit. The page loads it automatically.
9. Update the Telegram and X links in `index.html` once you have them.

The site will be live at **https://wifpumpkin.com** after DNS and GitHub Pages are configured.

No build step required. Pure static HTML/CSS/JS.
