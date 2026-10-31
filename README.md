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
