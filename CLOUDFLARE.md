# Cloudflare deployment

The site runs on Cloudflare Workers through OpenNext. Use Node.js 22 and the committed npm lockfile. Cloudflare stores runtime secrets separately from the repository.

Use a clean checkout for each deployment target. Supply that target’s environment file as `.env.production.local` and `.dev.vars` before the build. Next.js uses production build mode for both preview and production.

Do not commit either environment file. Do not reuse a production environment file for preview. Keep `APP_ENV=branch` for the portal preview and `APP_ENV=production` for the live portal.

Install dependencies with `npm ci --legacy-peer-deps`. Authenticate Wrangler with the account in the selected configuration. Make sure that its R2 buckets exist before deployment.

For production, run these commands from the repository root:

```sh
npm run build:cloudflare
npx wrangler secret bulk .dev.vars --config wrangler.jsonc
npm run deploy:cloudflare
```

Make sure that the live URL loads, redirects work, and images appear after deployment. Test relevant server routes without sending customer messages. Keep Vercel available until every domain and required feature works on Cloudflare.

The configuration only registers routes that are ready for Cloudflare. Add remaining domain routes after domain access and certificates are ready. A Git push alone does not deploy these Workers.
