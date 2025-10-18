# Coco Portfolio — GitHub Pages

This repo hosts a simple static site split into HTML, CSS, and JS files.

## Files
- `index.html` — markup
- `style.css` — styling
- `script.js` — interactions/animations

## Quick Start (no CLI)
1. Create a new repo on GitHub (e.g., `coco-portfolio`).
2. Upload `index.html`, `style.css`, and `script.js` to the repo root.
3. In the repo: **Settings → Pages → Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`) / **Folder**: `/root`
4. Save. Your site will appear at the URL GitHub shows under **Pages**.

## Quick Start (CLI)
```bash
# in a terminal
mkdir coco-portfolio && cd coco-portfolio
# copy the three files into this folder

git init
git add .
git commit -m "Initial commit: portfolio site"
gh repo create coco-portfolio --public --source=. --remote=origin --push  # requires GitHub CLI
# Or create a repo manually on GitHub, then:
# git remote add origin https://github.com/<you>/coco-portfolio.git
# git branch -M main
# git push -u origin main

# enable Pages in Settings → Pages as above
```

## Tips
- If you add images/assets, place them in an `assets/` folder and reference them relatively (e.g., `./assets/photo.jpg`).
- If you use a custom domain, add a `CNAME` file with your domain and configure DNS (A/ALIAS for apex, CNAME for subdomain) to `*.github.io` per GitHub Pages docs.
- If Font Awesome icons ever fail to load, ensure your ad-blocker allows `cdnjs.cloudflare.com`.
