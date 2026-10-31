# WorldMC archive

WorldMC is no longer live. This website preserves the community pages and photos. The announcement at the top of every page directs enquiries to contact@promptsolutions.com.au.

The website runs on Cloudflare Workers with Vinext 1.4.0, React 19, and Vite. The Next.js package supplies compatible types; Vinext serves the application.

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:3001.

## Validation and deployment

```sh
bun run typecheck
bun run lint
bun run deploy
```

Deployment requires Wrangler access to the Cloudflare account in `wrangler.jsonc`. The build generates `dist/server/wrangler.json`. Deploy with that generated configuration through the deploy script.

The `worldmc` Worker serves worldmc.net and www.worldmc.net in the zeke.pari@promptsolutions.com.au account. Its test address is https://worldmc.prompt-solutions.workers.dev. No paid cache or image services are required.

Live maps, player lookups, market data, joining instructions, and voting pages show a closure notice. They no longer depend on the retired game server. Rules and recipes remain available as archive content.

## Domain routing

Worker routes cover `worldmc.net/*` and `www.worldmc.net/*`. Both DNS records must remain proxied. The apex A record uses `192.0.2.1` as a placeholder; the Worker serves every request without an origin server. The www CNAME points to worldmc.net. These records no longer use Vercel.

For rollback, the former DNS settings were an unproxied apex A record pointing to `76.76.21.21` and an unproxied www CNAME pointing to `cname.vercel-dns.com`. Restoring them also requires removing the Worker routes and confirming the old Vercel deployment is available.
