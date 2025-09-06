# Azure Training Provider — Landing Page

Production-ready Next.js 14 + Tailwind landing page designed for Azure Static Web Apps (Free).

## Run locally
```bash
npm install
npm run dev
# or: pnpm i && pnpm dev / yarn && yarn dev Upendra
```

## Deploy to Azure Static Web Apps (Free)
1. Push this repo to GitHub.
2. Azure Portal → Create → Static Web App (Free) → connect your GitHub repo/branch.
3. Framework: **Next.js**. App location `/`. Output `.next` (auto-detected).
4. Wait for GitHub Action to deploy.

- SEO images: `/public/opengraph.png`, `/public/twitter.png`
- SWA config: `/public/staticwebapp.config.json`
- Main page: `/app/page.tsx`

All trademarks belong to their owners. Educational use only.
